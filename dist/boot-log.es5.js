var azure = '#1475b2';
var green = '#42c02e';
var renderTitle = function renderTitle(title, content) {
  return "%c ".concat(title, " %c ").concat(content, " ");
};
var renderStyle = function renderStyle() {
  return "padding: 1px; border-radius: 3px 0 0 3px; color: #fff; background: #606060;";
};
var renderBackground = function renderBackground(backgroundColor) {
  return "padding: 1px; border-radius: 0 3px 3px 0; color: #fff; background: ".concat(backgroundColor, ";");
};
var logfunc = function logfunc(data) {
  var title = data.title,
    content = data.content,
    backgroundColor = data.backgroundColor;
  var text = [renderTitle(title, content), renderStyle(), renderBackground(backgroundColor || '')];
  return function () {
    var _console;
    if (window.console && 'function' === typeof window.console.log) {
      // @ts-ignore
      (_console = console).log.apply(_console, arguments);
    }
    // @ts-ignore
  }.apply(void 0, text), text;
};
function bootLog(data) {
  var _a = data.title,
    title = _a === void 0 ? '' : _a,
    _b = data.content,
    content = _b === void 0 ? '' : _b,
    _c = data.backgroundColor,
    backgroundColor = _c === void 0 ? azure : _c;
  return logfunc({
    title: title,
    content: content,
    backgroundColor: backgroundColor
  });
}
export { azure, bootLog as default, green };
