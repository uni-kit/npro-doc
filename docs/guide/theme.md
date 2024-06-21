---
title: 主题配置
type: guide
order: 4
---

# 主题配置

<div class="demo-box">
	<iframe scrolling="auto" frameborder="0" src="http://www.redou.vip/npro/" class="demo-box-iframe"></iframe>
</div>

nPro是基于主题配置的组件库，在快速配置与开发的同时，给予了您足够便捷的个性化定制能力，你可以随意增加与覆盖/自定义主题。

这是nPro的核心内容。也是我们的设计亮点。正是基于这个设计，我们拥有了更多强大的能力：

- 代码规范，便于协同合作；
- 轻松实现各种主题，一键换肤等；
- 更加规范与语意化的css样式集，代码更加直白易懂；
- 使用起来得心应手，越用越快；

了解nPro的主题配置是非常有用的：

- 1. 加快您熟悉nPro；
- 2. 知道具备哪些可配置项；
- 3. 熟悉base.scss中可用的class，更加快速的使用公共样式，代码更加直白易懂；
- 4. 提供了一个组件库比较成熟的主题变量；
- 5. 如何缩小代码包体积；

## 首先说下主题/样式与组件的关系

- 主题`var.scss`决定了某类样式下拥有的具体样式`base.scss`，比如颜色样式：`n-color-`，我们定义了基础主题颜色以及文字颜色等颜色，这些颜色值就构成了`n-color-`样式的具体值，比如：`n-color-primary`, `n-color-second`等；
- 这些样式都作为公共样式，提供给组件以及页面使用，建议您直接使用这些公共样式来排布您的组件与页面；

我们的组件库使用的是全局共享的样式，也就是我们提供了一个公共的样式库，然后其他组件共享这个样式库，每个组件里面几乎不涉及到私有的样式。

为什么这么做：

- 1. 基于主题的设计，几乎每个组件都需要用到主题变量，共享样式比私有化样式更加节省体积；
- 2. 我们的样式体积本身就很小，微信小程序中，不开启压缩也只有14KB；
- 3. 提供一套语意化的，更加好维护的，易于适配的公共样式库，易于代码易懂，以及团队协作；
- 4. 能够适配更多的可能，比如更好的自定义/覆盖主题，增加主题等；
- 5. 可以拥有多套主题，随时可以切换成不同的主题风格；

主题`var.scss`基本表示着，我们的设计稿中有哪些颜色、尺寸等（一般这些东西都是比较规范的，不会太多，所以我们的主题绝对满足要求）。

我们将常用的css规则，对应上主题，然后就有了`base.scss`这个公共样式库。这个库里面定义了哪个规则下可以使用哪些值，或者哪个规则下可以使用哪些主题。

然后，在我们的组件下，我们为组件属性设置主题的时候，其实就是去设置样式下的值，比如`bgType`，背景色主题，我们对应的`n-bg-`样式。那么我们应该看`n-bg-`下到底有哪些可以用的内容，比如有：`n-bg-primary`, `n-bg-page`等。

然后，我们看`n-bg-primary`、`n-bg-page`他们这些东西到底对应了哪个变量（对应了哪个值）。

这样我们就知道`var.scss`、`base.scss`的关系，以及在组件中是如何使用的了。

接下来，我们主要从以下几个方面来讲主题与主题配置：

- 主题变量`var.scss`的分类与设计；
- 主题变量与`base.scss`的对应，以及`base.scss`的说明；
- 组件中对于主题的一些约定，以及如何使用；
- 各端兼容；
- 如何自定义/覆盖主题变量的值；
- 如何增加主题变量与对应的样式；
- 如何实现换肤功能；

## 主题变量的分类与设计

我们的主题变量的定义都在`var.scss`文件中，主要包含：

- 主题色；
- 特殊色；
- 多级文本色；
- 特殊语意文本色；
- 通用背景色；
- 特殊语意背景色；
- 边框色；
- 边框宽度；
- 高度；
- 字体大小；
- 字体行高；
- 圆角大小；
- 间距；
- 特殊语意下透明度；
- 导航栏相关的主题配置；

具体如下：

