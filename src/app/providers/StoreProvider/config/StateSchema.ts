import {CounterSchema} from "../../../../entities/Counter";
import {UserSchema} from "../../../../entities/User";
import {LoginSchema} from "../../../../features/AuthByUserName";
import {
    AnyAction,
    CombinedState,
    EnhancedStore,
    Reducer,
    ReducersMapObject
} from "@reduxjs/toolkit";
import {AxiosInstance} from "axios";
import {ArticleDetailsSchema} from "../../../../entities/Article";
import {ArticleDetailsPageSchema} from "../../../../pages/ArticleDetailsPage";
import {AddCommentFormSchema} from "../../../../features/addCommentForm";
import {AppDispatch} from "./store";
import {ArticlePageSchema} from "../../../../pages/ArticlesPage";
import {ScrollRestorationSchema} from "../../../../features/scrollRestoration";
import {rtkApi} from "../../../../shared/api/rtkApi";
import {ProfileSchema} from "../../../../features/editableProfileCard";


export interface StateSchema {
	counter: CounterSchema
	user: UserSchema
	scrollRestoration: ScrollRestorationSchema

	[rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>


	// Асинхронные редьюсеры
	loginForm? : LoginSchema
	profile?: ProfileSchema
	articleDetails? : ArticleDetailsSchema
	addCommentForm? : AddCommentFormSchema
	articlesPage? : ArticlePageSchema;
	articleDetailsPage? : ArticleDetailsPageSchema;

}

export type StateSchemaKey = keyof StateSchema

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
	reducerManager :ReducerManager
}

export type MountedReducers = OptionalRecord<StateSchemaKey, boolean>

export interface ReducerManager {
	getReducerMap: () => ReducersMapObject<StateSchema>;
	reduce:(state: StateSchema, action: AnyAction) => CombinedState<StateSchema>
	add: (key: StateSchemaKey, reducer: Reducer) => void;
	remove: (key: StateSchemaKey) => void
	// true - вмонтирован , false - невмонтирован или удален
	getMountedReducers: () => MountedReducers
}

export interface ThunkExtraArg {
	api: AxiosInstance;
	//navigate?: (to: To, options?: NavigateOptions) => void
}

export interface ThunkConfig<T> {
	rejectValue: T;
	extra: ThunkExtraArg;
	dispatch: AppDispatch;
	state: StateSchema // добавляется в дженерик в санку чтобы функция getState не возвращала unknown а StateSchema
}
