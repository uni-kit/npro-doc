---
title: 渐变
---

# gradient

<div class="demo-box">
	<iframe scrolling="auto" frameborder="0" src="https://npro.redou.vip/h5/#/pages/gradient/index" class="demo-box-iframe"></iframe>
</div>

nvue-app下支持线性渐变背景。

#使用

你可以通过 `background-image` 属性创建线性渐变。

`background-image: linear-gradient(to top, #a80077, #66ff00);`

目前不支持 `radial-gradient`（径向渐变）。

且目前只支持两种颜色的渐变，渐变方向如下：

- to right：从左向右渐变
- to left：从右向左渐变
- to bottom：从上到下渐变
- to top：从下到上渐变
- to bottom right：从左上角到右下角
- to top left：从右下角到左上角

**注意：**

> background-image 优先级高于 background-color，这意味着同时设置 background-image 和 background-color，background-color 被覆盖。
> background 不支持简写。