```scss
// 
// 主题色：通常一个APP在设计稿上，主题色一般是 3色或者4色，再搭配透明度。过多的色彩不仅混乱，而且不好管理与维护
// 
$n-color-primary: #8F9CFF;  // 主要主题色，通常是设计稿中的主体色彩
$n-color-success: #8FDAFF;  // 成功主题色，通常用于表征：安全的/通过的/成功的
$n-color-warning: #FFD666;  // 警告主题色，通常用于表征：提示/警告/有风险/需要注意
$n-color-error: #FF9090;  // 错误主题色，通常用于表征：有危险/谨慎操作/错误

//
// 特殊色：有时候我们会碰到一些主题之外的特殊色，我们开放了一个 自定义色彩作为补充，也提供了一个特殊语意的（链接色）
//
$n-color-custom: #4A5061;  // 自定义的主题色，作为补充
$n-color-link: #0273F1;  // 特殊的链接色，有时候文字中的特殊提示可能不是主题色，特殊的链接色可以用来作为特殊的文字提示

//
// 多级文本色：提供四级文本色以及一个反色。反色通常用于深色背景
//
$n-text-color: #333232;  // 一级文本色，也是主要文本色，用于显示与阅读
$n-text-color-inverse: #FFFFFF;  // 反色
$n-text-color-second: #666464;  // 二级文本色，一般用于描述/提示
$n-text-color-third: #999696;  // 三级文本色，辅助色
$n-text-color-forth: #CCC8C8;  // 四级文本色，辅助色

// 
// 特殊语意文本色：提供了 占位字符串以及禁用时的文本颜色
//
$n-text-color-place: #CCC8C8;  // 占位符的颜色
$n-text-color-disabled: #CCC8C8;  // 禁用时文本颜色。用得少，一般禁用时使用opacity

//
// 通用背景色：提供了反色、通用页面色、浅色、暗色背景色设置
//
$n-bg-color-inverse: #FFFFFF;  // 反色背景
$n-bg-color-page: #FAFAFA;  // 通用页面背景色
$n-bg-color-light: #F3F4F5;  // 浅色背景色
$n-bg-color-dark: #131318;  // 暗色背景色

//
// 特殊语意背景色：hover时的背景色以及mask的背景色
//
$n-bg-color-hover: #F1F1F1;  // hover时的背景色
$n-bg-color-hover-dark: rgba(0, 0, 0, 0.8);  // hover时的暗色
$n-bg-color-mask: rgba(0, 0, 0, 0.2);  // 浅色遮罩
$n-bg-color-mask-dark: rgba(0, 0, 0, 0.8);  // 暗色遮罩

//
// 边框色：提供了浅/暗主题以及反色
//
$n-border-color: #F7F5F5;  // 通用边框色
$n-border-color-light: #F7F5F5;  // 浅色
$n-border-color-dark: #EBEBEB;  // 暗色
$n-border-color-inverse: #FFFFFF;  // 反色

//
// 边框宽度：方便不同端设置不同的宽度
//
/* #ifdef APP-NVUE */
$n-border-width: 1px;
/* #endif */
/* #ifndef APP-NVUE */
$n-border-width: 1px;
/* #endif */

//
// 高度：五级，s表示small，l表示large，base表示基础/中间。s越多表示越小，l越多表示越大。您还可以添加更多的级别。
//
$n-height-ss: 40rpx;  // ss
$n-height-s: 60rpx;  // s
$n-height-base: 80rpx;  // base
$n-height-l: 100rpx;  // l
$n-height-ll: 120rpx;  // ll

//
// 字体大小：五级，s表示small，l表示large，base表示基础/中间。s越多表示越小，l越多表示越大。您还可以添加更多的级别。
//
$n-font-size-ss: 24rpx;  // ss
$n-font-size-s: 28rpx;  // s
$n-font-size-base: 30rpx;  // base
$n-font-size-l: 32rpx;  // l
$n-font-size-ll: 36rpx;  // ll

//
// 字体行高：五级，s表示small，l表示large，base表示基础/中间。s越多表示越小，l越多表示越大。您还可以添加更多的级别。
//
$n-lh-ss: 34rpx;  // ss
$n-lh-s: 40rpx;  // s
$n-lh-base: 42rpx;  // base
$n-lh-l: 45rpx;  // l
$n-lh-ll: 50rpx;  // ll

//
// 圆角大小：五级，s表示small，l表示large，base表示基础/中间。s越多表示越小，l越多表示越大。您还可以添加更多的级别。
//
$n-border-radius-ss: 4rpx;  // ss
$n-border-radius-s: 6rpx;  // s
$n-border-radius-base: 12rpx;  // base
$n-border-radius-l: 24rpx;  // l
$n-border-radius-ll: 60rpx;  // ll

//
// 上下间距：五级，s表示small，l表示large，base表示基础/中间。s越多表示越小，l越多表示越大。您还可以添加更多的级别。
//
$n-space-ss: 8rpx;  // ss
$n-space-s: 16rpx;  // s
$n-space-base: 24rpx;  // base
$n-space-l: 32rpx;  // l
$n-space-ll: 40rpx;  // ll

//
// 特殊语意下的透明度
//
$n-opacity-disabled: 0.5;  // 禁用时透明度
$n-opacity-hover: 0.5;  // 透明度变化效果的hover

//
// 导航栏相关的主题配置
//
$n-nav-title-color: #000000;  // 导航栏的标题色
$n-nav-title-size: 16px;  // 导航栏标题字体大小
$n-nav-icon-color: #4C4C4C;  // 导航栏item的icon颜色
$n-nav-icon-size: 20px;  // 导航栏item的icon字体大小
$n-nav-item-color: #4C4C4C;  // 导航栏item的文字颜色
$n-nav-item-size: 14px;  // 导航栏item的文字大小
$n-nav-bg-color: #FFFFFF;  // 导航栏的背景色
```

