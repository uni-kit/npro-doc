---
title: tabs-v 竖向tabs
---

# tabs-v

<div class="demo-box">
	<iframe scrolling="auto" frameborder="0" src="https://npro.redou.vip/h5/#/pages/nav/tabs-v" class="demo-box-iframe"></iframe>
</div>

tabs-v是竖向的tabs切换。

```html
<n-tabs-v :value="currentV" :items="tabs1" :delay="50" bgType="inverse" width="90rpx" space="0" scrollSize="400rpx" indicatorType="error" itemStyle="padding-left:18rpx;" @change="toChangeV"></n-tabs-v>
<n-tabs-v :value="currentV" :items="tabs1" :delay="50" bgType="inverse" width="90rpx" space="0" justify="center" scrollSize="400rpx" indicatorType="error" itemStyle="padding-left:18rpx;" @change="toChangeV"></n-tabs-v>
<n-tabs-v :value="currentV" :items="tabs1" :delay="50" bgType="inverse" width="90rpx" space="0" justify="space-between" scrollSize="400rpx" indicatorType="error" itemStyle="padding-left:18rpx;" @change="toChangeV"></n-tabs-v>
<n-tabs-v :value="currentV3" :items="tabs3" :delay="50" bgType="inverse" width="90rpx" space="0" activeType="error" indicatorType="error" scrollSize="400rpx" itemStyle="padding-left:18rpx;" @change="toChangeV3"></n-tabs-v>
<n-tabs-v :value="currentV4" :items="tabs4" :delay="50" bgType="inverse" width="180rpx" space="0" activeType="warning" indicatorType="warning" scrollSize="400rpx" itemStyle="padding-left:18rpx;" @change="toChangeV4"></n-tabs-v>
```

```js
{
	tabs1: ['我的','你的','Ta的'],
	tabs3: ['一起','努力','加油','奋斗','争取','美好','未来','共建','幸福','家园','享受','快乐','人生'],
	tabs4: ['我们','一起','把家还','好吗','可不可以','要不要得','好的','收到','同意']
}
```

![tabs-v](/img/coms/tabs-v.jpg)
![tabs-v](/img/coms/tabs-v1.jpg)

## Props

| Prop name       | Description                                                                                                                                            | Type    | Values | Default      |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- | ------ | ------------ |
| items           | tabs 内容                                                                                                                                              | array   | -      | []           |
| value           | 当前 index                                                                                                                                             | number  | -      | 0            |
| textLabel       | 文字内容的字段                                                                                                                                         | string  | -      | null         |
| scrollSize      | scroll 的自定义高度                                                                                                                                    | string  | -      | '750rpx'     |
| justify         | center 或者 end 的时候，请注意 items 的数量不要超过总尺寸                                                                                              | string  | -      | 'flex-start' |
| textSize        | 文字尺寸主题                                                                                                                                           | string  | -      | ''           |
| activeTextSize  | 当前项文字尺寸主题                                                                                                                                     | string  | -      | ''           |
| bgType          | 背景主题                                                                                                                                               | string  | -      | ''           |
| textType        | 文字颜色主题                                                                                                                                           | string  | -      | ''           |
| activeTextType  | 当前项文字颜色主题                                                                                                                                     | string  | -      | ''           |
| height          | tab 项的自定义高度。0 的时候，自适应高度                                                                                                               | string  | -      | '80rpx'      |
| width           | tab 项的自定义宽度                                                                                                                                     | string  | -      | '120rpx'     |
| top             | 顶部空白占位                                                                                                                                           | string  | -      | '0'          |
| bottom          | 底部空白占位                                                                                                                                           | string  | -      | '0'          |
| animated        | indicator 移动时是否有动画效果                                                                                                                         | boolean | -      | true         |
| hasIndicator    | 是否有指示器                                                                                                                                           | boolean | -      | true         |
| indicatorType   | 指示器背景主题                                                                                                                                         | string  | -      | ''           |
| indicatorWidth  | 指示器自定义宽度                                                                                                                                       | string  | -      | '5rpx'       |
| indicatorHeight | 指示器自定义高度。0 的时候动态高度，自适应高度                                                                                                         | string  | -      | '40rpx'      |
| indicatorRadius | 指示器自定义圆角                                                                                                                                       | string  | -      | '4rpx'       |
| indicatorLeft   | 指示器与左侧的距离                                                                                                                                     | string  | -      | '6rpx'       |
| boxStyle        | 外层样式。也是 scroll 的样式                                                                                                                           | string  | -      | ''           |
| textStyle       | 文字样式                                                                                                                                               | string  | -      | ''           |
| activeTextStyle | 当前项的文字样式                                                                                                                                       | string  | -      | ''           |
| itemStyle       | tab 项的样式                                                                                                                                           | string  | -      | ''           |
| activeItemStyle | 当前 tab 项的样式                                                                                                                                      | string  | -      | ''           |
| indicatorStyle  | 指示器的样式                                                                                                                                           | string  | -      | ''           |
| updateTime      | 通过改变该值触发位置的重新计算。<br>主要是为了兼容各大平台位置获取的时机问题。<br>在弹层里面，items 能够很快拿到，<br>但是不一定位置信息就可以立马拿到 | number  | -      | 0            |
| delay           | 延迟获取元素内容，<br>只影响 mounted 里面的调用，<br>-1 表示不延迟。<br>其他情况使用 updateTime                                                        | number  | -      | -1           |
| updateDelay     | 延迟获取元素内容，<br>只影响 items 改变时的调用，<br>-1 表示不延迟。<br>其他情况使用 updateTime                                                        | number  | -      | -1           |
| hoverTop        | indicator 是否在最上层                                                                                                                                 | boolean | -      | false        |

## Events

| Event name | Properties | Description |
| ---------- | ---------- | ----------- |
| change     |            |

## Slots

| Name      | Description | Bindings |
| --------- | ----------- | -------- |
| indicator |             |          |

---
