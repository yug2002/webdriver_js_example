require ("@babel/register")({
  presets: [
    "@babel/preset-env",
    "@babel/preset-flow"
  ],

  extensions: [
    ".es6", ".es", ".jsx", ".js", ".mjs"
  ],

  cache: true,
});