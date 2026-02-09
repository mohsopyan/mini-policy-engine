function summarizeDecision(decision, action) {
    const summary = {
        action,
        allowed: decision.passed,
        reason: null,
        details: [],
    };

    if (decision.passsed) {
        summary.reason = `${action} allowed`;
        return summary;
    }

    // FAIL_FAST -> single error
    if (decision.error) {
        summary.reason = mapErrorToReason(decision.error, action);
        return summary;
    }

    // FULL mode
    if (decision.errors?.length > 0) {
        const primaryError = decision.errors[0];
        summary.reason = mapErrorToReason(primaryError, action);

        Object.entries(decision.results).forEach(([ruleName, result]) => {
            if (result.state === "PASSED") {
                summary.details.push(`${ruleName} passed`);
            }
            if (result.state === "SKIPPED") {
                summary.details.push(`${ruleName} skipped due to dependency`);
            }
        });
    }

    return summary;
}

function mapErrorToReason(error, action) {
    if (error.code === "INACTIVE_ACCOUNT") {
        return `${action} blocked because account is inactive`;
    }

    if (error.code === "KYC_NOT_VERIFIED") {
        return `${action} blocked because KYC is not verified`;
    }

    return `${action} blocked because due to policy violation`
}

module.exports = summarizeDecision;