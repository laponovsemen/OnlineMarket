import webpack from "webpack";
import {BuildPaths} from "../build/types/config";
import path from "path";
import {buildCssLoaders} from "../build/loaders/buildCssLoaders";
import {buildSVGLoaders} from "../build/loaders/buildSVGLoaders";

export default ({config}: {config: webpack.Configuration}) => {
    // 08:48
    const paths: BuildPaths = {
        build: "",
        html: "",
        entry: "",
        src: path.resolve(__dirname, "..", "..", "src"),
        buildLocales:"",
        locales: ""
    };
    config!.resolve!.modules!.push(paths.src);
    config!.resolve!.extensions!.push(".ts", ".tsx");
    // @ts-ignore
    config!.module!.rules = config!.module!.rules!.map((rule: webpack.RuleSetRule) => {
        if (/svg/.test(rule.test as string)) {
            return {
                ...rule,
                exclude: /\.svg$/i // для овверрайда обработки свг уже существующими лоадерами для свг
            };
        }
        return rule;
    });
    config!.module!.rules.push(buildCssLoaders(true));
    config!.module!.rules.push(buildSVGLoaders());
    config!.plugins!.push(new webpack.DefinePlugin({
        __IS_DEV__: JSON.stringify(true),
        __API__: JSON.stringify("https://testapi.ru"),
        __PROJECT__ : JSON.stringify("storybook")
    }));

    return config;
};
