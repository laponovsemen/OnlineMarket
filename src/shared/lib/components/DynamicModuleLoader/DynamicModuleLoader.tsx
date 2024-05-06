import {FC, ReactNode, useEffect} from "react";
import {loginReducer} from "../../../../features/AuthByUserName";
import {useDispatch, useStore} from "react-redux";
import {ReduxStoreWithManager} from "../../../../app/providers/StoreProvider";
import {StateSchemaKey} from "../../../../app/providers/StoreProvider/config/StateSchema";
import {Reducer} from "@reduxjs/toolkit";


export type ReducersList = {
    [name in StateSchemaKey]? : Reducer
    // [name in StateSchemaKey]? : Reducer<NonNullable<StateSchema>[name]>
}

type ReducersListEntry = [StateSchemaKey, Reducer]
interface DynamicModuleLoaderProps {
	reducers: ReducersList
    removeAfterUnmount? :boolean;
    children: ReactNode
}

export const DynamicModuleLoader = (props: DynamicModuleLoaderProps) => {
    const {
        children,
        reducers,
        removeAfterUnmount = true
    } = props;
    const store = useStore() as ReduxStoreWithManager;
    const dispatch = useDispatch();

    useEffect(() => {
        const mountedReducers = store.reducerManager.getMountedReducers();


        Object.entries(reducers).forEach(([name, reducer]) => {
            const mounted = mountedReducers[name as StateSchemaKey];

            // добавляем новый редьюсер только если его нет
            if(!mounted) {
                store.reducerManager?.add(name as StateSchemaKey, reducer);
                dispatch({type: `@INIT ${name} reducer`});
            }


        });

        return () => {
            if(removeAfterUnmount) {
                Object.entries(reducers).forEach(([name, reducer]) => {
                    store.reducerManager?.remove(name as StateSchemaKey);
                    dispatch({type: `@DESTROY ${name} reducer`});
                });

            }
        };
        // eslint-disable-next-line
	}, []);

    return (
        <>
            {children}
        </>
    );
};

