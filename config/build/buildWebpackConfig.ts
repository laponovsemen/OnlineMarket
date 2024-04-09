import {BuildOptions} from "./types/config";
import webpack from "webpack";
import {buildPlugins} from "./buildPlugins";
import {buildLoaders} from "./buildLoaders";
import {buildResolvers} from "./buildResolvers";
import {buildDevServer} from "./buildDevServer";

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {

	const {mode, paths} = options

	return {
		mode: mode,
		entry: paths.entry,
		output: {
			filename: "[name].[contenthash].js", // файл сборки куда все полетит,
			path: paths.build , //папка билд,
			clean: true // для зачистки старых фалов в папке билд
		},
		plugins: buildPlugins(options),
		module: {
			rules: buildLoaders(),
		},
		resolve: buildResolvers(),
		devtool: 'inline-source-map',
		devServer: buildDevServer(options),
	}
}
