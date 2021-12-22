---
home: true
heroImage: /img/logo.png
actionBtn:
  text: 快速上手
  link: /guide/install/
  type: primary
  size: large
preactionBtn:
  text: WHY nPro
  link: /guide/why/
  type: primary
  ghost: true
  size: large
features:
- title: 规范
  details: 主题/单位可配置，接口/字段命名统一，熟悉一个就是掌握所有！
- title: 灵活
  details: 大量开放的props，可以在快速开发与灵活运用之间自由畅想。
- title: 高效
  details: 针对各端优化。统一的命名规范。越用越快，越用越好。
footerColumn: 4
footerWrap: 
- headline: 生态系统
  items:
  - title: nPro
    link: https://ext.dcloud.net.cn/plugin?id=5169
    details: 基于nvue的全端高级组件与模版库
  - title: mypUI
    link: https://mypui.fekit.cn/
    details: 免费开源的nvue/vue组件集
  - title: Github
    link: https://github.com/wakaryry/mypUI
    details: mypUI代码仓库
- headline: 资源链接
  items:
  - title: mcui
    link: https://mcui.fekit.cn/
  - title: mypUI插件库
    link: https://ext.dcloud.net.cn/plugin?id=2190
- headline: 社区交流
  items:
  - title: nvue社区
    link: https://jq.qq.com/?_wv=1027&k=O9mxkp96
    details: QQ交流群
  - title: 报告 Bug
    link: https://github.com/wakaryry/mypUI
    details: Github issue
- headline: 作者相关
  items:
  - title: 插件市场
    link: https://ext.dcloud.net.cn/plugin?id=2190
    details: uniapp市场
  - title: Github
    link: https://github.com/wakaryry/mypUI
    details: wakaryry
footer: 付费组件库文档 | Copyright © 2021-present 马玉平
---

# 快速上手

<p>&nbsp; </p> 

`nPro`是基于uniapp/weex的一套组件库与工具集，可以**高效且规范**地开发出uniapp支持的各端应用（APP/各家小程序/H5/快应用）。

兼容nvue页面和vue页面。nvue页面对应的app端依托weex编译为原生，具备良好的性能与体验。

`nPro`从学习成本、开发经验，以及记忆成本、性能优化、包体积等多方面考虑，不断优化，已经是一个非常优秀的框架，绝对能为您带来**稳定、高效、规范**的开发体验。

再说，作者经历过 `Objective-c` `swift` `Python` `go` `Javascript` 等多语言开发，前后台都有涉及，绝对有信心和能力维护好一套优秀的组件，也不允许自己使用一套不规范的UI。

`nPro`从nvue开发的规范出发，所有组件都可用于nvue，完全兼容vue，并针对优化。让您一次开发，不仅拥有多端，而且具备更高性能！

<p>&nbsp; </p> 

## 拷贝UI组件

<p>&nbsp; </p> 

直接将`nPro`放在您的uniapp项目根目录下。

<p>&nbsp; </p> 

## 复制UI的静态资源

<p>&nbsp; </p> 

在制作`nPro`的时候，我们用到了3个小小的加载图标。我们放在了组件库`nPro`文件夹下`/_static/ui`中，所以需要拷贝到您自己的项目下（把图标放到您项目中的`/static/ui`下）。

静态文件的路径依然保持和示范项目中一致即可，也就是依然是 `/static/ui` 路径。

<p>&nbsp; </p> 

## 使css生效

<p>&nbsp; </p> 

为了减少包体积和复用，UI内使用了 `全局css` 。您需要在`app.vue`里面引入`nPro`中的 `base.scss`。

也就是：

``` html
<style lang="scss">
	@import '@/nPro/base.scss';
</style>
```

因为使用了 `scss变量`，记得设置 `style` 的 `lang="scss"`。

具体的scss变量的引入以及自定义和规范，请看文档：[主题](/guide/theme) 以及 [设计](/guide/design)。

<p>&nbsp; </p> 

## 配置 `easycom`

<p>&nbsp; </p> 

UI内部使用了`easycom`来帮您自动注册组件，没有用到的组件不会打包。请确认您在项目中开启了`easycom`。

在 `pages.json` 中添加如下代码：

```js
"easycom": {
	"autoscan": true,
	"custom": {
		"^n-(.*)": "@/nPro/n-$1/n-$1.vue" // 匹配nPro内的vue文件
	}
}
```

<p>&nbsp; </p> 

## 定义您的UI主题

