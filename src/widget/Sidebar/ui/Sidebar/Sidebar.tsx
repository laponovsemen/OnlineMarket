import classes from "./Sidebar.module.scss";
import {classNames} from "../../../../shared/lib/classNames/classNames";
import React, {memo, useMemo, useState} from "react";
import {ThemeSwitcher} from "../../../ThemeSwitcher";
import {LangSwitcher} from "../../../LangSwitcher/LangSwitcher";
import {Button, ButtonSize, ButtonTheme} from "../../../../shared/ui/Button/Button";
import {useTranslation} from "react-i18next";
import {SidebarItem} from "../SidebarItem/SidebarItem";
import {useSelector} from "react-redux";
import {getSidebarItems} from "../../model/selectors/getSidebarItems";

//18 00
interface SidebarProps {
    className? :string
}

export const Sidebar = memo(({className} : SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const {t} = useTranslation();
    const sidebarItemsList = useSelector(getSidebarItems);

    const onToggle = () => {
        setCollapsed(prev => !prev);
    };

    const itemsList = useMemo(() => {
        return (
            sidebarItemsList.map(item => (
                <SidebarItem
                    key={item.path}
                    item={item}
                    collapsed={collapsed}

                />
            ))
        );
    }, [collapsed, sidebarItemsList]);

    return (
        <menu
            data-testid={"sidebar"}
            className={classNames(
                classes.Sidebar,
                {[classes.collapsed]: collapsed} ,
                [className])
            }>
            <Button
                data-testid="sidebar-toggle"
                onClick={onToggle}
                className={classes.collapseBtn}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                square
                size={ButtonSize.L}
            >
                {collapsed ? ">" : "<"}
            </Button>
            <div className={classes.items}>
                {itemsList}

            </div>
            <div className={classes.switchers}>
                <ThemeSwitcher/>
                <LangSwitcher
                    className={classes.lang}
                    short={collapsed}
                />
            </div>

        </menu>
    );
});

