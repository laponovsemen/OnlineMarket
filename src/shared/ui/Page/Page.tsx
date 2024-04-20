import classes from "./Page.module.scss";
import {memo, MutableRefObject, ReactNode, useRef} from "react";
import {classNames} from "../../lib/classNames/classNames";
import {useInitialEffect} from "../../lib/hooks/useInitialEffect/useInitialEffect";
import {useInfiniteScroll} from "../../lib/hooks/useInfiniteScroll/useInfiniteScroll";

interface PageProps {
	className?: string
    children: ReactNode
    onScrollEnd? : () => void
}

export const Page = memo((props: PageProps) => {

    const {
        className,
        children,
        onScrollEnd
    } = props;

    const wrapperRef = useRef() as MutableRefObject<HTMLElement>;
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

    useInfiniteScroll({
        triggerRef,
        wrapperRef,
        callback: onScrollEnd
    });

    return (
        <section
            ref={wrapperRef}
            className={
                classNames(
                    classes.Page,
                    {},
                    [className])}
        >
            {children}
            <div ref={triggerRef}/>
        </section>
    );
});

