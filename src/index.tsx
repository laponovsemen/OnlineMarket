// eslint-disable-next-line react/no-deprecated
import { render } from "react-dom";
import { App } from "./app/App";
import { BrowserRouter } from "react-router-dom";
import ThemeProvider from "./app/providers/ThemeProvider/ui/ThemeProvider";
import "./shared/config/i18n/i18n";
import "./app/styles/index.scss";
import ErrorBoundary from "./app/providers/ErrorBoundary/ui/ErrorBoundary";
import {StoreProvider} from "./app/providers/StoreProvider";


// import React from "react"; в 17 версии реакта по дефолту импорт реакта не нужен решение в тс конфиге
// <BrowserRouter/> // для навигации по странице в спа
render(
    <StoreProvider>
        <BrowserRouter>
            <ErrorBoundary>
                <ThemeProvider>
                    <App/>
                </ThemeProvider>
            </ErrorBoundary>
        </BrowserRouter>
    </StoreProvider>
    ,
    document.getElementById("root")
);
