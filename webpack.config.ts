import path from "path";
import HTMLWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
const config : webpack.Configuration = {
    mode: "development",
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    output: {
        filename: "[name].[contenthash].js", // файл сборки куда все полетит,
        path: path.resolve(__dirname, 'build'), //папка билд,
        clean: true // для зачистки старых фалов в папке билд
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html') // для использования нашего собственного хтмл фала как шаблона вместо дефолтного пустого который сам создает вебпак
        }), // для подключения хтмл файлов к сборке
        new webpack.ProgressPlugin(), // для показания прогресса билда

    ],
    module: {
        rules: [ // одно из самых важных полей в конфиге здесь мы указываем какие лоадеры будем использовать
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'], //для того чтобы при импорте файла в другой файл в другом файле не указывалось расширение  import Component from "./component
    },
}
export default config
