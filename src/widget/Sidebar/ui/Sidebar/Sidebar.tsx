import classes from "./Sidebar.module.scss";
import {classNames} from "../../../../shared/lib/classNames/classNames";
import React, {useState} from "react";
import {ThemeSwitcher} from "../../../ThemeSwitcher";
import {LangSwitcher} from "../../../LangSwitcher/LangSwitcher";
import {Button, ButtonSize, ButtonTheme} from "../../../../shared/ui/Button/Button";
import {AppLink, AppLinkTheme} from "../../../../shared/ui/AppLink/AppLink";
import cls from "../../../NavBar/ui/Navbar.module.scss";
import {useTranslation} from "react-i18next";
import {RoutePath} from "../../../../shared/config/routeConfig/routeConfig";
import AboutIcon from "./../../../../shared/assets/icons/about-20-20.svg";
import MainIcon from "./../../../../shared/assets/icons/main-20-20.svg";

//18 00
interface SidebarProps {
    className? :string
}

export const Sidebar = ({className} : SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const {t} = useTranslation();
    const onToggle = () => {
        setCollapsed(prev => !prev);
    };
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


                <AppLink
                    to={RoutePath.main}
                    className={classes.item}
                    theme={AppLinkTheme.SECONDARY}
                >
                    <MainIcon className={classes.icon}/>
                    <span className={classes.link}>{t("Главная страница")}</span>
                </AppLink>

                <AppLink
                    to={RoutePath.about}
                    className={classes.item}
                    theme={AppLinkTheme.SECONDARY}
                >
                    <AboutIcon className={classes.icon}/>
                    <span className={classes.link}>{t("О сайте")}</span>
                </AppLink>



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
};

