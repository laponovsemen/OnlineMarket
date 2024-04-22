import { Menu } from "@headlessui/react";
import classes from "./Dropdown.module.scss";
import {classNames} from "../../lib/classNames/classNames";
import {Fragment, ReactNode} from "react";
import {DropDownDirection} from "../../types/ui";
import {AppLink} from "../AppLink/AppLink";

export interface DropdownItem {
    disabled? : boolean;
    content? : ReactNode;
    onClick?: () => void
    href? : string
}

interface DropdownProps {
    className? : string
    items? : DropdownItem[]
    trigger? : ReactNode
    direction? : DropDownDirection

}

const mapDirectionClass: Record<DropDownDirection, string> = {
    "bottom left": classes.optionsBottomLeft,
    "bottom right": classes.optionsBottomRight,
    "top left": classes.optionsTopLeft,
    "top right": classes.optionsTopRight,
};



export function Dropdown(props : DropdownProps) {
    const {
        className,
        trigger,
        items,
        direction = "bottom right"

    } = props;


    const menuClasses: string[] = [
        mapDirectionClass[direction]
    ];

    return (
        <Menu
            as={"div"}
            className={
                classNames(
                    classes.Dropdown,
                    {},
                    [className])}
        >
            <Menu.Button className={classes.btn}>
                {trigger}
            </Menu.Button>

            <Menu.Items
                className={
                    classNames(
                        classes.menu,
                        {},
                        menuClasses)}
            >
                {items?.map(item => {
                    const content =(
                        ({active }: {active: boolean} ) => (
                            <button
                                type={"button"}
                                onClick={item.onClick}
                                disabled={item.disabled}
                                className={
                                    classNames(
                                        classes.item,
                                        {[classes.active]: active},
                                        []
                                    )}
                            >
                                {item.content}
                            </button>
                        )
                    );

                    if(item.href) {
                        return (
                            <Menu.Item
                                as={AppLink}
                                to={item.href}
                                disabled={item.disabled}
                                key={item.href}
                            >
                                {content}
                            </Menu.Item>
                        );
                    }

                    return(
                        <Menu.Item
                            as={Fragment}
                            disabled={item.disabled}
                            key={item.href}
                        >
                            {content}
                        </Menu.Item>
                    );})}
            </Menu.Items>
        </Menu>
    );
}
