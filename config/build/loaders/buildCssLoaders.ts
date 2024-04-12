import MiniCssExtractPlugin from "mini-css-extract-plugin";

export const buildCssLoaders = (isDev: boolean) => {
    return {
        test: /\.s[ac]ss$/i,
        use: [
            // creates 'style' nodes from JS strings
            isDev ? "style-loader" : MiniCssExtractPlugin.loader,// вместо 'style-loader'
            // Translates CSS into Common JS
            {
                loader: "css-loader",
                options: {
                    modules: {
                        auto: (resPath: string) => Boolean(resPath.includes(".module.")), // отделяет хеширование модульных файлов от обычных сисс
                        localIdentName: isDev
                            ? "[path][name]__[local]--[hash:base64:5]" // если дев то так будут называться классы в модуль сисс
                            : "[hash:base64:8]" // если прод то так будут называться классы в модуль сисс
                    },

                }
            },
            // Compiles Sass to CSS
            "sass-loader",
        ]
    };
};
