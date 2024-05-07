import classes from "./Popover.module.scss";
import {useTranslation} from "react-i18next";
import {memo, ReactNode} from "react";
import {Popover as HPopover} from "@headlessui/react";
import {DropDownDirection} from "../../../../types/ui";
import {mapDirectionClass} from "../../styles/consts";
import popupCls from "./../../styles/popup.module.scss";
import {classNames} from "../../../../lib/classNames/classNames";


interface PopoverProps {
	className?: string
    direction? : DropDownDirection;
    trigger: ReactNode;
    children: ReactNode
}

export function Popover(props: PopoverProps) {

    const {
        className,
        trigger,
        direction = "bottom right",
        children,
    } = props;

    const menuClasses = [mapDirectionClass[direction]];

    return (
        <HPopover
            className={
                classNames(
                    classes.Popover,
                    {},
                    [className, popupCls.popup]
                )
            }
        >
            <HPopover.Button
                className={popupCls.trigger}
            >
                {trigger}
            </HPopover.Button>

            <HPopover.Panel
                className={
                    classNames(
                        classes.panel,
                        {},
                        menuClasses
                    )
                }
            >
                {children}
            </HPopover.Panel>

        </HPopover>
    );
}
