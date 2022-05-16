# 规则总览

> #### 图例
> 
> * ℹ️ —— 点击此图标可以访问每条规则对应的 Stylelint 官方文档。
> * ☑️️ —— 表示此规则属于 Stylelint 官方推荐规则。
> * 🔧️️ —— 表示此规则可自动修复。

## 第一部分：疑似写错

#### Color

* `'color-no-invalid-hex': true` <sup>[ℹ️](https://stylelint.io/user-guide/rules/color-no-invalid-hex) ☑️️</sup> —— 十六进制的颜色写法必须合法。

#### Font family

* `'font-family-no-duplicate-names': true` <sup>[ℹ️](https://stylelint.io/user-guide/rules/font-family-no-duplicate-names) ☑️️</sup> —— 禁止字体列表中出现重复项。
* `'font-family-no-missing-generic-family-keyword': true` <sup>[ℹ️](https://stylelint.io/user-guide/rules/font-family-no-missing-generic-family-keyword) ☑️️</sup> —— 字体列表中必须提供一个通用字族名（比如 `serif`、`sans-serif` 等）。

#### Function

* `'function-calc-no-invalid': true` <sup>[ℹ️](https://stylelint.io/user-guide/rules/function-calc-no-invalid) ☑️️</sup> —— `calc()` 函数内不允许出现不合法的表达式。
* `'function-calc-no-unspaced-operator': true` <sup>[ℹ️](https://stylelint.io/user-guide/rules/function-calc-no-unspaced-operator) ☑️️</sup> —— `calc()` 函数内的运算符前后需要加一个空格，或换行并缩进。
* `'function-linear-gradient-no-nonstandard-direction': true` <sup>[ℹ️](https://stylelint.io/user-guide/rules/function-linear-gradient-no-nonstandard-direction) ☑️️</sup> —— 线性渐变的方向参数必须符合标准语法。

#### String

* `'string-no-newline': true` <sup>[ℹ️](https://stylelint.io/user-guide/rules/string-no-newline) ☑️️</sup> —— 禁止字符串中出现未转义的换行。

#### Unit

* `'unit-no-unknown': true` <sup>[ℹ️](https://stylelint.io/user-guide/rules/unit-no-unknown) ☑️️</sup> —— 禁止出现未知的单位。

#### Property

* `'property-no-unknown': [true, { checkPrefixed: true }]` <sup>[ℹ️](https://stylelint.io/user-guide/rules/property-no-unknown) ☑️️</sup> —— 禁止出现未知的属性。浏览器私有前缀也会被校验。

#### Keyframe declaration

* `'keyframe-declaration-no-important': true` <sup>[ℹ️](https://stylelint.io/user-guide/rules/keyframe-declaration-no-important) ☑️️</sup> —— 禁止在动画关键帧声明中使用 `!important`。

#### Declaration block

* `'declaration-block-no-duplicate-properties': [true, { ignore: ["consecutive-duplicates-with-different-values"] }]` <sup>[ℹ️](https://stylelint.io/user-guide/rules/declaration-block-no-duplicate-properties) ☑️️</sup> —— 禁止声明块中出现重复的属性。不过，属性相同但连续书写且值不同的多条声明是允许的。
* `'declaration-block-no-shorthand-property-overrides': true` <sup>[ℹ️](https://stylelint.io/user-guide/rules/declaration-block-no-shorthand-property-overrides) ☑️️</sup> —— 声明块中的详细声明不能被简写声明覆盖。

#### Block

* `'block-no-empty': true` <sup>[ℹ️](https://stylelint.io/user-guide/rules/block-no-empty) ☑️️</sup> —— 禁止出现空的代码块。包含注释的代码块不会被视为空。

#### Selector

* `'selector-pseudo-class-no-unknown': true` <sup>[ℹ️](https://stylelint.io/user-guide/rules/selector-pseudo-class-no-unknown) ☑️️</sup> —— 禁止选择符中出现未知的伪类。
* `'selector-pseudo-element-no-unknown': [true, { ignorePseudoElements: ['v-deep'] }]` <sup>[ℹ️](https://stylelint.io/user-guide/rules/selector-pseudo-element-no-unknown) ☑️️</sup> —— 禁止选择符中出现未知的伪元素。允许使用 Vue 项目约定的 `::v-deep` 选择符。
* `'selector-type-no-unknown': true` <sup>[ℹ️](https://stylelint.io/user-guide/rules/selector-type-no-unknown) ☑️️</sup> —— 禁止选择符中出现未知的类型选择符。

#### Media feature

* `'media-feature-name-no-unknown': true` <sup>[ℹ️](https://stylelint.io/user-guide/rules/media-feature-name-no-unknown) ☑️️</sup> —— 禁止媒体查询条件中出现未知的特性名。

#### At-rule

* `'at-rule-no-unknown': [true, { ignoreAtRules: [...] }]` <sup>[ℹ️](https://stylelint.io/user-guide/rules/at-rule-no-unknown) ☑️️</sup> —— 禁止出现未知的 `@` 规则。Sass 内置的 `@` 规则已经加进白名单了。

#### Comment

* `'comment-no-empty': true` <sup>[ℹ️](https://stylelint.io/user-guide/rules/comment-no-empty) ☑️️</sup> —— 禁止出现空注释。

#### General / Sheet

* ~~`'no-descending-specificity': true`~~ <sup>[ℹ️](https://stylelint.io/user-guide/rules/no-descending-specificity) ☑️️</sup> —— [不限] 暂不限制选择符优先级的排序问题。
* `'no-duplicate-at-import-rules': true` <sup>[ℹ️](https://stylelint.io/user-guide/rules/no-duplicate-at-import-rules) ☑️️</sup> —— 禁止出现重复的 `@` 规则。
* ~~`'no-duplicate-selectors': true`~~ <sup>[ℹ️](https://stylelint.io/user-guide/rules/no-duplicate-selectors) ☑️️</sup> —— [不限] 是否出现重复的选择符。“在选择符列表中重复的选择符” 和 “选择符相同的声明” 这两种情况都会被检查出来。
* `'no-empty-source': true` <sup>[ℹ️](https://stylelint.io/user-guide/rules/no-empty-source) ☑️️</sup> —— 禁止出现空文件。如果文件中有注释，不会被视为空文件。
* `'no-extra-semicolons': true` <sup>[ℹ️](https://stylelint.io/user-guide/rules/no-extra-semicolons) ☑️️ 🔧</sup> —— 禁止出现多余的分号。
* `'no-invalid-double-slash-comments': true` <sup>[ℹ️](https://stylelint.io/user-guide/rules/no-invalid-double-slash-comments) ☑️️</sup> —— 禁止在 CSS 源码中通过 `//` 实现类似注释的效果。Sass 等预处理器语言中的单行注释不受此规则影响。

## 第二部分：限制语言特性

#### Color

* ~~`'color-named': '...'`~~ <sup>[ℹ️](https://stylelint.io/user-guide/rules/color-named)</sup> —— [不限] 是否使用颜色关键字（比如 `red`、`white` 等）。
* ~~`'color-no-hex': true`~~ <sup>[ℹ️](https://stylelint.io/user-guide/rules/color-no-hex)</sup> —— [不限] 是否使用十六进制颜色表示法。

#### Function

* ~~`'function-blacklist': []`~~ <sup>[ℹ️](https://stylelint.io/user-guide/rules/function-blacklist)</sup> —— [不限] 函数黑名单。
* ~~`'function-url-no-scheme-relative': true`~~ <sup>[ℹ️](https://stylelint.io/user-guide/rules/function-url-no-scheme-relative)</sup> —— 禁止 `url()` [不限] 函数是否使用省略协议的相对路径。
* ~~`'function-url-scheme-blacklist': []`~~ <sup>[ℹ️](https://stylelint.io/user-guide/rules/function-url-scheme-blacklist)</sup> —— [不限] URL 协议黑名单。
* ~~`'function-url-scheme-whitelist': []`~~ <sup>[ℹ️](https://stylelint.io/user-guide/rules/function-url-scheme-whitelist)</sup> —— [不限] URL 协议白名单。
* ~~`'function-whitelist': []`~~ <sup>[ℹ️](https://stylelint.io/user-guide/rules/function-whitelist)</sup> —— [不限] 函数白名单。

#### Keyframes

* ~~`'keyframes-name-pattern': /.../`~~ <sup>[ℹ️](https://stylelint.io/user-guide/rules/keyframes-name-pattern)</sup> —— [不限] 动画关键帧的命名模式。

#### Number

* ~~`'number-max-precision': 999`~~ <sup>[ℹ️](https://stylelint.io/user-guide/rules/number-max-precision)</sup> —— [不限] 数字的最大精度（小数位数）。

#### Time

* ~~`'time-min-milliseconds': 0`~~ <sup>[ℹ️](https://stylelint.io/user-guide/rules/time-min-milliseconds)</sup> —— [不限] 毫秒数的最小值。

#### Unit

* ~~`'unit-blacklist': []`~~ <sup>[ℹ️](https://stylelint.io/user-guide/rules/unit-blacklist)</sup> —— [不限] 单位黑名单。
* ~~`'unit-whitelist': []`~~ <sup>[ℹ️](https://stylelint.io/user-guide/rules/unit-whitelist)</sup> —— [不限] 单位白名单。

#### Shorthand property

* `'shorthand-property-no-redundant-values': true` <sup>[ℹ️](https://stylelint.io/user-guide/rules/shorthand-property-no-redundant-values) 🔧</sup> —— 在可简写的属性中禁止出现冗余值。

#### Value

* `'value-no-vendor-prefix': true` <sup>[ℹ️](https://stylelint.io/user-guide/rules/value-no-vendor-prefix)</sup> —— 禁止属性值出现浏览器前缀。

#### Custom property

* ~~`'custom-property-pattern': /.../`~~ <sup>[ℹ️](https://stylelint.io/user-guide/rules/custom-property-pattern)</sup> —— [不限] 自定义属性的命名模式。

#### Property

* ~~`'property-blacklist': []`~~ <sup>[ℹ️](https://stylelint.io/user-guide/rules/property-blacklist)</sup> —— [不限] 属性黑名单。
* `'property-no-vendor-prefix': true` <sup>[ℹ️](https://stylelint.io/user-guide/rules/property-no-vendor-prefix)</sup> —— 禁止属性名出现浏览器前缀。
* ~~`'property-whitelist': []`~~ <sup>[ℹ️](https://stylelint.io/user-guide/rules/property-whitelist)</sup> —— [不限] 属性白名单。

#### Declaration

* ~~`'declaration-block-no-redundant-longhand-properties': true`~~ <sup>[ℹ️](https://stylelint.io/user-guide/rules/declaration-block-no-redundant-longhand-properties)</sup> —— [不限] 是否出现可被简写的多条声明。
* ~~`'declaration-no-important': true`~~ <sup>[ℹ️](https://stylelint.io/user-guide/rules/declaration-no-important)</sup> —— [不限] 是否使用 `!important`。
* ~~`'declaration-property-unit-blacklist': {}`~~ <sup>[ℹ️](https://stylelint.io/user-guide/rules/declaration-property-unit-blacklist)</sup> —— [不限] 某个属性值的单位的黑名单。
* ~~`'declaration-property-unit-whitelist': {}`~~ <sup>[ℹ️](https://stylelint.io/user-guide/rules/declaration-property-unit-whitelist)</sup> —— [不限] 某个属性值的单位的白名单。
* ~~`'declaration-property-value-blacklist': {}`~~ <sup>[ℹ️](https://stylelint.io/user-guide/rules/declaration-property-value-blacklist)</sup> —— [不限] 某个属性的值的黑名单。
* ~~`'declaration-property-value-whitelist': {}`~~ <sup>[ℹ️](https://stylelint.io/user-guide/rules/declaration-property-value-whitelist)</sup> —— [不限] 某个属性的值的白名单。

#### Declaration block

* `'declaration-block-single-line-max-declarations': 1` <sup>[ℹ️](https://stylelint.io/user-guide/rules/declaration-block-single-line-max-declarations)</sup> —— 限制声明块写成一行时所能包含的声明数量。

#### Selector

* ~~`'selector-attribute-operator-blacklist': []`~~ <sup>[ℹ️](https://stylelint.io/user-guide/rules/selector-attribute-operator-blacklist)</sup> —— [不限] 选择符中属性运算符的黑名单。
* ~~`'selector-attribute-operator-whitelist': []`~~ <sup>[ℹ️](https://stylelint.io/user-guide/rules/selector-attribute-operator-whitelist)</sup> —— [不限] 选择符中属性运算符的白名单。
* `'selector-class-pattern': /.../` <sup>[ℹ️](https://stylelint.io/user-guide/rules/selector-class-pattern)</sup> —— 指定 class 的命名模式。
* ~~`'selector-combinator-blacklist': []`~~ <sup>[ℹ️](https://stylelint.io/user-guide/rules/selector-combinator-blacklist)</sup> —— [不限] 选择符中组合符的黑名单。
* ~~`'selector-combinator-whitelist': []`~~ <sup>[ℹ️](https://stylelint.io/user-guide/rules/selector-combinator-whitelist)</sup> —— [不限] 选择符中组合符的白名单。
* `'selector-id-pattern': /.../` <sup>[ℹ️](https://stylelint.io/user-guide/rules/selector-id-pattern)</sup> —— 指定 ID 的命名模式。
* ~~`'selector-max-attribute': 999`~~ <sup>[ℹ️](https://stylelint.io/user-guide/rules/selector-max-attribute)</sup> —— [不限] 一个选择符中最多可以出现多少个属性选择符。
* ~~`'selector-max-class': 999`~~ <sup>[ℹ️](https://stylelint.io/user-guide/rules/selector-max-class)</sup> —— [不限] 一个选择符中最多可以出现多少个 class。
* ~~`'selector-max-combinators': 999`~~ <sup>[ℹ️](https://stylelint.io/user-guide/rules/selector-max-combinators)</sup> —— [不限] 一个选择符中最多可以出现多少个组合符。
* ~~`'selector-max-compound-selectors': 999`~~ <sup>[ℹ️](https://stylelint.io/user-guide/rules/selector-max-compound-selectors)</sup> —— [不限] 一个选择符中最多可以出现多少个被组合的子选择符。
* `'selector-max-empty-lines': 0` <sup>[ℹ️](https://stylelint.io/user-guide/rules/selector-max-empty-lines) 🔧</sup> —— 限制选择符中最多可以出现多少空行。
* ~~`'selector-max-id': 999`~~ <sup>[ℹ️](https://stylelint.io/user-guide/rules/selector-max-id)</sup> —— [不限] 一个选择符中最多可以出现多少个 ID。
* ~~`'selector-max-pseudo-class': 999`~~ <sup>[ℹ️](https://stylelint.io/user-guide/rules/selector-max-pseudo-class)</sup> —— [不限] 一个选择符中最多可以出现多少个伪类。
* ~~`'selector-max-specificity': '0,0,0'`~~ <sup>[ℹ️](https://stylelint.io/user-guide/rules/selector-max-specificity)</sup> —— [不限] 选择符优先级计算值的上限。
* ~~`'selector-max-type': 999`~~ <sup>[ℹ️](https://stylelint.io/user-guide/rules/selector-max-type)</sup> —— [不限] 一个选择符中类型选择符的数量上限。
* ~~`'selector-max-universal': 999`~~ <sup>[ℹ️](https://stylelint.io/user-guide/rules/selector-max-universal)</sup> —— [不限] 一个选择符中通用选择符（`*`）的数量上限。
* ~~`'selector-nested-pattern': /.../`~~ <sup>[ℹ️](https://stylelint.io/user-guide/rules/selector-nested-pattern)</sup> —— [不限] 嵌套选择符的命名模式。
* ~~`'selector-no-qualifying-type': true`~~ <sup>[ℹ️](https://stylelint.io/user-guide/rules/selector-no-qualifying-type)</sup> —— [不限] 是否使用 class、ID、属性选择符修饰类型选择符。
* `'selector-no-vendor-prefix': true` <sup>[ℹ️](https://stylelint.io/user-guide/rules/selector-no-vendor-prefix)</sup> —— 禁止选择符中出现浏览器前缀。
* ~~`'selector-pseudo-class-blacklist': []`~~ <sup>[ℹ️](https://stylelint.io/user-guide/rules/selector-pseudo-class-blacklist)</sup> —— [不限] 选择符中伪类的黑名单。
* ~~`'selector-pseudo-class-whitelist': []`~~ <sup>[ℹ️](https://stylelint.io/user-guide/rules/selector-pseudo-class-whitelist)</sup> —— [不限] 选择符中伪类的白名单。
* ~~`'selector-pseudo-element-blacklist': []`~~ <sup>[ℹ️](https://stylelint.io/user-guide/rules/selector-pseudo-element-blacklist)</sup> —— [不限] 选择符中伪元素的黑名单。
* ~~`'selector-pseudo-element-whitelist': []`~~ <sup>[ℹ️](https://stylelint.io/user-guide/rules/selector-pseudo-element-whitelist)</sup> —— [不限] 选择符中伪元素的白名单。

#### Media feature

* ~~`'media-feature-name-blacklist': true`~~ <sup>[ℹ️](https://stylelint.io/user-guide/rules/media-feature-name-blacklist)</sup> —— [不限] 媒体查询中特性名的黑名单。
* ~~`'media-feature-name-no-vendor-prefix': true`~~ <sup>[ℹ️](https://stylelint.io/user-guide/rules/media-feature-name-no-vendor-prefix)</sup> —— [不限] 媒体查询中出现浏览器前缀。
* ~~`'media-feature-name-value-whitelist': {}`~~ <sup>[ℹ️](https://stylelint.io/user-guide/rules/media-feature-name-value-whitelist)</sup> —— [不限] 媒体查询中某个特性的值的白名单。
* ~~`'media-feature-name-whitelist': true`~~ <sup>[ℹ️](https://stylelint.io/user-guide/rules/media-feature-name-whitelist)</sup> —— [不限] 媒体查询中特性名的白名单。

#### Custom media

* ~~`'custom-media-pattern': /.../`~~ <sup>[ℹ️](https://stylelint.io/user-guide/rules/custom-media-pattern)</sup> —— [不限] 自定义媒体的命名模式。

#### At-rule

* ~~`'at-rule-blacklist': true`~~ <sup>[ℹ️](https://stylelint.io/user-guide/rules/at-rule-blacklist)</sup> —— [不限] `@` 规则黑名单。
* `'at-rule-no-vendor-prefix': true` <sup>[ℹ️](https://stylelint.io/user-guide/rules/at-rule-no-vendor-prefix)</sup> —— 禁止 `@` 规则中出现浏览器前缀。
* ~~`'at-rule-property-requirelist': {}`~~ <sup>[ℹ️](https://stylelint.io/user-guide/rules/at-rule-property-requirelist)</sup> —— [不限] 某个 `@` 规则中必须出现的属性。
* ~~`'at-rule-whitelist': true`~~ <sup>[ℹ️](https://stylelint.io/user-guide/rules/at-rule-whitelist)</sup> —— [不限] `@` 规则黑名单。

#### Comment

* ~~`'comment-word-blacklist': []`~~ <sup>[ℹ️](https://stylelint.io/user-guide/rules/comment-word-blacklist)</sup> —— [不限] 注释中的单词黑名单。

#### General / Sheet

* ~~`'max-nesting-depth': 999`~~ <sup>[ℹ️](https://stylelint.io/user-guide/rules/max-nesting-depth)</sup> —— [不限] 选择符的最大嵌套深度。
* ~~`'no-unknown-animations': true`~~ <sup>[ℹ️](https://stylelint.io/user-guide/rules/no-unknown-animations)</sup> —— [不限] 是否引用未知的动画名。只要动画名在当前文件中没找到，就会被认为是未知的，但实际上动画有可能是在其它文件中定义的。

## 第三部分：代码风格约定

#### Color

* `'color-hex-case': 'lower'` <sup>[ℹ️](https://stylelint.io/user-guide/rules/color-hex-case) 🔧</sup> —— 十六进制颜色值一律小写。
* `'color-hex-length': 'short'` <sup>[ℹ️](https://stylelint.io/user-guide/rules/color-hex-length) 🔧</sup> —— 十六进制颜色值应尽可能简写（`#aabbcc` → `#abc`）。

#### Font family

* `'font-family-name-quotes': 'always-where-recommended'` <sup>[ℹ️](https://stylelint.io/user-guide/rules/font-family-name-quotes)</sup> —— 字体名在 [CSS 规范推荐的场景](https://www.w3.org/TR/CSS22/fonts.html#font-family-prop) 下需要加引号。

#### Font weight

* `'font-weight-notation': 'named-where-possible'` <sup>[ℹ️](https://stylelint.io/user-guide/rules/font-weight-notation)</sup> —— 字重属性值优先使用关键字（`bold`、`normal` 等），而不是数值（`700`、`400` 等）。

#### Function

* `'function-comma-newline-after': 'always-multi-line'` <sup>[ℹ️](https://stylelint.io/user-guide/rules/function-comma-newline-after) 🔧</sup> —— 如果函数写成多行，需要在逗号后换行。
* `'function-comma-newline-before': 'never-multi-line'` <sup>[ℹ️](https://stylelint.io/user-guide/rules/function-comma-newline-before) 🔧</sup> —— 如果函数写成多行，不能在逗号前换行。
* `'function-comma-space-after': 'always-single-line'` <sup>[ℹ️](https://stylelint.io/user-guide/rules/function-comma-space-after) 🔧</sup> —— 如果函数写成单行，需要在逗号后加空格。
* `'function-comma-space-before': 'never'` <sup>[ℹ️](https://stylelint.io/user-guide/rules/function-comma-space-before) 🔧</sup> —— 函数中的逗号前不加空格。
* `'function-max-empty-lines': 0` <sup>[ℹ️](https://stylelint.io/user-guide/rules/function-max-empty-lines) 🔧</sup> —— 限制函数中最多可以出现多少空行。
* `'function-name-case': 'lower'` <sup>[ℹ️](https://stylelint.io/user-guide/rules/function-name-case) 🔧</sup> ——函数名一律小写。
* `'function-parentheses-newline-inside': 'always-multi-line'` <sup>[ℹ️](https://stylelint.io/user-guide/rules/function-parentheses-newline-inside) 🔧</sup> —— 如果函数写成多行，需要在括号内侧换行。
* `'function-parentheses-space-inside': 'never-single-line'` <sup>[ℹ️](https://stylelint.io/user-guide/rules/function-parentheses-space-inside) 🔧</sup> —— 函数括号的内侧不加空格。
* `'function-url-quotes': 'always'` <sup>[ℹ️](https://stylelint.io/user-guide/rules/function-url-quotes)</sup> —— `url()` 的值必须加引号。
* `'function-whitespace-after': 'always'` <sup>[ℹ️](https://stylelint.io/user-guide/rules/function-whitespace-after) 🔧</sup> —— 需要在函数调用之后加空格。

#### Number

* `'number-leading-zero': 'always'` <sup>[ℹ️](https://stylelint.io/user-guide/rules/number-leading-zero) 🔧</sup> —— 小数点前的零不可省略。
* `'number-no-trailing-zeros': true` <sup>[ℹ️](https://stylelint.io/user-guide/rules/number-no-trailing-zeros) 🔧</sup> —— 小数部分结尾的零应去除。

#### String

* `'string-quotes': 'single'` <sup>[ℹ️](https://stylelint.io/user-guide/rules/string-quotes) 🔧</sup> —— 引号一律使用单引号。

#### Length

* `'length-zero-no-unit': true` <sup>[ℹ️](https://stylelint.io/user-guide/rules/length-zero-no-unit) 🔧</sup> —— 当长度值为零时，应省略单位。

#### Unit

* `'unit-case': 'lower'` <sup>[ℹ️](https://stylelint.io/user-guide/rules/unit-case) 🔧</sup> —— 单位一律小写。

#### Value

* `'value-keyword-case': 'lower'` <sup>[ℹ️](https://stylelint.io/user-guide/rules/value-keyword-case) 🔧</sup> —— 属性值关键字一律小写。

#### Value list

* `'value-list-comma-newline-after': 'always-multi-line'` <sup>[ℹ️](https://stylelint.io/user-guide/rules/value-list-comma-newline-after) 🔧</sup> —— 如果属性值列表写成多行，需要在逗号后换行。
* `'value-list-comma-newline-before': 'never-multi-line'` <sup>[ℹ️](https://stylelint.io/user-guide/rules/value-list-comma-newline-before)</sup> —— 如果属性值列表写成多行，不能在逗号前换行。
* `'value-list-comma-space-after': 'always-single-line'` <sup>[ℹ️](https://stylelint.io/user-guide/rules/value-list-comma-space-after) 🔧</sup> —— 如果属性值列表写成多行，需要在逗号后加空格。
* `'value-list-comma-space-before': 'never'` <sup>[ℹ️](https://stylelint.io/user-guide/rules/value-list-comma-space-before) 🔧</sup> —— 属性值列表中的逗号前不加空格。
* `'value-list-max-empty-lines': 0` <sup>[ℹ️](https://stylelint.io/user-guide/rules/value-list-max-empty-lines) 🔧</sup> —— 限制属性值列表中最多可以出现多少空行。

#### Custom property

* ~~`'custom-property-empty-line-before': '...'`~~ <sup>[ℹ️](https://stylelint.io/user-guide/rules/custom-property-empty-line-before) 🔧</sup> —— [不限] 是否在自定义属性声明之上插入空行。

#### Property

* `'property-case': 'lower'` <sup>[ℹ️](https://stylelint.io/user-guide/rules/property-case) 🔧</sup> —— 属性名一律小写。

#### Declaration

* `'declaration-bang-space-after': 'never'` <sup>[ℹ️](https://stylelint.io/user-guide/rules/declaration-bang-space-after) 🔧</sup> —— `!important` 的感叹号之后不加空格。
* `'declaration-bang-space-before': 'always'` <sup>[ℹ️](https://stylelint.io/user-guide/rules/declaration-bang-space-before) 🔧</sup> —— `!important` 的感叹号之前加空格。
* `'declaration-colon-newline-after': 'always-multi-line'` <sup>[ℹ️](https://stylelint.io/user-guide/rules/declaration-colon-newline-after) 🔧</sup> —— 如果一条声明写成多行，需要在冒号后换行。
* `'declaration-colon-space-after': 'always-single-line'` <sup>[ℹ️](https://stylelint.io/user-guide/rules/declaration-colon-space-after) 🔧</sup> —— 如果一条声明写成单行，需要在冒号之后加空格。
* `'declaration-colon-space-before': 'never'` <sup>[ℹ️](https://stylelint.io/user-guide/rules/declaration-colon-space-before) 🔧</sup> —— 声明中的冒号之前不加空格。
* ~~`'declaration-empty-line-before': '...'`~~ <sup>[ℹ️](https://stylelint.io/user-guide/rules/declaration-empty-line-before) 🔧</sup> —— [不限] 是否在每条声明之上插入空行。

#### Declaration block

* `'declaration-block-semicolon-newline-after': 'always-multi-line'` <sup>[ℹ️](https://stylelint.io/user-guide/rules/declaration-block-semicolon-newline-after) 🔧</sup> —— 如果声明块写成多行，需要在分号后换行。
* `'declaration-block-semicolon-newline-before': 'never-multi-line'` <sup>[ℹ️](https://stylelint.io/user-guide/rules/declaration-block-semicolon-newline-before)</sup> —— 如果声明块写成多行，不能在分号前换行。
* `'declaration-block-semicolon-space-after': 'always-single-line'` <sup>[ℹ️](https://stylelint.io/user-guide/rules/declaration-block-semicolon-space-after) 🔧</sup> —— 如果声明块写成单行，需要在分号后加空格。
* `'declaration-block-semicolon-space-before': 'never'` <sup>[ℹ️](https://stylelint.io/user-guide/rules/declaration-block-semicolon-space-before) 🔧</sup> —— 如果声明块写成单行，分号后不加空格。
* `'declaration-block-trailing-semicolon': 'always'` <sup>[ℹ️](https://stylelint.io/user-guide/rules/declaration-block-trailing-semicolon) 🔧</sup> —— 声明块的最后一条声明结尾也需要写分号。

#### Block

* ~~`'block-closing-brace-empty-line-before': '...'`~~ <sup>[ℹ️](https://stylelint.io/user-guide/rules/block-closing-brace-empty-line-before) 🔧</sup> —— [不限] 块结尾的大括号内侧是否加空行。
* `'block-closing-brace-newline-after': ['always', { ignoreAtRules: ['if', 'else'] }]` <sup>[ℹ️](https://stylelint.io/user-guide/rules/block-closing-brace-newline-after) 🔧</sup> —— 需要在块结尾的大括号之后换行。不过，允许 `@if () {} @else {}` 这种结构中的块结尾大括号之后不换行。
* `'block-closing-brace-newline-before': 'always-multi-line'` <sup>[ℹ️](https://stylelint.io/user-guide/rules/block-closing-brace-newline-before) 🔧</sup> —— 如果块写成多行，需要在块结尾的大括号之前换行。
* ~~`'block-closing-brace-space-after': '...'`~~ <sup>[ℹ️](https://stylelint.io/user-guide/rules/block-closing-brace-space-after)</sup> —— [不适用] 此规则无法设置为理想效果：是否在块结尾的大括号之后加空格。
* `'block-closing-brace-space-before': 'always-single-line'` <sup>[ℹ️](https://stylelint.io/user-guide/rules/block-closing-brace-space-before) 🔧</sup> —— 如果块写成单行，需要在块结尾的大括号之前加空格。
* `'block-opening-brace-newline-after': 'always-multi-line'` <sup>[ℹ️](https://stylelint.io/user-guide/rules/block-opening-brace-newline-after) 🔧</sup> —— 如果块写成多行，需要在块开头的大括号之后换行。
* ~~`'block-opening-brace-newline-before': '...'`~~ <sup>[ℹ️](https://stylelint.io/user-guide/rules/block-opening-brace-newline-before) 🔧</sup> —— [不适用] 此规则无法设置为理想效果：是否在块开头的大括号之前换行。
* `'block-opening-brace-space-after': 'always-single-line'` <sup>[ℹ️](https://stylelint.io/user-guide/rules/block-opening-brace-space-after) 🔧</sup> —— 如果块写成单行，需要在块开头的大括号之后加空格。
* `'block-opening-brace-space-before': 'always'` <sup>[ℹ️](https://stylelint.io/user-guide/rules/block-opening-brace-space-before) 🔧</sup> —— 需要在块开头的大括号之前加空格。

#### Selector

* `'selector-attribute-brackets-space-inside': 'never'` <sup>[ℹ️](https://stylelint.io/user-guide/rules/selector-attribute-brackets-space-inside) 🔧</sup> —— 属性选择符的中括号内层不加空格。
* `'selector-attribute-operator-space-after': 'never'` <sup>[ℹ️](https://stylelint.io/user-guide/rules/selector-attribute-operator-space-after) 🔧</sup> —— 属性运算符之后不加空格。
* `'selector-attribute-operator-space-before': 'never'` <sup>[ℹ️](https://stylelint.io/user-guide/rules/selector-attribute-operator-space-before) 🔧</sup> —— 属性运算符之前不加空格。
* `'selector-attribute-quotes': 'always'` <sup>[ℹ️](https://stylelint.io/user-guide/rules/selector-attribute-quotes)</sup> —— 属性运算符右侧的属性值需要加引号。
* `'selector-combinator-space-after': 'always'` <sup>[ℹ️](https://stylelint.io/user-guide/rules/selector-combinator-space-after) 🔧</sup> —— 选择符中的组合符之后需要加空格。
* `'selector-combinator-space-before': 'always'` <sup>[ℹ️](https://stylelint.io/user-guide/rules/selector-combinator-space-before) 🔧</sup> —— 选择符中的组合符之前需要加空格。
* `'selector-descendant-combinator-no-non-space': true` <sup>[ℹ️](https://stylelint.io/user-guide/rules/selector-descendant-combinator-no-non-space) 🔧</sup> —— 后代选择符必须是空格，不能是换行。
* `'selector-pseudo-class-case': 'lower'` <sup>[ℹ️](https://stylelint.io/user-guide/rules/selector-pseudo-class-case) 🔧</sup> —— 伪类一律小写。
* `'selector-pseudo-class-parentheses-space-inside': 'never'` <sup>[ℹ️](https://stylelint.io/user-guide/rules/selector-pseudo-class-parentheses-space-inside) 🔧</sup> —— 伪类选择符括号内侧不加空格。
* `'selector-pseudo-element-case': 'lower'` <sup>[ℹ️](https://stylelint.io/user-guide/rules/selector-pseudo-element-case) 🔧</sup> —— 伪元素一律小写。
* `'selector-pseudo-element-colon-notation': 'double'` <sup>[ℹ️](https://stylelint.io/user-guide/rules/selector-pseudo-element-colon-notation) 🔧</sup> —— 伪元素采用双冒号写法。
* `'selector-type-case': 'lower'` <sup>[ℹ️](https://stylelint.io/user-guide/rules/selector-type-case) 🔧</sup> —— 类型选择符一律小写。

#### Selector list

* `'selector-list-comma-newline-after': 'always-multi-line'` <sup>[ℹ️](https://stylelint.io/user-guide/rules/selector-list-comma-newline-after) 🔧</sup> —— 如果选择符列表写成多行，需要在逗号之后换行。
* `'selector-list-comma-newline-before': 'never-multi-line'` <sup>[ℹ️](https://stylelint.io/user-guide/rules/selector-list-comma-newline-before) 🔧</sup> —— 选择符列表的逗号之前不能换行。
* `'selector-list-comma-space-after': 'always-single-line'` <sup>[ℹ️](https://stylelint.io/user-guide/rules/selector-list-comma-space-after) 🔧</sup> —— 需要在选择符列表的逗号之后加空格。
* `'selector-list-comma-space-before': 'never'` <sup>[ℹ️](https://stylelint.io/user-guide/rules/selector-list-comma-space-before) 🔧</sup> —— 选择符列表的逗号之后不加空格。

#### Rule

* ~~`'rule-empty-line-before': '...'`~~ <sup>[ℹ️](https://stylelint.io/user-guide/rules/rule-empty-line-before) 🔧</sup> —— [不限] 每条规则之前是否加空行。

#### Media feature

* `'media-feature-colon-space-after': 'always'` <sup>[ℹ️](https://stylelint.io/user-guide/rules/media-feature-colon-space-after) 🔧</sup> —— 媒体查询特性的冒号后加空格。
* `'media-feature-colon-space-before': 'never'` <sup>[ℹ️](https://stylelint.io/user-guide/rules/media-feature-colon-space-before) 🔧</sup> —— 媒体查询特性的冒号前不加空格。
* `'media-feature-name-case': 'lower'` <sup>[ℹ️](https://stylelint.io/user-guide/rules/media-feature-name-case) 🔧</sup> —— 媒体查询中的特性名为小写。
* `'media-feature-parentheses-space-inside': 'never'` <sup>[ℹ️](https://stylelint.io/user-guide/rules/media-feature-parentheses-space-inside) 🔧</sup> —— 媒体查询的括号内侧不加空格。
* `'media-feature-range-operator-space-after': 'always'` <sup>[ℹ️](https://stylelint.io/user-guide/rules/media-feature-range-operator-space-after) 🔧</sup> —— 媒体查询特性的比较运算符之后加空格。
* `'media-feature-range-operator-space-before': 'always'` <sup>[ℹ️](https://stylelint.io/user-guide/rules/media-feature-range-operator-space-before) 🔧</sup> —— 媒体查询特性的比较运算符之前加空格。

#### Media query list

* ~~`'media-query-list-comma-newline-after': '...'`~~ <sup>[ℹ️](https://stylelint.io/user-guide/rules/media-query-list-comma-newline-after) 🔧</sup> —— [不限] 媒体查询列表的逗号之后是否换行。
* ~~`'media-query-list-comma-newline-before': '...'`~~ <sup>[ℹ️](https://stylelint.io/user-guide/rules/media-query-list-comma-newline-before)</sup> —— [不限] 媒体查询列表的逗号之前是否换行。
* `'media-query-list-comma-space-after': 'always-single-line'` <sup>[ℹ️](https://stylelint.io/user-guide/rules/media-query-list-comma-space-after) 🔧</sup> —— 如果媒体查询列表写成单行，需要在逗号之后加空格。
* `'media-query-list-comma-space-before': 'never'` <sup>[ℹ️](https://stylelint.io/user-guide/rules/media-query-list-comma-space-before) 🔧</sup> —— 媒体查询列表的逗号之前不加空格。

#### At-rule

* ~~`'at-rule-empty-line-before': '...'`~~ <sup>[ℹ️](https://stylelint.io/user-guide/rules/at-rule-empty-line-before) 🔧</sup> —— [不限] `@` 规则之前是否加空行。
* `'at-rule-name-case': 'lower'` <sup>[ℹ️](https://stylelint.io/user-guide/rules/at-rule-name-case) 🔧</sup> —— `@` 规则名一律小写。
* ~~`'at-rule-name-newline-after': '...'`~~ <sup>[ℹ️](https://stylelint.io/user-guide/rules/at-rule-name-newline-after)</sup> —— [不限] `@` 规则名之后是否换行。
* `'at-rule-name-space-after': 'always-single-line'` <sup>[ℹ️](https://stylelint.io/user-guide/rules/at-rule-name-space-after) 🔧</sup> —— 如果 `@` 规则写成单行，需要在规则名之后加空格。
* `'at-rule-semicolon-newline-after': 'always'` <sup>[ℹ️](https://stylelint.io/user-guide/rules/at-rule-semicolon-newline-after) 🔧</sup> —— `@` 规则的分号之后需要换行。
* `'at-rule-semicolon-space-before': 'never'` <sup>[ℹ️](https://stylelint.io/user-guide/rules/at-rule-semicolon-space-before)</sup> —— `@` 规则的分号之前不加空格。

#### Comment

* ~~`'comment-empty-line-before': '...'`~~ <sup>[ℹ️](https://stylelint.io/user-guide/rules/comment-empty-line-before) 🔧</sup> —— [不限] 注释之前是否加空行。
* `'comment-whitespace-inside': 'always'` <sup>[ℹ️](https://stylelint.io/user-guide/rules/comment-whitespace-inside) 🔧</sup> —— 注释（`/* ... */`）内层加空格。

#### General / Sheet

* `'indentation': 'tab'` <sup>[ℹ️](https://stylelint.io/user-guide/rules/indentation) 🔧</sup> —— 缩进为一个 tab。
* `'linebreaks': 'unix'` <sup>[ℹ️](https://stylelint.io/user-guide/rules/linebreaks) 🔧</sup> —— 换行采用 LF（UNIX 风格）。
* ~~`'max-empty-lines': 999`~~ <sup>[ℹ️](https://stylelint.io/user-guide/rules/max-empty-lines) 🔧</sup> —— [不限] 最多多少个连续空行。
* ~~`'max-line-length': 999`~~ <sup>[ℹ️](https://stylelint.io/user-guide/rules/max-line-length)</sup> —— [不限] 每行的最大长度。
* `'no-eol-whitespace': true` <sup>[ℹ️](https://stylelint.io/user-guide/rules/no-eol-whitespace) 🔧</sup> —— 行末不留空格。
* `'no-missing-end-of-source-newline': true` <sup>[ℹ️](https://stylelint.io/user-guide/rules/no-missing-end-of-source-newline) 🔧</sup> —— 文件末尾至少要保留一个换行符。
* ~~`'no-empty-first-line': true`~~ <sup>[ℹ️](https://stylelint.io/user-guide/rules/no-empty-first-line) 🔧</sup> —— [不限] 文件开头是否为空行。
* `'unicode-bom': 'never'` <sup>[ℹ️](https://stylelint.io/user-guide/rules/unicode-bom)</sup> —— 文件不允许出现 BOM 头。
