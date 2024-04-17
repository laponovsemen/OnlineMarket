import {lazy} from "react";


// lazy loading, code-splitting, async chunks


export const ArticleDetailsPageAsync = lazy(() => new Promise(resolve => {
    // ТАК В РЕАЛЬНОСТИ НЕ ДЕЛАЕМ!!! ДЕЛАТЬ ДЛЯ ПРОВЕРКИ РАБОТЫ ПОДГРУЗКИ ЧАНКОВ

    setTimeout(() =>
    // @ts-ignore
        resolve(import("./ArticleDetailsPage"))
    , 1500);
}));
