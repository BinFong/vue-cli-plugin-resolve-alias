# Vue-CLi-Plugin-Resolve-Alias

A Vue-Cli-Plugin for set up resolve alias by using vue.config.js.

## Install
```
vue add resolve-alias
```

## Example
In your vue.config.js:

```js
const path = require('path')

module.exports = {
  pluginOptions: {
    'resolve-alias': {
      alias: {
        // just like a normal resolve in Webpack
        src: path.resolve(__dirname, './src'),
        common: path.resolve(__dirname, './src/common')
        components: path.resolve(__dirname, './src/components')
      }
    }
  }
}
```
