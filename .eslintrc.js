module.exports = {
	'env': {
		'node': true,
		'commonjs': true,
		'es2021': true
	},
	'extends': 'eslint:recommended',
	'parserOptions': {
		'ecmaVersion': 12
	},
	'rules': {
		'indent': [
			'off',
			4
		],
		'linebreak-style': [
			'error',
			'unix'
		],
		'quotes': [
			'off',
			'single'
		],
		'semi': [
			'off',
			'never'
		]
	}
}
