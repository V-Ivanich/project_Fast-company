module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ["plugin:react/recommended", "standard"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: ["react"],
  rules: {
    indent: ["error", 2],
    semi: [2, "always"],
    "space-before-function-paren": [
      "error",
      { anonymous: "always", named: "never" }
    ],
    quotes: ["error", "double", { allowTemplateLiterals: true }]
  }
};

// module.exports = {
//   env: {
//     browser: true,
//     es2021: true
//   },
//   extends: ["plugin:react/recommended", "standard"],
//   overrides: [],
//   parserOptions: {
//     ecmaFeatures: {
//       jsx: true
//     },
//     ecmaVersion: "latest",
//     sourceType: "module"
//   },
//   plugins: ["react"],
//   rules: {
//     // indent: ["error", 4], // Отступ количество пробелов
//     semi: [2, "always"], // Точка с запятой в конце строки
//     indent: "off",
//     // "multiline-ternary": ["error", "always-multiline"],
//     // "react/jsx-indent": "off",
//     // "react/jsx-indent-props": "off",

//     // Ошибка при наличии пробела при обозночении функции, уберём её
//     "space-before-function-paren": [
//       "error",
//       { anonymous: "always", named: "never" }
//     ],

//     // Использование двойных кавычек
//     quotes: ["error", "double", { allowTemplateLiterals: true }]
//   }
// };
