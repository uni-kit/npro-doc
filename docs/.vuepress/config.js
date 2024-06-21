module.exports = {
	head: [
		["link", { rel: "icon", href: "/img/favicon.ico" }],
		["meta", { name: "referrer", content: "never" }],
		[
			"meta",
			{
				name: "keywords",
				content:
					"nPro,mypui,nvue,uniapp,uni,vue,weex,npro,myp,小程序,原生,iOS,Android,unicloud,ui,组件",
			},
		],
	],
	title: "nPro-nvue全端组件与模版库",
	description: "基于nvue的全端组件与模版库，支持编译到所有APP/小程序/H5",
	base: "/npro-doc/", //默认路径
	plugins: [["vuepress-plugin-code-copy", true]],
	themeConfig: {
		logo: "/img/logo.png",
		displayAllHeaders: true,
		backToTop: true,
		smoothScroll: true,
		nav: require("./config/nav"),
		sidebar: require("./config/sidebar"),
		sidebarDepth: 0,
		lastUpdated: "上次更新",

		// 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
		repo: 'https://codeup.aliyun.com/5f8915813035265285848e3c/ui/nPro-server',
		// 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
		// "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
		repoLabel: '查看源码',
		// 假如文档不是放在仓库的根目录下：
		docsDir: 'nPro-doc/docs',
		// 假如文档放在一个特定的分支下：
		docsBranch: 'master',
		// 默认是 false, 设置为 true 来启用
		editLinks: true,
		// 默认为 "Edit this page"
		editLinkText: '帮助我们改善此页面！'
	},
	theme: "antdocs",
	markdown: {
		lineNumbers: false,
		anchor: {
			permalinkBefore: false,
		},
	},
};
