export default class Validator {
  // eslint-disable-next-line class-methods-use-this
  validateUsername(name) {
    const rule1 = /^[a-z][a-z\d_-]*[a-z]$/i;
    const rule2 = /\d{4}/;
    return (rule1.test(name) && !rule2.test(name));
  }
}
