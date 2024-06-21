---
title: badge 徽标
---

# badge

<div class="demo-box">
	<iframe scrolling="auto" frameborder="0" src="http://www.redou.vip/npro/#/pages/display/badge" class="demo-box-iframe"></iframe>
</div>

> badge 角标

- 支持圆点；
- 支持数字；
- 支持自定义文字；

![badge](/img/coms/badge.jpg)

```html
<n-badge></n-badge>
<n-badge size="24rpx" bgType="primary"></n-badge>
<n-badge text="买一赠一" size="0" boxStyle="padding-left:16rpx;padding-right:16rpx;height:40rpx;border-radius:40rpx;"></n-badge>
```

主要配置有：

- size，设置圆点的直径大小，不是圆点的时候，设置为0即可；
- text，自定义文字；
- 其他一些主题与样式配置。

## Props

| Prop name | Description                                | Type   | Values | Default   |
| --------- | ------------------------------------------ | ------ | ------ | --------- |
| size      | 圆点样式的直径大小，不是圆点时需要设置为 0 | string | -      | '12rpx'   |
| bgType    | 背景主题                                   | string | -      | 'error'   |
| text      | 文字内容                                   | string | -      | ''        |
| border    | 边框主题                                   | string | -      | ''        |
| textType  | 文字颜色主题                               | string | -      | 'inverse' |
| textSize  | 文字尺寸主题                               | string | -      | 'ss'      |
| textStyle | 文字样式                                   | string | -      | ''        |
| boxStyle  | 外层样式                                   | string | -      | ''        |

---
