import classes from "./Input.module.scss";
import { classNames, Mods } from "../../lib/classNames/classNames";
import React, {
    InputHTMLAttributes,
    memo,
    useEffect,
    useRef,
    useState,
} from "react";

type HTMLInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "value" | "onChange" | "readonly"
>;
interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string | number;
    onChange?: (value: string) => void;
    type?: string;
    placeholder?: string;
    autofocus?: boolean;
    readonly?: boolean;
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        onChange,
        value,
        type = "text",
        placeholder,
        autofocus,
        readonly,
        ...otherProps
    } = props;

    const [isFocused, setIsFocused] = useState(false);
    const [caretPosition, setCaretPosition] = useState(0);
    const ref = useRef<HTMLInputElement>(null);
    const isCaretVisible = isFocused && !readonly;

    useEffect(() => {
        if (autofocus) {
            setIsFocused(true);
            ref.current?.focus();
        }
    }, [autofocus]);

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
        setCaretPosition(e.target.value.length);
    };

    const onBlur = () => {
        setIsFocused(false);
    };

    const onFocus = () => {
        setIsFocused(true);
    };

    const onSelect = (e: any) => {
        setCaretPosition(e?.target?.selectionStart || 0);
    };

    const mods: Mods = {
        [classes.readonly]: readonly,
    };

    return (
        <div className={classNames(classes.InputWrapper, {}, [className])}>
            {placeholder && (
                <div className={classes.placeholder}>{`${placeholder}>`}</div>
            )}
            <div className={classes.caretWrapper}>
                <input
                    ref={ref}
                    type={type}
                    value={value}
                    readOnly={readonly}
                    onChange={onChangeHandler}
                    className={classes.input}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onSelect={onSelect}
                    {...otherProps}
                />
                {isCaretVisible && (
                    <span
                        className={classes.caret}
                        style={{ left: `${caretPosition * 9}px` }}
                    />
                )}
            </div>
        </div>
    );
});
