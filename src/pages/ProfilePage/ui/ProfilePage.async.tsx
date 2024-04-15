import {lazy} from "react";


// lazy loading, code-splitting, async chunks


export const ProfilePageAsync = lazy(() => new Promise(resolve => {
    // ТАК В РЕАЛЬНОСТИ НЕ ДЕЛАЕМ!!! ДЕЛАТЬ ДЛЯ ПРОВЕРКИ РАБОТЫ ПОДГРУЗКИ ЧАНКОВ

    setTimeout(() =>
    // @ts-ignore
        resolve(import("./ProfilePage"))
    , 1500);
}));
