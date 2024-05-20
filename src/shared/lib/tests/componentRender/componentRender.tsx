import {ReactNode} from "react";
import {render} from "@testing-library/react";
import {I18nextProvider} from "react-i18next";
import i18nForTests from "../../../config/i18n/i18nForTests";
import {MemoryRouter} from "react-router-dom";
import {StateSchema, StoreProvider} from "../../../../app/providers/StoreProvider";
import {ReducersMapObject} from "@reduxjs/toolkit";
// eslint-disable-next-line semen-the-sailor-plugin/layer-imports
import {ThemeProvider} from "@/app/providers/ThemeProvider";
import {Theme} from "@/shared/const/theme";
// eslint-disable-next-line semen-the-sailor-plugin/layer-imports
import "@/app/styles/index.scss";
export interface componentRenderOptions {
	route?: string
    initialState? : DeepPartial<StateSchema>
    asyncReducers? : DeepPartial<ReducersMapObject<StateSchema>>
    theme? : Theme
}

export interface TestProviderProps {
    children: ReactNode;
    options? : componentRenderOptions
}

export const TestProvider = (props : TestProviderProps) => {
    const {
        children,
        options = {}

    } = props;

    const {
        route = "/",
        asyncReducers,
        initialState,
        theme = Theme.LIGHT
    } = options;
    return (
        <MemoryRouter initialEntries={[route]}>
            <StoreProvider
                initialState={initialState}
                asyncReducers={asyncReducers}
            >

                <I18nextProvider i18n={i18nForTests}>
                    <ThemeProvider initialTheme={theme}>
                        <div className={`app ${theme}`}>
                            {children}
                        </div>

                    </ThemeProvider>
                </I18nextProvider>

            </StoreProvider>
        </MemoryRouter>
    );
};

export function componentRender(component: ReactNode, options: componentRenderOptions = {}){

    return render(
        <TestProvider options={options} >
            {component}
        </TestProvider>
    );
}
