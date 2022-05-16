module.exports = {
	// Color
	'color-hex-case': 'lower',
	'color-hex-length': 'short',

	// Font family
	'font-family-name-quotes': 'always-where-recommended',

	// Font weight
	'font-weight-notation': 'named-where-possible',

	// Function
	'function-comma-newline-after': 'always-multi-line',
	'function-comma-newline-before': 'never-multi-line',
	'function-comma-space-after': 'always-single-line',
	'function-comma-space-before': 'never',
	'function-max-empty-lines': 0,
	'function-name-case': 'lower',
	'function-parentheses-newline-inside': 'always-multi-line',
	'function-parentheses-space-inside': 'never-single-line',
	'function-url-quotes': 'always',
	'function-whitespace-after': 'always',

	// Number
	'number-leading-zero': 'always',
	'number-no-trailing-zeros': true,

	// String
	'string-quotes': 'single',

	// Length
	'length-zero-no-unit': true,

	// Unit
	'unit-case': 'lower',

	// Value
	'value-keyword-case': 'lower',

	// Value list
	'value-list-comma-newline-after': 'always-multi-line',
	'value-list-comma-newline-before': 'never-multi-line',
	'value-list-comma-space-after': 'always-single-line',
	'value-list-comma-space-before': 'never',
	'value-list-max-empty-lines': 0,

	// Custom property
	// 'custom-property-empty-line-before': null,

	// Property
	'property-case': 'lower',

	// Declaration
	'declaration-bang-space-after': 'never',
	'declaration-bang-space-before': 'always',
	'declaration-colon-newline-after': 'always-multi-line',
	'declaration-colon-space-after': 'always-single-line',
	'declaration-colon-space-before': 'never',
	// 'declaration-empty-line-before': null,

	// Declaration block
	'declaration-block-semicolon-newline-after': 'always-multi-line',
	'declaration-block-semicolon-newline-before': 'never-multi-line',
	'declaration-block-semicolon-space-after': 'always-single-line',
	'declaration-block-semicolon-space-before': 'never',
	'declaration-block-trailing-semicolon': 'always',

	// Block
	// 'block-closing-brace-empty-line-before': null,
	'block-closing-brace-newline-after': ['always', { ignoreAtRules: ['if', 'else'] }],
	'block-closing-brace-newline-before': 'always-multi-line',
	// 'block-closing-brace-space-after': null,	// cannot set to an ideal effect
	'block-closing-brace-space-before': 'always-single-line',
	'block-opening-brace-newline-after': 'always-multi-line',
	// 'block-opening-brace-newline-before': null,	// cannot set to an ideal effect
	'block-opening-brace-space-after': 'always-single-line',
	'block-opening-brace-space-before': 'always',

	// Selector
	'selector-attribute-brackets-space-inside': 'never',
	'selector-attribute-operator-space-after': 'never',
	'selector-attribute-operator-space-before': 'never',
	'selector-attribute-quotes': 'always',
	'selector-combinator-space-after': 'always',
	'selector-combinator-space-before': 'always',
	'selector-descendant-combinator-no-non-space': true,
	'selector-pseudo-class-case': 'lower',
	'selector-pseudo-class-parentheses-space-inside': 'never',
	'selector-pseudo-element-case': 'lower',
	'selector-pseudo-element-colon-notation': 'double',
	'selector-type-case': 'lower',

	// Selector list
	'selector-list-comma-newline-after': 'always-multi-line',
	'selector-list-comma-newline-before': 'never-multi-line',
	'selector-list-comma-space-after': 'always-single-line',
	'selector-list-comma-space-before': 'never',

	// Rule
	// 'rule-empty-line-before': null,

	// Media feature
	'media-feature-colon-space-after': 'always',
	'media-feature-colon-space-before': 'never',
	'media-feature-name-case': 'lower',
	'media-feature-parentheses-space-inside': 'never',
	'media-feature-range-operator-space-after': 'always',
	'media-feature-range-operator-space-before': 'always',

	// Media query list
	// 'media-query-list-comma-newline-after': null,	// TODO: study later
	// 'media-query-list-comma-newline-before': null,	// TODO: study later
	'media-query-list-comma-space-after': 'always-single-line',
	'media-query-list-comma-space-before': 'never',

	// At-rule
	// 'at-rule-empty-line-before': null,
	'at-rule-name-case': 'lower',
	// 'at-rule-name-newline-after': null,
	'at-rule-name-space-after': 'always-single-line',
	'at-rule-semicolon-newline-after': 'always',
	'at-rule-semicolon-space-before': 'never',

	// Comment
	// 'comment-empty-line-before': null,
	'comment-whitespace-inside': 'always',

	// General / Sheet
	'indentation': 'tab',
	'linebreaks': 'unix',
	// 'max-empty-lines': null,
	// 'max-line-length': null,
	'no-eol-whitespace': true,
	'no-missing-end-of-source-newline': true,
	// 'no-empty-first-line': null,
	'unicode-bom': 'never',
}
