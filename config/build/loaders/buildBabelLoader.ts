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

    return {
        test: isTsx ? /\.(tsx|jsx)$/ : /\.(js|ts)$/,
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
                    ],
                    [
                        "@babel/plugin-transform-typescript",
                        {
                            isTsx,
                        }
                    ],
                    "@babel/plugin-transform-runtime",
                    isTsx && [
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
