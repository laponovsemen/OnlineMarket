import { lazy } from "react";

// lazy loading, code-splitting, async chunks

export const AdminPanelPageAsync = lazy(() => import("./AdminPanelPage"));
