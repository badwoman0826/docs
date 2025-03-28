# jsx 底层渲染机制

## 关于 JSX 底层处理机制

### 第一步:把我们编写的 JSX 语法，编译为虚拟 D0M 对象 virtualD0M

> 虚拟 DOM 对象:框架自己内部构建的一套对象体系(对象的相关成员都是 React 内部规定的)，基于这些属性描述出，我们所构建视图中的，DOM 节点的相关特征!!
>
> > 1. :point_right: 基于`babel-preset-react-app`把 JSX 编译为 React.createElement(...)这种格式!!只要是元素节点，必然会基于 createElement 进行处理!React.createElement(ele,props,...children)
> >    > - **ele**: 元素标签名或组件
> >    > - **props**: 元素的属性集合(对象)如果没有设置过任何的属性，则此值是 null
> >    > - **children**: 第三个及以后的参数，都是当前元素的子节点
> > 2. :point_right: 再把 createElement 方法执行，创建出 virtualDOMN 虚拟 DOM 对象「也有称之为:JSX 元素、JSX 对象、ReactChild 对象...」! !
> >    > ```js
> >    > const virtualDOM = {
> >    >       $$typeof:Symbol(react.element),
> >    >       ref: null,
> >    >       key: null,
> >    >       type:标签名「或组件」,
> >    >       // 存储了元素的相关属性 && 子节点信息
> >    >       props: {
> >    >            元素的相关属性，
> >    >            children:子节点信息「没有子节点则没有这个属性、
> >    >            属性值可能是一个值、也可能是一个数组」
> >    >       }
> >    > }
> >    > ```

### 第二步:把构建的 virtualD0M 渲染为真实 D0M

真实 DOM:浏览器页面中，最后渲染出来，让用户看见的 D0M 元素!!

### 补充说明

第一次渲染页面是直接从 virtualD0M->真实 D0M;但是后期视图更新的时候，需要经过一个 D0M-DIFF 的对比，计算出补丁包 PATCH(两次视图差异的部分)，把 PATCH 补丁包进行渲染!!

## 手写 createElement

```js
import { Fragment } from "react";
const createElement = (type, props, ...children) => {
  const virtualDOM = {
    $$typeof: Symbol("react.element"),
    key: null,
    ref: null,
    type,
    props: props !== null ? { ...props } : {},
    children:
      children.length === 1 ? children[0] : children.length > 1 ? children : "",
  };
  return virtualDOM;
};
console.log(
  createElement(
    Fragment,
    { id: "root" },
    createElement("a", null, "点击"),
    "aaaa"
  )
);
```

打印:point_down:
![加载失败时的文本](https://s3.cdnjson.com/images/2025/03/28/image642e98fa0068457a.png)

<!--@include: ../team/index.md-->
