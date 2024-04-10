import {render} from "react-dom";
import {Counter} from "./shared/ui/Counter/Counter";
import {App} from "./app/App";
import {BrowserRouter} from "react-router-dom";
import ThemeProvider from "./app/providers/ThemeProvider/ui/ThemeProvider";
import "./shared/config/i18n/i18n"

console.log("is dev ", __IS_DEV__)
// import React from "react"; в 17 версии реакта по дефолту импорт реакта не нужен решение в тс конфиге
// <BrowserRouter/> // для навигации по странице в спа
render(
	<BrowserRouter>
		<ThemeProvider>
			<App/>
		</ThemeProvider>

	</BrowserRouter>
	,
	document.getElementById('root')
)
