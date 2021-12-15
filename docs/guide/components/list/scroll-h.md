---
title: scroll-h 横向滚动
---

# scroll-h

<div class="demo-box">
	<iframe scrolling="auto" frameborder="0" src="https://npro.redou.vip/h5/#/pages/list/scroll-h" class="demo-box-iframe"></iframe>
</div>

横向滚动组件。

## Props

| Prop name    | Description                                                           | Type   | Values | Default  |
| ------------ | --------------------------------------------------------------------- | ------ | ------ | -------- |
| bgType       | 背景主题                                                              | string | -      | ''       |
| width        | 自定义宽度                                                            | string | -      | '750rpx' |
| height       | 自定义高度                                                            | string | -      | '260px'  |
| left         | scroll-left                                                           | string | -      | '0'      |
| boxStyle     | 外层样式                                                              | string | -      | ''       |
| contentStyle | 内容样式。如果 vue 页面下无法滚动（内容有压缩），<br>请设置内容总宽度 | string | -      | ''       |

## Slots

| Name    | Description | Bindings |
| ------- | ----------- | -------- |
| default |             |          |

---


```html
<template>
	<n-scroll-h width="750rpx" height="600rpx" boxStyle="padding-top:40rpx;padding-bottom:34rpx;">
		<view style="width: 32rpx;"></view>
		<view v-for="(item,idx) in items" :key="idx" :class="['is-item', idx===0&&'is-first', (idx===items.length-1)&&'is-last']">
			<v-care-card :image="item.avatar" :name="item.name" :cares="item.cares" :intro="item.intro" @care="toCare" @close="toClose"></v-care-card>
		</view>
		<view style="width: 32rpx;"></view>
	</n-scroll-h>
</template>

<script>
	import vCareCard from '@/components/vCareCard.vue'
	
	export default {
		components: {
			vCareCard
		},
		data() {
			return {
				items: [{
					avatar: '/static/bear.jpg',
					name: '风格化',
					cares: '28.9万粉丝',
					intro: 'scss主题配置'
				}, {
					avatar: '/static/cat.jpeg',
					name: '统一',
					cares: '66.6万粉丝',
					intro: '一套代码适用全端'
				}, {
					avatar: '/static/girl.jpeg',
					name: '性能好',
					cares: '128.9万粉丝',
					intro: '针对优化，体验好'
				}, {
					avatar: '/static/girl1.jpeg',
					name: '效率高',
					cares: '328.9万粉丝',
					intro: '差异小，越用越快'
				}, {
					avatar: '/static/logo.png',
					name: '规范',
					cares: '828.9万粉丝',
					intro: '学习的绝对帮手'
				}]
			}
		},
		methods: {
			toCare() {
				this.$emit("care")
			},
			toClose() {
				this.$emit("close")
			}
		}
	}
</script>

<style lang="scss" scoped>
	.is {
		&-item {
			border-left-width: 1px;
			border-left-color: $n-border-color;
			border-top-width: 1px;
			border-top-color: $n-border-color;
			border-bottom-width: 1px;
			border-bottom-color: $n-border-color;
			border-right-width: 0;
			overflow: hidden;
		}
		&-first {
			border-top-left-radius: 12rpx;
			border-bottom-left-radius: 12rpx;
		}
		&-last {
			border-right-width: 1px;
			border-right-color: $n-border-color;
			border-top-right-radius: 12rpx;
			border-bottom-right-radius: 12rpx;
		}
	}
</style>
```

![scroll-h](/img/coms/scroll-h.jpg)

# scroll-inline

另外，我们在Vue页面下，提供了一个超级简洁的横向滚动 scroll-inline。
