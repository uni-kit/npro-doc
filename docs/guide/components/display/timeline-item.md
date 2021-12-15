---
title: timeline-item 时间轴
---

# timeline-item

<div class="demo-box">
	<iframe scrolling="auto" frameborder="0" src="https://npro.redou.vip/h5/#/pages/display/timeline-item" class="demo-box-iframe"></iframe>
</div>

> timeline-item 时间轴组件

采用 left-badge-right 三插槽的形式填充内容。

```html
<n-timeline-item lineBgType="primary" centerStyle="width:52rpx;" boxStyle="margin-left:32rpx;width:686rpx;">
	<view slot="badge" class="n-bg-inverse n-radius-ll n-border-all-warning" style="position: absolute;width: 52rpx;height: 52rpx;top:0;left:0;align-items: center;justify-content: center;">
		<n-icon name="radio-button" type="error"></n-icon>
	</view>
	<view slot="right" style="margin-left: 18rpx;">
		<text class="n-size-l n-color-text" style="line-height: 52rpx;">{{item.title}}</text>
		<text class="n-size-s n-color-third n-lh-base" style="margin-top: 8rpx;">{{item.time}}</text>
		<text class="n-size-base n-color-second n-lh-base" style="margin-top: 12rpx; width: 624rpx;">{{item.desc}}</text>
		<view style="height: 56rpx;"></view>
	</view>
</n-timeline-item>
<n-timeline-item lineBgType="primary" centerStyle="width:52rpx;margin-left:18rpx;" boxStyle="width:750rpx;">
	<view slot="left" style="width: 120rpx;flex-direction: row;justify-content: flex-end;">
		<text class="n-size-l n-color-text" style="line-height: 52rpx;">{{item.ago}}</text>
	</view>
	<view slot="badge" class="n-bg-inverse n-radius-ll n-border-all-warning" style="position: absolute;width: 52rpx;height: 52rpx;top:0;left:0;align-items: center;justify-content: center;">
		<n-icon name="radio-button" type="error"></n-icon>
	</view>
	<view slot="right" style="margin-left: 18rpx;">
		<text class="n-size-l n-color-text" style="line-height: 52rpx;">{{item.title}}</text>
		<text class="n-size-s n-color-third n-lh-base" style="margin-top: 8rpx;">{{item.time}}</text>
		<text class="n-size-base n-color-second n-lh-base" style="margin-top: 12rpx; width: 528rpx;">{{item.desc}}</text>
		<view style="height: 56rpx;"></view>
	</view>
</n-timeline-item>
```

```js
{
	items: [{title: '3.0-Beta：初心不忘', time: '2020-09-20', ago: 'Now', desc: '我，站着，在一片不长草的草原，钓鱼。或许，落日一直在提醒着我，人到底是要长大的。'},
		{title: '2.6：在樱花开放的季节', time: '2020-09-20', ago: '上个月', desc: '我，站着，在一片不长草的草原，钓鱼。或许，落日一直在提醒着我，人到底是要长大的。'},
		{title: '2.0：遇见你，刚刚好', time: '2020-09-20', ago: '半年年', desc: '我，站着，在一片不长草的草原，钓鱼。或许，落日一直在提醒着我，人到底是要长大的。'},
		{title: '1.1：我曾来过，飞过痕迹', time: '2020-09-20', ago: '10月前', desc: '我，站着，在一片不长草的草原，钓鱼。或许，落日一直在提醒着我，人到底是要长大的。'},
		{title: '1.0：在这里，相遇', time: '2020-09-20', ago: '一年前', desc: '我，站着，在一片不长草的草原，钓鱼。或许，落日一直在提醒着我，人到底是要长大的。'}
	]
}
```

![timeline-item](/img/coms/timeline-item.jpg)

## Props

| Prop name   | Description    | Type   | Values | Default  |
| ----------- | -------------- | ------ | ------ | -------- |
| bgType      | 背景主题       | string | -      | ''       |
| border      | 边框主题       | string | -      | ''       |
| radius      | 圆角主题       | string | -      | ''       |
| centerStyle | 中间线外层样式 | string | -      | ''       |
| lineBgType  | 中间线背景主题 | string | -      | 'border' |
| lineStyle   | 中间线样式     | string | -      | ''       |
| boxStyle    | 外层样式       | string | -      | ''       |

## Slots

| Name  | Description | Bindings |
| ----- | ----------- | -------- |
| left  |             |          |
| badge |             |          |
| right |             |          |

---
