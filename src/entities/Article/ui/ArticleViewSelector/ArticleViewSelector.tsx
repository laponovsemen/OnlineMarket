import classes from "./ArticleViewSelector.module.scss";
import {classNames} from "../../../../shared/lib/classNames/classNames";
import {ArticleView} from "../../model/types/article";
import listViewBIG from "./../../../../shared/assets/icons/listViewBIG.svg";
import listViewSMALL from "./../../../../shared/assets/icons/listViewSMALL.svg";
import {Button, ButtonTheme} from "../../../../shared/ui/Button/Button";
import {Icon} from "../../../../shared/ui/Icon/Icon";

interface ArticleViewSelectorProps {
    className? :string
    view: ArticleView,
    onViewClick?: (view: ArticleView) => void
}


const viewTypes = [
    {
        view: ArticleView.SMALL,
        icon: listViewSMALL,
    },
    {
        view: ArticleView.BIG,
        icon: listViewBIG,
    },
];
export const ArticleViewSelector = (props : ArticleViewSelectorProps) => {
    const {
        className,
        onViewClick,
        view
    } = props;

    const onClick = (newView: ArticleView) => () => {
        onViewClick?.(newView);
    };

    return (
        <div className={classNames("", {} , [className])}>
            {
                viewTypes.map(viewType => (
                    <Button
                        theme={ButtonTheme.CLEAR}
                        onClick={onClick(viewType.view)}

                    >
                        <Icon
                            Svg={viewType.icon}
                            className={classNames(
                                "",
                                {
                                    [classes.selected]: viewType.view === view,
                                    [classes.notSelected]: viewType.view !== view,
                                },
                                []
                            )}
                        />
                    </Button>
                ))
            }
        </div>
    );
};

