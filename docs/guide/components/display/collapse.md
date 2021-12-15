---
title: collapse 折叠
---

# collapse

<div class="demo-box">
	<iframe scrolling="auto" frameborder="0" src="https://npro.redou.vip/h5/#/pages/display/collapse" class="demo-box-iframe"></iframe>
</div>

> collapse 折叠

![collapse](/img/coms/fold.jpg)

## Props

| Prop name      | Description                    | Type    | Values | Default        |
| -------------- | ------------------------------ | ------- | ------ | -------------- |
| value          | 唯一值，用来判断是否收起自己   | string  | -      | ''             |
| current        | 当前值                         | string  | -      | ''             |
| duration       | 动画周期                       | number  | -      | 300            |
| timingFunction | 动画效果                       | string  | -      | 'ease'         |
| bgType         |                                | string  | -      | ''             |
| border         | 边框主题                       | string  | -      | 'all'          |
| radius         | 圆角主题                       | string  | -      | ''             |
| auto           | 是否自动内部响应               | boolean | -      | false          |
| headHeight     | 头部高度。不设置会自动获取     | string  | -      | null           |
| bodyHeight     | 收展区的高度。不设置会自动获取 | string  | -      | 'auto'         |
| boxStyle       | 外层样式                       | string  | -      | ''             |
| headStyle      | head 样式                      | string  | -      | ''             |
| bodyStyle      | body 样式                      | string  | -      | ''             |
| icon           | 默认的动画图标                 | string  | -      | ''             |
| iconType       | 图标颜色主题                   | string  | -      | 'third'        |
| iconSize       | 图标尺寸主题                   | string  | -      | 'base'         |
| iconStyle      | 图标样式                       | string  | -      | ''             |
| iconBoxStyle   | 图标外层样式                   | string  | -      | 'right:32rpx;' |

## Events

| Event name | Properties | Description |
| ---------- | ---------- | ----------- |
| toggle     |            |

## Slots

| Name | Description | Bindings |
| ---- | ----------- | -------- |
| body |             |          |
| head |             |          |

---
