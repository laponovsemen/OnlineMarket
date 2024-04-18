import classes from "./CommentList.module.scss";
import {memo} from "react";
import {classNames} from "../../../../shared/lib/classNames/classNames";
import {useTranslation} from "react-i18next";
import {Text} from "../../../../shared/ui/Text/Text";
import {CommentCard} from "../CommentCard/CommentCard";
import {Comment} from "../../model/types/comment";
// todo в данном случае селекторами не пользуемся а принимаем все из пропсов так как в отличие от артикл детейлс этот компонент будет переиспользуемым ( комменты могут быть к посту к товару и к чему еще угодно)
interface CommentListProps {
	className?: string
    comments? : Comment[]
    isLoading? : boolean
}

export const CommentList = memo((props: CommentListProps) => {

    const {
        className,
        comments,
        isLoading
    } = props;

    const {t} = useTranslation();


    if(isLoading) {
        return (
            <div className={classNames(classes.CommentList, {}, [className])}>
                <CommentCard isLoading />
                <CommentCard isLoading />
                <CommentCard isLoading />
            </div>
        );
    }

    return (
        <div className={classNames(classes.CommentList, {}, [className])}>
            {comments?.length
                ? comments.map(comment => (
                    <CommentCard
                        isLoading={isLoading}
                        className={classes.comment}
                        comment={comment}
                    />
                ))
                : <Text text={t("Комментарии отсутствуют")}/>
            }
        </div>
    );
});

