export default {
  extends: ['stylelint-config-recommended'],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'apply',
          'theme',
          'source',
          'utility',
          'variant',
          'custom-variant',
          'reference',
          'plugin',
          'config',
          'tailwind',
          'screen',
        ],
      },
    ],
  },
};
