import classes from "./ListBox.module.scss";
import {useTranslation} from "react-i18next";
import {Fragment, memo, ReactNode, useState} from "react";
import {Listbox as HListBox} from "@headlessui/react";
import {classNames, Mods} from "../../lib/classNames/classNames";
import {Button} from "../Button/Button";
import {HStack} from "../Stack";

/*const people = [
    { id: 1, name: "Durward Reynolds", unavailable: false },
    { id: 2, name: "Kenton Towne", unavailable: false },
    { id: 3, name: "Therese Wunsch", unavailable: false },
    { id: 4, name: "Benedict Kessler", unavailable: true },
    { id: 5, name: "Katelyn Rohan", unavailable: false },
];*/

export interface ListBoxItem {
    value: string
    content: ReactNode
    disabled?: boolean
}

type DropDownDirection = "top" | "bottom"


interface ListBoxProps {
    items? : ListBoxItem[]
    className?: string
    value? : string
    defaultValue?: string
    readonly? : boolean
    direction? : DropDownDirection
    label? :string
    onChange: <T extends string>(value: T) => void
}

const mapDirectionClass: Record<DropDownDirection, string> = {
    bottom: classes.optionsBottom,
    top: classes.optionsTop,
};

export function ListBox(props: ListBoxProps) {
    const {
        className,
        items,
        defaultValue,
        onChange,
        label,
        value,
        readonly,
        direction = "bottom"
    } = props;

    const optionsClasses: string[] = [
        mapDirectionClass[direction]
    ];

    return (
        <HStack
            gap={"4"}
        >
            {label && <span className={classes.label}>{label + ">"}</span>}
            <HListBox
                disabled={readonly}
                as={"div"}
                className={
                    classNames(
                        classes.ListBox,
                        {},
                        [className])}
                value={value}
                onChange={onChange}
            >

                <HListBox.Button
                    className={classes.trigger}
                    disabled={readonly}
                >
                    <Button
                        disabled={readonly}
                    >
                        {value ?? defaultValue}
                    </Button>
                </HListBox.Button>
                <HListBox.Options
                    className={classNames(classes.options, {}, optionsClasses)}
                >
                    {items?.map((item) => (

                        <HListBox.Option
                            key={item.value}
                            value={item.value}
                            as={Fragment}
                            disabled={item.disabled}
                        >
                            {({active, selected}) => (
                                <li
                                    className={
                                        classNames(
                                            classes.item,
                                            {
                                                [classes.active] : active,
                                                [classes.selected] : selected,
                                                [classes.disabled] : item.disabled,
                                            },
                                            [])}
                                >
                                    {item.content}
                                </li>
                            )}

                        </HListBox.Option>
                    ))}
                </HListBox.Options>
            </HListBox>
        </HStack>
    );
}
