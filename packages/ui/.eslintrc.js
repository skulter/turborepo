/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["@repo/eslint-config/react-internal.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.lint.json",
    // files: ['*.ts', '*.tsx'], // 일반적으로 TS 파일을 포함하도록 설정
    // excludedFiles: ['panda.config.ts'], // 제외할 파일 명시
    tsconfigRootDir: __dirname,
  },
};
