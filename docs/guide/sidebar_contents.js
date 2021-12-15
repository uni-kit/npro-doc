module.exports = [
    {
        title: "为什么选择nPro",
        path: "why",
    },
    {
        title: "快速上手",
        path: "install",
    },
    {
        title: "更新日志",
        path: "change-log",
    },
    {
        title: "全局视野",
        path: "global",
    },
    {
        title: "主题配置",
        path: "theme",
    },
    {
        title: "设计规范",
        path: "design",
    },

    {
        title: "导航",
        children: [
            "components/nav/navbar",
            "components/nav/tabbar",
            "components/nav/tabs-h",
            "components/nav/tabs-v",
        ],
    },
    {
        title: "列表",
        children: [
            "components/list/list",
            "components/list/waterfall",
            "components/list/scroll-h",
            "components/list/chat",
            "components/list/index-list",
        ],
    },
    {
        title: "盒子",
        children: [
            "components/box/drawer",
            "components/box/tab-container",
            "components/box/rolling",
            "components/box/bg-view",
            "components/box/height",
            "components/box/swiper",
			"components/box/swiper-v",
            "components/box/position",
            "components/box/gallery",
			"components/box/gallery-v"
        ],
    },
    {
        title: "输入",
        children: [
            "components/input/button",
            "components/input/input",
            "components/input/input-one",
            "components/input/switch",
            "components/input/check",
            "components/input/check-static",
            "components/input/select-line",
            "components/input/stepper",
            "components/input/search",
            "components/input/picker",
            "components/input/picker-time",
            "components/input/rate",
			"components/input/image-add",
			"components/input/image-cell",
        ],
    },
    {
        title: "展示",
        children: [
            "components/display/avatars",
            "components/display/cell",
            "components/display/grid-static",
            "components/display/item",
            "components/display/icon",
            "components/display/title",
            "components/display/tag",
            "components/display/tag-group",
            "components/display/badge",
            "components/display/countdown",
            "components/display/divider",
            "components/display/progress",
            "components/display/progress-circle",
            "components/display/timeline-item",
            "components/display/collapse",
            "components/display/result",
			"components/display/skeleton",
        ],
    },
    {
        title: "弹窗",
        children: [
            "components/pop/popup",
            "components/pop/popup-always",
            "components/pop/drawer",
            "components/pop/toast",
            "components/pop/notice",
            "components/pop/notice-dynamic",
            "components/pop/loading",
            "components/pop/popover",
            "components/pop/loading-indicator",
            "components/pop/overlay",
        ],
    },
    {
        title: "手势",
        children: ["components/gesture/loader", "components/gesture/refresher"],
    },
    {
        title: "动画",
        path: "animation/animation",
    },
    {
        title: "国际化",
        path: "i18n/i18n",
    },
    {
        title: "皮肤",
        path: "theme/theme",
    },
    {
        title: "透明化",
        path: "opacity/opacity",
    },
    {
        title: "渐变",
        path: "gradient/gradient",
    },
    {
        title: "阴影",
        path: "shadow/shadow",
    },
    {
        title: "常见问答",
        path: "faq",
    },
    // {
    //     title: "上线自查",
    //     path: "test",
    // },
    // {
    //     title: "常用文档",
    //     path: "doc",
    // },
];
