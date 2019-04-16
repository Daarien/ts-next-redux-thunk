const withTypescript = require("@zeit/next-typescript");
const withCSS = require("@zeit/next-css");
const withTM = require("@weco/next-plugin-transpile-modules");

module.exports = withTypescript(withCSS(withTM()));
