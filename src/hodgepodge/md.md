# md 语法

## 标题

**输入**

```
# 一级标题

## 二级标题

### 三级标题

#### 四级标题

##### 五级标题

###### 六级标题
```

**输出**

# 一级标题

## 二级标题

### 三级标题

#### 四级标题

##### 五级标题

###### 六级标题

## 段落样式

**输入**

```
_斜体文本_
_斜体文本_
**粗体文本**
**粗体文本**
**_粗斜体文本_**
**_粗斜体文本_**
```

**输出**

_斜体文本_  
**粗体文本**  
**_粗斜体文本_**

## 分割线

**输入**

```
---
```

**输出**

---

## 删除线

**输入**

```
~~我是要删除的内容~~
```

**输出**

~~我是要删除的内容~~

## 下划线

**输入**

```
<u>带下划线文本</u>
```

**输出**

<u>带下划线文本</u>

## 脚注

**输入**

```
[^要注明的文本]
```

**输出**

[^要注明的文本]

## 无序列表

**输入**

```
- 第一项
- 第二项
- 第三项

* 第一项
* 第二项
* 第三项

- 第一项
- 第二项
- 第三项
```

**输出**

- 第一项
- 第二项
- 第三项

* 第一项
* 第二项
* 第三项

- 第一项
- 第二项
- 第三项

## 有序列表

**输入**

```
1. 第一项
2. 第二项
3. 第三项
```

**输出**

1. 第一项
2. 第二项
3. 第三项

## 嵌套列表

**输入**

```
1. 第一项：
   - 第一项嵌套的第一个元素
   - 第一项嵌套的第二个元素
2. 第二项：
   - 第二项嵌套的第一个元素
   - 第二项嵌套的第二个元素
```

**输出**

1. 第一项：
   - 第一项嵌套的第一个元素
   - 第一项嵌套的第二个元素
2. 第二项：

   - 第二项嵌套的第一个元素
   - 第二项嵌套的第二个元素

## 区块

### 区块引用

**输入**

```
> 区块引用
> 菜鸟教程
> 学的不仅是技术更是梦想
```

**输出**

> 区块引用
> 菜鸟教程
> 学的不仅是技术更是梦想

### 区块嵌套

**输入**

```
> 最外层
>
> > 第一层嵌套
> >
> > > 第二层嵌套
```

**输出**

> 最外层
>
> > 第一层嵌套
> >
> > > 第二层嵌套

### 区块中使用列表

**输入**

```
> 区块中使用列表
>
> 1. 第一项
> 2. 第二项
>
> - 第一项
> - 第二项
> - 第三项
```

**输出**

> 区块中使用列表
>
> 1. 第一项
> 2. 第二项
>
> - 第一项
> - 第二项
> - 第三项

### 列表中使用区块

**输入**

```
- 第一项
  > 菜鸟教程
  > 学的不仅是技术更是梦想
- 第二项
```

**输出**

- 第一项
  > 菜鸟教程
  > 学的不仅是技术更是梦想
- 第二项

## 代码块

### js

::: tip 格式
\```js  
代码块  
\```
:::

```js
export const fun = (value) => {
  const obj = {
    ...value,
  };
  return obj;
};
```

### jsx

::: tip 格式
\```jsx  
代码块  
\```
:::

```jsx
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}

export default Counter;
```

### ts

::: tip 格式
\```ts  
代码块  
\```
:::

```ts
interface DataType {
  name: string;
  age: number;
}
type R = Record<string, any>;
export const fun = <T extends R>(value: T) => {
  const obj: R = value;
  obj.name = "范老师";
  const data: DataType[] = [
    {
      name: "张三",
      age: 17,
    },
  ];
  return {
    obj,
    data,
  };
};
```

### tsx

::: tip 格式
\```tsx  
代码块  
\```
:::

```tsx
import * as React from "react";

interface Props {
  name: string;
}

const Greeter: React.FC<Props> = ({ name }) => {
  return <div>Hello, {name}!</div>;
};

export default Greeter;
```

### html

::: tip 格式
\```html  
代码块  
\```
:::

```html
<ul>
  <li v-for="todo in todos" :key="todo.id">{{ todo.text }}</li>
