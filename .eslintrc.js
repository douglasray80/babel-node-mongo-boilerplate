module.exports = {
	extends: ['plugin:prettier/recommended'],
	parserOptions: {
		ecmaVersion: 6,
		sourceType: 'module'
	},
	env: {
		node: true,
		mocha: true
	}
};
