---
title: result 结果
---

# result

<div class="demo-box">
	<iframe scrolling="auto" frameborder="0" src="http://www.redou.vip/npro/#/pages/display/result" class="demo-box-iframe"></iframe>
</div>

> result 结果/状态展示

resut组件采用 icon-title-desc 三段式的设计。同时开放了extra插槽，允许实现更多可能。

主要属性有：

- icon，图标；
- title，标题；
- desc，描述；
- top，与上一个元素的间距。注意，这是margin-top的设置值，不是定位；

```html
<n-result icon="forbid" iconStyle="font-size:100rpx;" title="不好意思,好像你无权访问" desc="有问题可以申诉,但是现在你看不了" descStyle="margin-top:32rpx;margin-bottom:32rpx;">
	<n-button slot="extra" bgType="error" text="申 诉" textType="inverse" radius="ll" boxStyle="width:320rpx;height:72rpx;"></n-button>
</n-result>
```

![result](/img/coms/result.jpg)

## Props

| Prop name    | Description          | Type   | Values | Default          |
| ------------ | -------------------- | ------ | ------ | ---------------- |
| top          | 自定义距离顶部的距离 | string | -      | '260rpx'         |
| icon         | 图标                 | string | -      | ''               |
| title        | 标题                 | string | -      | ''               |
| desc         | 描述                 | string | -      | '暂时还没有数据' |
| titleType    | 标题颜色主题         | string | -      | 'second'         |
| titleSize    | 标题尺寸主题         | string | -      | 'll'             |
| titleStyle   | 标题样式             | string | -      | ''               |
| descType     | 描述颜色主题         | string | -      | 'second'         |
| descSize     | 描述尺寸主题         | string | -      | 'base'           |
| descStyle    | 描述样式             | string | -      | ''               |
| iconType     | 图标颜色主题         | string | -      | 'second'         |
| iconSize     | 图标尺寸主题         | string | -      | 'll'             |
| iconStyle    | 图标样式             | string | -      | ''               |
| iconBoxStyle | 图标外层样式         | string | -      | ''               |
| boxStyle     | 外层样式             | string | -      | ''               |

## Slots

| Name  | Description | Bindings |
| ----- | ----------- | -------- |
| icon  |             |          |
| title |             |          |
| desc  |             |          |
| extra |             |          |

---
