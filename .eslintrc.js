module.exports = {
  root: true,

  env: {
    node: true,
  },

  extends: [
    'plugin:vue/recommended',
    '@vue/airbnb',
  ],

  parserOptions: {
    parser: 'babel-eslint',
  },

  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'vue/array-bracket-spacing': 'error',
    'vue/arrow-spacing': 'error',
    'vue/block-spacing': 'error',
    'vue/brace-style': 'error',
    'vue/camelcase': 'error',
    'vue/comma-dangle': 'error',
    'vue/component-definition-name-casing': 'error',
    'vue/component-name-in-template-casing': 'error',
    'vue/component-tags-order': 'error',
    'vue/dot-location': 'error',
    'vue/eqeqeq': 'error',
    'vue/key-spacing': 'error',
    'vue/keyword-spacing': 'error',
    'vue/match-component-file-name': 'error',
    'vue/no-boolean-default': 'error',
    'vue/no-deprecated-scope-attribute': 'error',
    'vue/no-deprecated-slot-attribute': 'error',
    'vue/no-deprecated-slot-scope-attribute': 'error',
    'vue/no-empty-pattern': 'error',
    'vue/no-irregular-whitespace': 'error',
    'vue/no-reserved-component-names': 'error',
    'vue/no-restricted-syntax': 'error',
    'vue/no-static-inline-styles': 'error',
    'vue/no-unsupported-features': 'error',
    'vue/object-curly-spacing': 'error',
    'vue/padding-line-between-blocks': 'error',
    'vue/require-direct-export': 'error',
    'vue/require-name-property': 'error',
    'vue/script-indent': 'error',
    'vue/space-infix-ops': 'error',
    'vue/space-unary-ops': 'error',
    'vue/static-class-names-order': 'error',
    'vue/v-on-function-call': 'error',
    'vue/v-slot-style': 'error',
    'vue/valid-v-bind-sync': 'error',
    'vue/valid-v-slot': 'error',
    'vue/max-len': ['error', {
      code: 130,
      template: 130,
      tabWidth: 2,
      comments: 130,
      ignorePattern: '',
      ignoreComments: false,
      ignoreTrailingComments: false,
      ignoreUrls: false,
      ignoreStrings: false,
      ignoreTemplateLiterals: false,
      ignoreRegExpLiterals: false,
      ignoreHTMLAttributeValues: false,
      ignoreHTMLTextContents: false,
    }],
  },

  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        jest: true,
      },
    },
  ],
};
