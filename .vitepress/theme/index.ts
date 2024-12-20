import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style/vars.css'
import MyLayout from './Layout.vue'
export default {
    // 使用注入插槽的包装组件覆盖 Layout
    extends: DefaultTheme,
    Layout: MyLayout,
} satisfies Theme