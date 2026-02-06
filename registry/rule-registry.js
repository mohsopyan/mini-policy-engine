class RuleRegistry {
  constructor() {
    this.rules = new Map();
  }

  register(rule) {
    if (!rule.name) {
      throw new Error("Rule must have a name");
    }

    this.rules.set(rule.name, rule);
  }

  get(name) {
    const rule = this.rules.get(name);

    if (!rule) {
      throw new Error(`Rule ${name} not found in registry`);
    }

    return rule;
  }

  resolve(entries) {
    return entries.map(entry => {
      if (typeof entry === "string") {
        return {
          rule: this.get(entry),
          dependsOn: null,
        };
      }

      return {
        rule: this.get(entry.rule),
        dependsOn: entry.dependsOn
      }
    });
  }
}

module.exports = RuleRegistry;