<p>&nbsp; </p> 

`nPro`下的`var.scss`是主题`scss变量`定义文件。您可能有订制它的需求。

我们不建议您直接修改`var.scss`，您只需要把`var.scss`中的变量复制粘贴到`uni.scss`中，然后就可以随心所欲的修改变量值了（当然，你不能删除掉 `uni.scss`，不然是会报错的）。

如果主题内定义的变量无法满足您的要求，您还可以在`uni.scss`里面进行添加，然后新增一个相应的`class`文件即可，并在`app.vue`下引入。

关于主题的具体说明与使用，请查阅 [主题](/guide/theme)。

在`uni.scss`中定义了的变量，您可以在项目里的任何地方直接使用，不需要再次引入。

<p>&nbsp; </p> 

## 是否锁定屏幕

<p>&nbsp; </p> 

我们建议您锁定屏幕。

`app.vue`中设置如下：

```js
onLaunch: function() {
	// #ifdef APP-PLUS
	plus.screen.lockOrientation('portrait-primary'); //锁定屏幕
	// #endif
}
```

`pages.json`中可以设置 `globalStyle`：

```json
"globalStyle": {
	"pageOrientation": "portrait"
}
```

<p>&nbsp; </p> 

## 现在开始愉快的使用吧

<p>&nbsp; </p> 

自由且无需手动导入`nPro`的使用方式，正式开始。

祝您使用愉快。

> 如果在使用的过程中，您发现有任何不如意或者bug存在，敬请联系我们，或者给出您的宝贵意见。当然，您也可以给出您的实现方式。或者给我们提一个 [pr](https://github.com/wakaryry/mypUI)

<p>&nbsp; </p> 

## 找到代码与我们

<p>&nbsp; </p> 

- [nPro](https://ext.dcloud.net.cn/plugin?id=5169) uniapp插件市场，欢迎好评与star

- [nPro-文档](https://npro.redou.vip)

- [mypUI-github](https://github.com/wakaryry/mypUI) 欢迎star

- [mypUI-uniapp插件市场](https://ext.dcloud.net.cn/plugin?id=2190) 需要您的好评

- [mypUI-文档开源](https://github.com/wakaryry/mypui-doc)

- [mypUI-文档地址](https://mypui.fekit.cn)

- mypUI npm地址：[https://www.npmjs.com/package/@mypui/myp-ui](https://www.npmjs.com/package/@mypui/myp-ui)

- 购买`nPro`联系作者wx：`pptpdf`

- 作者qq：`382006503`

- 欢迎加入wx群和qq群。wx群请加wx，qq群请加qq群号：`306797275`

> 强烈建议加入wx与qq群，获取更多`nPro`的动态与帮助

<p>&nbsp; </p> 

## 快速体验

<p>&nbsp; </p> 

> 想了解我们是怎么使用`nPro`的吗？又如何对`nPro`有一个更加全面的了解？或者说站在一个代码设计者的角度去了解`nPro`? 纵观全局，对你更加高效的使用`nPro`非常有用。建议您一定要看看。

<a href="/guide/global"><a-button type="primary" size="large">全局视角了解mypUI</a-button></a>

<p>&nbsp; </p> 

您可以配合`nPro`的示范代码来做更加深入的理解。

<p>&nbsp; </p> 

## 赞助

<p>&nbsp; </p> 

<p>如果您觉得nPro对您的帮助很大，极大的节省了您的时间和成本，或者您的项目有了不错的收入，您可以考虑赞助一下作者：</p>

### 一次性赞助

<p>&nbsp; </p> 

<div style="display:flex;flex-direction:row;flex-wrap:wrap;">
	<img src="/img/pay_ali_68.png" style="width:300px;height:400px;"></img>
	<img src="/img/pay_wx_68.png" style="width:300px;height:400px;"></img>
</div>

### 周期性赞助

周期性赞助可以获得额外的回报，比如你的名字会出现在nPro赞助者名单中，再比如你的公司logo，或者项目链接会出现在我们的官网上。

如果你是企业经营者并且将nPro用在商业产品中，那么赞助nPro有商业上的益处：可以让你的产品所依赖的框架保持健康并得到积极的维护，也能帮助你在nPro/uniapp社区里获得更高的曝光度。

如果你是个人开发者并且享受nPro带来的高开发效率，可以用捐助来表示你的谢意 —— 就好像偶尔给我买杯咖啡 :)

<p>&nbsp; </p> 

<Msg />
