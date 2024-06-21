---
title: 多皮肤/换肤
---

# theme

<div class="demo-box">
	<iframe scrolling="auto" frameborder="0" src="http://www.redou.vip/npro/#/pages/theme/index" class="demo-box-iframe"></iframe>
</div>

随着运营的深入，越来越多的APP开始加上换肤功能，或者包含有不同的主题。比如系列的皮肤，或者带节日的气氛。

nPro得益于他的主题式的设计，您可以很轻松的实现换肤功能。

了解换肤之前，您应该已经了解了[主题配置](/guide/theme)。

看完主题配置文档，其实您应该已经知道如何进行多皮肤的制作与换肤。

这里我们再单独讲解一次。

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

这个时候，我们可以全局引入一个叫做`dark.scss`的公共样式，在他这里面处理皮肤相关的适配即可。而且皮肤的适配并不是要求每一个颜色/背景都要更换的。根据需要即可，这个时候加的样式应该不会太多，而且基本上都是颜色相关的。

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

为什么，我们要引入vuex？

- 1. 当前的主题是谁，这个值应该是全局通用且同步的；
- 2. 一些颜色变量值，也是全局通用同步的；
- 3. 我们不只是在适配一个两个页面，而是在适配整个APP；
