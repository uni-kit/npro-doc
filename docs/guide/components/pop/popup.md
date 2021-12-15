---
title: popup 弹窗
---

# popup

<div class="demo-box">
	<iframe scrolling="auto" frameborder="0" src="https://npro.redou.vip/h5/#/pages/pop/popup" class="demo-box-iframe"></iframe>
</div>

最为优秀的弹窗组件。适应能力极强。

- actionsheet；
- modal；
- picker；
- 筛选；
- popover；
- ...

各种效果都是通过popup来实现。

根据业务需求，我们还设计来一个兄弟popup-always。popup内容受v-if控制，打开一次，内容渲染一次。popup-always内容只会渲染一次，不管打开多少次。

主要属性有：

- pos，`top` `left` `bottom` `right` `top-center` `left-center` `bottom-center` `right-center` `center` `scale-center`；
- height，内容高度（当然可以自适应内容高度：全屏高度，然后利用flex布局来排布内容即可）；
- width，内容宽度；
- show，通过show来控制打开与关闭。初始化的时候必须为false；

```html
<template>
	<n-popup :show="show" pos="top" width="750rpx" height="660rpx" @overlayClicked="toCancel">
		<view class="tp">
			<image class="tp-logo" src="/static/logo.png" mode="aspectFill"></image>
			<text class="tp-title">nPro</text>
			<text class="tp-sign">傲来雾,花果香,定海一棒万妖朝。东海外,水帘中,齐天比高仙折腰。素衣着,泪情诗,待你未归人潮逝。初相识,唇上血,千古第一为红颜。</text>
			<view class="tp-pay">
				<n-button bgType="primary" text="打赏" textType="inverse" border="none" radius="ll" boxStyle="width:420rpx;" @buttonClicked="toPay"></n-button>
			</view>
		</view>
	</n-popup>
</template>

<script>
	export default {
		props: {
			show: {
				type: Boolean,
				default: false
			}
		},
		methods: {
			toCancel() {
				this.$emit("cancel")
			},
			toPay() {
				this.$emit("pay")
			}
		}
	}
</script>
```

![popup-top](/img/coms/popup-top.jpg)

```html
<template>
	<n-popup :show="show" pos="center" :leftOffset="leftOffset" :bottomOffset="bottomOffset" :topOffset="topOffset" width="600rpx" height="520rpx" @overlayClicked="toStop">
		<view class="cp">
			<view class="cp-token"></view>
			<view class="cp-body">
				<text class="cp-title">欢迎使用nPro</text>
				<view class="cp-contact">
					<view class="cp-item">
						<n-icon name="wechat"></n-icon>
						<text class="cp-item-text">pptpdf</text>
						<n-icon name="copy" @iconClicked="toCopy('pptpdf')"></n-icon>
					</view>
					<view class="cp-item">
						<n-icon name="qq"></n-icon>
						<text class="cp-item-text">382006503</text>
						<n-icon name="copy" @iconClicked="toCopy('382006503')"></n-icon>
					</view>
				</view>
				<text class="cp-sign">其实坚持而且认真地去做一件事，是会获得掌声和金钱回报的</text>
			</view>
			<image class="cp-logo" src="/static/logo.png" mode="aspectFill"></image>
			<view class="cp-action">
				<n-button bgType="error" textType="inverse" border="none" radius="ll" text="下次再来" height="base" boxStyle="width:320rpx;" @buttonClicked="toCancel"></n-button>
			</view>
		</view>
	</n-popup>
</template>

<script>
	export default {
		props: {
			show: {
				type: Boolean,
				default: false
			},
			leftOffset: {
				type: String,
				default: '-1'
			},
			topOffset: {
				type: String,
				default: '-1'
			},
			bottomOffset: {
				type: String,
				default: '-1'
			}
		},
		methods: {
			toCancel() {
				this.$emit("cancel")
			},
			toStop() {
				
			},
			toCopy(val) {
				uni.setClipboardData({
					data: val
				})
			}
		}
	}
</script>
```

