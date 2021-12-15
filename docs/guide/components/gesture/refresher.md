---
title: refresher 刷新
---

# refresher

适用于非nvue-app端，在nvue-app端请使用refresher-n。

## Props

| Prop name      | Description        | Type    | Values | Default           |
| -------------- | ------------------ | ------- | ------ | ----------------- |
| mainText       | 下拉时提示文字     | string  | -      | '下拉即可刷新...' |
| pullingText    | 下拉时提示文字     | string  | -      | '释放即可刷新...' |
| refreshingText | 正在刷新的提示文字 | string  | -      | '正在努力加载...' |
| refreshing     | 是否正在刷新       | boolean | -      | false             |
| couldUnLash    | 是否可以满足刷新   | boolean | -      | false             |
| rate           | 下拉的进度/比率    | number  | -      | 0                 |
| boxStyle       | 外层样式           | string  | -      | ''                |

---

# refresher-n

仅适用与nvue-app，是weex下list的搭配refresh组件。

## Props

| Prop name      | Description               | Type   | Values | Default               |
| -------------- | ------------------------- | ------ | ------ | --------------------- |
| scrollRef      | 对应的 list/scroll 的 ref | string | -      |                       |
| maxTime        | 超时时间。0 表示不会超时  | number | -      | 0                     |
| mainText       | 下拉文字提示              | string | -      | '下拉触发刷新...'     |
| pullingText    | 满足是否刷新时文字提示    | string | -      | '释放即可刷新...'     |
| refreshingText | 刷新时文字提示            | string | -      | '正在努力加载...'     |
| downIcon       | 下拉的图标                | string | -      | '/static/ui/down.png' |
| boxStyle       | 外层样式                  | string | -      | ''                    |

## Events

| Event name  | Properties | Description |
| ----------- | ---------- | ----------- |
| refresh     |            |
| pullingDown |            |

---

