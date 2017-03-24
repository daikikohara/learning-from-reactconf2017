const express = require("express");
const path = require("path");
const webpack = require("webpack");
const webpackDevMiddleware = require("webpack-dev-middleware");
const webpackHotMiddleware = require("webpack-hot-middleware");
const dir = __dirname;

const config = require(path.resolve(dir, "./webpack.config.js")); // eslint-disable-line

const app = express();
const port = 3000;

const compiler = webpack(config);
app.use(
  webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  })
);
app.use(webpackHotMiddleware(compiler));

app.use(express.static(path.resolve(dir, "./dist")));

app.use("/", (req, res) => {
  res.sendFile(path.resolve(dir, "./index.html"));
});

app.listen(port, error => {
  if (error) {
    throw error;
  }
  console.log("Express server listening on port", port);
});
