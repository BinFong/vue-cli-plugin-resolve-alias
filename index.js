module.exports = (api, projectOptions) => {
	const options = projectOptions.pluginOptions['resolve-alias'];

	api.chainWebpack(webpackConfig => {
		const alias = options.alias;
		// console.log('调试信息：', JSON.stringify(options));
		console.log('调试信息：', Object.keys(alias));

		Object.keys(alias).forEach(key => {
			if (alias[key]) {
				webpackConfig.resolve.alias.set(key, alias[key]);
			}
		});
	});
};
