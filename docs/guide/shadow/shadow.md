---
title: 阴影
---

# shadow

<div class="demo-box">
	<iframe scrolling="auto" frameborder="0" src="http://www.redou.vip/npro/#/pages/shadow/index" class="demo-box-iframe"></iframe>
</div>

Weex 支持 box-shadow 属性用于设置元素阴影。

但是目前仅 iOS 支持 box-shadow 属性，Android 暂不支持，可以使用图片代替。

我们尝试过使用`elevation="6px"`这个设置，并不理想。建议在Android下还是使用图片制作阴影。Android下使用box-shadow可能会导致页面闪烁等不确定性影响。

`box-shadow:inset offset-x offset-y blur-radius color;`

`box-shadow:投影方式 X轴偏移量 Y轴偏移量 阴影模糊半径  阴影颜色`

# 参数描述

- inset（可选）	默认阴影在边框外。使用 inset 后，阴影在边框内（即使是透明边框），背景之上内容之下。
- offset-x	设置水平偏移量，如果是负值则阴影位于元素左边。
- offset-y	设置垂直偏移量，如果是负值则阴影位于元素上面。
- blur-radius	设置模糊半径，px 单位长度值，值越大，模糊面积越大，阴影就越大越淡。不能为负值。默认为0，此时阴影边缘锐利。
- color	设置阴影颜色

# 示范

```css
.bi {
	&-green_shadow {
		box-shadow: 12rpx 4rpx 12rpx rgba($color: #94dce1, $alpha: 0.2)
	}
	&-red_shadow {
		box-shadow: 12rpx 4rpx 12rpx rgba($color: #ff9ec3, $alpha: 0.2)
	}
	&-gray_shadow {
		box-shadow: 12rpx 4rpx 12rpx rgba($color: #666666, $alpha: 0.2)
	}
}
```

