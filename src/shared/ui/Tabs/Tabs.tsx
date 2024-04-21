import classes from "./Tabs.module.scss";
import {memo, ReactNode, useCallback} from "react";
import {classNames} from "../../lib/classNames/classNames";
import {Card, CardTheme} from "../Card/Card";

export interface TabItem {
    value: string
    content: ReactNode
}

interface TabsProps {
	className?: string
    tabs: TabItem[]
    value: string
    onTabClick: (tab: TabItem) => void
}



export const Tabs = memo((props: TabsProps) => {

    const {
        className,
        tabs,
        onTabClick,
        value
    } = props;

    const clickHandle = useCallback((tab : TabItem) => {
        return () => {
            onTabClick(tab);
        };
    }, [onTabClick]);

    return (
        <div className={classNames(classes.Tabs, {}, [className])}>
            {tabs.map(tab => (
                <Card
                    onClick={clickHandle(tab)}
                    theme={tab.value === value ? CardTheme.NORMAL : CardTheme.OUTLINED}
                    key={tab.value}
                    className={classes.tab}
                >
                    {tab.content}
                </Card>
            ))}
        </div>
    );
});

