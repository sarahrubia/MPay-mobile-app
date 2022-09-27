module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['prettier', '@typescript-eslint'],
  extends: [
    '@react-native-community',
    'prettier',
    'plugin:prettier/recommended',
  ],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
      },
    },
  ],
};
