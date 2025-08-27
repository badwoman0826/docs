import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style/vars.css'
import MyLayout from './Layout.vue'
import Modal from '../../src/components/Modal.vue'
export default {
    // 使用注入插槽的包装组件覆盖 Layout
    extends: DefaultTheme,
    Layout: MyLayout,
    enhanceApp({ app }) {
        app.component('Modal', Modal)
    }
} satisfies Theme