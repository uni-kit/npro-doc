---
title: tag 标签
---

# tag

<div class="demo-box">
	<iframe scrolling="auto" frameborder="0" src="https://npro.redou.vip/h5/#/pages/display/tag" class="demo-box-iframe"></iframe>
</div>

> tag 可以设置不同状态的tag标签

```html
 <n-tag :selected="uAndMeState" selectedBorder="all-success" text="我和你" boxStyle="width:160rpx;margin-right:15rpx;margin-bottom:16rpx;" @tagClicked="toToggleState"></n-tag>
 <n-tag text="之间" height="s" textSize="s" boxStyle="width:160rpx;margin-right:15rpx;margin-bottom:16rpx;"></n-tag>
 <n-tag text="的距离" height="ll" textType="error" boxStyle="width:160rpx;margin-right:15rpx;margin-bottom:16rpx;"></n-tag>
 <n-tag text="明明是" radius="ll" boxStyle="width:160rpx;margin-right:0rpx;margin-bottom:16rpx;"></n-tag>
 <n-tag :selected="true" selectedBgType="warning" text="咫尺" boxStyle="width:160rpx;margin-right:15rpx;margin-bottom:16rpx;"></n-tag>
 <n-tag text="却感觉" border="none" boxStyle="width:160rpx;margin-right:15rpx;margin-bottom:16rpx;"></n-tag>
 <n-tag text="像是" radius="none" boxStyle="width:160rpx;margin-right:15rpx;margin-bottom:16rpx;"></n-tag>
 <n-tag :disabled="true" disabledTextType="inverse" bgType="error" text="天涯" boxStyle="width:160rpx;margin-right:0rpx;margin-bottom:16rpx;"></n-tag>
```

![tag](/img/coms/tag.jpg)

## Props

| Prop name         | Description        | Type           | Values | Default    |
| ----------------- | ------------------ | -------------- | ------ | ---------- |
| text              | 文字内容           | number\|string | -      | ""         |
| value             | 唯一值             | string\|number | -      | ''         |
| selected          | 是否选中/活跃      | boolean        | -      | false      |
| disabled          | 是否禁用           | boolean        | -      | false      |
| bgType            | 背景主题           | string         | -      | ''         |
| selectedBgType    | 选中时背景主题     | string         | -      | ''         |
| textType          | 文字颜色主题       | string         | -      | ''         |
| selectedTextType  | 选中时文字颜色主题 | string         | -      | ''         |
| disabledTextType  | 禁用时文字颜色主题 | string         | -      | 'disabled' |
| textSize          | 文字尺寸主题       | string         | -      | ''         |
| height            | 高度主题           | string         | -      | ''         |
| border            | 边框主题           | string         | -      | 'all'      |
| selectedBorder    | 选中时边框主题     | string         | -      | 'all'      |
| radius            | 圆角主题           | string         | -      | 'base'     |
| space             | 左右两侧的 padding | string         | -      | '16rpx'    |
| textStyle         | 文字样式           | string         | -      | ''         |
| selectedTextStyle | 选中时文字样式     | string         | -      | ''         |
| disabledTextStyle | 禁用时文字样式     | string         | -      | ''         |
| boxStyle          | 外层样式           | string         | -      | ''         |
| selectedBoxStyle  | 选中时文字样式     | string         | -      | ''         |
| disabledBoxStyle  | 禁用时文字样式     | string         | -      | ''         |

## Events

| Event name | Properties | Description |
| ---------- | ---------- | ----------- |
| tagClicked |            |

## Slots

| Name    | Description | Bindings |
| ------- | ----------- | -------- |
| default |             |          |
| extra   |             |          |

---
