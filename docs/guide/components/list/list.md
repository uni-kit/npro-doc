---
title: list 滚动列表
---

# list

<div class="demo-box">
	<iframe scrolling="auto" frameborder="0" src="http://www.redou.vip/npro/#/pages/list/list" class="demo-box-iframe"></iframe>
</div>

> list 列表

- 支持刷新与加载；
- 支持自动加载第一页；
- 内置页码管理；

> list在nvue-app下使用flex来继承高度，在MP/H5下，需要我们手动设置高度。

需要注意：

- height，只有在非nvue-app下才有效；
- nvue-app下内容必须放在n-list-cell或者n-list-header中，否则无法显示；
- 单个cell内的内容不宜过多，否则可能进度条有问题或者无法触发加载更多；

**不使用刷新和加载**

```html
<n-list bgType="inverse" :down="null" :up="null" height="window-!status-!nav-!136rpx">
	<n-list-cell>
		<view style="height: 20rpx;"></view>
	</n-list-cell>
	<n-list-cell>
		<product-banner :items="banners"></product-banner>
	<view style="height: 20rpx;"></view>
	</n-list-cell>
	<n-list-cell v-for="(item,idx) in items" :key="idx">
		<cover-intro-cell :item="item" @select="toPage"></cover-intro-cell>
		<view style="height: 20rpx;"></view>
		<n-height v-if="idx===items.length-1" height="x"></n-height>
	</n-list-cell>
</n-list>
```

**使用刷新和加载**

```html
<template>
	<view>
		<n-navbar :lefts="leftIcons" title="刷新和加载" @leftAction="navLeftAction"></n-navbar>
		<n-list ref="n-list" :autoUpdate="true" @down="toLoadData" @up="toLoadData">
			<n-list-cell v-for="(item,idx) in items" :key="idx">
				<album-comment-cell></album-comment-cell>
				<view style="height: 16rpx;"></view>
			</n-list-cell>
		</n-list>
	</view>
</template>

<script>
	import albumCommentCell from '@/components/album/albumCommentCell.vue'
	
	import navHelper from '@/service/navHelper.js'
	
	export default {
		components: {
			albumCommentCell
		},
		mixins: [navHelper],
		data() {
			return {
				items: []
			}
		},
		methods: {
			toLoadData() {
				const ins = this.$refs['n-list']
				const cp = ins.nCurrentPage
				setTimeout(()=>{
					if (cp === 1) {
						this.items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
					} else {
						this.items = this.items.concat([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
					}
					if (cp >= 4) {
						ins.nEndSuccess(false)
					} else {
						ins.nEndSuccess(true)
					}
				}, 300)
			}
		}
	}
</script>

<style>

</style>

```

![list](/img/coms/list.jpg)

## Props

