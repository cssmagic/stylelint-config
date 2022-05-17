# stylelint-config

## 安装

在你的项目中安装 Stylelint 和本项目的 npm 包（以下简称 “本包”）：

```sh
npm i -D stylelint@11
npm i -D @cmcm/stylelint-config@0.3
```

## 使用方法

1. 在你的项目的根目录添加 `.stylelintrc.js` 文件：

	```js
	module.exports = {
		extends: [
			'@cmcm/stylelint-config',
		],
	}
	```

 	* 在 `extends` 字段指定预设的配置包，各配置包的具体含义参见下面的 [“配置包”](#preset) 段落。

	* 如果你的项目需要禁用或覆盖配置包中的某条规则，可以添加 `rules` 字段并写入你自己的规则配置：

		```js
			rules: {
				'block-no-empty': null,     // 禁用某条规则
				'color-hex-case': 'lower',  // 覆盖某条规则
			},
		```

	* 如果你需要把特定文件排除在校验范围之外，可添加 `ignoreFiles` 字段：

		```js
			ignoreFiles: [
				'./src/vendor/**/*.*',
			],
		```

1. 在你的项目的 `package.json` 文件中添加脚本：

	```json
	{
	  "scripts": {
	    "lint-css": "stylelint src/**/*.scss src/**/*.vue"
	  }
	}
	```

1. 执行以下命令开始校验 CSS 代码：

	```sh
	npm run lint-css
	```

	如果需要 Stylelint 帮忙修复，执行以下命令：（注意：只有部分问题可以自动修复）

	```sh
	npm run lint-css -- --fix
	```

	如有必要，你可以把上述命令整合到 CI、Git hook 等工作流中。


## 规则

* [本包的所有规则配置](https://github.com/cssmagic/stylelint-config/blob/v0.3.x/doc/rule.md)

<!-- -->

* 附：[Stylelint 规则官方文档](https://stylelint.io/user-guide/rules)
* 附：[Stylelint 官方推荐的规则集（核心规则）](https://github.com/stylelint/stylelint-config-recommended/blob/main/index.js)
* 附：[Stylelint 官方推荐的规则集（含代码风格）](https://github.com/stylelint/stylelint-config-standard/blob/main/index.js)


## 配置包 <a name="preset">&nbsp;</a>

本包包含了多个预设的配置包，可以搭配使用。它们的含义分别如下：

配置包 | 含义 | 备注
---|---|---
`'@cmcm/stylelint-config'` | 包含 [所有规则](https://github.com/cssmagic/stylelint-config/blob/v0.3.x/doc/rule.md) | 相当于同时启用以下三个配置包
`'@cmcm/stylelint-config/preset/essential'` | 包含 [“疑似写错” 类型的规则](https://github.com/cssmagic/stylelint-config/blob/v0.3.x/doc/rule.md#possible-errors) | **强制**所有项目使用
`'@cmcm/stylelint-config/preset/recommended'` | 包含 [“限制语言特性” 类型的规则](https://github.com/cssmagic/stylelint-config/blob/v0.3.x/doc/rule.md#limit-language-features) | 强烈推荐所有项目使用
`'@cmcm/stylelint-config/preset/stylistic'` | 包含 [“代码风格约定” 类型的规则](https://github.com/cssmagic/stylelint-config/blob/v0.3.x/doc/rule.md#stylistic-issues) | 推荐使用

我们可以在 `.stylelintrc.js` 文件的 `extends` 字段同时指定多个配置包：

```js
	extends: [
		'@cmcm/stylelint-config/preset/essential',
		'@cmcm/stylelint-config/preset/recommended',
	],
```


## 开发计划

本包版本 | 适配 Stylelint 版本 | 状态 | 备注
---:|---:|:---:|---
v0.3.x | v11.x | Done
v0.4.x | v14.x | (WIP)


***

## License

[MIT License](http://www.opensource.org/licenses/mit-license.php)
