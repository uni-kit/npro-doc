---
title: drawer 抽屉
---

# drawer

<div class="demo-box">
	<iframe scrolling="auto" frameborder="0" src="https://npro.redou.vip/h5/#/pages/drawer/index" class="demo-box-iframe"></iframe>
</div>

> drawer 可跟手的抽屉

- 支持局部手势；
- 支持全局手势；
- 支持自动打开/关闭；
- 支持随时停止；

市面上的抽屉其实都是一个popup弹层，不支持跟手动作。这种抽屉还不如就直接使用popup组件。

因为很多设计都是有跟手动画需求的，所以我们有了这个可跟手的抽屉。而且会不断进行优化。

主要属性：

- pos，出现的位置；
- auto，停手后是否自动打开或者关闭；
- allowAll，手势是否局势/是否加在整个内容上；
- hasOverlay，是否存在遮罩层；
- standout，露出的高度；

```html
<template>
	<n-drawer ref="drawer-top" pos="top" width="750rpx" height="800rpx" standout="status-nav-50px" top="status-nav">
		<view class="dt">
			<view class="dt-body">
				<image class="dt-avatar" src="/static/bear.jpg" mode="aspectFill"></image>
				<text class="dt-name">语文数学天才</text>
			</view>
			<view class="dt-bottom">
				<text class="dt-label">我的中心</text>
				<view class="dt-hint"></view>
				<view style="height: 16rpx;"></view>
			</view>
		</view>
	</n-drawer>
</template>
```

![drawer](/img/coms/drawer.jpg)

利用drawer可以做出很多优秀的动画以及设计效果，具体请看nPro的demo。

## Props

| Prop name    | Description                                         | Type    | Values | Default                                                                                             |
| ------------ | --------------------------------------------------- | ------- | ------ | --------------------------------------------------------------------------------------------------- |
| pos          | 出现位置                                            | string  | -      | 'bottom'                                                                                            |
| bgType       | 内容背景主题                                        | string  | -      | ''                                                                                                  |
| duration     | 打开/关闭的动画周期                                 | number  | -      | 300                                                                                                 |
| auto         | 停止手势后是否自动打开/关闭                         | boolean | -      | true                                                                                                |
| allowAll     | 是否手势加在整个内容上                              | boolean | -      | true                                                                                                |
| allowSwipe   | 是否允许 swipe 动作来打开/关闭                      | boolean | -      | true                                                                                                |
| onlySwipe    | 是否只允许 swipe 动作，没有跟手                     | boolean | -      | false                                                                                               |
| hasOverlay   | 是否存在遮罩层                                      | boolean | -      | true                                                                                                |
| overlay      | 遮罩层的整体设置                                    | object  | -      | <br> timingFunction: ['ease-in', 'ease-out'],<br> duration: 300,<br> bg: '',<br> bgType: 'mask'<br> |
| baseHeight   | 基准高度，用于计算其他高度                          | string  | -      | 'screen'                                                                                            |
| height       | 内容高度                                            | string  | -      | '0'                                                                                                 |
| standout     | 内容露出的高度                                      | string  | -      | '0'                                                                                                 |
| leftOffset   | 内容左侧偏移量，-1 表示居中                         | string  | -      | '-1'                                                                                                |
| rightOffset  | 内容右侧偏移量，-1 表示居中                         | string  | -      | '-1'                                                                                                |
| bottomOffset | 内容底部偏移量，-1 表示居中                         | string  | -      | '-1'                                                                                                |
| topOffset    | 内容顶部偏移量，-1 表示居中                         | string  | -      | '-1'                                                                                                |
| baseWidth    | 基准宽度                                            | string  | -      | '750rpx'                                                                                            |
| width        | 内容的宽度                                          | string  | -      | '750rpx'                                                                                            |
| animation    | 打开/关闭动画                                       | object  | -      | <br> timingFunction: 'ease-in-out'<br>                                                              |
| initWithAni  | 是否具备初始动画                                    | boolean | -      | true                                                                                                |
| initDelay    | 初始动画的延时                                      | number  | -      | 200                                                                                                 |
| initDuration | 初始动画的周期                                      | number  | -      | 300                                                                                                 |
| left         | 遮罩左侧偏移量                                      | string  | -      | '0'                                                                                                 |
| top          | 遮罩顶部偏移量                                      | string  | -      | '0'                                                                                                 |
| right        | 遮罩右侧偏移量                                      | string  | -      | '0'                                                                                                 |
| bottom       | 遮罩底部偏移量                                      | string  | -      | '0'                                                                                                 |
| openRate     | 多少比例自动打开                                    | number  | -      | 0.5                                                                                                 |
| closeRate    | 多少比例自动关闭                                    | number  | -      | 0.5                                                                                                 |
| delay        | 关闭时有个 delay<br>否则 Android 下点击事件存在问题 | number  | -      | 150                                                                                                 |
| overlayStyle | 遮罩层的外层样式<br>MP/H5 可设置 z-index            | string  | -      | ''                                                                                                  |
| boxStyle     | 内容外层样式<br>MP/H5 可设置 z-index                | string  | -      | ''                                                                                                  |

## Events

| Event name     | Properties | Description |
| -------------- | ---------- | ----------- |
| start          |            |
| end            |            |
| overlayClicked |            |

## Slots

| Name     | Description | Bindings |
| -------- | ----------- | -------- |
| overlay  |             |          |
| standout |             |          |
| default  |             |          |

---
