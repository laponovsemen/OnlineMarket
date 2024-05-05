import {Navigate, useLocation} from "react-router-dom";
import {useSelector} from "react-redux";
import {getUserAuthData} from "../../../../entities/User";
import {RoutePath} from "../../../../shared/config/routeConfig/routeConfig";
import {UserRole} from "../../../../entities/User/model/types/user";
import { useMemo } from "react";
import {getUserRoles} from "../../../../entities/User/model/selectors/getUserRoleSelector/getuserRoleSelector";

interface RequireAuthProps {
    children: JSX.Element;
    roles? : UserRole[]
}

export const RequireAuth = ({children, roles}: RequireAuthProps) => {
    const auth = useSelector(getUserAuthData);
    const location = useLocation();
    const userRoles = useSelector(getUserRoles);
    const hasRequiredRoles = useMemo(() => {
        if(!roles) {
            return true;
        }

        return roles.some(requiredRole => {
            const hasRole = userRoles?.includes(requiredRole);
            return hasRole;
        });
    }, [roles, userRoles]);

    if(!auth) {
        // Redirect them to the /login page, but save the current location they were
	    // trying to go to when they were redirected . This allows us to send them
	    // along to that page after they login, which is a nicer user expirience
	    // that dropping them off on the same home page
        return <Navigate
            to={RoutePath.main}
            state={{from: location}}
            replace
        />;
    }

    if(!hasRequiredRoles){
        return <Navigate
            to={RoutePath.forbidden}
            state={{from: location}}
            replace
        />;
    }

    return children;
};
