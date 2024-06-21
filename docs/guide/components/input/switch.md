---
title: switch 开关
---

# switch

<div class="demo-box">
	<iframe scrolling="auto" frameborder="0" src="http://www.redou.vip/npro/#/pages/input/switch" class="demo-box-iframe"></iframe>
</div>

> switch 开关组件

```html
<n-switch v-model="value3" onBgType="error"></n-switch>
<n-switch v-model="value4" bgType="border" onBgType="warning" animateBgType="primary" ballBgType="inverse" width="200rpx">
	<text slot="on" class="n-color-inverse n-size-base" style="position: absolute;left:16rpx;top:0;line-height:62rpx;">已打开</text>
	<text slot="off" class="n-color-inverse n-size-base" style="position: absolute;right:16rpx;top:0;line-height:62rpx;">已关闭</text>
</n-switch>
```

![switch](/img/coms/switch.jpg)

## Props

| Prop name     | Description          | Type    | Values | Default   |
| ------------- | -------------------- | ------- | ------ | --------- |
| value         | 值/是否打开          | boolean | -      | false     |
| disabled      | 是否禁用             | boolean | -      | false     |
| bgType        | 关闭时的背景主题     | string  | -      | 'light'   |
| onBgType      | 打开时的背景主题     | string  | -      | 'primary' |
| ballBgType    | 移动球的背景主题     | string  | -      | 'inverse' |
| animateBgType | 动画层背景主题       | string  | -      | ''        |
| width         | 自定义宽度           | string  | -      | '102rpx'  |
| height        | 自定义高度           | string  | -      | '62rpx'   |
| ballSize      | 移动球的自定义宽高   | string  | -      | '58rpx'   |
| ballBg        | 移动球的自定义背景色 | string  | -      | ''        |
| animateBg     | 动画层的自定义背景色 | string  | -      | ''        |
| bg            | 关闭时的自定义背景色 | string  | -      | ''        |
| onBg          | 打开时的自定义背景色 | string  | -      | ''        |

## Events

| Event name | Properties | Description |
| ---------- | ---------- | ----------- |
| input      |            |
| change     |            |

## Slots

| Name | Description | Bindings |
| ---- | ----------- | -------- |
| on   |             |          |
| off  |             |          |

---
