import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/config";

export function buildLoaders (options: BuildOptions) : webpack.RuleSetRule[]{
	const {isDev} = options
	const cssLoader = {
		test: /\.s[ac]ss$/i,
		use: [
			// creates 'style' nodes from JS strings
			options.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,// вместо 'style-loader'
			// Translates CSS into Common JS
			{
				loader: "css-loader",
				options: {
					modules: {
						auto: (resPath: string) => Boolean(resPath.includes('.module.')), // отделяет хеширование модульных файлов от обычных сисс
						localIdentName: isDev
							? '[path][name]__[local]--[hash:base64:5]' // если дев то так будут называться классы в модуль сисс
							: '[hash:base64:8]' // если прод то так будут называться классы в модуль сисс
					},

				}
			},
			// Compiles Sass to CSS
			"sass-loader",
		]
	}

	// если не используем тайпскрипт - нужен babel-loader
	const typescriptLoader ={
		test: /\.tsx?$/,
		use: 'ts-loader',
		exclude: /node_modules/,
	}

	return [ // одно из самых важных полей в конфиге здесь мы указываем какие лоадеры будем использовать
		typescriptLoader,
		cssLoader
	]
}
