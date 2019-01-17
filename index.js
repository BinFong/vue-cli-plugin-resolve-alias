module.exports = (api, projectOptions) => {

  const options = projectOptions.pluginOptions['resolve-alias'];

  api.chainWebpack(webpackConfig => {

    const alias = options.alias;
    
    Object.keys(alias).forEach(key => {
      if (alias[key]) {
        webpackConfig.resolve.alias.set(key, alias[key]);
      }
    });

  });
};
