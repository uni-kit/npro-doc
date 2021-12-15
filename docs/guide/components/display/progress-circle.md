---
title: progress-circle 环状进度条
---

# progress-circle

<div class="demo-box">
	<iframe scrolling="auto" frameborder="0" src="https://npro.redou.vip/h5/#/pages/display/progress-circle" class="demo-box-iframe"></iframe>
</div>

环状进度条。

- 不借助canvas；
- nvue可用；
- 简单的进度条；
- 复杂情况可以使用canvas来实现；

```html
<n-progress-circle :progress="progress1"></n-progress-circle>
<n-progress-circle :progress="progress2" :fromZero="true" borderColor="#8FDAFF"></n-progress-circle>
<n-progress-circle :progress="progress3" :twoWay="true" borderColor="#FFD666"></n-progress-circle>
<n-progress-circle :progress="0.75" width="80px">
	<view :style="innerBoxStyle+'transition-property: transform;transform: rotate(135deg);'">
		<text style="font-size: 28rpx; color: #333333;">75%</text>
	</view>
</n-progress-circle>
```

![progress-circle](/img/coms/progress-circle.jpg)

## Props

| Prop name      | Description          | Type    | Values | Default    |
| -------------- | -------------------- | ------- | ------ | ---------- |
| progress       | 进度。0-1         | number  | -      | 0          |
| width          | 自定义宽度           | string  | -      | '80px'     |
| borderWidth    | 自定义边框宽度       | string  | -      | '6px'      |
| borderColor    | 自定义边框颜色       | string  | -      | '#8F9CFF'  |
| bgType         | 背景主题             | string  | -      | 'inverse'  |
| boxStyle       | 外层样式             | string  | -      | ''         |
| fromZero       | 是否每次从 0 开始    | boolean | -      | false      |
| aniToZero      | 是否动画回到 0       | boolean | -      | true       |
| duration       | 0-100 的整体动画周期 | number  | -      | 2000       |
| timingFunction | 动画函数             | string  | -      | 'ease-out' |
| twoWay         | 是否同时动画         | boolean | -      | false      |

## Slots

| Name    | Description | Bindings |
| ------- | ----------- | -------- |
| default |             |          |
| extra   |             |          |

---
