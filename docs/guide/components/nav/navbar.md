---
title: navbar 导航栏
---

# navbar

<div class="demo-box">
	<iframe scrolling="auto" frameborder="0" src="http://www.redou.vip/npro/#/pages/nav/navbar" class="demo-box-iframe"></iframe>
</div>

> navbar: 通用的自定义导航栏组件。

navbar采用左中右三段式的设计：左侧按钮区，中间标题区，右侧按钮区。分别对应`left`、`center`、`right`三个插槽。

主要属性有：

- lefts：左侧按钮；
- title：中间标题；
- icon：中间标题跟着的图标；
- rights：右侧按钮

主要事件为：

- @leftAction；
- @rightAction；

## 使用

```html
<n-navbar bgType="none" :lefts="leftIcons" title="导航栏" itemIconType="inverse" titleType="inverse" @leftAction="navLeftAction"></n-navbar>
<n-navbar :fixed="false" :includeStatus="false" :lefts="lefts1" :rights="rights1" title="右侧按钮文字"></n-navbar>
<n-navbar :fixed="false" :includeStatus="false" :lefts="lefts1" :rights="rights4" title="带角标"></n-navbar>
```

```js
{
	lefts1: [{icon: 'arrow-left-bold', text: '返回', textStyle: 'margin-left:10rpx;'}],
	rights1: [{text: '发布', bgType: 'primary', textType: 'inverse', style: 'width:56px;height:24px;border-radius:20px;justify-content:center;'}],
	rights4: [{text: '发布', bgType: 'primary', textType: 'inverse', style: 'width:56px;height:24px;border-radius:20px;justify-content:center;', badge: {bgType: 'error',size: '18rpx',text: '',boxStyle: 'position:absolute;top:0;right:0;'}}]
}
```

![navbar](/img/coms/navbar.jpg)

navbar 主要的字段就是 `title` `lefts` `rights`。事件为`@leftAction` `@rightAction`。

我们默认采用了 左-中-右 三段式的设计。左右两侧分别是 200rpx，中间是 350rpx。

当你需要一些别的 设计的时候，您可能需要修改 这三段各段的宽度。默认他们就是排成一行，不换行。

## 整体配置

- `bgType`：背景色主题；
- `isSeize`：fixed定位的时候，是否存在占位（是否在视图中有一个相同高度的空白view占位）；
- `fixed`：是否fixed定位；
- `height`：导航栏的高度。默认是44px；
- `includeStatus`：是否包含状态栏；
- `boxStyle`：外层样式设置； 
- `navStyle`：导航栏样式；

## 中间标题

中间title，包含了 title 和 icon，也就是允许在文字的右侧设置一个 icon 图标。

- centerStyle：整体的中间区域设置，比如设置宽度等。他包含了title和icon内容。默认350rpx宽度；
- title：标题内容；
- icon：图标；

对于标题title，又有它对应的主题内容配置：

- titleType：标题的主题色，也就是文字的颜色，比如：nav-title，具体看 `n-color-` 下可以使用的主题色；
- titleSize：标题的字体大小，也就是 font-size，比如：nav-title，具体看 `n-size-` 下可以使用的尺寸；
- titleStyle：对标题的style进行设置，比如：颜色、尺寸等；

对于标题右侧的icon，也是一样：

- iconType：图标的主题，也就是图标的颜色；
- iconSize：图标的尺寸，也就是 font-size，支持：ss s base l ll，具体多大得看你的主题配置文件；
- iconStyle：style的个性化设置，图片的话需要在这里设置宽高等信息；

## 左右按钮

左右按钮的设置非常灵活，支持 一次性设置样式，也支持 单独的配置样式。左右按钮支持 图标与文字 的组合。

`lefts` `rights`

- 1. `itemTextType` `itemTextSize` `itemTextStyle` `itemIconType` `itemIconSize` `itemIconStyle` 

- 2. `leftItemStyle` `rightItemStyle`

- 3. `leftBgType` `leftStyle` `rightBgType` `rightStyle`

lefts rights 是 数组类型，他们包含了 各侧按钮的数量 以及 按钮的个性化配置。

`[{icon: 'left', text: '返回'}]`

> 我们把 左右侧 的每一个按钮叫做 item。

