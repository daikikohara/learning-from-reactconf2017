"use strict";

const ERROR = 2;

module.exports = {
  parser: "babel-eslint",
  extends: ["plugin:flowtype/recommended"],
  plugins: ["flowtype"],
  settings: {
    flowtype: {
      onlyFilesWithFlowAnnotation: true,
    },
  },
  rules: {
    quotes: [ERROR, "double"],
  },
};
