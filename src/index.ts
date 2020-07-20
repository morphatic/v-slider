import { VueConstructor } from 'vue'
import VSlider from './VSlider'

const MorphaticVuetifyExtensions = {
  install (Vue: VueConstructor, options?: any) {
    Vue.component('your-component', VSlider)
  },
}

export { VSlider }
export default MorphaticVuetifyExtensions

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(MorphaticVuetifyExtensions)
}
