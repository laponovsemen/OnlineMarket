import classes from "./Select.module.scss";
import {classNames, Mods} from "../../lib/classNames/classNames";
import {ChangeEvent, memo, useMemo} from "react";

export interface SelectOption {
    value: string
    content: string
}
interface SelectProps {
    className? :string
	label? : string
    options? : SelectOption[]
    value? : string
    onChange?: (value: string) => void
    readonly?: boolean
}

export const Select = memo((props : SelectProps) => {
    const {
        className,
        label,
        options,
        value,
        readonly,
        onChange
    } = props;

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value);
    };

    const optionsList = useMemo(() => {
        return options?.map(item => {
            return (
                <option
                    className={classes.option}
                    value={item.value}
                    key={item.value}
                >
                    {item.content}
                </option>
            );
        });
    }, [options]);

    const mods: Mods = {

    };

    return (
        <div
            className={
                classNames(
                    classes.SelectWrapper,
                    {} ,
                    [className])
            }>
            {label && <span className={classes.label}>
                {`${label}>`}
            </span>}
            <select
                className={classes.select}
                value={value}
                onChange={onChangeHandler}
                disabled={readonly} /* readonly тут не работает у селекта есть только disabled */
            >
                {optionsList}
            </select>
        </div>
    );
});

