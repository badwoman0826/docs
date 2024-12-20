---
title: 发发发发
titleTemplate: Vite & Vue powered static site generator
description: 发表大_斜体文本__斜体文本_
editLink: true
layout: doc
outline: [1, 6]
---

# 1

## 2

### 3

#### 4

##### 5

###### 6

_斜体文本_
_斜体文本_
**粗体文本**
**粗体文本**
**_粗斜体文本_**
**_粗斜体文本_**

---

---

---

---

---[^要注明的文本]

1. 第一项
2. 第二项
3. 第三项

- 第一项
- 第二项
- 第三项

* 第一项
* 第二项
* 第三项

- 第一项
- 第二项
- 第三项

1. 第一项：
   - 第一项嵌套的第一个元素
   - 第一项嵌套的第二个元素
2. 第二项：
   - 第二项嵌套的第一个元素
   - 第二项嵌套的第二个元素

> 区块引用
> 菜鸟教程
> 学的不仅是技术更是梦想

> 最外层
>
> > 第一层嵌套
> >
> > > 第二层嵌套

> 区块中使用列表
>
> 1. 第一项
> 2. 第二项
>
> - 第一项
> - 第二项
> - 第三项

- 第一项
  > 菜鸟教程
  > 学的不仅是技术更是梦想
- 第二项

`main()`函数

    我是代码块1

    我是代码块2

我是代码块 3，并指定了语言为 Java

这是一个链接 [菜鸟教程](https://www.runoob.com)

![RUNOOB 图标](https://pic.imgdb.cn/item/64e81cb0661c6c8e54e1000a.jpg)
![RUNOOB 图标](https://pic.imgdb.cn/item/64e81cb0661c6c8e54e1000a.jpg "RUNOOB")
| 表头 | 表头 |
| ---- | ---- |
| 单元格 | 单元格 |
| 单元格 | 单元格 |
| 左对齐 | 右对齐 | 居中对齐 |
| :-----| ----: | :----: |
| 单元格 | 单元格 | 单元格 |
| 单元格 | 单元格 | 单元格 |
使用 <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>Del</kbd> 重启电脑

\ 反斜线
` 反引号

- 星号
  \_ 下划线
  {} 花括号
  [] 方括号
  () 小括号

# 井字号

- 加号

* 减号
  . 英文句点
  ! 感叹号

  ```tsx
  daliangdaima, xuyaoduohangshiyong;
  daliangdaima, xuyaoduohangshiyong;
  daliangdaima, xuyaoduohangshiyong;
  daliangdaima, xuyaoduohangshiyong;
  daliangdaima, xuyaoduohangshiyong;
  ```

## [简书](https://www.jianshu.com)

---

---

---

---

---

---

---

---

~~删除~~

//例子一
|123|234|345|
|:-|:-:|-:|
|abc|bcd|cde|
|abc|bcd|cde|
|abc|bcd|cde|
//例子二
|123|234|345|
|:---|:---:|---:|
|abc|bcd|cde|
|abc|bcd|cde|
|abc|bcd|cde|
//例子三
123|234|345
:-|:-:|-:
abc|bcd|cde
abc|bcd|cde
abc|bcd|cde

# 使用自定义锚点

# Runtime API Examples

This page demonstrates usage of some of the runtime APIs provided by VitePress.

The main `useData()` API can be used to access site, theme, and page data for the current page. It works in both `.md` and `.vue` files:

```md
<script setup>
import { useData } from 'vitepress'

const { theme, page, frontmatter } = useData()
</script>

## Results

### Theme Data

<pre>{{ theme }}</pre>

### Page Data

<pre>{{ page }}</pre>

### Page Frontmatter

<pre>{{ frontmatter }}</pre>
```

<script setup>
import { useData } from 'vitepress'

const { site, theme, page, frontmatter } = useData()
</script>

## Results

### Theme Data

<pre>{{ theme }}</pre>

### Page Data

<pre>{{ page }}</pre>

### Page Frontmatter

<pre>{{ frontmatter }}</pre>

## More

Check out the documentation for the [Link to pure.html](https://react.docschina.org/learn/updating-arrays-in-state).
