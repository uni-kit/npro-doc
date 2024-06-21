---
title: gallery 画廊
---

# gallery

<div class="demo-box">
	<iframe scrolling="auto" frameborder="0" src="http://www.redou.vip/npro/#/pages/box/gallery" class="demo-box-iframe"></iframe>
</div>

可随意滚动的画廊组件。

- 自由滚动；
- 带顺畅的放大缩小动画效果；
- 自动居中；

> 子组件必须是 n-gallery-item

## Props

| Prop name   | Description                                                                                                                                                                                                                                        | Type   | Values | Default  |
| ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ | ------ | -------- |
| width       | scroll 的宽度                                                                                                                                                                                                                                      | string | -      | '750rpx' |
| height      | scroll 的高度                                                                                                                                                                                                                                      | string | -      | '360rpx' |
| widthScale  | item 的宽度                                                                                                                                                                                                                                        | number | -      | 0.7      |
| heightScale | item 的高度                                                                                                                                                                                                                                        | number | -      | 0.8      |
| scaleFactor | 滚动时每一个 item 的 scale 影响因子<br>必须大于 0，建议设置成 0.5 左右，根据需要自己修正，<br>影响最大移动距离，默认是 0.5.也就是 scale 在 √2/2-1-√2/2 之间<br>值越大，scale 越靠近 1，区间越小；<br>TODO: 低于 0.5 的时候 item 的初始化大小没有变 | number | -      | 0.5      |
| space       | item 内容之间的间距                                                                                                                                                                                                                                | string | -      | '0'      |
| left        | 左侧空白                                                                                                                                                                                                                                           | string | -      | '0'      |
| right       | 右侧空白                                                                                                                                                                                                                                           | string | -      | '0'      |
| boxStyle    | 外层样式                                                                                                                                                                                                                                           | string | -      | ''       |
| itemStyle   | 内容样式                                                                                                                                                                                                                                           | string | -      | ''       |
| updateTime  | 改变这个值来开始新的 gallery                                                                                                                                                                                                                       | number | -      | 0        |

## Slots

| Name    | Description | Bindings |
| ------- | ----------- | -------- |
| default |             |          |

---
