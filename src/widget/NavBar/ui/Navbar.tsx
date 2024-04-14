import React, {useCallback, useState } from "react";
import {classNames} from "../../../shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";
import {useTranslation} from "react-i18next";
import {Modal} from "../../../shared/ui/Modal/Modal";
import {Button, ButtonTheme} from "../../../shared/ui/Button/Button";
import {LoginModal} from "../../../features/AuthByUserName";

interface NavbarProps {
	className? :string
}

export const Navbar = ({className}: NavbarProps) => {
    const {t} = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);
    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

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
            <LoginModal
                isOpen={isAuthModal}
                onClose={onCloseModal}
            />
        </div>
    );
};


