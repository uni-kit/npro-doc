---
title: notice-dynamic 动态提示
---

# notice-dynamic

<div class="demo-box">
	<iframe scrolling="auto" frameborder="0" src="http://www.redou.vip/npro/#/pages/pop/notice-dynamic" class="demo-box-iframe"></iframe>
</div>

> notice-dynamic 动态滑出的通知/提示

```html
<n-notice-dynamic ref="n-notify"></n-notice-dynamic>
```

```js
this.$refs['n-notify'].show({pos: 'top', offset: 'status', text: '欢迎使用nPro，一起大胆实现吧'})
```

![notice-dynamic](/img/coms/notice-dynamic.jpg)

notice-dynamic采用的是调用时传递参数去配置实例的方法，并没有开放组件的属性。

可配置的参数如下：

```js
{
	pos: 'top', // top/bottom/top-center/bottom-center
	offset: 'status-nav',  // status/nav/status-nav/status-nav-xxx/number/rpx/px/x-xxx
	type: 'primary',
	bgType: 'primary',
	bg: '',
	text: '欢迎使用nPro',
	textType: 'inverse',
	textSize: 'base',
	textStyle: '',
	icon: '',
	iconType: 'inverse',
	iconSize: 'll',
	iconBoxStyle: '',
	iconStyle: '',
	height: '44px',
	boxStyle: '',
	duration: 2400,
	animation: 'ease-out',
	space: '12rpx'
}
```

## Events

| Event name | Properties | Description |
| ---------- | ---------- | ----------- |
| close      |            |

## Slots

| Name    | Description | Bindings |
| ------- | ----------- | -------- |
| default |             |          |

---
