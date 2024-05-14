import {useTranslation} from "react-i18next";
import React, {memo, useCallback} from "react";
import {useNavigate} from "react-router-dom";
import {Button, ButtonTheme} from "@/shared/ui/Button";
import {classNames} from "@/shared/lib/classNames/classNames";
import {useSelector} from "react-redux";
import {getUserAuthData} from "@/entities/User";
import {getArticleDetailsData} from "@/entities/Article";
import {getCanEditArticle} from "../../model/selectors/article";
import {HStack} from "@/shared/ui/Stack";
import { getRouteArticleEdit, getRouteArticles} from "@/shared/const/router";

interface ArticleDetailsPageHeaderProps {
	className?: string
}

export const ArticleDetailsPageHeader = memo((props: ArticleDetailsPageHeaderProps) => {

    const {
        className
    } = props;

    const {t} = useTranslation();
    const navigate = useNavigate();
    const userData = useSelector(getUserAuthData);
    const article = useSelector(getArticleDetailsData);
    const canEdit = useSelector(getCanEditArticle);

    const onBackToList = useCallback(() => {
        navigate(getRouteArticles());
    }, [navigate]);

    const onEditArticle = useCallback(() => {
        if(article?.id){
            navigate(getRouteArticleEdit(article?.id));
        }

    }, [article?.id, navigate]);

    return (
        <HStack
            max
            justify={"between"}
            className={
                classNames(
                    "",
                    {}, [className])}
        >
            <Button
		        onClick={onBackToList}
		        theme={ButtonTheme.OUTLINE}
	        >
                {t("назад к списку")}
            </Button>
            {canEdit && <Button
		        onClick={onEditArticle}
		        theme={ButtonTheme.OUTLINE}
	        >
                {t("Редактировать")}
            </Button>
	        }
        </HStack>
    );
});

