import {lazy} from "react";


// lazy loading, code-splitting, async chunks


export const AboutPageAsync = lazy(()  => import("./AboutPage"));
