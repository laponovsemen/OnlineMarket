import classes from "./Sidebar.module.scss";
import {classNames} from "../../../../shared/lib/classNames/classNames";
import {useState} from "react";
import {ThemeSwitcher} from "../../../ThemeSwitcher";
import {LangSwitcher} from "../../../LangSwitcher/LangSwitcher";
import {Button, ButtonTheme} from "../../../../shared/ui/Button/Button";

interface SidebarProps {
    className? :string
}

export const Sidebar = ({className} : SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
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
            >
                {collapsed ? ">" : "<"}
            </Button>
            <div className={classes.switchers}>
                <ThemeSwitcher/>
                <LangSwitcher className={classes.lang}/>
            </div>

        </div>
    );
};

