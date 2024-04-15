import React, {useCallback, useState } from "react";
import {classNames} from "../../../shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";
import {useTranslation} from "react-i18next";
import {Modal} from "../../../shared/ui/Modal/Modal";
import {Button, ButtonTheme} from "../../../shared/ui/Button/Button";
import {LoginModal} from "../../../features/AuthByUserName";
import {useDispatch, useSelector} from "react-redux";
import {getUserAuthData, userActions} from "../../../entities/User";

interface NavbarProps {
	className? :string
}

export const Navbar = ({className}: NavbarProps) => {
    const {t} = useTranslation();
    const dispatch = useDispatch();
    const [isAuthModal, setIsAuthModal] = useState(false);

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
            <div className={classNames(cls.Navbar, {}, [className])}>
                <Button
                    className={cls.links}
                    theme={ButtonTheme.CLEAR_INVERTED}
                    onClick={onLogout}
                >
                    {t("Выйти")}
                </Button>
            </div>
        );
    }


    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
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
        </div>
    );
};


