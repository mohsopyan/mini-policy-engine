class PolicyResolver {
    constructor(ruleRegistry, actionPolicies) {
        this.ruleRegistry = ruleRegistry;
        this.actionPolicies = actionPolicies;
    }

    resolve(action) {
        const ruleNames = this.actionPolicies[action];

        if (!ruleNames) {
            throw new Error(`No policy defined for action: ${action}`);
        }

        return this.ruleRegistry.resolve(ruleNames);
    }
}

module.exports = PolicyResolver;