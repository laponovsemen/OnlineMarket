import {render} from "react-dom";
import {Counter} from "./components/Counter";
import {App} from "./App";
import {BrowserRouter} from "react-router-dom";

// import React from "react"; в 17 версии реакта по дефолту импорт реакта не нужен решение в тс конфиге
// <BrowserRouter/> // для навигации по странице в спа
render(
	<BrowserRouter>
		<App/>
	</BrowserRouter>
	,
	document.getElementById('root')
)
