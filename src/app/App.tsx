import React, {Suspense, useEffect, useState} from "react";

import { useTheme } from "./providers/ThemeProvider";
import { classNames } from "../shared/lib/classNames/classNames";
import { AppRouter } from "./providers/router";
import { Navbar } from "../widget/NavBar";
import { Sidebar } from "../widget/Sidebar";
import {Modal} from "../shared/ui/Modal/Modal";
import {useDispatch, useSelector} from "react-redux";
import {getUserInited, userActions} from "../entities/User";

export const App = () => {
    const { theme } = useTheme();
    const dispatch = useDispatch();
    const inited = useSelector(getUserInited);
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
                    {inited && <AppRouter/>}
                </div>
            </Suspense>

        </div>
    );
};
