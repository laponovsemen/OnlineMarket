// eslint-disable-next-line react/no-deprecated
// import { render } from "react-dom";
import { App } from "./app/App";
import { BrowserRouter } from "react-router-dom";
import ThemeProvider from "./app/providers/ThemeProvider/ui/ThemeProvider";
import "./shared/config/i18n/i18n";
import "./app/styles/index.scss";
import ErrorBoundary from "./app/providers/ErrorBoundary/ui/ErrorBoundary";
import { StoreProvider } from "./app/providers/StoreProvider";
import { createRoot } from "react-dom/client";

// import React from "react"; в 17 версии реакта по дефолту импорт реакта не нужен решение в тс конфиге
// <BrowserRouter/> // для навигации по странице в спа
// render(
//     <BrowserRouter>
//         <StoreProvider>
//             <ErrorBoundary>
//                 <ThemeProvider>
//                     <App/>
//                 </ThemeProvider>
//             </ErrorBoundary>
//         </StoreProvider>
//     </BrowserRouter>
//     ,
//     document.getElementById("root")
// );

const container = document.getElementById("root");
if (!container) {
    throw new Error(
        "Контейнер root не найден. Не удалось вмонтировать реакт приложение",
    );
}

const root = createRoot(container); // createRoot(container!)  if you use typescript
root.render(
    <BrowserRouter>
        <StoreProvider>
            <ErrorBoundary>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </ErrorBoundary>
        </StoreProvider>
    </BrowserRouter>,
);
// <BrowserRouter>
// <StoreProvider>
// <ErrorBoundary>
// <ThemeProvider>
//
// </ThemeProvider>
// </ErrorBoundary>
// </StoreProvider>
// </BrowserRouter>
export { Theme } from "@/shared/const/theme";
