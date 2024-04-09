import React, {Suspense} from 'react';
import {Link, Route, Routes} from 'react-router-dom'
import "./../index.scss"
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";
import {MainPageAsync} from "./pages/MainPage/MainPage.async";

export const App = () => {
	return (
		<div className="app">
		<Link to={"/about"}>Главная страница</Link>
		<Link to={'/'}>О сайте</Link>
			<Suspense fallback={"Loading..."}>
				<Routes>
					<Route path={'/about'} element={<AboutPageAsync/>}/>
					<Route path={'/'} element={<MainPageAsync/>}/>
				</Routes>
			</Suspense>



		</div>
	);
};

