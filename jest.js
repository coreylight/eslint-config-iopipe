module.exports = {
  plugins: ['jest'],
  rules: {
    'jest/no-disabled-tests': 1,
    'jest/no-focused-tests': 2,
    'jest/no-identical-title': 2,
    // hud has some large snapshots with storyshots
    'jest/no-large-snapshots': 0,
    'jest/prefer-to-be-null': 2,
    'jest/prefer-to-be-undefined': 2,
    'jest/prefer-to-have-length': 2,
    'jest/valid-expect': 2
  },
  env: {
    'jest/globals': true
  }
};
