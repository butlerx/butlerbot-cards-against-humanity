module.exports = {
  parserOptions: {
    sourceType: 'module',
  },
  root: true,
  extends: ['coderdojo'],
  rules: {
    'no-console': ['error', { allow: ['warn', 'trace', 'log', 'error'] }],
    'class-methods-use-this': 0,
    'max-len': [
      'error',
      100,
      2,
      {
        ignoreUrls: true,
        ignoreComments: true,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ],
    'consistent-return': 0,
  },
};
