import React, {memo, Suspense, useMemo} from "react";
import {Route, Routes} from "react-router-dom";
import {AboutPage} from "../../../../pages/AboutPage";
import {MainPage} from "../../../../pages/MainPage";
import {routeConfig} from "../../../../shared/config/routeConfig/routeConfig";
import {PageLoader} from "../../../../widget/PageLoader/ui/PageLoader";
import {getUserAuthData} from "../../../../entities/User";
import {useSelector} from "react-redux";

const AppRouter = () => {

    const isAuth = useSelector(getUserAuthData);

    const routes = useMemo(() => {
        return Object
            .values(routeConfig)
            .filter(route => {
                if(route.authOnly && !isAuth){
                    return false;
                }
                return true;
            });
    }, [isAuth]);

    return (

        <Routes>
            {routes.map(({element, path}) => (

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

export default memo(AppRouter);
