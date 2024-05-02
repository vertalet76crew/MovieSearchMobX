module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['airbnb', 'plugin:react/recommended', 'plugin:prettier/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint', 'prettier', 'react-hooks'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts', '.tsx'],
        moduleDirectory: ['src', 'node_modules']
      }
    }
  },
  rules: {
    'comma-dangle': [
      'warn',
      {
        arrays: 'never',
        objects: 'never',
        imports: 'never',
        exports: 'never',
        functions: 'never'
      }
    ],
    'import/no-unresolved': [1, { commonjs: true }],
    camelcase: 'off',
    'no-unused-vars': 'off',
    'no-shadow': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    'import/no-anonymous-default-export': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
    'import/extensions': ['error', 'never', { css: 'always' }],
    'max-classes-per-file': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', 'tx', 'jsx', '.tsx'] }],
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/prefer-stateless-function': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/function-component-definition': [2, { namedComponents: 'arrow-function' }],
    'no-param-reassign': 'off',
    'react/require-default-props': 'off',
    'import/no-import-module-exports': 'off',
    'max-len': [
      'error',
      {
        ignoreComments: true,
        code: 140,
        ignoreUrls: true,
        ignoreStrings: true
      }
    ],
    'arrow-body-style': [
      'error',
      'as-needed',
      {
        requireReturnForObjectLiteral: true
      }
    ]
    // 'implicit-arrow-linebreak': ['error', 'below']
    // 'prettier/prettier': [
    //   'error',
    //   {
    //     endOfLine: 'auto'
    //   },
    //   {
    //     usePrettierrc: true
    //   }
    // ]
  }
};
