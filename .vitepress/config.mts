import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Flame docs",
  base: '/docs/',
  outDir: 'docs',
  head: [
    ['link', { rel: 'icon', href: '/docs/favicon.ico' }]
  ],
  titleTemplate: ':title - Flame',
  description: 'Flame',
  themeConfig: {
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    externalLinkIcon: true,
    // https://vitepress.dev/reference/default-theme-config
    editLink: {
      pattern: 'https://github.com/fslflame/Useful-knowledge-of-Flame',
      text: '在 GitHub 上编辑此页面'
    },
    nav: [
      {
        text: '一些有用的知识',
        items: [
          { text: '小知识', link: '/src/hodgepodge/' },
          { text: '一些好用的第三方库和网站', link: '/src/hodgepodge/library' },
          { text: 'md语法', link: '/src/hodgepodge/md' },
        ],
      },
      { text: 'React', link: '/src/react/' }
    ],
    logo: '/logo.jpg',
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
        text: '一些有用的知识',
        items: [
          { text: '小知识', link: '/src/hodgepodge/' },
          { text: '一些好用的第三方库和网站', link: '/src/hodgepodge/library' },
          { text: 'md语法', link: '/src/hodgepodge/md' },
        ],
      },
      {
        text: 'React',
        items: [
          { text: '简介', link: '/src/react/' },
          { text: 'useState', link: '/src/react/useState' },
        ],
      }
    ],
    outline: {
      level: 'deep',
      label: '文章目录'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/fslflame/Useful-knowledge-of-Flame' },
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present Evan You'
    }
  }
})
