import {RouteProps} from "react-router-dom";
import {MainPage} from "../../../pages/MainPage";
import {AboutPage} from "../../../pages/AboutPage";
import {NotFoundPage} from "../../../pages/NotFoundPage";
import {ProfilePage} from "../../../pages/ProfilePage";
import {ArticlesPage} from "../../../pages/ArticlesPage";
import {ArticleDetailsPage} from "../../../pages/ArticleDetailsPage";
import ArticleEditPage from "../../../pages/ArticleEditPage/ui/ArticleEditPage/ArticleEditPage";
import {AdminPanelPage} from "../../../pages/AdminPanelPage";
import {ForbiddenPage} from "../../../pages/ForbiddenPage";
import {UserRole} from "../../../entities/User/model/consts/userConsts";

export type AppRouterProps = RouteProps & {
    authOnly? : boolean
    roles? : UserRole[]
}

export enum AppRoutes {
	MAIN = "main",
	ABOUT = "about",
    PROFILE = "profile", // + :id
    ARTICLES = "articles",
    ARTICLE_DETAILS = "article_details",
    ARTICLE_CREATE = "article_create",
    ARTICLE_EDIT = "article_edit",

    ADMIN_PANEL = "admin_panel",
    FORBIDDEN = "forbidden",
    //last
    NOT_FOUND = "not_found"
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: "/",
    [AppRoutes.ABOUT]: "/about",
    [AppRoutes.PROFILE]: "/profile/",
    [AppRoutes.ARTICLES]: "/articles",
    [AppRoutes.ARTICLE_DETAILS]: "/articles/", // + :id
    [AppRoutes.ARTICLE_CREATE]: "/articles/new",
    [AppRoutes.ARTICLE_EDIT]: "/articles/:id/edit",
    [AppRoutes.ADMIN_PANEL]: "/admin",
    [AppRoutes.FORBIDDEN]: "/forbidden",
    // последний
    // из-за * отработает если вверху не было нужных урлов
    [AppRoutes.NOT_FOUND]: "*"
};

export const routeConfig: Record<AppRoutes, AppRouterProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage/>
    },
    [AppRoutes.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPage/>
    },
    [AppRoutes.PROFILE]: {
        path: `${RoutePath.profile}:id`,
        element: <ProfilePage/>,
        authOnly: true
    },
    [AppRoutes.ARTICLES]: {
        path: RoutePath.articles,
        element: <ArticlesPage/>,
        authOnly: true
    },
    [AppRoutes.ARTICLE_DETAILS]: {
        path: `${RoutePath.article_details}:id`,
        element: <ArticleDetailsPage/>,
        authOnly: true
    },
    [AppRoutes.ARTICLE_EDIT]: {
        path: RoutePath.article_edit,
        element: <ArticleEditPage/>,
        authOnly: true
    },
    [AppRoutes.ARTICLE_CREATE]: {
        path: RoutePath.article_create,
        element: <ArticleEditPage/>,
        authOnly: true
    },
    [AppRoutes.ADMIN_PANEL]: {
        path: RoutePath.admin_panel,
        element: <AdminPanelPage/>,
        authOnly: true,
        roles: [UserRole.ADMIN, UserRole.MANAGER]
    },

    [AppRoutes.FORBIDDEN]: {
        path: RoutePath.admin_panel,
        element: <ForbiddenPage/>,
    },

    //last
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage/>
    },
};
