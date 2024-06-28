module.exports = {
  singleQuote: true,
  printWidth: 80,
  plugins: [
    'prettier-plugin-packagejson',
    'prettier-plugin-tailwindcss',
    '@ianvs/prettier-plugin-sort-imports',
  ],
  importOrder: [
    '^(@angular/localize/(.*)|zone.js/(.*))$',
    '',
    '<BUILTIN_MODULES>',
    '',
    '<THIRD_PARTY_MODULES>',
    '',
    '^(@angular/(.*)|rxjs)$',
    '^(@nx/(.*))$',
    '',
    '^@(steppe-ui|admin-hub|diftech|ngx-bridges|toolhub)/(.*)$',
    '',
    '^[./]',
  ],
  importOrderParserPlugins: ['decorators-legacy', 'typescript', 'jsx'],
  overrides: [
    {
      files: ['*.md'],
      options: {
        proseWrap: 'always',
      },
    },
  ],
};
