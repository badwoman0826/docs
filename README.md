## vitepress

前身 vuePress

vuepress vitepress rspress 静态站点生成器 Static Site Generator (SSG)

作用于项目(博客，营销页面，档案，文档)

## 怎么用?

安装

```sh
npm i vitepress -D
```

## vitepress 特有的 formatter

## 规则必须是三个- 必须写在头部

prev:
text: '上一页：Runtime API'
link: /markdown-examples

---

## 下一页

next:
text: '下一页：Runtime API'
link: /markdown-examples

---

config 配置项 docFooter: '文档页脚'

## SEO(搜索引擎优化)

回答 TDK (title description keywords)
爬虫机器人会抓取网站的这三个值
h1 标签只能出现一个
main 标签只能有一个
img alt 必须 title 必须有值
a 标签 href 里面写的东西很多
提升 SEO 其他的交给金钱

```md
head:

- - meta
  - name: title
    content: Runtime API Examples
- - meta
  - name: description
    content: Examples of using the runtime APIs provided by VitePress
```

## 最后修改时间

这个必须配合 git 才有效 git 提交这个文件的时间 它就会被列为最后修改时间

```js
lastUpdated:{
    text: '最后更改时间',
    formatOptions: {
        dateStyle: 'full',
        timeStyle: 'short'
    }
},
```

## 部署静态网站

1. 打开仓库的 setting
2. 点击 pages
3. 选择 Branch
4. 选择分支 选择 docs 点击 save 保存

如何访问 https://message163.github.io/docs/
[github 的名称.github.io/项目名称]

gitee 类似

## 自定义 markdown 插件

```sh
npm i markdown-it
```

markdown-it 就是 markdown 解析器 把 md 语法变成 html
markdown-it-container 容器
自定义解析 markdown

```js
import MarkDownIt from "markdown-it";
import mdContainer from "markdown-it-container";
import fs from "node:fs";
import path from "node:path";
export const alascom = (md: MarkDownIt) => {
  //编写自定义模块
  //第一个参数是一个容器
  md.use(mdContainer, "div", {
    validate: (params) => params.trim().match(/^demo\s*(.*)$/),
    render(tokens, index) {
      const sourceFile = tokens[index + 2];
      let source;
      if (sourceFile && sourceFile.type == "inline") {
        source = fs.readFileSync(
          path.resolve(__dirname, `../examples/${sourceFile.content}.vue`)
        );
      }
      return source;
    },
  });
};
```