| Prop name             | Description                                                                                                    | Type    | Values | Default                                                                              |
| --------------------- | -------------------------------------------------------------------------------------------------------------- | ------- | ------ | ------------------------------------------------------------------------------------ |
| showScrollbar         | 是否显示 scrollbar                                                                                             | boolean | -      | true                                                                                 |
| bgType                | 背景主题                                                                                                       | string  | -      | 'page'                                                                               |
| position              | 定位                                                                                                           | string  | -      | 'static'                                                                             |
| top                   | 定位的 top                                                                                                     | string  | -      | '0'                                                                                  |
| bottom                | 定位的 bottom                                                                                                  | string  | -      | '0'                                                                                  |
| boxStyle              | 外层样式                                                                                                       | string  | -      | ''                                                                                   |
| height                | 只开放非 nvue-app 下设置高度，nvue-app 通过 flex 来实现高度继承。<br>允许高度组合：screen-!status-!nav-!100rpx | string  | -      | 'window-!status-!nav'                                                                |
| reverse               | 颠倒列表的样式                                                                                                 | string  | -      | ''                                                                                   |
| loadMainText          | 可以继续加载时的文字提示                                                                                       | string  | -      | '继续加载更多'                                                                       |
| loadingText           | 正在加载时的文字提示                                                                                           | string  | -      | '正在加载'                                                                           |
| noMoreText            | 没有更多时的文字提示                                                                                           | string  | -      | '没有更多啦'                                                                         |
| showNoMore            | 是否展示没有更多                                                                                               | boolean | -      | true                                                                                 |
| loadingSrc            | 加载中的 gif 图片                                                                                              | string  | -      | '/static/ui/loading-small.gif'                                                       |
| loadingStyle          | loading 的外层样式                                                                                             | string  | -      | ''                                                                                   |
| refreshMainText       | 下拉时提示文字                                                                                                 | string  | -      | '下拉即可刷新...'                                                                    |
| pullingText           | 下拉时提示文字                                                                                                 | string  | -      | '释放即可刷新...'                                                                    |
| refreshingText        | 正在刷新的提示文字                                                                                             | string  | -      | '正在努力加载...'                                                                    |
| refreshStyle          | 刷新组件的外层样式                                                                                             | string  | -      | ''                                                                                   |
| upperThreshold        |                                                                                                                | number  | -      | 50                                                                                   |
| lowerThreshold        |                                                                                                                | number  | -      | 50                                                                                   |
| scrollWithAnimation   |                                                                                                                | boolean | -      | true                                                                                 |
| refresherEnabled      |                                                                                                                | boolean | -      | false                                                                                |
| refresherThreshold    |                                                                                                                | number  | -      | 45                                                                                   |
| refresherDefaultStyle |                                                                                                                | string  | -      | 'black'                                                                              |
| refresherBackground   |                                                                                                                | string  | -      | "#FFF"                                                                               |
| refresherTriggered    |                                                                                                                | boolean | -      | false                                                                                |
| enableFlex            |                                                                                                                | boolean | -      | false                                                                                |
| scrollAnchoring       |                                                                                                                | boolean | -      | false                                                                                |
| scrollable            | 是否允许滚动                                                                                                   | boolean | -      | true                                                                                 |
| refName               | 自定义 ref                                                                                                     | string  | -      | 'n-scroller'                                                                         |
| enableBackToTop       |                                                                                                                | boolean | -      | false                                                                                |
| useLoading            | 是否启用 loading 组件，而不是 loadmoreoffset 触发                                                              | boolean | -      | false                                                                                |
| loadMoreOffset        | 使用 loadmoreoffset 时的触发偏移量                                                                             | number  | -      | 60                                                                                   |
| pagingEnabled         | 是否使用分页模式                                                                                               | boolean | -      | false                                                                                |
| bounce                | 是否开启 bounce 效果，默认开启                                                                                 | boolean | -      | true                                                                                 |
| autoUpdate            | 是否自动加载第一页数据                                                                                         | boolean | -      | false                                                                                |
| down                  | 下拉刷新的配置                                                                                                 | object  | -      | {<br> use: true,<br> offset: uni.upx2px(140),<br> inRate: 0.8,<br> outRate: 0.2<br>} |
| up                    | 上提加载的配置                                                                                                 | object  | -      | {<br> use: true,<br> offset: 80<br>}                                                 |

## Events

| Event name | Properties | Description |
| ---------- | ---------- | ----------- |
| scroll     |            |
| down       |            |
| up         |            |
| upper      |            |
| lower      |            |
| pulling    |            |
| refresh    |            |
| restore    |            |
| abort      |            |
| inited     |            |

## Slots

| Name    | Description | Bindings |
| ------- | ----------- | -------- |
| default |             |          |
| token   |             |          |

---

# 说明

在nvue页面开发中，list组件可以说是最常用的，也是最重要的组件之一。nvue页面中，页面不会自己有滚动效果，内容必须包裹在scroll/list中才会实现 页面/内容 的滚动。uniapp的处理是默认给所有的页面最外层包裹一个scroll，从而使页面具备滚动的能力。

但是考虑到，我们一般会自己自定义各种刷新，以及页面内部会再次使用到scroll/list，我们给所有页面禁用了uniapp自动添加的外层scroll。

> 主要功能如下：

- app端高度继承，MP/H5端高度控制；
- 可开可关闭的 下拉刷新 与 上提加载；
- 可以设置 是使用 loader 组件来实现 上提加载，还是使用 loadMore 事件来实现上提加载；
- 可以用来做聊天列表，并提供了示范；
- ...

**快速使用**

```html
<template>
  <n-list ref="n-list" :autoUpdate="true" @down="toLoadData" @up="toLoadData">
    <n-list-cell v-for="(item,idx) in items" :key="idx">
      <!-- 您的具体内容
      <item-cell :item="item"></item-cell>
	  -->
    </n-list-cell>
  </n-list>
</template>

<script>
  export default {
	data() {
	  return {
		items: []
	  }
	},
	methods: {
	  toLoadData() {
		const ins = this.$refs['n-list']
		const cp = ins.nCurrentPage
		// 您需要更换这个api接口
		requestApi({page: cp}).then(response => {
		  if (cp === 1) {
			this.items = response.results || []
		  } else {
			this.items = this.items.concat(response.results || [])
		  }
		  // true or false means if having a next page
		  ins.nEndSuccess(true)
		}).catch(err => {
		  ins.nEndError()
		})
	  }
	}
  }
</script>
```

