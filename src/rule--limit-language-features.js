module.exports = {
	// Color
	// 'color-named': null,
	// 'color-no-hex': null,

	// Function
	// 'function-blacklist': null,
	// 'function-url-no-scheme-relative': null,
	// 'function-url-scheme-blacklist': null,
	// 'function-url-scheme-whitelist': null,
	// 'function-whitelist': null,

	// Keyframes
	// 'keyframes-name-pattern': null,

	// Number
	// 'number-max-precision': null,

	// Time
	// 'time-min-milliseconds': null,

	// Unit
	// 'unit-blacklist': null,
	// 'unit-whitelist': null,

	// Shorthand property
	'shorthand-property-no-redundant-values': true,

	// Value
	'value-no-vendor-prefix': true,

	// Custom property
	// 'custom-property-pattern': null,

	// Property
	// 'property-blacklist': null,
	'property-no-vendor-prefix': true,
	// 'property-whitelist': null,

	// Declaration
	// 'declaration-block-no-redundant-longhand-properties': null,
	// 'declaration-no-important': null,
	// 'declaration-property-unit-blacklist': null,
	// 'declaration-property-unit-whitelist': null,
	// 'declaration-property-value-blacklist': null,
	// 'declaration-property-value-whitelist': null,

	// Declaration block
	'declaration-block-single-line-max-declarations': 1,

	// Selector
	// 'selector-attribute-operator-blacklist': null,
	// 'selector-attribute-operator-whitelist': null,
	'selector-class-pattern': /[a-z]([a-z0-9\-]*[a-z0-9])*/,
	// 'selector-combinator-blacklist': null,
	// 'selector-combinator-whitelist': null,
	'selector-id-pattern': /[a-z]([a-z0-9\-]*[a-z0-9])*/,
	// 'selector-max-attribute': null,
	// 'selector-max-class': null,
	// 'selector-max-combinators': null,
	// 'selector-max-compound-selectors': null,
	'selector-max-empty-lines': 0,
	// 'selector-max-id': null,
	// 'selector-max-pseudo-class': null,
	// 'selector-max-specificity': null,
	// 'selector-max-type': null,
	// 'selector-max-universal': null,
	// 'selector-nested-pattern': null,
	// 'selector-no-qualifying-type': null,
	'selector-no-vendor-prefix': [true, { ignoreSelectors: [] }],
	// 'selector-pseudo-class-blacklist': null,
	// 'selector-pseudo-class-whitelist': null,
	// 'selector-pseudo-element-blacklist': null,
	// 'selector-pseudo-element-whitelist': null,

	// Media feature
	// 'media-feature-name-blacklist': null,
	// 'media-feature-name-no-vendor-prefix': null,
	// 'media-feature-name-value-whitelist': null,
	// 'media-feature-name-whitelist': null,

	// Custom media
	// 'custom-media-pattern': null,

	// At-rule
	// 'at-rule-blacklist': null,
	'at-rule-no-vendor-prefix': true,
	// 'at-rule-property-requirelist': null,
	// 'at-rule-whitelist': null,

	// Comment
	// 'comment-word-blacklist': null,

	// General / Sheet
	// 'max-nesting-depth': null,
	// 'no-unknown-animations': null,	// cannot resolve anim defined externally
}
