import Button from './button.js';

var SELECTOR = {
  BUTTON: '.btn',
  TEXT: '.text'
};

/**
 * @class
 */
class _Hello {
  /**
   * Node
   * @param  {jQuery} element Hello Node
   * @return {Hello}
   */
  constructor($element, {btn = {}, text = {}} = {}) {
    this.node = $element;

    this.model = {};
    this.model.btn = btn;
    this.model.text = text;

    return this;
  }
  render() {

  }
  decorate() {
    var $btnElement = this.node.children(SELECTOR.BUTTON);

    this.model.btn = (new Button()).decorate($btnElement);
    this.model.text.content = this.node.children(SELECTOR.TEXT).text();
    this.model.text.visible = this.node.children(SELECTOR.TEXT).is(':not([hidden])');

    this.track($btnElement, 'click', 'btn.click');

    return this.model;
  }
  track($element, event, eventToTrigger) {
    $element.on(event, this.node.trigger.bind(this.node, eventToTrigger, [this.model]));
    return this.node;
  }
  /**
   *
   * @param  {Hello~mapCallback} cb - The callback uses this.model
   */
  map(cb) {
    return cb(this.model);
  }

  /**
   * @callback mapCallback
   * @param model inner object model
   */
}

export default R.curry( ($element, model) => new _Hello($element, model) );
