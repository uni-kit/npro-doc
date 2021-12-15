---
title: waterfall 瀑布流
---

# waterfall

<div class="demo-box">
	<iframe scrolling="auto" frameborder="0" src="https://npro.redou.vip/h5/#/pages/list/waterfall" class="demo-box-iframe"></iframe>
</div>

- nvue-app端使用waterfall；
- 非nvue-app端使用waterfall-view；
- 支持下拉刷新和加载更多；
- 与list组件一脉相承；

注意：

非nvue-app端必须有高度计算函数，否则只会依次排布。

```html
<template>
	<view>
		<n-navbar :lefts="leftIcons" title="瀑布流" @leftAction="navLeftAction"></n-navbar>
		<!-- #ifdef APP-NVUE -->
		<n-waterfall ref="n-list" bgType="inverse" :autoUpdate="true" @down="toLoadData" @up="toLoadData" :columnCount="2" leftGap="20rpx" rightGap="20rpx" columnGap="20rpx">
			<view slot="header" style="height: 20rpx;"></view>
			<n-list-cell v-for="(item,idx) in items" :key="idx">
				<goods-topic-cell v-if="item.type==='topic'" :item="item"></goods-topic-cell>
				<goods-cell v-if="item.type==='goods'" :item="item"></goods-cell>
				<goods-flash-cell v-if="item.type==='flash'" :item="item"></goods-flash-cell>
				<goods-club-cell v-if="item.type==='club'" :item="item"></goods-club-cell>
			</n-list-cell>
		</n-waterfall>
		<!-- #endif -->
		<!-- #ifndef APP-NVUE -->
		<n-waterfall ref="n-list" bgType="inverse" :autoUpdate="true" @down="toLoadData" @up="toLoadData" :columnCount="2" leftGap="20rpx" rightGap="20rpx" columnGap="10rpx">
			<view slot="header" style="height: 20rpx;"></view>
			<n-waterfall-view ref="water" leftGap="20rpx" rightGap="20rpx" columnGap="10rpx" :calculator="calculateHeight">
				<template v-slot:left="{lefts}">
					<template v-for="(item,idx) in lefts">
						<goods-topic-cell v-if="item.type==='topic'" :key="idx" :item="item"></goods-topic-cell>
						<goods-cell v-if="item.type==='goods'" :key="idx" :item="item"></goods-cell>
						<goods-flash-cell v-if="item.type==='flash'" :key="idx" :item="item"></goods-flash-cell>
						<goods-club-cell v-if="item.type==='club'" :key="idx" :item="item"></goods-club-cell>
					</template>
				</template>
				<template v-slot:right="{rights}">
					<template v-for="(item,idx) in rights">
						<goods-topic-cell v-if="item.type==='topic'" :key="idx" :item="item"></goods-topic-cell>
						<goods-cell v-if="item.type==='goods'" :key="idx" :item="item"></goods-cell>
						<goods-flash-cell v-if="item.type==='flash'" :key="idx" :item="item"></goods-flash-cell>
						<goods-club-cell v-if="item.type==='club'" :key="idx" :item="item"></goods-club-cell>
					</template>
				</template>
			</n-waterfall-view>
		</n-waterfall>
		<!-- #endif -->
	</view>
</template>

<script>
	import goodsTopicCell from '@/components/goods/goodsTopicCell.vue'
	import goodsCell from '@/components/goods/goodsCell.vue'
	import goodsFlashCell from '@/components/goods/goodsFlashCell.vue'
	import goodsClubCell from '@/components/goods/goodsClubCell.vue'
	
	import navHelper from '@/service/navHelper.js'
	
	const defaultData = [
		{cover: '/static/sea.jpeg', name: '开发好工具，种草全世界', type: 'topic', topic: '#精选好物推荐#', label: '好物推荐', width: 575, height: 480},
		{cover: '/static/house1.jpeg', name: '全新与优雅的设计', type: 'goods', topic: '#年度最佳设计#', label: '好物推荐', tags: '新品,最佳', price: 399.00, sale: 369, vip: 349, saleNum: 3699, width: 546, height: 410},
		{cover: '/static/house2.jpeg', name: '高质量高效率高实用', type: 'flash', topic: '#年度最受欢迎#', label: '好物推荐', tags: '新品,热门', price: 399.00, sale: 369, saleNum: 3699, width: 1000, height: 1205},
		{cover: '/static/bg-greek.png', name: '主题搭配优秀，一键换肤', type: 'club', topic: '#年度最佳搭配#', label: '好物推荐', tags: '热卖,3人团', price: 399.00, sale: 369, saleNum: 3699, width: 928, height: 1158},
		{cover: '/static/bg-newyork.png', name: '国际化/动画/手势全面突破', type: 'goods', topic: '#msi冠军#', label: '好物推荐', tags: '新品,突破', price: 399.00, sale: 369, saleNum: 3699, width: 928, height: 1158},
		{cover: '/static/bg-greek.png', name: '主题搭配优秀，一键换肤', type: 'club', topic: '#年度最佳搭配#', label: '好物推荐', tags: '热卖,3人团', price: 399.00, sale: 369, saleNum: 3699, width: 928, height: 1158},
		{cover: '/static/bg-newyork.png', name: '国际化/动画/手势全面突破', type: 'goods', topic: '#msi冠军#', label: '好物推荐', tags: '新品,突破', price: 399.00, sale: 369, saleNum: 3699, width: 928, height: 1158},
		{cover: '/static/house2.jpeg', name: '高质量高效率高实用', type: 'flash', topic: '#年度最受欢迎#', label: '好物推荐', tags: '新品,热门', price: 399.00, sale: 369, saleNum: 3699, width: 1000, height: 1205},
	]
	
	export default {
		components: {
			goodsTopicCell,
			goodsCell,
			goodsFlashCell,
			goodsClubCell
		},
		mixins: [navHelper],
		data() {
			return {
				items: []
			}
		},
		methods: {
			// 记住这里的高度计算函数，如果您需要用到this
			// 请一定使用外部保持住this的变量
			calculateHeight(val) {
				let h = val.height * 350 / val.width
				if (h > 400) {
					// 限制最高400
					h = 400
				}
				if (h < 100) {
					h = 100
				}
				// 只计算有差别的地方，高度相同的地方不做计算
				if (val.type != 'topic' ) {
					h += 10 + 32 + 24 + 38
				}
				return {h: h}
			},
			toLoadData() {
				const ins = this.$refs['n-list']
				const cp = ins.nCurrentPage
				setTimeout(()=>{
					if (cp===1) {
						this.items = defaultData
						// #ifndef APP-NVUE
						this.$refs['water'].clear()
						this.$refs['water'].set(defaultData)
						// #endif
					} else {
						this.items = this.items.concat(defaultData)
						// #ifndef APP-NVUE
						this.$refs['water'].concat(defaultData)
						// #endif
					}
					if (cp >= 4) {
						ins.nEndSuccess(false)
					} else {
						ins.nEndSuccess(true)
					}
				}, 300)
			}
		},
		onLoad() {
			
		}
	}
</script>

<style>

</style>
```

