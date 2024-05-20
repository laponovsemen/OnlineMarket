import { memo } from "react";
import { classNames } from "../../../../shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { Text } from "../../../../shared/ui/Text/Text";
import { CommentCard } from "../CommentCard/CommentCard";
import { Comment } from "../../model/types/comment";
import { VStack } from "../../../../shared/ui/Stack";
// todo в данном случае селекторами не пользуемся а принимаем все из пропсов так как в отличие от артикл детейлс этот компонент будет переиспользуемым ( комменты могут быть к посту к товару и к чему еще угодно)
interface CommentListProps {
    className?: string;
    comments?: Comment[];
    isLoading?: boolean;
}

export const CommentList = memo((props: CommentListProps) => {
    const { className, comments, isLoading } = props;

    const { t } = useTranslation();

    if (isLoading) {
        return (
            <VStack
                gap={"16"}
                max
                className={classNames("", {}, [className])}
            >
                <CommentCard isLoading />
                <CommentCard isLoading />
                <CommentCard isLoading />
            </VStack>
        );
    }

    return (
        <VStack
            gap={"16"}
            max
            className={classNames("", {}, [className])}
        >
            {comments?.length ? (
                comments.map((comment) => (
                    <CommentCard
                        isLoading={isLoading}
                        comment={comment}
                        key={comment.id}
                    />
                ))
            ) : (
                <Text text={t("Комментарии отсутствуют")} />
            )}
        </VStack>
    );
});
