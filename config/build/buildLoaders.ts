import webpack from "webpack";
import {BuildOptions} from "./types/config";
import {buildCssLoaders} from "./loaders/buildCssLoaders";
import {buildSVGLoaders} from "./loaders/buildSVGLoaders";
import {buildBabelLoader} from "./loaders/buildBabelLoader";

export function buildLoaders (options: BuildOptions) : webpack.RuleSetRule[]{
    const {isDev} = options;
    // теперь ошибки тайпскрипта не влияют на скорость сборки -
    // это вынесено в отдельный процесс
    // для обработки тс файлов
    const codeBabelLoader = buildBabelLoader({...options, isTsx: false});
    // для обработки тсикс файлов
    const tsxCodeBabelLoader = buildBabelLoader({...options, isTsx: true});

    const svgLoader = buildSVGLoaders();

    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff2|woff)$/i,
        use: [
            {
                loader: "file-loader",
            }
        ]
    };

    const cssLoader = buildCssLoaders(isDev);

    // если не используем тайпскрипт - нужен babel-loader
    // const typescriptLoader = {
    //     test: /\.tsx?$/,
    //     use: "ts-loader",
    //     exclude: /node_modules/,
    // };

    return [ // одно из самых важных полей в конфиге здесь мы указываем какие лоадеры будем использовать
        fileLoader,
        svgLoader,
        codeBabelLoader,
        tsxCodeBabelLoader,
        // typescriptLoader,
        cssLoader
    ];
}
