---
title: cell 单元
---

# cell

<div class="demo-box">
	<iframe scrolling="auto" frameborder="0" src="http://www.redou.vip/npro/#/pages/display/cell" class="demo-box-iframe"></iframe>
</div>

> cell 单元

cell采用的是 icon-title-value-indicator 四段式的设计。

- icon,左侧图标；
- title，左侧标题；
- value，内容；
- indicator，右侧图标；

![cell](/img/coms/cell.jpg)

```html
<n-cell icon="code" title="我的知识" bgType="inverse" boxStyle="padding-left:32rpx;"></n-cell>
<n-cell icon="star-solid" title="我的收藏" value="查看更多收藏" bgType="inverse" valueStyle="text-align:right;" indicator="arrow-right" boxStyle="padding-left:32rpx;padding-right:32rpx;"></n-cell>
<n-cell icon="setting" title="通用设置" border="all" radius="s" indicator="arrow-right" bgType="inverse" boxStyle="padding-left:32rpx;padding-right:32rpx;margin-left:32rpx;margin-right:32rpx;"></n-cell>
<n-cell bgType="error" icon="setting" title="通用设置" value="更多设置请查看源码以及文档" iconType="inverse" titleType="inverse" valueType="inverse" indicatorType="inverse" border="none" radius="s" indicator="arrow-right" boxStyle="padding-left:32rpx;padding-right:32rpx;margin-left:32rpx;margin-right:32rpx;"></n-cell>
<n-cell icon="refresh-bold" title="软件更新" indicator="arrow-right" space="24rpx" bgType="inverse" boxStyle="padding-left:38rpx;padding-right:48rpx;">
	<view slot="extra" class="cell-upload">
		<n-icon name="top" type="inverse" size="l"></n-icon>
		<text class="cell-upload-text">有新版本</text>
	</view>
</n-cell>
```

## Props

| Prop name         | Description      | Type   | Values | Default  |
| ----------------- | ---------------- | ------ | ------ | -------- |
| icon              | 左侧图标         | string | -      | ""       |
| title             | 左侧标题         | string | -      | ""       |
| value             | 具体/描述内容    | string | -      | ""       |
| indicator         | 右侧图标         | string | -      | ""       |
| bgType            | 背景主题         | string | -      | ''       |
| titleType         | 标题颜色主题     | string | -      | 'text'   |
| valueType         | 内容颜色主题     | string | -      | 'second' |
| iconType          | 左侧图标颜色主题 | string | -      | 'text'   |
| indicatorType     | 右侧图标颜色主题 | string | -      | 'second' |
| titleSize         | 标题尺寸主题     | string | -      | 'base'   |
| valueSize         | 内容尺寸主题     | string | -      | 's'      |
| valueAlign        | 内容排版主题     | string | -      | 'right'  |
| valueLines        | 内容的最大行数   | string | -      | '1'      |
| valueLh           | 内容的行高       | string | -      | 's'      |
| iconSize          | 左侧图标尺寸主题 | string | -      | "l"      |
| indicatorSize     | 右侧图标尺寸主题 | string | -      | "l"      |
| height            | 高度主题         | string | -      | 'l'      |
| radius            | 圆角主题         | string | -      | 'base'   |
| border            | 边框主题         | string | -      | ''       |
| hover             | hover 点击效果   | string | -      | 'bg'     |
| space             | 文字与图标间距   | string | -      | '12rpx'  |
| iconStyle         | 左侧图标样式     | string | -      | ''       |
| indicatorStyle    | 右侧图标样式     | string | -      | ''       |
| boxStyle          | 外层样式         | string | -      | ''       |
| titleStyle        | 标题样式         | string | -      | ''       |
| valueStyle        | 内容样式         | string | -      | ''       |
| iconBoxStyle      | 左侧图标外层样式 | string | -      | ''       |
| indicatorBoxStyle | 右侧图标外层样式 | string | -      | ''       |

## Events

| Event name  | Properties | Description |
| ----------- | ---------- | ----------- |
| cellClicked |            |

## Slots

| Name    | Description | Bindings |
| ------- | ----------- | -------- |
| default |             |          |
| extra   |             |          |
| more    |             |          |

---
