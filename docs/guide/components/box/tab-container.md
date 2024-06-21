---
title: tab-container 切换盒子
---

# tab-container

<div class="demo-box">
	<iframe scrolling="auto" frameborder="0" src="http://www.redou.vip/npro/#/pages/box/tab-container" class="demo-box-iframe"></iframe>
</div>

快速切换盒子。非常轻便。

- 不支持手势；
- 不是swiper；

```html
<n-tabs-h :delay="50" :value="current" :items="['登陆','注册']" width="375rpx" indicatorWidth="200rpx" indicatorHeight="6rpx" indicatorStyle="bottom:12rpx;" @change="toChangeTab"></n-tabs-h>
<n-tab-container :current="current" :number="2" width="750rpx">
	<view class="n-bg-success" style="width: 750rpx;height: 600rpx;"></view>
	<view class="n-bg-error" style="width: 750rpx;height: 600rpx;"></view>
</n-tab-container>
```

![tab-container](/img/coms/tab-container.jpg)

## Props

| Prop name      | Description  | Type    | Values | Default                                |
| -------------- | ------------ | ------- | ------ | -------------------------------------- |
| width          | 内容宽度     | string  | -      | '750rpx'                               |
| current        | 当前位置索引 | number  | -      | 0                                      |
| number         |              | number  | -      | 2                                      |
| animated       |              | boolean | -      | true                                   |
| duration       |              | number  | -      | 300                                    |
| timeFunction   |              | string  | -      | 'cubic-bezier(0.25, 0.46, 0.45, 0.94)' |
| boxStyle       |              | string  | -      | ''                                     |
| containerStyle |              | string  | -      | ''                                     |

## Slots

| Name    | Description | Bindings |
| ------- | ----------- | -------- |
| default |             |          |

---
