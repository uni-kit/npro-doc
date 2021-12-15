---
title: swiper-v 竖向
---

> 请注意：
> swiper-v 在 Android 下不能使用在 scroll/list 中，无法触发手势。iOS 下没有问题

## Props

| Prop name      | Description                                                                                             | Type    | Values | Default       |
| -------------- | ------------------------------------------------------------------------------------------------------- | ------- | ------ | ------------- |
| width          | swiper 的宽度                                                                                           | string  | -      | '750rpx'      |
| height         | swiper 的高度                                                                                           | string  | -      | '360rpx'      |
| itemWidth      | 内容 swiper-item 的宽度                                                                                 | string  | -      | '600rpx'      |
| itemHeight     | 内容 swiper-item 的高度                                                                                 | string  | -      | '360rpx'      |
| left           | 左侧的间隙                                                                                              | string  | -      | '0'           |
| right          | 右侧的间隙                                                                                              | string  | -      | '0'           |
| space          | 内容之间的间隙                                                                                          | string  | -      | '64rpx'       |
| lock           | 是否锁定：锁定时不能触发手势                                                                            | boolean | -      | false         |
| current        | 当前位置                                                                                                | number  | -      | 0             |
| autoPlay       | 是否自动播放                                                                                            | boolean | -      | false         |
| interval       | 自动播放之间的间距                                                                                      | number  | -      | 2000          |
| circle         | 是否循环播放.<br>circle 的时候最少准备 5 个数据，不足 5 个时，请自行重复拼凑.<br>组件内不会帮忙检测数据 | boolean | -      | false         |
| center         | 内容是否处于 swiper 中间                                                                                | boolean | -      | false         |
| scale          | 缩放的尺度                                                                                              | number  | -      | 0.62          |
| duration       | 动画周期                                                                                                | number  | -      | 300           |
| timingFunction | 动画函数                                                                                                | string  | -      | 'ease-in-out' |
| updateTime     | 触发重新绑定动画                                                                                        | number  | -      | 0             |
| boxStyle       | 外层样式                                                                                                | string  | -      | ''            |

## Slots

| Name    | Description | Bindings |
| ------- | ----------- | -------- |
| default |             |          |

---

# swiper-v-item

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

