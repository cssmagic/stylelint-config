let rules = Object.assign(
	{},
	require('./src/rule--possible-errors'),
	require('./src/rule--limit-language-features'),
	require('./src/rule--stylistic-issues'),
)

const config = {
	rules,
}

module.exports = config
