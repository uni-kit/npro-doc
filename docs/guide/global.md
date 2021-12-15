---
title: 全局视野
type: guide
order: 3
---

# 全局视野

<div class="demo-box">
	<iframe scrolling="auto" frameborder="0" src="https://npro.redou.vip/h5/" class="demo-box-iframe"></iframe>
</div>

为了让您更加深入的理解nPro，以及更加高效的使用，我们特意从设计者的角度来解读nPro。或者您也可以把这篇全局视野当作是我们建议的最佳实践。希望对您有用。祝您使用愉快。

从全局出发，您需要了解：

- 整套UI依赖的主题规范：[主题配置](/guide/theme)；

- 组件/接口的设计与命名规范：[设计规范](/guide/design)；

- 页面元素与快速构建；

- 层级控制以及overflow在nvue Android下的默认hidden；

主题规范是我们UI内部最重要的内容，你一定要了解我们的UI内部设计，以及主题的意义，和存在哪些可以使用的样式类。

只有熟悉，你才能更加快速的开发。

我们这里讲页面元素与快速构建。

# 页面元素与快速构建

一般页面由导航栏、内容区、tabbar区域、安全区域这些区域构成。

**使用uniapp开发的时候，如果您在内容区使用的list或者scroll，我们建议您一定要禁用掉最外层的scroll或者说是页面滚动效果。**

```json
"pages": [
	{
		"path": "pages/index",
		"style": {
			// 禁用掉最外层的scroll或者页面滚动效果
			"disableScroll": true
		}
	}
]
```

是否需要禁用根据业务需要而定。如果您的内容区是list或者scroll，建议您禁用，否则会有一些滚动上的冲突。

**在app端，我们一般会移除掉系统自带的`navbar`。主要出于以下考虑：**

> - 统一的样式：一个应用难免会自定义 `navbar`；
> - 减少独立的配置，或者说各端差异化的适配。开发方式更加统一与高效：`pages.json`里面的配置其实比较繁琐，过多的配置，反而适得其反，对开发不友好；
> - 更加灵活的页面与元素处理：可以自由的控制 `navbar`的层次以及页面其它元素的层次；
> - 全屏元素可控，可全屏遮挡；

**是否使用自定义的tabbar，根据业务需求与设计稿而定吧：**

> - 某些业务逻辑使得必须使用自定义的`tabbar`：比如一个应用根据用户不同身份进入加载不同个数的`tabbar`；
> - 某些特殊的设计样式；
> - 特殊的动画效果；

在小程序端，如果只开发小程序的话，一般设计稿规范的，不怎么需要自定义navbar。如果是多端同步开发，我们一般会对齐APP端的体验。

> 不过，我建议您别太纠结这些方面，马上去做，去实现，去完成，去赚钱，这些才是最重要的。

**关于是否禁用掉最外层的`scroll-view`**

- 内容区使用list/scroll来做滚动的时候，禁用掉；
- 使用页面滚动不禁用；
- 不允许页面出现滚动，禁用掉；

## 快速构建页面

一个页面，其实就是 `导航`，`内容`，再加上 `交互`。

无非就是几种情况：

- 是否自定义navbar；
- 是否使用页面滚动，或者是否存在内容滚动；
- 是否自定义tabbar；
- 页面生命周期相关，组件生命周期相关；

自定义导航栏和使用list来做内容滚动的页面构建如下：

```html
<template>
	<view>
		<!-- 自定义导航栏。根据情况使用 -->
		<n-navbar title="导航栏标题" :lefts="leftIcons" @leftAction="navLeftAction"></n-navbar>
		<!-- 使用list作为内容滚动 -->
		<n-list :down="null" :up="null">
			<n-list-cell>
				<text>...</text>
			</n-list-cell>
		</n-list>
		<!-- 自定义的正在加载以及toast提示弹窗。可有可无 -->
		<n-loading ref="n-loading"></n-loading>
		<n-toast ref="n-toast"></n-toast>
	</view>
</template>

<script>
	// 自定义导航栏的时候，为了减少重复的返回按钮以及返回事件的书写
	// 这是完全自己可控的，可有可无
	import navHelper from '@/service/navHelper.js'
	
	export default {
		mixins: [navHelper],
		data() {
			return {
			}
		},
		methods: {
		}
	}
</script>

<style lang="scss">
</style>
```

