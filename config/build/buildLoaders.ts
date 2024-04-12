import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/config";
import {buildCssLoaders} from "./loaders/buildCssLoaders";
import {buildSVGLoaders} from "./loaders/buildSVGLoaders";

export function buildLoaders (options: BuildOptions) : webpack.RuleSetRule[]{
    const {isDev} = options;

    const babelLoader = {
        test: /\.(js|tsx|jsx)$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader",
            options: {
                presets: ["@babel/preset-env"],
                plugins: [
                    [
                        "i18next-extract",
                        {
                            locales: ["ru", "en"],
                            keyAsDefaultValue: true
                        }
                    ]
                ]
            }
        }
    };

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
    const typescriptLoader ={
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
    };

    return [ // одно из самых важных полей в конфиге здесь мы указываем какие лоадеры будем использовать
        fileLoader,
        svgLoader,
        babelLoader,
        typescriptLoader,
        cssLoader
    ];
}
