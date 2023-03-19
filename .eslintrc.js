module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: ['react-app', 'plugin:react/recommended', 'airbnb', 'plugin:i18next/recommended', 'plugin:storybook/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'i18next',
    'react-hooks',
  ],
  rules: {
    indent: [2, 2, {
      SwitchCase: 1,
    }],
    'react/jsx-indent': [2, 2],
    'react/react-in-jsx-scope': 'off',
    'no-undef': 'off',
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'react/jsx-filename-extension': [2, {
      extensions: ['.js', '.jsx', '.tsx'],
    }],
    'no-unused-vars': 'warn',
    '@typescript-eslint/no-unused-vars': [2],
    'react/require-default-props': 'off',
    'react/jsx-props-no-spreading': 'off',
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': [2],
    'import/no-extraneous-dependencies': [1],
    'import/extensions': 'off',
    'no-underscore-dangle': 'off',
    'default-case': 'off',
    'i18next/no-literal-string': ['error', {
      markupOnly: true,
    }],
    'max-len': ['error', {
      ignoreComments: true,
      code: 100,
      ignoreStrings: true,
    }],
    'react/function-component-definition': 'off',
    'linebreak-style': 0,
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'no-param-reassign': 'off',
  },
  globals: {
    __IS_DEV__: true,
  },
};