![waterfall](/img/coms/waterfall.jpg)

## Props

| Prop name             | Description                                                                                                    | Type           | Values | Default                                                                              |
| --------------------- | -------------------------------------------------------------------------------------------------------------- | -------------- | ------ | ------------------------------------------------------------------------------------ |
| showScrollbar         | 是否显示 scrollbar                                                                                             | boolean        | -      | true                                                                                 |
| bgType                | 背景主题                                                                                                       | string         | -      | 'page'                                                                               |
| position              | 定位                                                                                                           | string         | -      | 'static'                                                                             |
| top                   | 定位的 top                                                                                                     | string         | -      | '0'                                                                                  |
| bottom                | 定位的 bottom                                                                                                  | string         | -      | '0'                                                                                  |
| boxStyle              | 外层样式                                                                                                       | string         | -      | ''                                                                                   |
| height                | 只开放非 nvue-app 下设置高度，nvue-app 通过 flex 来实现高度继承。<br>允许高度组合：screen-!status-!nav-!100rpx | string         | -      | 'window-!status-!nav'                                                                |
| reverse               | 颠倒列表的样式                                                                                                 | string         | -      | ''                                                                                   |
| upperThreshold        |                                                                                                                | number         | -      | 50                                                                                   |
| lowerThreshold        |                                                                                                                | number         | -      | 50                                                                                   |
| scrollWithAnimation   |                                                                                                                | boolean        | -      | true                                                                                 |
| refresherEnabled      |                                                                                                                | boolean        | -      | false                                                                                |
| refresherThreshold    |                                                                                                                | number         | -      | 45                                                                                   |
| refresherDefaultStyle |                                                                                                                | string         | -      | 'black'                                                                              |
| refresherBackground   |                                                                                                                | string         | -      | "#FFF"                                                                               |
| refresherTriggered    |                                                                                                                | boolean        | -      | false                                                                                |
| enableFlex            |                                                                                                                | boolean        | -      | false                                                                                |
| scrollAnchoring       |                                                                                                                | boolean        | -      | false                                                                                |
| loadMainText          | 可以继续加载时的文字提示                                                                                       | string         | -      | '继续加载更多'                                                                       |
| loadingText           | 正在加载时的文字提示                                                                                           | string         | -      | '正在加载'                                                                           |
| noMoreText            | 没有更多时的文字提示                                                                                           | string         | -      | '没有更多啦'                                                                         |
| showNoMore            | 是否展示没有更多                                                                                               | boolean        | -      | true                                                                                 |
| loadingSrc            | 加载中的 gif 图片                                                                                              | string         | -      | '/static/ui/loading-small.gif'                                                       |
| loadingStyle          | loading 的外层样式                                                                                             | string         | -      | ''                                                                                   |
| refreshMainText       | 下拉时提示文字                                                                                                 | string         | -      | '下拉即可刷新...'                                                                    |
| pullingText           | 下拉时提示文字                                                                                                 | string         | -      | '释放即可刷新...'                                                                    |
| refreshingText        | 正在刷新的提示文字                                                                                             | string         | -      | '正在努力加载...'                                                                    |
| refreshStyle          | 刷新组件的外层样式                                                                                             | string         | -      | ''                                                                                   |
| refName               | 自定义 ref                                                                                                     | string         | -      | 'n-scroller'                                                                         |
| enableBackToTop       |                                                                                                                | boolean        | -      | false                                                                                |
| useLoading            | 是否启用 loading 组件，而不是 loadmoreofset 触发                                                               | boolean        | -      | false                                                                                |
| loadMoreOffset        | 使用 loadmoreofset 时的触发偏移量                                                                              | number         | -      | 60                                                                                   |
| columnCount           | 每一行的栏目数                                                                                                 | string\|number | -      | 'auto'                                                                               |
| columnWidth           | 每一栏的宽度                                                                                                   | string         | -      | 'auto'                                                                               |
| columnGap             | 栏目之间的间距                                                                                                 | string         | -      | '0'                                                                                  |
| leftGap               | 内容距离左侧的间距                                                                                             | string         | -      | '0'                                                                                  |
| rightGap              | 内容距离右侧的间距                                                                                             | string         | -      | '0'                                                                                  |
| autoUpdate            | 是否自动加载第一页数据                                                                                         | boolean        | -      | false                                                                                |
| down                  | 下拉刷新的配置                                                                                                 | object         | -      | {<br> use: true,<br> offset: uni.upx2px(140),<br> inRate: 0.8,<br> outRate: 0.2<br>} |
| up                    | 上提加载的配置                                                                                                 | object         | -      | {<br> use: true,<br> offset: 80<br>}                                                 |

