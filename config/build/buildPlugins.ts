import HTMLWebpackPlugin from "html-webpack-plugin";
import path from "path";
import webpack from "webpack";
import {BuildOptions} from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildPlugins({paths, isDev}: BuildOptions): webpack.WebpackPluginInstance[] {
	return [ // порядок плагинов не важен в отличие от лоадеров
		new HTMLWebpackPlugin({
			template: paths.html // для использования нашего собственного хтмл фала как шаблона вместо дефолтного пустого который сам создает вебпак
		}), // для подключения хтмл файлов к сборке
		new webpack.ProgressPlugin(), // для показания прогресса билда
		new MiniCssExtractPlugin({
			filename: 'css/[name].[contenthash:8].css',
			chunkFilename: 'css/[name].[contenthash:8].css',

		}), // для раздельной компиляции сисс фалой и джс
		new webpack.DefinePlugin({
			__IS_DEV__: JSON.stringify(isDev)
		})
	]
}