说明：

- 对于主题值里面的单位，rpx还是px，取决于您自己。我们默认提供了rpx单位，您可以使用px单位;
- s表示small（小），l表示large（大）；
- s越多表示越小，l越多表示越大；

## 主题变量`var.scss`与`base.scss`的对应，以及`base.scss`的说明

`base.scss`中定义的class，基本上已经足够支撑大多数应用的设计。

熟悉它里面与主题的对应关系以及有哪些内容，对于快速开发，以及减少css代码的书写，减少包体积来说是十分重要的。

我们的组件库内部依赖全局样式`base.scss`，而且我们的组件里面很少用到别的样式。我们尽量在复用`base.scss`的样式，这对于小程序等需要分包的端来说是比较重要的，能够最大程度减少包体积。

我自己本人也在用`nPro`做项目，我们一直在全方面优化`nPro`。也正是因为我不是为了框架而出框架，我更多的是项目的体验与实战，所以nPro才会真的一直越做越好。

`base.scss`中提供了我们常用的样式：flex布局、背景主题、颜色主题、字体大小主题、行高主题、高度主题、间距主题、文字省略、边框主题、圆角主题、遮罩主题、hover主题等各方面class。

具体的对应关系以及有哪些值，您应该查阅`base.scss`里面的内容。

`base.scss`绝对足够支撑大多数业务与设计，而且我们的组件库就是基于`base.scss`的。我们开发的模版也是基于`base.scss`的。

很多人不知道主题类的设置到底有哪些值，其实具体有哪些值，取决于`base.scss`，以及您是否添加了一些自定义的主题等。

这些设置值对应为：

- flex布局：`n-flex-`；
- flex主轴排版：`n-justify-`；
- flex与主轴垂直的方向排版：`n-align-`；
- flex换行：`n-wrap-`；
- 定位：`n-position-`；
- 100%宽高：`n-full-`；
- 透明度：`n-opacity-`；
- 背景色：`n-bg-`；
- 文字排版：`n-text-align-`；
- 文字颜色：`n-color-`；
- 文字尺寸：`n-size-`；
- 文字重量：`n-weight-`；
- 文字行高：`n-lh-`；
- 文字行数限制：`n-lines-`；
- 高度：`n-height-`；
- 边框：`n-border-`；
- 圆角：`n-radius-`；
- padding：`n-ps-`；
- margin： `n-ms-`；
- overflow：`n-overflow-`；
- hover效果：`n-hover-`；
- 禁用效果：`n-disabled-`；
- ...

具体的内容您应该去看 `base.scss`。您只有了解了主题与样式的对应关系才能更好的使用`nPro`。

我们应该尽可能的使用这些公共样式，而且基本上这以及能满足大多数情况的使用了。

不能满足或者有个性化需求的时候，您应该进一步扩展。

