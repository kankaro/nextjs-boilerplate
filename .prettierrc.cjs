module.exports = {
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: true,
  trailingComma: 'all',
  overrides: [
    {
      files: ['*.json', '*.yml'],
      options: {
        tabWidth: 4,
      },
    },
  ],
};