![popup-scale](/img/coms/popup-scale.jpg)

## Props

| Prop name    | Description                | Type    | Values | Default                                                                                                                     |
| ------------ | -------------------------- | ------- | ------ | --------------------------------------------------------------------------------------------------------------------------- |
| show         | 是否显示/打开              | boolean | -      | false                                                                                                                       |
| pos          | 定位位置                   | string  | -      | 'bottom'                                                                                                                    |
| bgType       | 背景主题                   | string  | -      | ''                                                                                                                          |
| duration     | 动画周期                   | number  | -      | 300                                                                                                                         |
| hasOverlay   | 是否有 overlay             | boolean | -      | true                                                                                                                        |
| overlay      | 遮罩层设置                 | object  | -      | <br> hasAnimation: true,<br> timingFunction: ['ease-in', 'ease-out'],<br> duration: 300,<br> bg: '',<br> bgType: 'mask'<br> |
| animation    | 动画函数                   | object  | -      | <br> timingFunction: 'ease-out'<br>                                                                                         |
| baseWidth    | 基准宽度                   | string  | -      | '750rpx'                                                                                                                    |
| baseHeight   | 基准高度                   | string  | -      | 'window'                                                                                                                    |
| width        | 自定义宽度                 | string  | -      | '750rpx'                                                                                                                    |
| height       | 自定义高度                 | string  | -      | '0'                                                                                                                         |
| leftOffset   | 内容与屏幕左侧的偏移量     | string  | -      | '-1'                                                                                                                        |
| rightOffset  | 内容与屏幕右侧的偏移量     | string  | -      | '-1'                                                                                                                        |
| bottomOffset | 内容与屏幕底部的偏移量     | string  | -      | '-1'                                                                                                                        |
| topOffset    | 内容与屏幕顶部的偏移量     | string  | -      | '-1'                                                                                                                        |
| left         | 遮罩与屏幕左侧的偏移量     | string  | -      | '0'                                                                                                                         |
| top          | 遮罩与屏幕顶部的偏移量     | string  | -      | '0'                                                                                                                         |
| right        | 遮罩与屏幕右侧的偏移量     | string  | -      | '0'                                                                                                                         |
| bottom       | 遮罩与屏幕底部的偏移量     | string  | -      | '0'                                                                                                                         |
| delay        | 确保存在动画<br>需要加延时 | number  | -      | 10                                                                                                                          |
| boxStyle     | 内容外层样式               | string  | -      | ''                                                                                                                          |
| overlayStyle | overlay 的外层样式         | string  | -      | ''                                                                                                                          |

## Events

| Event name     | Properties | Description |
| -------------- | ---------- | ----------- |
| overlayClicked |            |

## Slots

| Name    | Description | Bindings |
| ------- | ----------- | -------- |
| default |             |          |

---

# 说明

popup 组件主要用于各种弹窗，它具备良好的动画效果，是个极为优秀的组件。

主要特性如下：

- 支持上下左右中等各个位置出现；
- 支持从各个位置出现然后居中屏幕；
- 直接居中时，支持透明度以及scale；
- 支持遮罩层以及遮罩层的动画；
- 支持遮罩层距离各边界的距离；
- 支持弹窗内容设置offset；
- 支持偏移量设置实现各种效果；
- 支持作为popover使用；

> popup算最优秀的弹窗组件。在应用内可以实现各种弹窗效果。popup-always属于此组件的另一个版本，两者属性几乎一致。唯一不同的是，popup-always内的内容是不受v-if控制的，一直存在，所以支持 standout 特性，也就是允许在收起的时候还能对外露出一小截。

popup 主要用于：

- 弹层，内容弹层，全屏弹层；
- actionsheet；
- modal；
- filter弹层（筛选类组件）；
- picker弹层（弹出picker类组件）；
- ...等任何需要弹出在普通视图层之上的视图；

