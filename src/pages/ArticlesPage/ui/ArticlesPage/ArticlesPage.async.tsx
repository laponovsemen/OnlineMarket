import { lazy } from "react";

// lazy loading, code-splitting, async chunks

export const ArticlesPageAsync = lazy(() => import("./ArticlesPage"));
