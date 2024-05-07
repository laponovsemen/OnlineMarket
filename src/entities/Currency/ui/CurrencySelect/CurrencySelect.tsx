import classes from "./CurrencySelect.module.scss";
import {classNames} from "../../../../shared/lib/classNames/classNames";
import {Currency} from "../../model/types/currency";
import {useTranslation} from "react-i18next";
import {memo, useCallback} from "react";
import {ListBox} from "../../../../shared/ui/Popups/components/ListBox/ListBox";

interface CurrencySelectProps {
    className? :string
    value?: Currency
    onChange?: (value: Currency) => void
    readonly? : boolean
}

const options = [
    {value: Currency.RUB, content: Currency.RUB},
    {value: Currency.EUR, content: Currency.EUR},
    {value: Currency.USD, content: Currency.USD},
    {value: Currency.UAH, content: Currency.UAH},
];

export const CurrencySelect = memo((props : CurrencySelectProps) => {

    const {
        className,
        value,
        onChange,
        readonly
    } = props;

    const {t} = useTranslation();

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Currency);
    }, [onChange]);

    return (
        <ListBox
            className={
                classNames(
                    classes.CurrencySelect,
                    {} ,
                    [className])
            }
            defaultValue={t("Укажите валюту")}
            label={t("Укажите валюту")}
            items={options}
            value={value}
            direction={"top right"}
            onChange={onChangeHandler}
            readonly={readonly}
        />
    );

    // return (
    //     <Select
    //         className={
    //             classNames(
    //                 classes.CurrencySelect,
    //                 {} ,
    //                 [className])
    //         }
    //         label={t("Укажите валюту")}
    //         options={options}
    //         value={value}
    //         onChange={onChangeHandler}
    //         readonly={readonly}
    //     />
    // );
});

