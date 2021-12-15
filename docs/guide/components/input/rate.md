---
title: rate 评分
---

# rate

<div class="demo-box">
	<iframe scrolling="auto" frameborder="0" src="https://npro.redou.vip/h5/#/pages/input/rate" class="demo-box-iframe"></iframe>
</div>

- 支持v-model；
- 支持自定义图标；

主要属性有：

- value，当前值；
- total，总值；

```html
<n-rate v-model="rate1"></n-rate>
<n-rate v-model="rate2" :total="7" icon="love" activeIcon="love-solid"></n-rate>
<n-rate v-model="rate3" iconType="third" activeIconType="success"></n-rate>
```

![rate](/img/coms/rate.jpg)

## Props

| Prop name          | Description | Type   | Values | Default      |
| ------------------ | ----------- | ------ | ------ | ------------ |
| value              |    当前值   | number | -      | 0            |
| total              |    总值    | number | -      | 5            |
| bgType             |    背景主题   | string | -      | ''           |
| border             |   边框主题  | string | -      | ''           |
| radius             |   圆角主题 | string | -      | ''           |
| iconType           |   图标颜色主题   | string | -      | 'third'      |
| iconSize           |  图标尺寸主题  | string | -      | 'base'       |
| activeIconType     |  点亮时图标主题  | string | -      | 'error'      |
| icon               |  图标   | string | -      | 'star-solid' |
| activeIcon         |  点亮时图标   | string | -      | ''           |
| iconStyle          |  图标样式    | string | -      | ''           |
| iconBoxStyle       |  图标外层样式   | string | -      | ''           |
| activeIconStyle    |  点亮时图标样式  | string | -      | ''           |
| activeIconBoxStyle |   点亮时图标外层样式 | string | -      | ''           |
| space              |  间距  | string | -      | '12rpx'      |
| boxStyle           |  外层样式  | string | -      | ''           |

## Events

| Event name | Properties | Description |
| ---------- | ---------- | ----------- |
| input      |            |

---