## 快速使用

```html
<template>
  <n-popup :show="show" pos="bottom" width="600rpx" height="x-800rpx" @overlayClicked="toCancel">
    <view>
	  <!-- 您的弹层内容 -->
	</view>
  </n-popup>
</template>

<script>
  export default {
	  props: {
		  show: {
			  type: Boolean,
			  default: false
		  }
	  },
	  methods: {
		  toCancel() {
			  this.$emit("cancel")
		  }
	  }
  }
</script>
```

popup 是受 `show` 属性控制 打开/关闭 的，默认 `show` 是 `false`（默认 `:show="true"` 是不会弹出内容的，因为内部采用的是对 show 的 watch）。

- show 控制开关，不支持通过 ref 来开关；
- pos 设置出现以及消失的位置，当前只支持从哪里出现，便从哪里消失；
- width 是内容的宽度，默认是 全屏宽度 750rpx。允许带单位与不带单位，支持 rpx/px，不带单位默认为 rpx；
- height 是内容的高度，默认是 全屏高度，也就是height的设置为0。允许带单位与不带单位，支持 rpx/px，不带单位默认为 rpx。支持 描述性的写法，比如 `x-600rpx` 表示 xBar的高度+600rpx的高度；
- @overlayClicked 为遮罩层点击的回调，您可以什么都不做，也可以通知程序关闭弹层；

> 使用 popup 类组件，主要需要知道两个方面，一个是 内容宽高的设置；另外就是 内容位置的调整。下面，我们继续为您讲解

### show

show 控制 popup 的打开/关闭。必须初始化为 false。不提供 ref methods，你必须通过 控制 show 来控制 打开与关闭。

```html
<sex-pop :show="sexVisible" @cancel="toHideSex"></sex-pop>
```

```js
data() {
	return {
		sexVisible: false
	}
},
methods: {
	toShowSex() {
		this.sexVisible = true
	},
	toHideSex() {
		this.sexVisible = false
	}
}
```

> 更多代码应该查看 nPro 的demo

### @overlayClicked

点击遮罩层的监听。

## 内容宽高

popup 组件需要您为它提供固定的宽度和高度。默认是 750rpx 宽 和 整个屏幕高。也就是 默认占满全屏。

我们通过 width 设置宽度。通过 height 来控制高度。

### width

popup 内容区的宽度。width 的值不仅仅只是一个宽度，它还会辅助帮助水平方向上的定位。比如 宽度是 600rpx，默认居中，那它自动可以知道 距离某一侧 75rpx。

