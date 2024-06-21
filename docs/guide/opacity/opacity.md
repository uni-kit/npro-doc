---
title: 透明度
---

# opacity

<div class="demo-box">
	<iframe scrolling="auto" frameborder="0" src="http://www.redou.vip/npro/#/pages/opacity/index" class="demo-box-iframe"></iframe>
</div>

- 我们可以直接使用opacity样式作用于元素，不过opacity会使其整体以及里面的子元素都具备opacity的效果。
- 如果您只是想让背景色或者文字颜色具备透明度效果，你应该直接设置带透明度的背景或者文字颜色。

比如：

```css
<style lang="scss" scoped>
	// 示范如何适配透明主题
	// 示范如何替代主题
	.n {
		&-bg {
			&-error {
				background-color: rgba($color: $n-color-error, $alpha: 0.6);
			}
		}
		&-color {
			&-primary-opacity {
				color: rgba($color: $n-color-primary, $alpha: 0.5);
			}
		}
	}
</style>
```
