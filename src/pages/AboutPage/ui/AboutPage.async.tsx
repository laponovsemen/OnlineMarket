import {lazy} from "react";


// lazy loading, code-splitting, async chunks


export const AboutPageAsync = lazy(() => new Promise(resolve => {
	// ТАК В РЕАЛЬНОСТИ НЕ ДЕЛАЕМ!!! ДЕЛАТЬ ДЛЯ ПРОВЕРКИ РАБОТЫ ПОДГРУЗКИ ЧАНКОВ

	setTimeout(() =>
	// @ts-ignore
	resolve(import('./AboutPage'))
	,1500) // <= НЕ ЗАБУДЬ ДОБАВИТЬ ТАЙМАУТ А ТО НЕ БУДЕТ АСИНХРОННОСТИ
}))
