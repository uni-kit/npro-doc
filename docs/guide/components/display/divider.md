---
title: divider 分割器
---

# divider

<div class="demo-box">
	<iframe scrolling="auto" frameborder="0" src="http://www.redou.vip/npro/#/pages/display/divider" class="demo-box-iframe"></iframe>
</div>

> divider 分割器

```html
<n-divider></n-divider>
<n-divider left="32rpx" right="32rpx"></n-divider>
<n-divider bgType="error" left="32rpx" right="32rpx"></n-divider>
<view class="n-flex-row n-justify-center">
	<n-divider bgType="success" :vertical="true" width="1px" height="80rpx" left="32rpx" right="32rpx"></n-divider>
	<n-divider bgType="error" :vertical="true" width="1px" height="80rpx" left="32rpx" right="32rpx"></n-divider>
	<n-divider bgType="success" :vertical="true" width="1px" height="80rpx" left="32rpx" right="32rpx"></n-divider>
</view>
```

![divider](/img/coms/divider.jpg)

## Props

| Prop name | Description    | Type    | Values | Default   |
| --------- | -------------- | ------- | ------ | --------- |
| vertical  | 是否竖向       | boolean | -      | false     |
| bgType    | 分割线背景主题 | string  | -      | 'border'  |
| boxBgType | 外层背景主题   | string  | -      | 'inverse' |
| boxBg     | 外层背景色     | string  | -      | ''        |
| bg        | 分割线背景色   | string  | -      | ''        |
| left      | 分割线左侧间距 | string  | -      | '0'       |
| right     | 分割线右侧间距 | string  | -      | '0'       |
| width     | 分割线宽度     | string  | -      | '1px'     |
| height    | 分割线高度     | string  | -      | '1px'     |

---
