---
title: position 定位
---

# position

<div class="demo-box">
	<iframe scrolling="auto" frameborder="0" src="https://npro.redou.vip/h5/#/pages/box/position" class="demo-box-iframe"></iframe>
</div>

用来快速定位。主要是比较方便设置一些内置的offset，比如`status`。

主要属性有：

- offset，定位的偏移量；
- pos，定位的位置，top/bottom；
- fixed，是否采用fixed定位；

```html
<n-position pos="top" offset="status-nav-24rpx" boxStyle="left:75rpx;">
	<n-button bgType="primary" border="none" radius="ll" text="这里是顶部的定位内容" textType="inverse" boxStyle="width:600rpx;"></n-button>
</n-position>
<n-position pos="bottom" offset="x-24rpx" boxStyle="left:75rpx;">
	<n-button bgType="primary" border="none" radius="ll" text="这里是底部的定位内容" textType="inverse" boxStyle="width:600rpx;"></n-button>
</n-position>
<n-position pos="bottom" offset="x-160rpx" boxStyle="right:75rpx;">
	<n-button bgType="primary" border="none" radius="ll" text="调整位置" textType="inverse" boxStyle="width:300rpx;"></n-button>
	<n-button bgType="primary" border="none" radius="ll" text="比如靠右" textType="inverse" boxStyle="width:300rpx;margin-top:16rpx;"></n-button>
</n-position>
```

![position](/img/coms/position.jpg)

## Props

| Prop name | Description     | Type    | Values | Default  |
| --------- | --------------- | ------- | ------ | -------- |
| fixed     | 是否 fixed 定位 | boolean | -      | false    |
| pos       | 定位的位置      | string  | -      | 'bottom' |
| offset    | 定位的偏移量    | string  | -      | '0px'    |
| bgType    | 背景主题        | string  | -      | ''       |
| boxStyle  | 外层样式        | string  | -      | ''       |

## Slots

| Name    | Description | Bindings |
| ------- | ----------- | -------- |
| default |             |          |

---
