---
title: loader 加载
---

# loader

> loader

该组件全端使适用。

## Props

| Prop name   | Description              | Type    | Values | Default                        |
| ----------- | ------------------------ | ------- | ------ | ------------------------------ |
| mainText    | 可以继续加载时的文字提示 | string  | -      | '继续加载更多'                 |
| loadingText | 正在加载时的文字提示     | string  | -      | '正在加载'                     |
| noMoreText  | 没有更多时的文字提示     | string  | -      | '没有更多啦'                   |
| isLoading   | 是否正在加载             | boolean | -      | false                          |
| loadingSrc  | 加载中的 gif 图片        | string  | -      | '/static/ui/loading-small.gif' |
| hasMore     | 是否还有更多             | boolean | -      | true                           |
| showNoMore  | 是否展示没有更多         | boolean | -      | true                           |
| flex        | 内容的布局方式           | string  | -      | 'column'                       |
| boxStyle    | 外层样式                 | string  | -      | ''                             |

---

# loader-n

> loader-n

该组件仅在nvue-app下使用，是与weex中list搭配的loading组件。

## Props

| Prop name   | Description            | Type    | Values | Default                        |
| ----------- | ---------------------- | ------- | ------ | ------------------------------ |
| maxTime     | 超时时间，0 表示不限制 | number  | -      | 0                              |
| mainText    | 可以上提时的文字提示   | string  | -      | '继续上拉加载更多'             |
| loadingText | 加载中的文字提示       | string  | -      | '正在加载'                     |
| noMoreText  | 没有更多时的文字提示   | string  | -      | '没有更多啦'                   |
| hasMore     | 是否还有更多           | boolean | -      | true                           |
| showNoMore  | 是否展示没有更多       | boolean | -      | true                           |
| loadingSrc  | 加载中的 gif 图片      | string  | -      | '/static/ui/loading-small.gif' |
| flex        | 内容的布局方式         | string  | -      | 'column'                       |
| boxStyle    | 外层样式               | string  | -      | ''                             |

## Events

| Event name | Properties | Description |
| ---------- | ---------- | ----------- |
| loading    |            |

---

