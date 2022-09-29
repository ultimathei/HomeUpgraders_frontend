module.exports =
{
  "root": true,
  "env": {
      "browser": true,
      "es2021": true,
      "node": true
  },
  "extends": [
    "plugin:vue/vue3-recommended",
    "eslint:recommended",
    "@vue/typescript/recommended"
  ],
  "parserOptions": {
      "ecmaVersion": 2021
  },
  "plugins": [
  ],
  "ignorePatterns": ["**/*.d.ts", ".gitignore ."],
  "rules": {
    "vue/multi-word-component-names": 0,
    "@typescript-eslint/ban-types": [
      "error",
      {
        "extendDefaults": true,
        "types": {
          "{}": false
        }
      }
    ]
  }
}
