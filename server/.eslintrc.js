module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['standard-with-typescript', 'eslint:recommended'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.eslint.json',
    tsconfigRootDir: __dirname
  },
  rules: {
    semi: ['error', 'never'],
    quotes: ['error', 'single', { allowTemplateLiterals: true }],
    'no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: false }],
    'no-use-before-define': ['error', {
      functions: true,
      classes: true,
      variables: true,
      allowNamedExports: false
    }]
  }
}
