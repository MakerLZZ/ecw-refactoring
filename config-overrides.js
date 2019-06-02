const { override, fixBabelImports, addLessLoader, addWebpackAlias } = require('customize-cra');

const path = require('path');

const resolve = (dir) => {
	return path.join(__dirname, '.', dir);
};

module.exports = override(
	// 配置别名
	addWebpackAlias({
		'@': path.resolve(__dirname, 'src')
	}),
	// antd按需加载
	fixBabelImports('import', {
		libraryName: 'antd',
		libraryDirectory: 'es',
		style: true
	}),
	// 设置主题色
	addLessLoader({
		javascriptEnabled: true,
		modifyVars: {
			'@primary-color': '#ff5000'
		}
	})
);
