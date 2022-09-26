module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'prettier',
    'plugin:prettier/recommended',
  ],
  plugins: ['prettier'],
  overrides: [
    {
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
      files: ['*.ts', '*.tsx'],
      rules: {
        'prettier/prettier': ['error'],
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
      },
    },
  ],
};
