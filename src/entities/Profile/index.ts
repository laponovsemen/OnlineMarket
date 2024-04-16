import {Profile, ProfileSchema} from "./model/types/profile";
import {profileActions, profileReducer} from "./model/slice/profileSlice";
import { fetchProfileData } from "./model/services/fetchProfileData/fetchProfileData";
import {ProfileCard} from "./ui/ProfileCard/ProfileCard";
import {getProfileIsLoading} from "./model/selectors/getProfileIsLoading/getProfileIsLoading";
import {getProfileError} from "./model/selectors/getProfileError/getProfileError";
import {getProfileData} from "./model/selectors/getProfileData/getProfileData";
import { getProfileReadonly } from "./model/selectors/getProfileReadonly/getProfileReadonly";
import {getProfileForm} from "./model/selectors/getProfileForm/getProfileForm";
import {updateProfileData} from "./model/services/updateProfileData/updateProfileData";

export {
    ProfileSchema,
    Profile,
    profileActions,
    profileReducer,
    fetchProfileData,
    ProfileCard,
    getProfileIsLoading,
    getProfileError,
    getProfileData,
    getProfileReadonly,
    getProfileForm,
    updateProfileData

};
