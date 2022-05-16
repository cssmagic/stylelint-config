// 把规则按字母排序，以便于官方的配置包作对比

const { rules } = require('../index')

const keys = Object.keys(rules)

const sortedKeys = keys.sort()
// console.log(sortedKeys)

const sortedPairs = sortedKeys.map((key) => {
	const o = {}
	o[key] = rules[key]
	return o
})

console.log(JSON.stringify(sortedPairs, null, '\t'))