</ul>
```

### 代码块内启用 Vue 插值语法

输入:

````
```js-vue
Hello {{ 1 + 1 }}
```
````

输出:

```js-vue
Hello {{ 1 + 1 }}
```

## 链接

### 内链

`[链接的文本](链接地址)`  
假设现在处于 `md/index.md` 文件中：

 <Badge type="info" text="default" />

 <Badge type="tip" text="^1.9.0" />

 <Badge type="warning" text="beta" />

<Badge type="danger" text="caution">发表 </Badge>

**输入**

```
[Go index](/) <!-- 将用户导航至根目录下的 index.html -->
[md](/md/) <!-- 将用户导航至目录 md 下的 index.html -->
[Go Table](./#表格) <!-- 将用户锚定到目录 foo 下的index文件中的一个标题上 -->
[Go react useState](./#更新 state 中的数组) <!-- 将用户锚定到目录 react 下的useState文件中的一个标题上 -->
[Go react](../react/useState) <!-- 可以省略扩展名 -->
[Go react](../react/useState.md) <!-- 可以添加 .md -->
[Go react](../react/useState.html) <!-- 或者可以添加 .html -->

```

**输出**

去 index [Go index](/)  
去 react [Go react](/src/react/)  
去 #emoji [Go emoji](./md.md#emoji-🎉)  
去 react/useState [Go useState](../react/useState.md)  
去 更新 state 中的数组 [Go react useState](../react/useState.md#更新-state-中的数组)

### 外链

`[链接的文本](链接地址)`

**输入**

```
这是一个链接 [菜鸟教程](https://www.runoob.com)

```

**输出**

这是一个链接 [菜鸟教程](https://www.runoob.com)

## 图片

### 普通格式

`![加载失败时的文本](图片链接 "图片title")`

**输入**

```
![加载失败时的文本](http://static.runoob.com/images/runoob-logo.png)
![加载失败时的文本](/qqMusic.png "RUNOOB")
```

**输出**

![加载失败时的文本](http://static.runoob.com/images/runoob-logo.png)
![加载失败时的文本](/qqMusic.png "你发誓更勇敢")

### 点击图片可跳转格式

`[![加载失败时的文本](图片链接 "图片title")](跳转的链接)`

**输入**

```
`[![加载失败时的文本](/qqMusic.png "你发誓更勇敢")](https://y.qq.com/n/ryqq/songDetail/000zmMlz1J0bsy)`

```

**输出**

[![加载失败时的文本](/qqMusic.png "你发誓更勇敢")](https://y.qq.com/n/ryqq/songDetail/000zmMlz1J0bsy)

## 转义符

| 字符 | 名称           |
| ---- | -------------- |
| \    | 反斜杠         |
| `    | 刻度线         |
| \*   | 星号           |
| \_   | 下划线         |
| {}   | 大括号         |
| []   | 中括号         |
| ()   | 括号           |
| #    | 井号           |
| -    | 加号           |
| \*   | 减号（连字符） |
| .    | 点             |
| !    | 感叹号         |
| \|   | 管道           |

## 表格

### 基本

**输入**

```
| Syntax      | Description |
| ----------- | ----------- |
| Header      | Title       |
| Paragraph   | Text        |

```

**输出**

| Syntax    | Description |
| --------- | ----------- |
| Header    | Title       |
| Paragraph | Text        |

### 对齐

**输入**

```
| Syntax      | Description | Test Text     |
| :---        |    :----:   |          ---: |
| Header      | Title       | Here's this   |
| Paragraph   | Text        | And more      |

```

**输出**

| Syntax    | Description |   Test Text |
| :-------- | :---------: | ----------: |
| Header    |    Title    | Here's this |
| Paragraph |    Text     |    And more |

### 格式化表格中的文字

::: details 详情
您可以格式化表格中的文本。例如，您可以添加链接，代码（`help me please` ）和强调。
您不能添加标题，块引用，列表，水平规则，HTML 标签。
:::
**输入**

```
| Syntax                             | Description                             | Test Text                                |
| ---------------------------------- | --------------------------------------- | ---------------------------------------- |
| [菜鸟教程](https://www.runoob.com) | `help me please`                        | **粗体文本**                             |
| Paragraph                          | `` Use `code` in your Markdown file. `` | ![加载失败时的文本](/react.png "RUNOOB") |


```

**输出**
| Syntax | Description | Test Text |
| ---------------------------------- | --------------------------------------- | ---------------------------------------- |
| [菜鸟教程](https://www.runoob.com) | `help me please` | **粗体文本** |
| Paragraph | `` Use `code` in your Markdown file. `` | ![加载失败时的文本](/react.png "RUNOOB") |

## Emoji :tada:

**输入**

```
:tada: :100:

```

**输出**
:tada: :100:  
[emoji 大全](https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.mjs)

<!--@include: ../team/index.md-->
