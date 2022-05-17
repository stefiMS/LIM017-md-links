module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "airbnb-base",
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    indent: ["error", 2],
    "linebreak-style": 0,
    quotes: ["error", "double"],
    semi: ["error", "always"],

  },
};

// "eslint-config-standard": "^17.0.0.out",
//     "eslint-plugin-n": "^15.2.0.out",
//     "eslint-plugin-promise": "^6.0.0.out"
