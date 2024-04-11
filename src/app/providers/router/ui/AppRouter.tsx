import React, {Suspense} from "react";
import {Route, Routes} from "react-router-dom";
import {AboutPage} from "../../../../pages/AboutPage";
import {MainPage} from "../../../../pages/MainPage";
import {routeConfig} from "../../../../shared/config/routeConfig/routeConfig";
import {PageLoader} from "../../../../widget/PageLoader/ui/PageLoader";

const AppRouter = () => {
    return (

        <Routes>
            {Object
                .values(routeConfig)
                .map(({element, path}) => (

                    <Route
                        key={path}
                        path={path}
                        element={
                            <div className={"page-wrapper"}>

                                <Suspense fallback={<PageLoader/>}>
                                    { element}
                                </Suspense>

                            </div>
                        } />
                ))
            }
        </Routes>

    );
};

export default AppRouter;
