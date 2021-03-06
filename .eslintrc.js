module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
  },
  'extends': [
    'plugin:react/recommended',
    'google',
  ],
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
      'modules': true,
    },
    'ecmaVersion': 13,
    'sourceType': 'module',
  },
  'plugins': [
    'react',
  ],
  'rules': {

    'eqeqeq': 2,
    'comma-dangle': 1,
    'no-console': 0,
    'no-debugger': 1,
    'no-extra-semi': 1,
    'no-extra-parens': 0,
    'no-irregular-whitespace': 0,
    'no-undef': 0,
    'no-unused-vars': 1,
    'semi': 1,
    'semi-spacing': 1,
    'require-jsdoc': 0,
    'valid-jsdoc': [
      2,
      {'requireReturn': false},
    ],

    'react/display-name': 0,
    'react/forbid-prop-types': 1,
    'react/jsx-boolean-value': 1,
    'react/jsx-closing-bracket-location': 1,
    'react/jsx-curly-spacing': 1,
    'react/jsx-indent-props': 0,
    'react/jsx-max-props-per-line': 0,
    'react/jsx-no-duplicate-props': 1,
    'react/jsx-no-literals': 0,
    'react/jsx-no-undef': 1,
    'react/jsx-sort-prop-types': 0,
    'react/jsx-sort-props': 0,
    'react/jsx-uses-react': 1,
    'react/jsx-uses-vars': 1,
    'react/no-danger': 1,
    'react/no-did-mount-set-state': 1,
    'react/no-did-update-set-state': 1,
    'react/no-direct-mutation-state': 1,
    'react/no-multi-comp': 0,
    'react/no-set-state': 0,
    'react/no-unknown-property': 1,
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 0,
    'react/require-extension': 0,
    'react/self-closing-comp': 1,
    'react/sort-comp': 1,
    'react/wrap-multilines': 0,
    'react/sort-prop-types': 0,


  },
};
