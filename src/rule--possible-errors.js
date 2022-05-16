module.exports = {
	// Color
	'color-no-invalid-hex': true,

	// Font family
	'font-family-no-duplicate-names': true,
	'font-family-no-missing-generic-family-keyword': true,

	// Function
	'function-calc-no-invalid': true,
	'function-calc-no-unspaced-operator': true,
	'function-linear-gradient-no-nonstandard-direction': true,

	// String
	'string-no-newline': true,

	// Unit
	'unit-no-unknown': true,

	// Property
	'property-no-unknown': [true, { checkPrefixed: true }],

	// Keyframe declaration
	'keyframe-declaration-no-important': true,

	// Declaration block
	'declaration-block-no-duplicate-properties': [true, { ignore: ["consecutive-duplicates-with-different-values"] }],
	'declaration-block-no-shorthand-property-overrides': true,

	// Block
	'block-no-empty': true,

	// Selector
	'selector-pseudo-class-no-unknown': true,
	'selector-pseudo-element-no-unknown': [true, { ignorePseudoElements: ['v-deep'] }],
	'selector-type-no-unknown': true,

	// Media feature
	'media-feature-name-no-unknown': true,

	// At-rule
	'at-rule-no-unknown': [true, {
		ignoreAtRules: [
			'use', 'forward',
			'mixin', 'include',
			'function',
			'extend',
			'at-root',
			'error', 'warn', 'debug',
			'if', 'else',
			'each', 'for', 'while',
		],
	}],

	// Comment
	'comment-no-empty': true,

	// General / Sheet
	// 'no-descending-specificity': true,	// TODO: study later
	'no-duplicate-at-import-rules': true,
	// 'no-duplicate-selectors': null,
	'no-empty-source': true,
	'no-extra-semicolons': true,
	'no-invalid-double-slash-comments': true,
}
