import {BuildOptions} from "../types/config";
import babelRemovePropsPlugin from "../../babel/babelRemovePropsPlugin";

// отказываемся от тс лоадера и начинаем юзать бейбл лоадер
// настраиваеи бейбл лоадер чтобы он выполнял задачи тс лоадера
interface BuildBabelLoaderProps extends BuildOptions {
    isTsx? : boolean;
}


export const buildBabelLoader = (options: BuildBabelLoaderProps) => {
    const {
        isTsx,
        isDev
    } = options;

    const isProd = !isDev;

    return {
        test: isTsx ? /\.(tsx|jsx)$/ : /\.(js|ts)$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader",
            options: {
                cacheDirectory: true,
                presets: ["@babel/preset-env"],
                plugins: [
                    [
                        "@babel/plugin-transform-typescript",
                        {
                            isTsx,
                        }
                    ],
                    "@babel/plugin-transform-runtime",
                    isTsx && isProd && [
                        babelRemovePropsPlugin,
                        {
                            props: [
                                "data-testid"
                            ]
                        }
                    ],
                    isDev && require.resolve("react-refresh/babel")
                ].filter(Boolean)
            }
        }
    };
};
