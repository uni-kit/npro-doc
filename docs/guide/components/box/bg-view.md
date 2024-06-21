---
title: bg-view 背景图片
---

# bg-view

<div class="demo-box">
	<iframe scrolling="auto" frameborder="0" src="http://www.redou.vip/npro/#/pages/box/bg-view" class="demo-box-iframe"></iframe>
</div>

> bg-view 用于快速设置图片背景。比如使用背景图片来做阴影效果。

主要属性有：

- src，设置背景图片，背景图片是绝对定位，默认各变距离都为0。如果尺寸有问题，你可能需要指定图片的宽高或者外层盒子的宽高；


```html
<n-bg-view src="/static/shadow.png" boxStyle="width:600rpx;height:360rpx;">
	<!-- 在这里补充内容 -->
	<view></view>
</n-bg-view>
```

![bg-view](/img/coms/bg-view.jpg)

## Props

| Prop name  | Description | Type   | Values | Default       |
| ---------- | ----------- | ------ | ------ | ------------- |
| src        |   背景图片   | string | -      |               |
| mode       |   图片的mode   | string | -      | 'scaleToFill' |
| boxStyle   |   外层样式  | string | -      | ''            |
| imageStyle |   图片样式   | string | -      | ''            |

## Events

| Event name | Properties | Description |
| ---------- | ---------- | ----------- |
| error      |            |
| load       |            |

## Slots

| Name    | Description | Bindings |
| ------- | ----------- | -------- |
| default |             |          |

---
