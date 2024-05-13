import classes from "./Page.module.scss";
import {memo, MutableRefObject, ReactNode, useRef, UIEvent} from "react";
import {classNames} from "../../../shared/lib/classNames/classNames";
import {useInitialEffect} from "../../../shared/lib/hooks/useInitialEffect/useInitialEffect";
import {useInfiniteScroll} from "../../../shared/lib/hooks/useInfiniteScroll/useInfiniteScroll";
import {useAppDispatch} from "../../../shared/lib/hooks/useAppDispatch/useAppDispatch";
import {scrollRestorationActions} from "../../../features/scrollRestoration/model/slices/scrollRestorationSlice";
import {useLocation} from "react-router-dom";
import {useSelector} from "react-redux";
import {getScrollRestorationByPath} from "../../../features/scrollRestoration";
import {StateSchema} from "../../../app/providers/StoreProvider";
import {useThrottle} from "../../../shared/lib/hooks/useThrottle/useThrottle";

interface PageProps {
	className?: string
    children: ReactNode
    onScrollEnd? : () => void
}

export const PAGE__ID = "PAGE__ID";

export const Page = memo((props: PageProps) => {

    const {
        className,
        children,
        onScrollEnd
    } = props;

    const wrapperRef = useRef() as MutableRefObject<HTMLElement>;
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
    const dispatch = useAppDispatch();
    const location = useLocation();
    const scrollPosition = useSelector((state: StateSchema) => getScrollRestorationByPath(state, location.pathname));

    useInfiniteScroll({
        triggerRef,
        wrapperRef,
        callback: onScrollEnd
    });

    useInitialEffect(() => {
        wrapperRef.current.scrollTop = scrollPosition;
    });

    const onScroll = useThrottle((e : UIEvent<HTMLDivElement>) => {
        console.log("scroll", e.currentTarget.scrollTop);
        dispatch(scrollRestorationActions.setScrollPosition({
            position: e.currentTarget.scrollTop,
            path: location.pathname
        }));
    }, 500);

    return (
        <section
            ref={wrapperRef}
            onScroll={onScroll}
            className={
                classNames(
                    classes.Page,
                    {},
                    [className])}
            id={PAGE__ID}
        >
            {children}
            {onScrollEnd
                ? <div className={classes.trigger} ref={triggerRef}/>
                : null}
        </section>
    );
});

