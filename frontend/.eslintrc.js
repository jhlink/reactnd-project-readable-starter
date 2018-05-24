module.exports = {
	env: {
		browser: true,
		es6: true
	},
	extends: ['eslint:recommended', 'plugin:react/recommended'],
	parser: 'babel-eslint',
	parserOptions: {
		ecmaVersion: 7,
		ecmaFeatures: {
			jsx: true
		},
		sourceType: 'module'
	},
	plugins: ['react'],
	rules: {
		indent: ['error', 2, { 'SwitchCase' : 1 } ],
		'linebreak-style': ['error', 'unix'],
		quotes: ['error', 'single'],
		semi: ['error', 'always'],
		'no-console': 'off' 
	},
	'settings': {
		'react': {
			'version': '15.0'
		}
	}
};
