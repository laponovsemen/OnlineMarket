import {lazy} from "react";


// lazy loading, code-splitting, async chunks


export const ArticleDetailsPageAsync = lazy(() =>

    import("./ArticleDetailsPage"));


