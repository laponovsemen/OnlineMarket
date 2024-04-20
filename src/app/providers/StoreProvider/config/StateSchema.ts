import {CounterSchema} from "../../../../entities/Counter";
import {UserSchema} from "../../../../entities/User";
import {LoginSchema} from "../../../../features/AuthByUserName";
import {AnyAction, CombinedState, Dispatch, EnhancedStore, Reducer, ReducersMapObject} from "@reduxjs/toolkit";
import {ProfileSchema} from "../../../../entities/Profile";
import {AxiosInstance} from "axios";
import {NavigateOptions, To} from "react-router-dom";
import {ArticleDetailsSchema} from "../../../../entities/Article";
import {ArticleDetailsCommentsSchema} from "../../../../pages/ArticleDetailsPage";
import {AddCommentFormSchema} from "../../../../features/addCommentForm";
import {AppDispatch} from "./store";
import {ArticlePageSchema} from "../../../../pages/ArticlesPage";
import {ReducersList} from "../../../../shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";



export interface StateSchema {
	counter: CounterSchema
	user: UserSchema

	// Асинхронные редьюсеры
	loginForm? : LoginSchema
	profile?: ProfileSchema
	articleDetails? : ArticleDetailsSchema
	articleDetailsComments? :ArticleDetailsCommentsSchema
	addCommentForm? : AddCommentFormSchema
	articlesPage? : ArticlePageSchema;
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
