import classes from "./AddCommentForm.module.scss";
import {useTranslation} from "react-i18next";
import {memo, useCallback} from "react";
import {classNames} from "../../../shared/lib/classNames/classNames";
import {Input} from "../../../shared/ui/Input/Input";
import {Button, ButtonTheme} from "../../../shared/ui/Button/Button";
import {useSelector} from "react-redux";
import {
    getAddCommentFormError,
    getAddCommentFormText
} from "../model/selectors/addCommentFormSelectors";
import {useAppDispatch} from "../../../shared/lib/hooks/useAppDispatch/useAppDispatch";
import {addCommentFormActions, addCommentFormReducer} from "../model/slices/addCommentFormSlice";
import {
    DynamicModuleLoader,
    ReducersList
} from "../../../shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";

export interface AddCommentFormProps {
	className?: string
    onSendComment : (text: string) => void
}

const reducers: ReducersList = {
    addCommentForm: addCommentFormReducer
};

const AddCommentForm = memo((props: AddCommentFormProps) => {

    const {
        className,
        onSendComment
    } = props;

    const text = useSelector(getAddCommentFormText);
    const error = useSelector(getAddCommentFormError);
    const dispatch = useAppDispatch();
    const {t} = useTranslation();

    const onCommentTextChange = useCallback((value: string) => {
        console.log("value in onCommentTextChange", value);
        dispatch(addCommentFormActions.setText(value));
    }, [dispatch]);

    const onSendHandler = useCallback(() => {
        onSendComment(text || "");
        onCommentTextChange("");
    }, [onCommentTextChange, onSendComment, text]);

    return (
        <DynamicModuleLoader
            reducers={reducers}
        >
            <div className={classNames(classes.AddCommentForm, {}, [className])}>
                <Input
                    className={classes.input}
                    value={text}
                    placeholder={t("Введите текст комментария")}
                    onChange={onCommentTextChange}
                />
                <Button
                    theme={ButtonTheme.CLEAR}
                    onClick={onSendHandler}
                >
                    {t("Отправить")}
                </Button>
            </div>
        </DynamicModuleLoader>
    );
});

export default AddCommentForm;
