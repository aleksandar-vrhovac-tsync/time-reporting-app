module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['plugin:prettier/recommended', 'prettier', 'eslint:recommended'],
  plugins: ['@typescript-eslint'],
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
    project: 'tsconfig.json',
  },
  env: {
    es6: true,
    node: true,
  },
  rules: {
    'no-var': 'error',
    semi: 'error',
    indent: ['error', 2, { SwitchCase: 1 }],
    'no-multi-spaces': 'error',
    'space-in-parens': 'error',
    'no-multiple-empty-lines': 'error',
    'prefer-const': 'error',
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["warn", {ignoreRestSiblings: true}],
    'padding-line-between-statements': [
      'error',
      ...(() => {
        const common = [
          'block',
          'cjs-export',
          'class',
          'directive',
          'for',
          'function',
          'if',
          'throw',
          'try',
          'return',
        ];

        return [
          { blankLine: 'always', prev: common, next: '*' },
          { blankLine: 'always', prev: '*', next: common },
          { blankLine: 'always', prev: ['const', 'let'], next: '*' },
          { blankLine: 'always', prev: '*', next: 'export' },
          {
            blankLine: 'any',
            prev: ['const', 'let', 'export'],
            next: ['const', 'let', 'export'],
          },
        ];
      })(),
    ],
  },
};
