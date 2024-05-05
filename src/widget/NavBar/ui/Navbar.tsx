import React, {memo, useCallback, useState} from "react";
import {classNames} from "../../../shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";
import {useTranslation} from "react-i18next";
import {Button, ButtonTheme} from "../../../shared/ui/Button/Button";
import {LoginModal} from "../../../features/AuthByUserName";
import {useDispatch, useSelector} from "react-redux";
import {getUserAuthData, isUserAdmin, isUserManager, userActions} from "../../../entities/User";
import {Text, TextTheme} from "../../../shared/ui/Text/Text";
import {AppLink, AppLinkTheme} from "../../../shared/ui/AppLink/AppLink";
import {RoutePath} from "../../../shared/config/routeConfig/routeConfig";
import {Dropdown} from "../../../shared/ui/Dropdown/Dropdown";
import {Avatar} from "../../../shared/ui/Avatar/Avatar";

interface NavbarProps {
	className? :string
}

export const Navbar = memo(({className}: NavbarProps) => {
    const {t} = useTranslation();
    const dispatch = useDispatch();
    const [isAuthModal, setIsAuthModal] = useState(false);
    const isAdmin = useSelector(isUserAdmin);
    const isManager = useSelector(isUserManager);
    const isAdminPanelAvailable = isAdmin || isManager;
    const authData = useSelector(getUserAuthData);

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);
    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    const onLogout = useCallback(() =>{
        dispatch(userActions.logout());
    }, [dispatch]);

    if(authData) {
        return (
            <header className={classNames(cls.Navbar, {}, [className])}>
                <Text
                    className={cls.appName}
                    title={t("Self Made Habr")}
                    theme={TextTheme.INVERTED}
                />
                <AppLink
                    to={RoutePath.article_create}
                    theme={AppLinkTheme.SECONDARY}
                    className={cls.createBtn}
                >
                    {t("Создать статью")}
                </AppLink>
                <Dropdown
                    direction={"bottom left"}
                    className={cls.dropdown}
                    items={[
                        ...(isAdminPanelAvailable ? [{
                            content: t("Админка"),
                            href: RoutePath.admin_panel
                        }]: []),
                        {
                            content: t("Выйти"),
                            onClick: onLogout
                        },
                        {
                            content: t("Профиль"),
                            href: RoutePath.profile + authData.id
                        }
                    ]}
                    trigger={<Avatar size={30} src={authData.avatar}/>}
                />

            </header>
        );
    }


    return (
        <header className={classNames(cls.Navbar, {}, [className])}>
            <Button
                className={cls.links}
                theme={ButtonTheme.CLEAR_INVERTED}
                onClick={onShowModal}
            >
                {t("Войти")}
            </Button>
            {/*<Modal
                isOpen={isAuthModal}
                onClose={onToggleModal}

            >
                 eslint-disable-next-line i18next/no-literal-string
                 eslint-disable-next-line i18next/no-literal-string,max-len
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque blanditiis cupiditate eaque error illo nisi optio provident quam repudiandae similique, ullam voluptatibus. Dignissimos laborum necessitatibus nostrum quos totam voluptate.
            </Modal>*/}
            {isAuthModal && <LoginModal
                isOpen={isAuthModal}
                onClose={onCloseModal}
            />}
        </header>
    );
});


