import classes from "./LoginModal.module.scss";
import {classNames} from "../../../../shared/lib/classNames/classNames";
import {Modal} from "../../../../shared/ui/Modal/Modal";
import {Suspense} from "react";
import {LoginFormAsync} from "../LoginForm/LoginForm.async";
import {Loader} from "../../../../shared/ui/Loader";

interface LoginModalProps {
    className? :string
    isOpen: boolean
    onClose : () => void
}

export const LoginModal = (props : LoginModalProps) => {
    const {
        className,
        isOpen,
        onClose
    } = props;

    return (
        <Modal
            lazy
            className={
                classNames(
                    classes.LoginModal,
                    {} ,
                    [className])
            }
            isOpen={isOpen}
            onClose={onClose}
        >

            <Suspense fallback={<Loader/>}>
                <LoginFormAsync/>
            </Suspense>

        </Modal>
    );
};
