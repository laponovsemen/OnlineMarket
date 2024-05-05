import classes from "./ArticleDetails.module.scss";
import {useTranslation} from "react-i18next";
import {classNames} from "../../../../shared/lib/classNames/classNames";
import {
    DynamicModuleLoader,
    ReducersList
} from "../../../../shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {articleDetailsReducer} from "../../model/slice/articleDetailsSlice";
import {memo, useCallback, useEffect} from "react";
import {useAppDispatch} from "../../../../shared/lib/hooks/useAppDispatch/useAppDispatch";
import {fetchArticleById} from "../../model/services/fetchArticleById/fetchArticleById";
import {useSelector} from "react-redux";
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading
} from "../../model/selectors/articleDetails/articleDetails";
import {Text, TextAlign, TextSize, TextTheme} from "../../../../shared/ui/Text/Text";
import {Skeleton} from "../../../../shared/ui/Skeleton/Skeleton";
import {Avatar} from "../../../../shared/ui/Avatar/Avatar";
import EyeIcon from "../../../../shared/assets/icons/eye-20-20.svg";
import CalendarIcon from "../../../../shared/assets/icons/calendar-20-20.svg";
import {Icon} from "../../../../shared/ui/Icon/Icon";
import {ArticleBlock, ArticleBlockType} from "../../model/types/article";
import {ArticleCodeBlockComponent} from "../ArticleCodeBlockComponent/ArticleCodeBlockComponent";
import {ArticleImageBlockComponent} from "../ArticleImageBlockComponent/ArticleImageBlockComponent";
import {ArticleTextBlockComponent} from "../ArticleTextBlockComponent/ArticleTextBlockComponent";
import {useInitialEffect} from "../../../../shared/lib/hooks/useInitialEffect/useInitialEffect";
import {HStack, VStack} from "../../../../shared/ui/Stack";


interface ArticleDetailsProps {
	className?: string;
    id: string
}

const reducers: ReducersList = {
    articleDetails: articleDetailsReducer
};

export const ArticleDetails = memo((props: ArticleDetailsProps) => {

    const {
        className,
        id
    } = props;

    const {t} = useTranslation("article-details");
    const dispatch = useAppDispatch();
    const isLoading = useSelector(getArticleDetailsIsLoading);
    //const isLoading = true;
    const article = useSelector(getArticleDetailsData);
    const error = useSelector(getArticleDetailsError);

    const renderBlock = useCallback((block: ArticleBlock) => {
        switch (block.type){
        case ArticleBlockType.CODE:
            return <ArticleCodeBlockComponent key={block.id} className={classes.block} block={block} />;
        case ArticleBlockType.IMAGE:
            return <ArticleImageBlockComponent key={block.id} className={classes.block} block={block} />;
        case ArticleBlockType.TEXT:
            return <ArticleTextBlockComponent key={block.id} className={classes.block} block={block}/>;
        default:
            return null;
        }
    }, []);

    useInitialEffect(() => dispatch(fetchArticleById(id)));


    let content;

    if(isLoading) {
        content = (
            <div>
                <Skeleton className={classes.avatar} width={200} height={200} border={"50%"} />
                <Skeleton className={classes.title} width={300} height={32} />
                <Skeleton className={classes.skeleton} width={600} height={24} />
                <Skeleton className={classes.skeleton} width={"100%"} height={200} />
                <Skeleton className={classes.skeleton} width={"100%"} height={200} />
            </div>
        );
    } else if (error) {
        content = (
            <Text
                theme={TextTheme.ERROR}
                align={TextAlign.CENTER}
                title={t("Произошла ошибка при загрузке статьи")}
            />
        );
    } else {
        content = (
            <>
                <HStack
                    justify={"center"}
                    className={classes.avatarWrapper}
                    max
                >
                    <Avatar
                        className={classes.avatar}
                        size={200}
                        src={article?.img}
                    />
                </HStack>
                <VStack gap={"4"} max>
                    <Text
                        size={TextSize.L}
                        title={article?.title}
                        text={article?.subtitle}
                    />
                    <HStack gap={"8"} className={classes.articleInfo}>
                        <Icon className={classes.icon} Svg={EyeIcon}/>
                        <Text text={String(article?.views)}/>
                    </HStack>
                    <HStack gap={"8"} className={classes.articleInfo}>
                        <Icon className={classes.icon} Svg={CalendarIcon}/>
                        <Text text={article?.createdAt}/>
                    </HStack>
                </VStack>
                {article?.blocks.map(renderBlock)}
            </>
        );
    }

    return (
        <DynamicModuleLoader
            reducers={reducers}
            removeAfterUnmount
        >
            <VStack
                gap={"16"}
                max
                className={
                    classNames(
                        classes.ArticleDetails,
                        {},
                        [className])}
            >
                {content}
            </VStack>
        </DynamicModuleLoader>

    );
});

