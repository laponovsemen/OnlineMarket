import React, {Suspense, useContext, useState} from 'react';
import "./styles/index.scss"
import {useTheme} from "./providers/ThemeProvider";
import {classNames} from "../shared/lib/classNames/classNames";
import {AppRouter} from "./providers/router";
import {Navbar} from "../widget/NavBar";
import {Sidebar} from "../widget/Sidebar";



export const App = () => {
	const {theme} = useTheme()
	return (
		<div className={classNames('app', {}, [theme])}>
			<Navbar/>
			<div className={"content-page"}>
				<Sidebar/>
				<AppRouter/>
			</div>

		</div>
	);
};

