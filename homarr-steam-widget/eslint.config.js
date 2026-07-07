import js from "@eslint/js";
import globals from "globals";

export default [
  js.configs.recommended,

  {
    files: ["server.js", "src/**/*.js"],

    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",

      globals: {
        ...globals.node,
      },
    },
  },

  {
    files: ["public/**/*.js"],

    languageOptions: {
      ecmaVersion: "latest",

      globals: {
        ...globals.browser,
      },
    },
  },
];