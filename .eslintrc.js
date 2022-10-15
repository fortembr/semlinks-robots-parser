module.exports = {
  env: {
    node: true,
    jest: true
  },
  ignorePatterns: ['.eslintrc.js'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'], // Your TypeScript files extension
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:prettier/recommended'
      ],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: ['./tsconfig.json'], // Specify it only for TypeScript files
        tsconfigRootDir: __dirname,
        sourceType: 'module'
      },
      plugins: ['@typescript-eslint/eslint-plugin'],
      rules: {
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-explicit-any': 'off'
      }
    },
    {
      files: ['*.js'], // Your JavaScript files extension
      extends: ['plugin:prettier/recommended'],
      parserOptions: {
        sourceType: 'module'
      }
    },
    {
      files: ['/test/**/*.js'], // Your JavaScript files extension
      extends: ['plugin:prettier/recommended'],
      parserOptions: {
        sourceType: 'module'
      }
    }
  ],
  root: true
};
