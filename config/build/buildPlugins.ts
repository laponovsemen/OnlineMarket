import HTMLWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import {BuildOptions} from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BundleAnalyzerPlugin} from "webpack-bundle-analyzer";
import ReactRefreshPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import CopyPlugin from "copy-webpack-plugin";
import CircularDependencyPlugin from "circular-dependency-plugin";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";


// todo dependency cruiser
export function buildPlugins({paths, isDev, apiUrl, project}: BuildOptions)
    : webpack.WebpackPluginInstance[] {
    const isProd = !isDev;

    const plugins = [ // порядок плагинов не важен в отличие от лоадеров
        new HTMLWebpackPlugin({
            template: paths.html // для использования нашего собственного хтмл фала как шаблона вместо дефолтного пустого который сам создает вебпак
        }), // для подключения хтмл файлов к сборке
        new webpack.ProgressPlugin(), // для показания прогресса билда

        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
            __API__: JSON.stringify(apiUrl),
            __PROJECT__ : JSON.stringify(project)
        }),

        new CircularDependencyPlugin({
            exclude: /node_modules/,
            failOnError: true,
        }),
        new ForkTsCheckerWebpackPlugin({ // для запуска стороннего процеса проверки компиляции тайпскрипта ( типы )
            typescript: {
                diagnosticOptions: {
                    semantic: true,
                    syntactic: true,
                },
                mode: "write-references"
            }
        })

    ];
    if(isDev){
        plugins.push(new ReactRefreshPlugin());
        //plugins.push(new webpack.HotModuleReplacementPlugin()); // для обновления изменений в проекте без перезагрузки страницы в браузере;
        plugins.push(new BundleAnalyzerPlugin({
            openAnalyzer: false
        }));
    }

    if(isProd) {
        plugins.push(new MiniCssExtractPlugin({
            filename: "css/[name].[contenthash:8].css",
            chunkFilename: "css/[name].[contenthash:8].css",

        })); // для раздельной компиляции сисс фалой и джс)

        plugins.push(new CopyPlugin({
            patterns: [
                {from: paths.locales, to: paths.buildLocales}
            ]
        })); // для переноса переводов из папки паблик в папку билд    }


    }
    return plugins;
}
