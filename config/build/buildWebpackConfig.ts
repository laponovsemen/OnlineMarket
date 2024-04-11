import {BuildOptions} from "./types/config";
import webpack from "webpack";
import {buildPlugins} from "./buildPlugins";
import {buildLoaders} from "./buildLoaders";
import {buildResolvers} from "./buildResolvers";
import {buildDevServer} from "./buildDevServer";

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {

    const {mode, paths, isDev} = options;

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
            rules: buildLoaders(options),
        },
        resolve: buildResolvers(),
        devtool: isDev ? "inline-source-map" : undefined, // создание сорс карт или же сорс мапов для отлавливания ошибок в дев режиме
        devServer: isDev ? buildDevServer(options): undefined, // запуск дев сервера только в дев режиме
    };
}
