import Vue from 'vue'
import SvgIcon from '../components/Svg/icon'// svg组件

console.log(SvgIcon)

// register globally
Vue.component('svg-icon', SvgIcon)

const req = require.context('./svg', false, /\.svg$/)
const requireAll = requireContext => requireContext.keys().map(requireContext)
console.log(req)
requireAll(req)