以上代码就完全撑起了一个页面，她具备以下特点：

- 内容区自动铺满整个页面高度，而且可以直接设置内容区的背景色；
- 包含了navbar的返回按钮以及返回动作等（在navHelper这个mixin中，需要根据需要引入，这个不是必须的，也不是框架自带的，我们只是建议这样处理，方便更统一的控制）；
- 包含了toast/loading等交互组件（不是必须的，如果你需要用到自定义的loading和toast的时候可以引入）。

如果你在非APP端使用页面滚动，在APP端使用list，而又只想写一套代码，你可以使用条件编译：

```html
<!-- #ifdef APP-NVUE -->
<n-list :down="null" :up="null">
<!-- #endif -->
	<n-list-cell>
		<text>...</text>
	</n-list-cell>
<!-- #ifdef APP-NVUE -->
</n-list>
<!-- #endif -->
```

一切都是那么的简单干脆。我们不需要关注太多的各端差异配置，我们只管处理好我们自己的内容组件与业务逻辑即可。

然后，在此基础上，我们配合list组件的刷新与加载，搭配上接口，就已经是一个非常完整的内容展示页面了。

这个时候，你可能有疑问：如果在同一个页面，在非APP端使用页面滚动，在APP端使用list滚动，是不是需要两套数据加载/刷新来管理分页？

答案是：同样可以利用list的分页管理。其实你可以给非APP端加一个高度为0的list，这样你只需要用它来做分页状态管理就行了。

```html
<!-- #ifdef APP-NVUE -->
<n-list ref="n-list" @down="toLoadData" @up="toLoadData">
<!-- #endif -->
	<n-list-cell>
		<text>...</text>
	</n-list-cell>
<!-- #ifdef APP-NVUE -->
</n-list>
<!-- #endif -->
<!-- #ifndef APP-NVUE -->
<n-list ref="n-list" height="0" @down="toLoadData" @up="toLoadData"></n-list>
<!-- #endif -->
```

是不是很简单，很方便，也不需要多写什么内容！可以很轻易与轻松、最大程度公用代码的适配各种情况。

有这些支撑之后，甚至，我们可以通过 `几句简短的描述`，就能够自动生成一个 `带接口和数据交互` 的常规页面或者各端存在差异的页面(当然，这还需要我们更多有关自动生成页面的支持)。

比如，我们定义以下内容，就自动生成一个`我的帖子`列表页面：

```json
{
	"navbar": "我的帖子",
	"list": {
		"refresh": true,
		"load": true,
		"cell": "rich-album"
	},
	"api": {
		"name": "getMineAlbums",
		"from": "album.js"
	}
}
```

实际上，一切都很简单。

快速的开发nvue页面，我们只需要熟练以下三个方面：

- 灵活的运用 `页面元素的层级`：比如`navbar`的层级，`popup`等的层级，就可以决定`popup`是遮挡住`navbar`还是不遮挡`navbar`；

- 常规布局内容与绝对/固定定位元素的管理；

- 纯flex布局，在`app-nvue`上是纯flex布局，其他端可以条件使用更多布局与css；

掌握这几个方面，就能随心所欲的利用`nPro`开发出自己想要的页面了。

关于flex布局，我觉得这反而是最容易掌握的一部分，规则比较直白简单，只要你认真看了文档，应该很快可以掌握。

下面我们将重点介绍 `层级控制`。

## 层级控制

在nvue页面中，**app端不支持`z-index`**，元素的层级，受其在页面中的**渲染先后顺序**，以及**定位**有关。

**主要规则如下：**

- 同级组件，按照从上到下的顺序渲染（created是同步的）；
- 如果存在absolute定位，同样也是从上到下的顺序渲染，absolute定位并不会提升他的层级；
- fixed定位的内容，他会出现在其他非fixed定位内容的上面；
- 在nvue-app端注意v-if控制的内容，他出现的位置不一定是固定的（出现问题的时候知道怎么是什么原因就行）；

**案例说明如下：**

