import classes from "./CountrySelect.module.scss";
import {useTranslation} from "react-i18next";
import {memo, useCallback} from "react";
import {Country} from "../../model/types/country";
import {Select} from "../../../../shared/ui/Select/Select";
import {classNames} from "../../../../shared/lib/classNames/classNames";

interface CountrySelectProps {
	className? :string
	value?: Country
	onChange?: (value: Country) => void
	readonly? : boolean
}

const options = [
    {value: Country.ARMENIA, content: Country.ARMENIA},
    {value: Country.BELARUS, content: Country.BELARUS},
    {value: Country.GEORGIA, content: Country.GEORGIA},
    {value: Country.RUSSIA, content: Country.RUSSIA},
    {value: Country.UKRAINE, content: Country.UKRAINE},
    {value: Country.KAZAKHSTAN, content: Country.KAZAKHSTAN},
];

export const CountrySelect = memo((props : CountrySelectProps) => {

    const {
        className,
        value,
        onChange,
        readonly
    } = props;

    const {t} = useTranslation("profile");

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Country);
    }, [onChange]);

    return (
        <Select
            className={
                classNames(
                    classes.CurrencySelect,
                    {} ,
                    [className])
            }
            label={t("Укажите страну")}
            options={options}
            value={value}
            onChange={onChangeHandler}
            readonly={readonly}
        />


    );
});