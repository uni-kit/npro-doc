---
title: height 高度盒子
type: guide
---

# height

<div class="demo-box">
	<iframe scrolling="auto" frameborder="0" src="http://www.redou.vip/npro/#/pages/box/height" class="demo-box-iframe"></iframe>
</div>

便捷的高度盒子。

```html
<n-height height="status-nav-32rpx"></n-height>
```

## Props

| Prop name | Description                | Type   | Values | Default  |
| --------- | -------------------------- | ------ | ------ | -------- |
| flex      | 布局方式                   | string | -      | 'column' |
| justify   | justify 主题               |        | -      |          |
| align     | align 主题                 |        | -      |          |
| bgType    | 背景主题                   | string | -      | ''       |
| border    | 边框主题                   | string | -      | ''       |
| radius    | 圆角主题                   | string | -      | ''       |
| height    | 链式高度：status-nav-32rpx | string | -      | '0'      |
| boxStyle  | 外层样式                   | string | -      | ''       |

## Slots

| Name    | Description | Bindings |
| ------- | ----------- | -------- |
| default |             |          |

---

## 为什么引入一些高度计算

在uniapp开发中，对于nvue-app，我们都是直接使用flex布局来决策子组件的高度。

但是在其他端，在自定义组件下，利用flex布局决策子组件的高度时有问题，尤其是在小程序上。

而且在nvue-app下，复杂的组件，我们也难免会需要直接使用固定的高度。

这个时候，我们难免会用到一些与高度相关的值。比如：屏幕高度、窗口高度、状态栏高度、底部安全区高度等。

正常情况下，我们可以有几个选择：

