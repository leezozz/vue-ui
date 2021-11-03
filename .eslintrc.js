// module.exports = {
//   root: true,
//   env: {
//     node: true
//   },
//   extends: [
//     'plugin:vue/vue3-essential',
//     '@vue/standard'
//   ],
//   parserOptions: {
//     parser: 'babel-eslint'
//   },
//   rules: {
//     'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
//     'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
//   }
// }


module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
    browser: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    'plugin:vue/vue3-strongly-recommended',
    'plugin:vue/vue3-recommended',
    '@vue/standard'
  ],
  parserOptions: {
    ecmaFeatures: {
      legacyDecorators: true
    },
    // eslint解析器 ???
    // parser: '@babel/eslint-parser'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-unused-vars': 1,  // 禁止出现未使用过的变量
    'vue/no-unused-components': 1,
    'vue/no-mutating-props': 0,
    'vue/html-self-closing': ['error', {
      html: {
        void: 'never',
        normal: 'never',
        component: 'always'
      },
      svg: 'always',
      math: 'always'
    }]
  }
}
