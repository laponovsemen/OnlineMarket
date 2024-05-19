import React, {memo, Suspense, useCallback} from "react";
import {Route, Routes} from "react-router-dom";
import {PageLoader} from "@/widget/PageLoader";
import {RequireAuth} from "./RequireAuth";
import {routeConfig} from "../config/routeConfig";
import {AppRouterProps} from "@/shared/types/router";

/*const isAuth = useSelector(getUserAuthData);

    const routes = useMemo(() => {
        return Object
            .values(routeConfig)
            .filter(route => {
                if(route.authOnly && !isAuth){
                    return false;
                }
                return true;
            });
    }, [isAuth]);*/


const AppRouter = () => {
    const renderWithWrapper = useCallback((route: AppRouterProps) => {
        const element = (
            <Suspense fallback={<PageLoader/>}>
                { route.element}
            </Suspense>
        );
        console.error(route.path)
        //route.roles;
        return (
            <Route
                key={route.path}
                path={route.path}
                element={(
                    route.authOnly
                        ? (<RequireAuth>{element}</RequireAuth>)
                        : element
                )} />
        );
    }, []);


    return (

        <Routes>
            {Object.values(routeConfig).map(renderWithWrapper)}
        </Routes>

    );
};

export default memo(AppRouter);
