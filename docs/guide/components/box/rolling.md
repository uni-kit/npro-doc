---
title: rolling 滚动通告
---

# rolling

<div class="demo-box">
	<iframe scrolling="auto" frameborder="0" src="http://www.redou.vip/npro/#/pages/box/rolling" class="demo-box-iframe"></iframe>
</div>

滚动播报组件。非常高性能的横向滚动播报。

```html
<n-rolling boxStyle="width:690rpx;" text="nPro以超高的规范与定制能力主力uniapp实现更多高大上的应用开发.全部组件支持nvue." textType="success"></n-rolling>
<!-- 竖向切换 -->
<swiper :circular="true" :vertical="true" :autoplay="true" :disable-touch="true" class="n-flex-one" style="height: 30px;margin-left:16rpx;">
	<swiper-item class="n-flex-row n-align-center" v-for="(item,idx) in hints" :key="idx">
		<text class="n-color-third n-size-base">{{item}}</text>
	</swiper-item>
</swiper>
<!-- 横向切换 -->
<swiper :circular="true" :autoplay="true" :disable-touch="true" class="n-flex-one" style="height: 30px;margin-left:16rpx;">
	<swiper-item class="n-flex-row n-align-center" v-for="(item,idx) in hints" :key="idx">
		<text class="n-color-third n-size-base">{{item}}</text>
	</swiper-item>
</swiper>
```

![rolling](/img/coms/rolling.jpg)

## Props

| Prop name | Description                        | Type    | Values | Default |
| --------- | ---------------------------------- | ------- | ------ | ------- |
| times     | 滚动的次数。默认是 0，表示无限滚动 | number  | -      | 0       |
| auto      | 是否开启自动滚动                   | boolean | -      | false   |
| text      | 公告内容                           | string  | -      | ''      |
| textType  | 内容的颜色主题                     | string  | -      | 'error' |
| textSize  | 内容的尺寸主题                     | string  | -      | 'base'  |
| textStyle | 内容的样式                         | string  | -      | ''      |
| height    | 高度主题                           | string  | -      | 'base'  |
| duration  | 动画周期                           | number  | -      | 8000    |
| boxStyle  | 外层样式                           | string  | -      | ''      |

## Slots

| Name    | Description | Bindings |
| ------- | ----------- | -------- |
| left    |             |          |
| default |             |          |
| right   |             |          |

---
