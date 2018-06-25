module.exports = {
  extends: ['airbnb', 'prettier', 'prettier/react'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  rules: {
    'react/jsx-filename-extension': 0,
    'implicit-arrow-linebreak': 0,
    'comma-dangle': ['warn', 'always-multiline'],
    quotes: [
      'error',
      'single',
      { allowTemplateLiterals: true, avoidEscape: true },
    ],
    'object-curly-spacing': 0,
    'no-confusing-arrow': 0,
    'no-mixed-operators': 0,
    'no-console': 1,
    'no-trailing-spaces': 0,
    'no-cond-assign': 0,
    'dot-notation': 1,
    'arrow-parens': ['warn', 'as-needed'],
    'class-methods-use-this': 0,
  },
};
