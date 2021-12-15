---
title: icon 图标
---

# icon

<div class="demo-box">
	<iframe scrolling="auto" frameborder="0" src="https://npro.redou.vip/h5/#/pages/display/icon" class="demo-box-iframe"></iframe>
</div>

- 支持图片；
- 大量规范的图标；

```html
<n-icon name="add-bold" type="error" size="ll"></n-icon>
<n-icon name="/static/bear.jpg" iconStyle="width: 120rpx; height: 120rpx; border-radius:60rpx;" mode="aspectFill"></n-icon>
```

![icon](/img/coms/icon.jpg)

具体包含哪些图标，以及对应的名字，您需要去查看demo。

## Props

| Prop name | Description                    | Type    | Values | Default |
| --------- | ------------------------------ | ------- | ------ | ------- |
| stop      | 是否允许穿透                   | boolean | -      | true    |
| name      | 字体图标的名字，允许是图片路径 | string  | -      | 'right' |
| type      | 图标的颜色主题                 | string  | -      | ''      |
| size      | 图标的尺寸主题                 | string  | -      | 'l'     |
| hover     | hover 主题                     | string  | -      | ''      |
| iconStyle | 图标或者图片样式               | string  | -      | ""      |
| boxStyle  | 外层样式                       | string  | -      | ''      |

## Events

| Event name  | Properties | Description |
| ----------- | ---------- | ----------- |
| iconClicked |            |

## Slots

| Name    | Description | Bindings |
| ------- | ----------- | -------- |
| default |             |          |

---

# 如何自定义图标

您可以维护自己的一套图标。参照我们的图标组件，实现自己的图标组件，然后利用easycom的配置来覆盖我的图标。

如何覆盖我们的配置，使用您自定义的组件？

您只需要将您的自定义组件匹配条件放到我们的匹配条件前面即可（这里是指easycom的匹配条件）。

比如：

```json
{
	"easycom": {
		"autoscan": true,
		"custom": {
			"^n-icon": "@/custom/icon/icon.vue", // 使用自定义的icon组件
			"^n-(.*)": "@/nPro/$1/$1.vue" // 匹配nPro内的vue文件
		}
	}
}
```
