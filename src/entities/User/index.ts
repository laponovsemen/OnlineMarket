import { userReducer, userActions } from "./model/slice/userSlice";
import { UserSchema, User } from "./model/types/user";
import { UserRole } from "./model/consts/userConsts";
import { getUserAuthData } from "./model/selectors/getUserAuthData/getUserAuthData";
import { getUserInited } from "./model/selectors/getUserInited/getUserInited";
import {
    isUserAdmin,
    isUserManager,
} from "./model/selectors/getUserRoleSelector/getuserRoleSelector";

export {
    userReducer,
    userActions,
    getUserAuthData,
    getUserInited,
    isUserAdmin,
    isUserManager,
    UserRole,
};
export type { UserSchema, User };
