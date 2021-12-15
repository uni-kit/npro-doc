---
title: swiper 自定义
---

# swiper

<div class="demo-box">
	<iframe scrolling="auto" frameborder="0" src="https://npro.redou.vip/h5/#/pages/box/swiper" class="demo-box-iframe"></iframe>
</div>

## Props

| Prop name      | Description                                                                                               | Type    | Values | Default       |
| -------------- | --------------------------------------------------------------------------------------------------------- | ------- | ------ | ------------- |
| linkage        | 关联外部的手势.目前只与 swiper 自己本身关联                                                               | string  | -      | ''            |
| width          | swiper 的宽度                                                                                             | string  | -      | '750rpx'      |
| height         | swiper 的高度                                                                                             | string  | -      | '360rpx'      |
| itemWidth      | 内容 swiper-item 的宽度                                                                                   | string  | -      | '600rpx'      |
| itemHeight     | 内容 swiper-item 的高度                                                                                   | string  | -      | '360rpx'      |
| left           | 左侧的间隙                                                                                                | string  | -      | '0'           |
| right          | 右侧的间隙                                                                                                | string  | -      | '0'           |
| space          | 内容之间的间隙                                                                                            | string  | -      | '64rpx'       |
| lock           | 是否锁定：锁定时不能触发手势                                                                              | boolean | -      | false         |
| current        | 当前位置.circular 的时候不支持改变                                                                        | number  | -      | 0             |
| autoPlay       | 是否自动播放                                                                                              | boolean | -      | false         |
| interval       | 自动播放之间的间距                                                                                        | number  | -      | 2000          |
| circular       | 是否循环播放.<br>circular 的时候最少准备 5 个数据，不足 5 个时，请自行重复拼凑.<br>组件内不会帮忙检测数据 | boolean | -      | false         |
| center         | 内容是否处于 swiper 中间                                                                                  | boolean | -      | false         |
| scale          | 缩放的尺度                                                                                                | number  | -      | 0.62          |
| percent        | 拉动基础距离的多少比例算下一个                                                                            | number  | -      | 0.4           |
| duration       | 动画周期                                                                                                  | number  | -      | 300           |
| baseWidth      | 拉动的基准宽度<br>默认是 itemWidth                                                                        | string  | -      | '0'           |
| times          | 最大拉动倍数<br>baseWidth 的倍数<br>默认 1.5 倍                                                           | number  | -      | 1.5           |
| linear         | 是否使用线性的跟手拉动<br>默认使用线性                                                                    | boolean | -      | true          |
| timingFunction | 动画函数                                                                                                  | string  | -      | 'ease-in-out' |
| updateTime     | 触发重新绑定动画                                                                                          | number  | -      | 0             |
| boxStyle       | 外层样式                                                                                                  | string  | -      | ''            |

## Slots

| Name    | Description | Bindings |
| ------- | ----------- | -------- |
| default |             |          |

---

# swiper-item

## Props

| Prop name | Description            | Type   | Values | Default  |
| --------- | ---------------------- | ------ | ------ | -------- |
| bgType    | 背景主题               | string | -      | ''       |
| border    | 边框主题               | string | -      | ''       |
| radius    | 圆角主题               | string | -      | ''       |
| flex      | 布局方式的主题         | string | -      | 'column' |
| justify   | justify-content 的主题 | string | -      | 'start'  |
| align     | align-items 的主题     | string | -      | 'start'  |
| boxStyle  | 外层样式               | string | -      | ''       |
| itemStyle | 内容项样式             | string | -      | ''       |

## Slots

| Name    | Description | Bindings |
| ------- | ----------- | -------- |
| default |             |          |

---

