import React, {Suspense, useContext, useState} from 'react';
import "./styles/index.scss"
import {useTheme} from "./providers/ThemeProvider";
import {classNames} from "../shared/lib/classNames/classNames";
import {AppRouter} from "./providers/router";
import {Navbar} from "../widget/NavBar";
import {Sidebar} from "../widget/Sidebar";
import {useTranslation} from "react-i18next";



export const App = () => {
	const {theme} = useTheme()
	return (
		<div className={classNames('app', {}, [theme])}>
			<Suspense fallback={"Loading"}>

				<Navbar/>
				<div className={"content-page"}>
					<Sidebar/>
					<AppRouter/>
				</div>
			</Suspense>


		</div>
	);
};

