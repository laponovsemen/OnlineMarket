import React, {Suspense, useContext, useState} from 'react';
import {Link, Route, Routes} from 'react-router-dom'
import "./styles/index.scss"
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";
import {MainPageAsync} from "./pages/MainPage/MainPage.async";
import {Theme, ThemeContext} from "./theme/ThemeContext";
import {useTheme} from "./theme/useTheme";



export const App = () => {
	const {theme, toggleTheme} = useTheme()
	return (
		<div className={`app ${theme}`}>
			<button onClick={toggleTheme}>TOGGLE</button>
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