## 组件中对于主题的一些约定

在文档中，主题类的属性，我们都会说明，`xxxx主题`，比如 背景主题 颜色主题 尺寸主题。其它非主题类的，我们会说明为：`样式` 或者 `自定义xxxx`，比如 文字样式 自定义高度 自定义宽度。

在组件里面，您应该已经注意到了，我们的组件中存在：xxx xxxType xxxSize xxxStyle 这些非常规范与统一的属性。

- xxxType: 对应的是背景主题，或者文字颜色主题。背景主题对应 base.scss中的 `n-bg-`，颜色主题对应 base.scss 中的 `n-color-`；

- xxxSize: 对应的尺寸类的主题，具体看对应的属性语意，一般对应：`n-size-`(文字尺寸主题)；

nPro中的设计与命名是非常规范的，你能通过命名知道具体应该属于哪方面的设置。

## 如何自定义主题变量的值

我们不建议您直接修改`var.scss` 以及 `base.scss`。因为这不利于您的升级和维护。

我们建议您直接将`var.scss`中的变量全部复制到 `uni.scss` 中，然后在 `uni.scss` 中修改变量值。

我们内部已经为你做了处理，`uni.scss`中的设置会覆盖掉我们的变量设置。这样就能灵活的自定义变量值啦。

## 如何增加主题变量与样式

我们不建议您直接在`var.scss`以及`base.scss`中增加变量和相关的class。

您应该在`uni.scss`中增加变量，然后增加一个新的对应的class样式文件，比如`extra.scss`，将新增加的变量对应的样式添加进去，然后在`app.vue`里面引入这个样式文件。

## 如何实现换肤功能

现在你已经知道了如何自定义主题，如何添加主题与样式，想必您应该也有想法如何实现换肤了吧。

因为不支持动态的引入css样式，又不能动态的去修改主题变量的值，那么我们就只能再引入一套甚至几套主题了。

然后根据用户的选择动态切换主题就行。

这个时候就需要一个巧妙又合适的设计了。

首先看适配的情况：

```html
<view>
	<n-button bgType="primary" text="我在等你" textType="inverse"></n-button>
	<view class="n-bg-error n-height-base"></view>
	<view class="n-height-base" style="background-color:#F6F7F6;"></view>
	<text class="hi">Say Hi</text>
</view>
<style lang="scss" scoped>
.hi {
	color: #333333;
}
</style>
```

- 1. 组件的属性配置需要适配；
- 2. 自己使用的公共样式需要适配；
- 3. style中的属性需要适配；
- 4. 自定义的私有类需要适配；

怎么搞？

我们默认的主题是：`n-bg-primary`这种，换肤的时候变成`n-bg-primary-xxx`即可。为了防止样式的冲突，我们统一为`n-bg-primary_dark`这样的设置。

也就是我们有一个默认皮肤，然后切换的时候，可以在默认皮肤后面加皮肤主题的变量：比如`_dark`，我们只需要定义了`n-bg-primary_dark`样式即可。

这个时候，我们可以全局引入一个叫做`dark.scss`的公共样式，在他这里面处理皮肤相关的适配即可。而且皮肤的适配并不是要求每一个颜色/背景都要更换的。根据需要即可。

组件以及公共样式适配没有问题了，那么style中的属性怎么适配？

能转换成公共样式的就转一下，不能转的（比如placeholder-style，这里是必须设置style样式的）就只能配合变量来更改主题了。

```js
computed: {
	// 替代具体的颜色值
	styleColor() {
		// colors表示的是所有皮肤下的颜色（放入vuex中），比如：{text: '#333333', text_dark: '#FFFFFF'}
		// theme表示的就是当前的主题/皮肤名字，比如_dark
		return this.colors['text'+this.theme]
	}
}
```

也很好处理，是吧。

最后，自定义的私有类怎么适配？

其实也比较好处理。

要么转换成公共样式，要么增加不同主题的私有类。

```css
.hi_dark {
	color: #FFFFFF;
}
```

整体适配皮肤后如下：

