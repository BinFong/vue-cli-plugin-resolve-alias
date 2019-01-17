# Vue-CLi-Plugin-Resolve-Alias

Vue-CLI3 插件: 快速设置您的别名

## 如何使用
```
vue add resolve-alias
```

## 示例
在您的 vue.config.js 文件中添加如下:

```js
const path = require('path')

module.exports = {
  pluginOptions: {
    'resolve-alias': {
      alias: {
        // 就像您在 Webpack 配置文件中那样书写即可
        src: path.resolve(__dirname, './src'),
        common: path.resolve(__dirname, './src/common')
        components: path.resolve(__dirname, './src/components')
      }
    }
  }
}
```
