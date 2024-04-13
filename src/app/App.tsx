import React, {Suspense, useState} from "react";

import { useTheme } from "./providers/ThemeProvider";
import { classNames } from "../shared/lib/classNames/classNames";
import { AppRouter } from "./providers/router";
import { Navbar } from "../widget/NavBar";
import { Sidebar } from "../widget/Sidebar";
import {Modal} from "../shared/ui/Modal/Modal";

export const App = () => {
    const { theme } = useTheme();
    // useEffect(() => {
    //     throw new Error();
    // });
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
