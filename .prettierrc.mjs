/** @type {import("prettier").Config} */
export default {
  plugins: ["prettier-plugin-astro"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
        // maxLineLength: 200,
        // printWidth: 200,
        // max_line_length: 300,
        printWidth: 100,
        tabWidth: 4,
      },
    },
  ],
};

// /** @type {import("prettier").Config} */
// const config = {
//   trailingComma: "es5",
//   tabWidth: 4,
//   semi: false,
//   singleQuote: true,
//   printWidth: 200,
// };

// export default config;
