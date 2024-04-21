import classes from "./ArticleSortSelector.module.scss";
import {useTranslation} from "react-i18next";
import {memo, useCallback, useMemo} from "react";
import {Select, SelectOption} from "../../../../shared/ui/Select/Select";
import {classNames} from "../../../../shared/lib/classNames/classNames";
import {ArticleSortField} from "../../model/types/article";
import {SortOrder} from "../../../../shared/types";

interface ArticleSortSelectorProps {
	className?: string
    sort: ArticleSortField;
    order: SortOrder;
    onChangeOrder: (newOrder: SortOrder) => void;
    onChangeSort: (newSort: ArticleSortField) => void
}

export const ArticleSortSelector = memo((props: ArticleSortSelectorProps) => {

    const {
        className,
        sort,
        order,
        onChangeSort,
        onChangeOrder
    } = props;

    const {t} = useTranslation();

    const orderOptions = useMemo<SelectOption<SortOrder>[]>(() => [
        {
            value: "asc",
            content: t("возрастанию")
        },
        {
            value: "desc",
            content: t("убыванию")
        }
    ], [t]);

    const sortFieldOptions = useMemo<SelectOption<ArticleSortField>[]>(() => [
        {
            value: ArticleSortField.CREATED,
            content: t("дате создания")
        },
        {
            value: ArticleSortField.TITLE,
            content: t("названию")
        },
        {
            value: ArticleSortField.VIEWS,
            content: t("просмотрам")
        }
    ], [t]);

    /*const changeSortHandler = useCallback((newSort: string) => {
        onChangeSort(newSort as ArticleSortField);
    }, [onChangeSort]);

    const changeOrderHandler = useCallback((newOrder: string) => {
        onChangeOrder(newOrder as SortOrder);
    }, [onChangeOrder]);*/


    return (
        <div className={classNames(classes.ArticleSortSelector, {}, [className])}>
            <Select<ArticleSortField>
                options={sortFieldOptions}
                label={t("Сортировать по")}
                value={sort}
                onChange={onChangeSort}
            />
            <Select<SortOrder>
                options={orderOptions}
                label={t("по")}
                value={order}
                onChange={onChangeOrder}
                className={classes.order}
            />
        </div>
    );
});