以上代码就会实现一个 自动铺满屏幕（不包含status和navbar）的list组件。

`n-list` 默认插槽 的子组件必须是 `n-list-cell`。（因为weex端，list下只能是cell组件）

`autoUpdate` 可以决定是否自动加载数据（也就是拉取第一页的数据），下拉和上提对应 `down` 和 `up` 事件。

在 `loadData` 方法中，我们不需要自己去管理当前的页面等状态，`n-list` 会自己管理，你只需要调用 成功或者失败 的回掉即可。

**刷新与加载**

我们提供了刷新与加载的开关，以及事件。大致为：`autoUpdate` `down` `up` `@inited` `@down` `@up` 。

**down**

下拉刷新的开关。默认是打开的，也就是：`{use: true, offset: uni.upx2px(140), inRate: 0.8, outRate: 0.2}`。

- `use`: 刷新的开关。不需要下拉刷新，`use:false` 即可。
- `offset`: 刷新栏的高度。
- `inRate`: 满足释放刷新之前的拉下难易程度。
- `outRate`: 满足释放刷新之后的拉下难易程度。

关闭刷新可以是 `:down="{use:false}"` ，也可以是 `:down="null"`。

刷新开启之后，会有对应的 `@down` 事件。

**up**

上提加载的开关。默认是打开的。也就是：`{use: true, offset: 80}`。

不需要上提加载，直接 `use:false` 即可。`offset` 为触发上提加载时距离底部的距离。一般为加载组件的高度。

> 在 app-nvue 端，我们提供了 两种 上提加载更多 的机制。

`app-nvue` 端默认使用的是 list的 `loadmoreoffset` 配置与 `@loadmore` 事件。在 `n-list` 组件中对应的属性配置是 `useLoading:true` 以及 `loadMoreOffset:60`

如果您需要使用 `weex` 中的 `loading` 组件来做 上提加载更多，您需要设置：`useLoading:true`。我们默认是关闭了 `useLoading`，而是使用 `loadMoreOffset` 这个属性来配置可触发加载更多时的底部距离。

关闭上提加载可以是 `:up="{use:false}"` ，也可以是 `:up="null"`。

不管使用啥，上提加载对应的事件是 `@up`。

**autoUpdate**

是否自动加载第一页数据。默认不加载，也就是 `autoUpdate:false`。

`autoUpdate:true` 即可自动加载第一页数据，当然前提条件是 开启了 下拉刷新或者上提加载。

> 如果您不开启 `autoUpdate` 如何加载第一页数据了？

一般情况下，我们调用 `ins.nRefresh()` 进行手动刷新，`ins.nLoad()` 进行手动加载。您只需要提供 `@down` 或者 `@up` 事件的回调即可。

**注意**：这里的 ins 指的是 n-list 的ref。比如 `<n-list ref="n-list"></n-list>`, ins 就是 `this.$refs['n-list']` whatever

**@dwon**

开启了下拉刷新，就必须提供 `@dwon` 事件，并且在里面处理您的刷新逻辑。一般情况下， `@down` 与 `@up` 公用一个处理逻辑。

**@up**

开启了 上提加载，就必须提供 `@up` 事件。一般与 `@down` 回调是同一个函数。

```js
toLoadData() {
	const ins = this.$refs['n-list']
	const cp = ins.nCurrentPage
	requestApi({page: cp}).then(response => {
		if (cp === 1) {
			this.items = response.results || []
		} else {
			this.items = this.items.concat(response.results || [])
		}
		ins.nEndSuccess(response.next)
	}).catch(err => {
		ins.nEndError()
	})
}
```

刷新与加载一体处理，而且我们不需要手动去管理页码等，n-list 会自动为您处理。当然，您需要通知他如何处理，以及是否有下一页等。

也就是上面写的，`ins.nEndSuccess(ifHasNextPage)` 以及 `ins.nEndError()`。刷新或者加载成功/失败都需要调用相应的接口，以便 `n-list` 能够正确的为您处理业务。

**@inited**

有时候，您需要一个时机，这个时机是 n-list 已经准备好了的时候。我们为您提供了 `@inited` 事件监听。这说明 n-list 已经准备好了一切，您可以尽情的调用。有时候页面内容的初始化刷新，您可以在此事件的回调中处理。

`@inited` 通知是 晚于 页面的 onLoad 的，也就是 页面 onLoad 之后，我们才能监听到 `@inited` 事件。这对于我们来说很方便，恰好 onLoad 准备好了页面的各种初始化数据环境，比如 上一个页面传过来的 某个 id，我们需要用这个 id 去刷新 列表。

`autoUpdate` 也是一样。

**@scroll**

list 滚动时的 scroll 事件的监听。

