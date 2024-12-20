import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My Awesome Project",
  description: "A VitePress Site",
  base: '/Useful-knowledge-of-Flame/',
  outDir: 'docs',
  head: [['link', { rel: 'icon', href: '/Useful-knowledge-of-Flame/favicon.ico' }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],
    logo: './public/logo.jpg',
    search: {
      provider: 'local',
    },
    lastUpdated: {
      text: '最后更改',
      formatOptions: {
        dateStyle: 'medium',
        timeStyle: 'short'
      }
    },
    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ],
        collapsed: true
      }
    ],
    outline: {
      label: '牛号'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present Evan You'
    }
  }
})
