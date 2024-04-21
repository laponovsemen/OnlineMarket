import classes from "./Select.module.scss";
import {classNames, Mods} from "../../lib/classNames/classNames";
import {ChangeEvent, memo, useMemo} from "react";

export interface SelectOption<T extends string> {
    value: T
    content: string
}
interface SelectProps<T extends string>{
    className? :string
	label? : string
    options? : SelectOption<T>[]
    value? : T
    onChange?: (value: T) => void
    readonly?: boolean
}

export const Select = <T extends string>(props : SelectProps<T>) => {
    const {
        className,
        label,
        options,
        value,
        readonly,
        onChange
    } = props;

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value as T);
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
};