```html
<!-- app.vue下引入 dark.scss -->
<view>
	<n-button bgType="primary" text="我在等你" textType="inverse"></n-button>
	<view :class="['n-bg-error'+theme, 'n-height-base']"></view>
	<view class="n-height-base" :style="'background-color:'+styleColor+';'"></view>
	<text :class="['hi'+theme]">Say Hi</text>
</view>
<script>
	import {mapGetters} from 'vuex'
	export default {
		computed: {
			...mapGetters('theme', 'colors'),
			styleColor() {
				return this.colors['text'+this.theme]
			}
		}
	}
</script>
<style lang="scss" scoped>
.hi {
	color: #333333;
	
	&_dark {
		color: #FFFFFF;
	}
}
</style>
```

其中`dark.scss`:

```css
.n-bg {
	&-error_dark {
		background-color: #FF6060;
	}
}
```

非常简单，工作量也不大。而且如果全部基于主题来做开发的话，工作量更小。

## 各端兼容

我们的样式`base.scss`已经为你处理了各端的兼容情况，如果您自己写全局样式，需要考虑下各端的兼容。如果你直接使用我们的样式，我们已经为你处理了。

需要编译到多端的时候，记得查看兼容平台相应的样式中的优先级。如果需要在样式中个性化，需要考虑优先级问题。

比如H5中：

```html
<style lang="scss">
.n-border {
	&-all {
		border-width: $n-border-width !important;
		border-style: solid !important;
		border-color: $n-border-color !important;
	}
}
</style>
```

因为`h5.scss`中全局样式兼容的时候存在 `!important`，优先级高。所以如果您需要覆盖，记得在自己的样式里面加 `!important`。

为什么会需要添加优先级？

uni会自动嵌入一些样式，这些样式会直接嵌入到组件/页面里面，导致他的优先级很高，而我们的全局样式不得不提高优先级。

当然，局部样式优先级比uni自动嵌入的要高。

```css
/*
// 这是uni自动嵌入的样式，这些样式会直接嵌入到 组件/页面；
// 这些样式的优先级非常高，比任何在 app.vue 里面引入的全局 style/class 也要高，毕竟这些样式是直接在组件文件下的；
// 为了使 全局css 生效，我们 得给涉及到 这些属性的样式 设置 !important；
// 而且，在 style 中个性化配置的时候也需要加 !important，否则无法生效；
*/

view,
swiper-item,
scroll-view {
  display:-webkit-box;
  display:-webkit-flex;
  display:flex;
  -webkit-box-orient:vertical;
  -webkit-box-direction:normal;
  -webkit-flex-direction:column;
          flex-direction:column;
  -webkit-flex-shrink: 0;
          flex-shrink: 0;
  -webkit-box-flex: 0;
  -webkit-flex-grow: 0;
          flex-grow: 0;
  -webkit-flex-basis: auto;
          flex-basis: auto;
  -webkit-box-align: stretch;
  -webkit-align-items: stretch;
          align-items: stretch;
  -webkit-align-content: flex-start;
          align-content: flex-start;
}
view,
image,
input,
scroll-view,
swiper,
swiper-item,
text,
textarea,
video {
  position: relative;
  border: 0px solid #000000;
  box-sizing: border-box;
}
swiper-item {
  position: absolute;
}
```

# 最后

我们提供的公共样式，在未压缩的情况下，在微信小程序中只有14kb。压缩之后可能最终只剩下1-2kb。

如果您还需要进一步减小他的体积，您可以去掉一些您在项目中压根就没有使用到的样式（比如，上下左右四个方向的间距，上下左右四个方向的边框颜色等）。

如何去掉没有用到的样式？

并不是要求你去改我的源文件，而是你自己复制一份我的样式，然后去掉没有用到的样式，直接在app.vue下引入你修改后的样式即可，不需要引入我的样式。

实际上，我们公共样式占用的空间非常小，而且我们的组件下全部复用了这些样式，组件里面几乎没有私有的样式，所以组件也能保持极小的体积，整个组件库能维持很小的体积。

如果您想您的包体积尽量小，您也应该多使用我们提供的公共样式。

最后，我们总结性的说一下：

`var.scss`是我们定义主题变量的地方，根据这些主题变量，以及一些常见的样式，我们做了`base.scss`这个公共样式库。

然后`uni.scss`给我们提供了个性化定义变量值（覆盖我们在`var.scss`中默认的设置值），以及允许我们扩展别的主题变量（需要额外添加对应变量的样式类）。
