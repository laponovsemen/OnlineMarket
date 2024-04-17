import React, {memo, Suspense, useCallback, useMemo} from "react";
import {Route, Routes} from "react-router-dom";
import {AppRouterProps, AppRoutes, routeConfig} from "../../../../shared/config/routeConfig/routeConfig";
import {PageLoader} from "../../../../widget/PageLoader/ui/PageLoader";
import {RequireAuth} from "./RequireAuth";

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
            <div className={"page-wrapper"}>

                <Suspense fallback={<PageLoader/>}>
                    { route.element}
                </Suspense>

            </div>);

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
