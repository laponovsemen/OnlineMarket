import {userReducer, userActions} from "./model/slice/userSlice";
import {UserSchema, User} from "./model/types/user";
import {getUserAuthData} from "./model/selectors/getUserAuthData/getUserAuthData";
import {getUserInited} from "./model/selectors/getUserInited/getUserInited";
import {
    isUserAdmin,
    isUserManager
} from "./model/selectors/getUserRoleSelector/getuserRoleSelector";



export {
    userReducer,
    userActions,
    UserSchema,
    User,
    getUserAuthData,
    getUserInited,
    isUserAdmin,
    isUserManager,
};
