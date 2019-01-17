const path = require('path');

module.exports = (api, options, rootOptions) => {

  let alias = {};

  if (options.defaultAlias) {
    alias = {
      src: '',
      components: ''
    };
  }

  api.extendPackage({
    vue: {
      pluginOptions: {
        'resolve-alias': { alias: alias }
      }
    }
  });

  api.exitLog(`Now, you can set 'resolve alias' in your vue.config.js`, 'done');

};