比如，你做一个受 `v-if` 控制的`mask`（遮罩层），同时出现的还有受 `v-if` 控制的其它展示内容，这些展示内容要求出现在 `mask` 的上面。

那么你需要保证 `mask` 的 `created` 要先于 `展示内容` 的 `created`。

否则，`mask`层会出现在 `展示内容层` 的上面，从而出现遮挡。详情可以参看我们的 `n-popup` 组件，里面有明确的代码表明，多个 `v-if` 控制的同级组件，如何进行层级控制。

> 如果你的页面/组件出现了层级的问题，请留意各组件created的先后顺序，确保合适的层级.

比如你有几个fixed定位的弹窗，弹窗之上还可以弹出弹窗，这些弹窗内部都是v-if控制的，那么不管这些弹窗在页面代码中的顺序是怎么样的，谁最后展示，谁就出现在最上面（也就是最终出现在你的面前）。

有些人可能很好奇，为什么`nPro`里的`popup`，提供了两份(`popup`、 `popup-always`)。

> 一是，`popup-always`会一直存在于视图中，里面内容只会`created`一次。`popup`内部受`v-if`控制，内部内容以及遮罩层的`created`受`v-if`控制，每次都开都会进行created。
> 由于`popup`里面的定位都是`fixed`，打开的时候就会出现在内容的最上层。
> 为了有层级要求的业务，比如弹出的时候，自定义的`navbar`始终在最上层，我们可以直接使用`popup-always`来弹出内容，代码上只需要保证`navbar`在`popup-always`的下面即可（当然，`navbar`这个时候也需要是`fixed`定位）。
>
> 二是，我们有个时候需要一个组件，她具备`popup`的特性，但是要求收起时，还能露出一小截。`popup-always`就能满足这种特性。

请看下面的代码示范(demo中对应：`/pages/pop/popup-always`)：

```html
<template>
	<view>
		<n-height bgType="inverse" height="status-nav"></n-height>
		<n-list bgType="inverse" :down="null" :up="null">
		</n-list>
		<!-- popup-always1 -->
		<always-top-pop :show="topVisible" @cancel="toHide"></always-top-pop>
		<!-- navbar -->
		<n-navbar :lefts="leftIcons" :isSeize="false" title="弹窗" @leftAction="navLeftAction"></n-navbar>
		<!-- popup-always2 -->
		<always-bottom-pop :show="bottomVisible" @cancel="toHide"></always-bottom-pop>
	</view>
</template>

<script>
	import alwaysBottomPop from './components/alwaysBottomPop.vue'
	import alwaysTopPop from './components/alwaysTopPop.vue'
	
	import navHelper from '@/service/navHelper.js'
	
	export default {
		components: {
			alwaysBottomPop,
			alwaysTopPop
		},
		mixins: [navHelper],
		data() {
			return {
				bottomVisible: false,
				topVisible: false
			}
		},
		methods: {
			toPopBottom() {
				this.bottomVisible = true
			},
			toPopTop() {
				this.topVisible = true
			},
			toHide() {
				this.bottomVisible = false
				this.topVisible = false
			}
		}
	}
</script>

<style>

</style>
```

你知道popup-always1与navbar以及popup-always2他们之间的层级是怎样的吗？

- always1弹出的时候，nabbar总是会在他的上面，他不会遮挡住navbar；
- always2弹出的时候，他会遮挡住navbar；

为什么？

- 他们都是fixed定位，层级受created先后控制；
- 他们都不是v-if控制的，层级直接跟代码上下关系有关；

所以他们的层级有这样的关系。

知道这些之后，我们就可以自由的掌控页面了。我们想让谁出现在最顶层，他就在最上层。想让谁遮住谁，他就能遮住。

nvue-app下，由于在Android下受`overflow:hidden`的限制，我们做一些类似于商品的筛选下拉等效果，就是通过fixed的层级控制来实现的。

absolute定位由于会收到relative盒子大小的影响，我们需要使用fixed定位，使用fixed的定位之后，我们就要合理的控制层级来实现效果了。

只要你知道了这些，或者你有这个概念，不管什么效果，在nvue中，你都知道应该如何去实现。
