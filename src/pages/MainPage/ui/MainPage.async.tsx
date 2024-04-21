import {lazy} from "react";


// lazy loading, code-splitting, async chunks


export const MainPageAsync = lazy(() => import("./MainPage"));

