module.exports = {
  "presets": [
    ["@babel/preset-env", { "targets": { "esmodules": true } }],
    ["@babel/preset-react", { "runtime": "automatic" }]
  ],
  "plugins": ["babel-plugin-jsx-remove-data-test-id"]
}