- 非nvue-app下，我们可以利用css的`calc`函数来实现，比如：`height:calc(100%-100rpx);`但是在nvue-app端，百分比高度是不支持的；
- 非nvue-app下，我们可以使用css变量`--status-bar-height`、`--window-top`、`--window-bottom`等。具体为：[css变量](https://uniapp.dcloud.io/frame?id=css%e5%8f%98%e9%87%8f)；
- 对于安全区的适配，非nvue-app页面可以使用css常量`constant(safe-area-inset-bottom)`、`env(safe-area-inset-bottom)`等来适配，比如：`padding-bottom: constant(safe-area-inset-bottom);padding-bottom: env(safe-area-inset-bottom); `。但是`nvue-app`下不支持。[css常量](https://ask.dcloud.net.cn/article/35564)；
- 直接使用一些高度值来控制某个盒子的高度。比如：`:style="{height: statusbarHeight+'px'}"`；

我们这里，为了方便您各端统一使用，减少差异配置，给出了各种可能需要用到的高度。其他方法自己可以灵活选择。

具体代码与可用函数在`utils/system.js`下。

## 屏幕高度：getScreenHeight

- 屏幕的高度，您可以直接通过`getScreenHeight`方法获取到；
- 该高度也会缓存进入`app.globalData`，它会根据需要获取高度或者拉取缓存；

## 可用窗口高度：getWindowHeight

- 页面可用窗口（内容可见区域（不包含系统自带的状态栏、导航栏和tabbar））的高度，不同的页面可能会不一样；
- 我们没有主动缓存该高度，用户可以自行缓存：`app.globalData.windowHeight = 500`；
- 如果您缓存窗口高度，希望您能知道什么时候这个高度是对的/可用的，什么时候需要重新拉取获取窗口高度；
- `getWindowHeight`方法默认每次都是重新拉取`systemInfo`，如果您需要缓存请自行缓存，缓存之后该方法会直接获取缓存；
- 还提供了`getWindowHeightAsync`方法来异步获取窗口高度，`Promise`封装；

```js
getWindowHeightAsync.then(h => {
	// do your logic here
	// h is the window height
}).catch(err => {
	
})
```

## 状态栏高度：getStatusBarHeight

- 状态栏的高度，也就是安全区的topInset，通过`getStatusBarHeight`获取；
- 该高度会缓存进入`app.globalData.statusBarHeight`；

## 导航栏的高度：getNavBarHeight

- 我们默认导航栏高度是`44px`，如果您需要覆盖该值，请在`app.globalData.navBarHeight`下设置，比如：`app.globalData.navBarHeight = 44`；
- 在自定义导航栏的时候，我们需要用到这个高度来进行一些辅助高度决策，比如自定义导航栏下，我们计算剩下的页面窗口的高度；
- 如果您需要用到这个值，而且它不是`44px`，请自行在`app.globalData`下设置`navBarHeight`；
- 在使用原生导航栏的时候，我们一般不会用到这个值，原生导航栏我们一般使用`windowHeight`来做决策，这样不需要使用导航栏高度；

## tabbar的高度：getTabBarHeight

- 默认这个高度是0；
- tabbar的高度默认不会进行缓存，我们也很难在组件库里面计算得到，而且也不应该由我们计算得到；
- 不同的小程序tabbar的高度可能是不一样的，所以如果您需要这个实际高度，请根据自己的tabbar的页面实际设计情况进行获取；
- 自定义的tabbar一般设置为`50px`高度，`nvue-app`自带的tabbar默认也是`50px`高度；
- 该值只在tabbar页面使用，一般用不到这个值，需要自己先计算得到，然后缓存进入`app.globalData`的`tabBarHeight`下，不缓存就是0；

## 底部安全区的高度：getXBarHeight

- 仅仅在iOS下该高度可能不为0；
- 底部安全区的高度，会自动帮您计算和缓存，可以通过`getXBarHeight`获取；
- 会自动缓存到`app.globalData`下的`xBarHeight`中；
- nvue-app下，安全区的高度css变量/常量不可用，所以直接使用高度盒子来替代css变量/常量；

## 总结

其实，我们需要使用的高度，上面都有帮您处理或者告诉您如何处理。总结如下：

- 屏幕高度是固定的，为您进行了缓存：`getScreenHeight`、`app.globalData.screenHeight`；
- 窗口高度是变化的，不会自动缓存，如果您没有手动缓存，每次都会重新获取系统信息，您可以根据实际项目情况缓存：`getWindowHeight`、`app.globalData.windowHeight`；
- 状态栏高度是固定的，为您进行了缓存：`getStatusBarHeight`、`app.globalData.statusBarHeight`；
- 导航栏高度默认缓存了`44px`：`getNavBarHeight`、`app.globalData.navBarHeight`。非自定义模式下，一般不需要用到这个高度，自定义导航栏的时候，请设置自己自定义的高度；
- tabbar的高度默认是0：`getTabBarHeight`、`app.globalData.tabBarHeight`。原生情况下一般不需要使用这个高度，自定义情况下，请自行设置合适的值；
- 底部安全区的高度是固定的，一般是`34px`或者`0`，我们为您自动获取：`getXBarHeight`、`app.globalData.xBarHeight`；

## 规则与示范

一个内容的高度再怎么变化，无非也就是这些单独的高度，或者这些高度的组合。您可以根据自己的页面`设计/选择`来使用不同的组合来`决策高度`。

我们提供了`getHeight`方法来辅助计算，对应规则如下：

- screen：`getScreenHeight`；
- window：`getWindowHeight`；
- status：`getStatusBarHeight`；
- nav：`getNavBarHeight`；
- tab：`getTabBarHeight`；
- x：`getXBarHeight`；
- 支持组合，`-`相接。比如：`status-nav`表示`状态栏高度 + 导航栏高度`；
- 支持符号，`!`表示减去。比如：`screen-!status-!nav`表示`屏幕高度 - 状态栏高度 - 导航栏高度`；
- 里面还内置了一个`rpx->px`的转换函数：`getPx`；
- `getPx`接受一个字符串或者数值，不带单位默认为`rpx`；

`screen-!status-!nav-!50px-!x-!120rpx`代表：`屏幕高度 - 状态栏高度 - 导航栏高度 - 50px - 底部安全区 - 120rpx`。

`x-120rpx`代表：`底部安全区 + 120rpx`。

大部分需要灵活设置高度的组件，我们都开放了`height`变量（一般nvue-app下不开放，直接使用flex布局实现）。

我们还提供了一个`n-height`组件来配合使用：

```html
<n-height height="status-nav-32rpx"></n-height>
```
