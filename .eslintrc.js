module.exports = {
  extends: ['eslint:recommended', 'plugin:vue/essential'],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@babel/eslint-parser',
    ecmaVersion: 6,
    sourceType: 'module',
  },
  env: {
    es6: true,
    node: true,
  },
};
