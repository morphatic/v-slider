"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "VSlider", {
  enumerable: true,
  get: function get() {
    return _VSlider["default"];
  }
});
exports["default"] = void 0;

var _VSlider = _interopRequireDefault(require("./VSlider"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var MorphaticVuetifyExtensions = {
  install: function install(Vue, options) {
    Vue.component('your-component', _VSlider["default"]);
  }
};
var _default = MorphaticVuetifyExtensions;
exports["default"] = _default;

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(MorphaticVuetifyExtensions);
}
//# sourceMappingURL=index.js.map