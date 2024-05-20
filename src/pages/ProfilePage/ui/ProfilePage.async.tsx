import { lazy } from "react";

// lazy loading, code-splitting, async chunks

export const ProfilePageAsync = lazy(() => import("./ProfilePage"));
