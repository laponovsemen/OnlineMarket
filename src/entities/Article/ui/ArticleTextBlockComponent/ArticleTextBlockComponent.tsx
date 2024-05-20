import classes from "./ArticleTextBlockComponent.module.scss";
import { useTranslation } from "react-i18next";
import { classNames } from "../../../../shared/lib/classNames/classNames";
import { memo } from "react";
import { ArticleTextBlock } from "../../model/types/article";
import { Text } from "../../../../shared/ui/Text/Text";
interface ArticleTextBlockComponentProps {
    className?: string;
    block: ArticleTextBlock;
}

export const ArticleTextBlockComponent = memo(
    (props: ArticleTextBlockComponentProps) => {
        const { className, block } = props;

        const { t } = useTranslation();

        return (
            <div
                className={classNames(classes.ArticleTextBlockComponent, {}, [
                    className,
                ])}
            >
                {block.title && (
                    <Text
                        title={block.title}
                        className={classes.title}
                    />
                )}
                {block.paragraphs.map((paragraph, index) => (
                    <Text
                        text={paragraph}
                        key={index}
                        className={classes.paragraph}
                    />
                ))}
            </div>
        );
    },
);
