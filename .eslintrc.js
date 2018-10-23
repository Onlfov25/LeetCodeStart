module.exports = {
  "extends": "airbnb-base",
  "env": {
      "browser": true,
      "es6": true
  },
  "rules": {
    "linebreak-style": ["error", "windows"],
    "comma-dangle": ["error", "never"],
    "no-param-reassign": [2, { "props": false }],
    "class-methods-use-this": "off",
    "no-plusplus": [2, { "allowForLoopAfterthoughts": true }]
  }
};