import HTMLWebpackPlugin from "html-webpack-plugin";
import path from "path";
import webpack from "webpack";
import {BuildOptions} from "./types/config";

export function buildPlugins({ paths}: BuildOptions): webpack.WebpackPluginInstance[] {
	return [
		new HTMLWebpackPlugin({
			template: paths.html // для использования нашего собственного хтмл фала как шаблона вместо дефолтного пустого который сам создает вебпак
		}), // для подключения хтмл файлов к сборке
		new webpack.ProgressPlugin(), // для показания прогресса билда

	]
}
