import js from "@eslint/js";

export default [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "commonjs",
      globals: {
        console: "readonly",
        module: "readonly",
        require: "readonly",
        describe: "readonly",
        test: "readonly",
        expect: "readonly"
      }
    }
  }
];
