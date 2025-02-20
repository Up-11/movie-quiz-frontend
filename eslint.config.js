import pluginVue from 'eslint-plugin-vue'

export default [
	...pluginVue.configs['flat/recommended'],

	{
		rules: {
			'vue/html-closing-bracket-newline': [
				'error',
				{
					singleline: 'never',
					multiline: 'always',
					selfClosingTag: {
						singleline: 'never',
						multiline: 'always'
					}
				}
			],
			'vue/no-unused-vars': 'error',
			// отключаем правило многословных имен компонентов
			'vue/multi-word-component-names': 'off',

			// дополнительные настройки
			'vue/max-attributes-per-line': [
				'error',
				{
					singleline: 3,
					multiline: 1
				}
			],
			'vue/singleline-html-element-content-newline': [
				'error',
				{
					ignoreWhenNoAttributes: true,
					ignoreWhenEmpty: true,
					ignores: ['pre', 'textarea'],
					externalIgnores: []
				}
			],
			'vue/no-v-html': 'warn',
			'vue/require-default-prop': 'off',
			'vue/prop-name-casing': ['error', 'camelCase']
		}
	}
]
