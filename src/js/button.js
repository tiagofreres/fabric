export default class {
  /**
   *
   * @param  {jQuery} $element jQuery from Node element
   * @return {Button}
   */
  constructor({text = '', enabled = true} = {}) {
    this.model = {};
    this.model.text = text;
    this.model.enabled = enabled;

    return this;
  }
  decorate($element) {
    this.node = $element;

    this.model.text = $element.text();
    this.model.enabled = $element.is(':not(disabled)');

    return this.model;
  }
}
