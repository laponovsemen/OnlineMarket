import webpack from "webpack";
import {BuildOptions} from "./types/config";

export function buildResolvers(options: BuildOptions) : webpack.ResolveOptions {
    return {
        extensions: [".tsx", ".ts", ".js"], //для того чтобы при импорте файла в другой файл в другом файле не указывалось расширение  import Component from "./component
        preferAbsolute: true,
        modules: [options.paths.src, "node_modules"],
        mainFiles: ["index"],
        alias: {
            "@": options.paths.src // алиас для абсолютных импортов
        }
    };
}
