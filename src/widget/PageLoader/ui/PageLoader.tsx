import classes from "./PageLoader.module.scss";
import { classNames } from "../../../shared/lib/classNames/classNames";
import { Loader } from "../../../shared/ui/Loader";

interface PageLoaderProps {
    className?: string;
}

export const PageLoader = ({ className }: PageLoaderProps) => {
    return (
        <div className={classNames(classes.PageLoader, {}, [className])}>
            <Loader />
        </div>
    );
};
