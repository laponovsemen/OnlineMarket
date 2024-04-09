import webpack from "webpack";

export function buildResolvers() : webpack.ResolveOptions {
	return {
		extensions: ['.tsx', '.ts', '.js'], //для того чтобы при импорте файла в другой файл в другом файле не указывалось расширение  import Component from "./component
	}
}
