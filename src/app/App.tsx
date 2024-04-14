import React, {Suspense, useEffect, useState} from "react";

import { useTheme } from "./providers/ThemeProvider";
import { classNames } from "../shared/lib/classNames/classNames";
import { AppRouter } from "./providers/router";
import { Navbar } from "../widget/NavBar";
import { Sidebar } from "../widget/Sidebar";
import {Modal} from "../shared/ui/Modal/Modal";
import {useDispatch} from "react-redux";
import {userActions} from "../entities/User";

export const App = () => {
    const { theme } = useTheme();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);
    return (
        <div className={classNames("app", {}, [theme])}>
            {/* eslint-disable-next-line i18next/no-literal-string */}
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
