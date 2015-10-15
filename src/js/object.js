/**
 * @class
 */
class _Object {
  /**
   * Node
   * @param  {jQuery} element Hello Node
   * @return {Hello}
   */
  constructor($element, model = {}) {
    this.node = $element;
    this.model = {};
  }
  render() {

  }
  decorate() {
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

export default R.curry( ($element, model) => new _Object($element, model) );
