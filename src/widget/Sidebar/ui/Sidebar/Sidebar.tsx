import classes from "./Sidebar.module.scss";
import {classNames} from "../../../../shared/lib/classNames/classNames";
import React, {memo, useMemo, useState} from "react";
import {ThemeSwitcher} from "../../../ThemeSwitcher";
import {LangSwitcher} from "../../../LangSwitcher/LangSwitcher";
import {Button, ButtonSize, ButtonTheme} from "../../../../shared/ui/Button/Button";
import {AppLink, AppLinkTheme} from "../../../../shared/ui/AppLink/AppLink";
import cls from "../../../NavBar/ui/Navbar.module.scss";
import {useTranslation} from "react-i18next";
import {RoutePath} from "../../../../shared/config/routeConfig/routeConfig";
import {SidebarItemsList} from "../../model/item";
import {SidebarItem} from "../SidebarItem/SidebarItem";

//18 00
interface SidebarProps {
    className? :string
}

export const Sidebar = memo(({className} : SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const {t} = useTranslation();
    const onToggle = () => {
        setCollapsed(prev => !prev);
    };

    const itemsList = useMemo(() => {
        return (
            SidebarItemsList.map(item => (
                <SidebarItem
                    key={item.path}
                    item={item}
                    collapsed={collapsed}
                />
            ))
        );
    }, [collapsed]);

    return (
        <div
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

        </div>
    );
});

