import {BuildOptions} from "./types/config";
import type {Configuration as DevServerConfiguration} from 'webpack-dev-server'
export function buildDevServer(options: BuildOptions): DevServerConfiguration {
	return {
		port : options.port,
		open: true, //автоматически открывает страницу в браузере
		historyApiFallback: true, // для того чтобы когда мы находимся на каком-нибудь <Route/> при перезагрузке страницы не падала 404 ошибка
		hot: true
	}
}
