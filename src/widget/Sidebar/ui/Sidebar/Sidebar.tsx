import classes from "./Sidebar.module.scss";
import {classNames} from "../../../../shared/lib/classNames/classNames";
import React, {memo, useMemo, useState} from "react";
import {ThemeSwitcher} from "../../../ThemeSwitcher";
import {LangSwitcher} from "../../../LangSwitcher/ui/LangSwitcher";
import {Button, ButtonSize, ButtonTheme} from "../../../../shared/ui/Button/Button";
import {useTranslation} from "react-i18next";
import {SidebarItem} from "../SidebarItem/SidebarItem";
import {useSelector} from "react-redux";
import {getSidebarItems} from "../../model/selectors/getSidebarItems";
import {VStack} from "../../../../shared/ui/Stack/VStack/VStack";

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
        <aside
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
            <VStack
                role={"navigation"}
                gap={"8"}
                className={classes.items}
            >
                {itemsList}

            </VStack>
            <div className={classes.switchers}>
                <ThemeSwitcher/>
                <LangSwitcher
                    className={classes.lang}
                    short={collapsed}
                />
            </div>

        </aside>
    );
});