可以大概知道，上面我们列出的一堆属性就是针对 item 的统一化的配置。从名字我们就能够知道，他们分别对应谁，以及对应什么方面。

- `1.` 项，主要是为 所有 item 的 文字和icon图标 的统一配置信息；

- `2.` 项，是对 item 的外层整体进行配置；

- `3.` 项，是对 所有 items 的整体进行配置，也就是 对 left/right 这片区域进行配置。

每一个 item 都可以重置 统一的 item 配置。

每个 item 全面的配置信息如下：

```js
{
	icon: 'left',  // icon 图标或者图片
	text: '返回',  // 文字
	iconType: 'inverse',  // icon 主题色
	iconSize: 'l',  // icon尺寸
	iconStyle: '',  // icon style
	textType: 'inverse',  // text 主题色
	textSize: 'l',  // text 尺寸
	textStyle: '', // text style
	style: '',  // 整个 item 的 style
	bgType: 'primary'  // 整个 item 的背景主题色
}
```

## 事件

我们为 左-中-右 提供了统一名字的 点击响应。

### @leftAction

携带参数，左侧按钮的 index 值。

### @rightAction

携带参数，右侧按钮的 index 值。

### @centerAction

## 插槽

提供了 left/right/center 三个插槽。

## Props

| Prop name      | Description                      | Type    | Values | Default     |
| -------------- | -------------------------------- | ------- | ------ | ----------- |
| lefts          | 左侧 item 集                     | array   | -      | []          |
| title          | 标题                             | string  | -      | null        |
| icon           | 标题右侧图标                     | string  | -      | null        |
| rights         | 右侧 item 集                     | array   | -      | []          |
| bgType         | 背景主题                         | string  | -      | 'nav'       |
| border         | 边框主题                         | string  | -      | ''          |
| titleType      | 标题颜色主题                     | string  | -      | 'nav-title' |
| titleSize      | 标题尺寸主题                     | string  | -      | 'nav-title' |
| titleStyle     | 标题样式                         | string  | -      | ''          |
| iconType       | 标题图标颜色主题                 | string  | -      | 'nav-title' |
| iconSize       | 标题图标尺寸主题                 | string  | -      | 'nav-title' |
| iconStyle      | 标题图标样式                     | string  | -      | ""          |
| itemIconType   | item 图标颜色主题                | string  | -      | 'nav-icon'  |
| itemIconSize   | item 图标尺寸主题                | string  | -      | 'nav-icon'  |
| itemIconStyle  | item 图标样式                    | string  | -      | ""          |
| itemTextType   | item 文字颜色主题                | string  | -      | 'nav-item'  |
| itemTextSize   | item 文字尺寸主题                | string  | -      | 'nav-item'  |
| itemTextStyle  | item 文字样式                    | string  | -      | ''          |
| height         | 自定义 px 高度                   | number  | -      | 44          |
| includeStatus  | 是否包含状态栏                   | boolean | -      | true        |
| isSeize        | 是否占位                         | boolean | -      | true        |
| fixed          | 是否 fixed 定位                  | boolean | -      | true        |
| enableBack     | 左侧第一个按钮是否自动返回上一页 | boolean | -      | false       |
| leftStyle      | lefts 整体样式                   | string  | -      | ''          |
| leftBgType     | lefts 整体的背景主题             | string  | -      | ''          |
| leftItemStyle  | lefts 中 item 的样式             | string  | -      | ''          |
| rightStyle     | rights 整体样式                  | string  | -      | ''          |
| rightBgType    | rights 整体背景主题              | string  | -      | ''          |
| rightItemStyle | rights 中 item 的样式            | string  | -      | ''          |
| centerStyle    | 中间 title 外层的样式            | string  | -      | ''          |
| boxStyle       | 外层样式                         | string  | -      | ''          |
| statusNavStyle | status 与 nav 的外层样式         | string  | -      | ''          |
| navStyle       | nav 的外层样式                   | string  | -      | ''          |
| badgeConfig    | badge 整体设置                   | object  | -      | {}          |

## Events

| Event name   | Properties | Description |
| ------------ | ---------- | ----------- |
| leftAction   |            |
| centerAction |            |
| rightAction  |            |

## Slots

| Name   | Description | Bindings |
| ------ | ----------- | -------- |
| left   |             |          |
| center |             |          |
| right  |             |          |
| extra  |             |          |

---
