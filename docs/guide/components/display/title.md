---
title: title 标题
---

# title

<div class="demo-box">
	<iframe scrolling="auto" frameborder="0" src="https://npro.redou.vip/h5/#/pages/display/title" class="demo-box-iframe"></iframe>
</div>

> title 标题

整体采用 title1-title2-title3 的设计形式。

加上每个title左右两侧的图标配置为： leftIcons1-title1-leftIcon2-centerIcon1-title2-centerIcon2-rightIcon1-title3-rightIcon2。

```html
<n-title bgType="none" rightIcon2="arrow-right" title1="带右侧图标2" boxStyle="padding-left:32rpx;padding-right:32rpx;"></n-title>
<n-title leftIcon2="close" leftIcon2Type="third" title1="艺术" title2="实用" title3="查看更多" boxStyle="padding-left:32rpx;padding-right:32rpx;" centerStyle="flex:1; margin-left:12rpx;" rightStyle="flex:1;justify-content:flex-end;"></n-title>
<n-title bgType="none" rightIcon1="refresh" title1="带右侧图标/文字" title3="换一批" rightIcon1Type="third" title3Type="third" boxStyle="padding-left:32rpx;padding-right:32rpx;"></n-title>
<n-title bgType="none" leftIcon1="add" leftIcon2="add" title1="左文字" centerIcon1="add" centerIcon2="add" title2="居中" title3="右文字" rightIcon1="plus" rightIcon2="plus" boxStyle="padding-left:32rpx;padding-right:32rpx;"></n-title>
```

![title](/img/coms/title.jpg)

## Props

| Prop name        | Description               | Type   | Values | Default  |
| ---------------- | ------------------------- | ------ | ------ | -------- |
| title1           | 左侧标题                  | string | -      | ''       |
| title2           | 中间标题                  | string | -      | ''       |
| title3           | 右侧标题                  | string | -      | ''       |
| leftIcon1        | 左侧图标 1                | string | -      | ''       |
| leftIcon2        | 左侧图标 2                | string | -      | ''       |
| centerIcon1      | 中间图标 1                | string | -      | ''       |
| centerIcon2      | 中间图标 2                | string | -      | ''       |
| rightIcon1       | 右侧图标 1                | string | -      | ''       |
| rightIcon2       | 右侧图标 2                | string | -      | ''       |
| space            | icon-text-icon 之间的间距 | string | -      | '12rpx'  |
| height           | 高度主题                  | string | -      | 'l'      |
| hover            | hover 主题                | string | -      | ''       |
| bgType           | 背景主题                  | string | -      | ''       |
| title1Type       | 标题 1 的颜色主题         | string | -      | 'text'   |
| title1Size       | 标题 1 的尺寸主题         | string | -      | 'base'   |
| title1Style      | 标题 1 的样式             | string | -      | ''       |
| title2Type       | 标题 2 的颜色主题         | string | -      | 'second' |
| title2Size       | 标题 2 的尺寸主题         | string | -      | 'base'   |
| title2Style      | 标题 2 的样式             | string | -      | ''       |
| title3Type       | 标题 3 的颜色主题         | string | -      | 'third'  |
| title3Size       | 标题 3 的尺寸主题         | string | -      | 'base'   |
| title3Style      | 标题 3 的样式             | string | -      | ''       |
| leftIcon1Type    | 左侧图标 1 的颜色主题     | string | -      | 'text'   |
| leftIcon1Size    | 左侧图标 1 的尺寸主题     | string | -      | 'base'   |
| leftIcon1Style   | 左侧图标 1 的样式         | string | -      | ''       |
| leftIcon2Type    | 左侧图标 2 的颜色主题     | string | -      | 'text'   |
| leftIcon2Size    | 左侧图标 2 的尺寸主题     | string | -      | 'base'   |
| leftIcon2Style   | 左侧图标 2 的样式         | string | -      | ''       |
| centerIcon1Type  | 中间图标 1 的颜色主题     | string | -      | 'second' |
| centerIcon1Size  | 中间图标 1 的尺寸主题     | string | -      | 'base'   |
| centerIcon1Style | 中间图标 1 的样式         | string | -      | ''       |
| centerIcon2Type  | 中间图标 2 的颜色主题     | string | -      | 'second' |
| centerIcon2Size  | 中间图标 2 的尺寸主题     | string | -      | 'base'   |
| centerIcon2Style | 中间图标 2 的样式         | string | -      | ''       |
| rightIcon1Type   | 右侧图标 1 的颜色主题     | string | -      | 'third'  |
| rightIcon1Size   | 右侧图标 1 的尺寸主题     | string | -      | 'base'   |
| rightIcon1Style  | 右侧图标 1 的样式         | string | -      | ''       |
| rightIcon2Type   | 右侧图标 2 的颜色主题     | string | -      | 'third'  |
| rightIcon2Size   | 右侧图标 2 的尺寸主题     | string | -      | 'base'   |
| rightIcon2Style  | 右侧图标 2 的样式         | string | -      | ''       |
| boxStyle         | 外层样式                  | string | -      | ''       |
| leftStyle        | 左侧样式                  | string | -      | ''       |
| centerStyle      | 中间样式                  | string | -      | ''       |
| rightStyle       | 右侧样式                  | string | -      | ''       |

## Events

| Event name    | Properties | Description |
| ------------- | ---------- | ----------- |
| leftClicked   |            |
| centerClicked |            |
| rightClicked  |            |

## Slots

| Name    | Description | Bindings |
| ------- | ----------- | -------- |
| default |             |          |
| extra   |             |          |

---
