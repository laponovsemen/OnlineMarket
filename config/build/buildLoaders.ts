import webpack from "webpack";

export function buildLoaders () : webpack.RuleSetRule[]{

	const typescriptLoader ={
		test: /\.tsx?$/,
		use: 'ts-loader',
		exclude: /node_modules/,
	}

	return [ // одно из самых важных полей в конфиге здесь мы указываем какие лоадеры будем использовать
		typescriptLoader
	]
}
