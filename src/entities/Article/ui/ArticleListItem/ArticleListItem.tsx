import classes from "./ArticleListItem.module.scss";
import {useTranslation} from "react-i18next";
import {HTMLAttributeAnchorTarget, memo, useCallback} from "react";
import {classNames} from "../../../../shared/lib/classNames/classNames";
import {Article, ArticleTextBlock} from "../../model/types/article";
import {Text} from "../../../../shared/ui/Text/Text";
import {Icon} from "../../../../shared/ui/Icon/Icon";
import EyeIcon from "../../../../shared/assets/icons/eye-20-20.svg";
import {Card, CardTheme} from "../../../../shared/ui/Card/Card";
import {Avatar} from "../../../../shared/ui/Avatar/Avatar";
import {Button, ButtonTheme} from "../../../../shared/ui/Button/Button";
import {ArticleTextBlockComponent} from "../ArticleTextBlockComponent/ArticleTextBlockComponent";
import {useNavigate} from "react-router-dom";
import {RoutePath} from "../../../../shared/config/routeConfig/routeConfig";
import {AppLink} from "../../../../shared/ui/AppLink/AppLink";
import {ArticleBlockType, ArticleView} from "../../model/consts/articleConsts";

interface ArticleListItemProps {
	className?: string
    article: Article
    view : ArticleView
    target?: HTMLAttributeAnchorTarget
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {

    const {
        className,
        article,
        view,
        target
    } = props;

    const {t} = useTranslation();




    const types = <Text
        text={article.type.join(", ")}
        className={classes.types}
    />;

    const views = (
        <>
            <Text text={String(article.views)} className={classes.views}/>
            <Icon Svg={EyeIcon}/>
        </>
    );
    /* const [isHover, bindHover] = useHover();
    console.log(isHover);*/

    if(view === ArticleView.BIG) {
        const textBlock = article.blocks.find(
            block =>
                block.type === ArticleBlockType.TEXT
        ) as ArticleTextBlock;
        return (
            <div className={classNames(classes.ArticleListItem, {}, [className, classes[view]])}>
                <Card className={classes.card} theme={CardTheme.NORMAL}>
                    <div className={classes.header}>
                        <Avatar size={30} src={article.user.avatar}/>
                        <Text text={article.user.username} className={classes.username}/>
                        <Text text={article.createdAt} className={classes.date}/>
                    </div>
                    <Text title={article.title} className={classes.title}/>
                    {types}
                    <img src={article.img} className={classes.image} alt={article.title}/>
                    {textBlock && (
                        <ArticleTextBlockComponent
                            block={textBlock}
                            className={classes.textBlock}
                        />
                    )}
                    <div className={classes.footer}>
                        <AppLink
                            target={target}
                            to={RoutePath.article_details + article.id}
                        >
                            <Button

                                theme={ButtonTheme.OUTLINE}
                            >
                                {t("Читать далее")}
                            </Button>
                        </AppLink>

                        {views}
                    </div>

                </Card>
            </div>
        );
    } else {
        //{...bindHover}
        return (
            <AppLink
                target={target}
                to={RoutePath.article_details + article.id}
                className={
                    classNames(
                        classes.ArticleListItem,
                        {},
                        [className, classes[view]])}
            >
                <Card theme={CardTheme.NORMAL}>
                    <div className={classes.imageWrapper}>
                        <img
                            alt={article.title}
                            src={article.img}
                            className={classes.image}
                        />
                        <Text text={article.createdAt} className={classes.date}/>
                    </div>
                    <div className={classes.infoWrapper}>
                        {types}
                        {views}
                    </div>
                    <Text text={article.title} className={classes.title}/>
                </Card>
            </AppLink>
        );
    }

});

