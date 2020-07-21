import VSlider from './VSlider';
const MorphaticVuetifyExtensions = {
  install(Vue, options) {
    Vue.component('your-component', VSlider);
  }

};
export { VSlider };
export default MorphaticVuetifyExtensions;

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(MorphaticVuetifyExtensions);
}
//# sourceMappingURL=index.js.map