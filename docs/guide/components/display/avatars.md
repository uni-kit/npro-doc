---
title: avatars 头像群
---

# avatars

<div class="demo-box">
	<iframe scrolling="auto" frameborder="0" src="https://npro.redou.vip/h5/#/pages/display/avatars" class="demo-box-iframe"></iframe>
</div>

通常用来展示一群头像。

- 支持左侧图片遮挡住右侧图片；
- 支持右侧图片遮挡住左侧图片；

![avatars](/img/coms/avatars.jpg)

头像群在组件中很常见，这里我们提供了一个快速的组件来实现。

主要配置有：

- items，作为数据来源，可以搭配label来指定数据中具体的key；
- size，用来指定尺寸大小；
- space，用来设置各个头像直接的距离，可以是负数；
- reverse，默认是右侧的会遮挡住左侧的，如果reverse为true，那么左侧的就会遮挡住右侧的。

```html
<!-- 默认space为-16rpx、reverse为false -->
<n-avatars :items='members' label="avatar" size="60rpx"></n-avatars>
<!-- space为16rpx、reverse为false -->
<n-avatars :items='members' label="avatar" size="60rpx" space="16rpx"></n-avatars>
<!-- space为-16rpx、reverse为true -->
<n-avatars :items='members' label="avatar" reverse="true" size="60rpx"></n-avatars>
```

其中members为：

```js
{
	data() {
		return {
			members: [{avatar: '/static/caiman.jpeg'}, {avatar: '/static/logo-dark.png'}, {avatar: '/static/caiman.jpeg'}, {avatar: '/static/girl1.jpeg'}]
		}
	}
}
```

## Props

| Prop name | Description | Type    | Values | Default  |
| --------- | ----------- | ------- | ------ | -------- |
| items     |   头像内容  | array   | -      | []       |
| label     |  允许指定头像在内容中的字段  | string  | -      | ''       |
| reverse   |  是否左侧图标在上面  | boolean | -      | false    |
| size      |  头像的大小  | string  | -      | '66rpx'  |
| space     |  头像之间的间距  | string  | -      | '-16rpx' |
| itemStyle |  头像的外层样式  | string  | -      | ''       |
| boxStyle  |  外层样式  | string  | -      | ''       |

## Events

| Event name  | Properties | Description |
| ----------- | ---------- | ----------- |
| itemClicked |            |

---
