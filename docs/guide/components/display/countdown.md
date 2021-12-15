---
title: countdown 倒计时
---

# countdown

<div class="demo-box">
	<iframe scrolling="auto" frameborder="0" src="https://npro.redou.vip/h5/#/pages/display/countdown" class="demo-box-iframe"></iframe>
</div>

> countdown 倒计时

主要设置属性有：

- time，截止的时间戳；
- tpl，内容显示格式{d}天 {h}:{m}:{s}；

```html
<n-countdown :time="(new Date('2021-06-07')).getTime()" bgType="error" itemBgType="none" itemTextType="inverse" indicatorTextType="inverse" radius="base"></n-countdown>
<n-countdown :time="(new Date('2021-06-07')).getTime()" tpl="{d}天"></n-countdown>
<n-countdown :time="(new Date('2021-06-07')).getTime()" tpl="{d}天{h}时"></n-countdown>
<n-countdown :time="(new Date('2021-06-07')).getTime()" tpl="{d}天{h}时{m}分{s}秒"></n-countdown>
```

![countdown](/img/coms/countdown.jpg)

## Props

| Prop name          | Description                                  | Type   | Values | Default       |
| ------------------ | -------------------------------------------- | ------ | ------ | ------------- |
| time               | 目标时间戳                                   | number | -      | 1600000000000 |
| interval           | 计时周期                                     | number | -      | 1000          |
| tpl                | 内容显示格式:{d}天 {h}:{m}:{s}               | string | -      | '{h}:{m}:{s}' |
| bgType             | 背景主题                                     | string | -      | 'none'        |
| border             | 边框主题                                     | string | -      | ''            |
| radius             | 圆角主题                                     | string | -      | ''            |
| itemBgType         | item 的背景主题                              | string | -      | ''            |
| itemBorder         | item 的边框主题                              | string | -      | ''            |
| itemRadius         | item 的圆角主题                              | string | -      | 's'           |
| itemTextType       | item 的文字颜色主题                          | string | -      | 'text'        |
| itemTextSize       | item 的文字尺寸主题                          | string | -      | 'l'           |
| itemHeight         | item 的高度主题                              | string | -      | 'base'        |
| itemWidth          | item 的宽度。0 时会有左右各 24rpx 的 padding | string | -      | '0'           |
| indicatorTextType  | 分隔符的颜色主题                             | string | -      | 'text'        |
| indicatorTextSize  | 分隔符的尺寸主题                             | string | -      | 'l'           |
| indicatorWidth     | 分隔符的宽度                                 | string | -      | '60rpx'       |
| boxStyle           | 外层样式                                     | string | -      | ''            |
| itemBoxStyle       | item 外层样式                                | string | -      | ''            |
| indicatorBoxStyle  | 分隔符的外层样式                             | string | -      | ''            |
| itemTextStyle      | item 的文字样式                              | string | -      | ''            |
| indicatorTextStyle | 分隔符的文字样式                             | string | -      | ''            |

## Events

| Event name | Properties | Description |
| ---------- | ---------- | ----------- |
| completed  |            |

---