## Events

| Event name | Properties | Description |
| ---------- | ---------- | ----------- |
| upper      |            |
| lower      |            |
| pulling    |            |
| refresh    |            |
| restore    |            |
| abort      |            |
| scroll     |            |
| down       |            |
| up         |            |
| inited     |            |

## Slots

| Name    | Description | Bindings |
| ------- | ----------- | -------- |
| header  |             |          |
| default |             |          |
| footer  |             |          |

---

# waterfall-view

> waterfall-view

自建的瀑布流。他本身不具备滚动能力。依赖外部的计算函数来决策高度，否则只会按顺序排下去，因为她的高度计算不依赖dom，所以具备超高的性能。

用于：

- 非nvue-app端的waterfall完善；
- 类似于waterfall的特殊视觉布局；

## Props

| Prop name  | Description                                                                                                                     | Type   | Values | Default |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------- | ------ | ------ | ------- |
| idLabel    | item 的唯一值键                                                                                                                 | string | -      | 'id'    |
| calculator | 高度计算方法.<br>不使用自动计算高度的，体验太差.<br>高度难以确定的，根据元素内容预估高度即可.<br>不提供就直接是左右各一个排下去 | func   | -      | null    |
| columnGap  | 栏目之间的间距                                                                                                                  | string | -      | '0'     |
| leftGap    | 内容距离左侧的间距                                                                                                              | string | -      | '0'     |
| rightGap   | 内容距离右侧的间距                                                                                                              | string | -      | '0'     |
| boxStyle   |                                                                                                                                 | string | -      | ''      |

## Slots

| Name  | Description | Bindings |
| ----- | ----------- | -------- |
| left  |             |          |
| right |             |          |

---