width 也可以是 0。这个时候他会 自动减去 overlay 与边界的距离，以及 内容区的偏移量设置。（想知道 边界距离 与 偏移量的意思？请看下面文档：[top/left等](#top-left等)）

width 可以带单位，可以不带单位，不带单位默认为 rpx。

### height

height 默认是 0，也就是 整个屏幕高度。可以设置 0-1 之间，也就是 屏幕高度的百分比。0 与1 都表示整个屏幕高度。height和width一样，也会辅助定位。

height 可以带单位，可以不带单位，不带单位默认为 rpx。还可以多段拼接：`x-600rpx-16px`。

关于 语意化 的 字符串，我们有：`status` `x` `nav`，分别表示 `状态栏的高度` `xBar的高度` 和 `导航栏的高度`。

## 内容位置

知道内容 宽高 的设置规则了，现在就应该是 内容位置 的决策了。

一个 弹层，其内容位置主要有：

- 从哪里出现，到哪里停止（也就是 出现位置 和 最终的定位）；
- 遮罩层的位置，以及宽高（也就是 遮罩层与 边界 的距离）；

`pos` `top` `left` `bottom` `right` `topOffset` `leftOffset` `bottomOffset` `rightOffset` 绝对是最佳助手。

### pos

pos 决定了 它从哪里出现，从哪里退出。

可以取的值有：`top` `left` `bottom` `right` `top-center` `left-center` `bottom-center` `right-center` `center` `scale-center`。

center 表示直接出现在 中间，有 opacity 过渡效果。scale-center 是 scale效果。具体看 代码示范。

left-center 之类的就是 从left出来，然后到中间停止。其实就是 left 等的快速设置。

### top/left等

这个 top/left/bottom/right 不是 pos 的意思。而是 遮罩层（overlay）与 屏幕边界的距离，默认遮罩层是全屏的。

top/left/bottom/right 默认都是 `0`，也就是 遮罩层全屏。单位随意。

### topOffset/leftOffset等

上面我们定义了 遮罩层的位置，有时候我们还需要 内容区离遮罩层 有一个 距离。我们通过 topOffset/leftOffset/bottomOffset/rightOffset 来做设置。他们表示的就是 内容区与遮罩层 的距离。

topOffset/leftOffset/bottomOffset/rightOffset 默认都是 `-1`，也就是 内容区 默认居中。

> 我们从某一个方向举例来做理解：

假如我们 从 手机屏幕顶部 出现弹层（pos="top")。这时候就 只有 leftOffset rightOffset 和 topOffset 生效（bottomOffset是不生效的。当然，这个时候如果 leftOffset 和 rightOffset 同时都设置了的话，也只能有一个生效，默认是 leftOffset，毕竟还有宽度在做限制，不太可能同时去满足两边的 offset）。

leftOffset 设置为 0，它在左侧的定位就是 紧挨着 overlay 的左侧，不会再自动居中。topOffset 设置为 100px，它就会在距离 overlay 顶部 100px 的时候停住，不会再自动居中。（具体看 demo代码 或者 自己手动实验）

> 总之，offset类 的属性 是 遮罩层 与 内容区 之间的 间距。有这个东西之后，我们可以很轻松的实现，某个弹层在居中的基础上往 上/下/左/右 偏移一部分。

## 遮罩层

遮罩层除了 top/left/bottom/right 的设置外，还有一个 overlay 属性。

### overlay

```js
overlay: {
	type: Object,
	default: () => ({
		hasAnimation: true,
		timingFunction: ['ease-in', 'ease-out'],
		duration: 300,
		bg: '',
		bgType: 'mask'
	})
}
```

遮罩层 默认是具备 opacity的动画特性的，周期是 300ms，具备一个 mask 主题背景色。出现时 ease-in 动画，隐藏时 ease-out 动画效果。bg 接受一个有效的css颜色值，比如：`#F1F1F1` 这种。

这些都可以再重新设置。

## 动画效果

可以自定义 打开/关闭 动画的周期，以及 动画的 timing-function。通过 `duration` 和 `animation` 配置。

### duration

默认 duration 是 300ms。Number 类型。

### animation

animation 是一个 Object，不过目前只支持 timingFunction。而且 打开/关闭 动画一样。

```js
animation: {
	type: Object,
	default: () => ({
		timingFunction: 'ease-in-out'
	})
}
```

## 事件

### @overlayClicked

遮罩层被点击的监听。比如您可以处理 点击遮罩层 通知 程序来关闭 popup。

## 插槽

默认插槽。

## 其它props

### bgType

可以为 内容区 设置一个 默认的主题背景色。比如：`page`  `inverse`  `primary` 等。

### boxStyle

内容区盒子的私有化 style 配置。

## 更多

我们对默认插槽有一个 `flex-direction: column;` 的设置，所以 在内容区，您完全可以使用 `flex:1;` 来获得高度。

比如：

```html
<n-popup :show="show" pos="bottom">
  <view style="flex:1;"></view>
</n-popup>
```

默认插槽内的那个 view 就可以直接获得 整个屏幕的高度（获得n-popup内容区height的高度。刚好默认是 整个屏幕高度）。
