import classes from "./CommentCard.module.scss";
import { memo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Comment } from "../../model/types/comment";
import { Avatar } from "@/shared/ui/Avatar";
import { Text } from "@/shared/ui/Text";
import { Skeleton } from "@/shared/ui/Skeleton";
import { AppLink } from "@/shared/ui/AppLink";
import { VStack } from "@/shared/ui/Stack";
import { getRouteProfile } from "@/shared/const/router";
interface CommentCardProps {
    className?: string;
    comment?: Comment;
    isLoading?: boolean;
}

export const CommentCard = memo((props: CommentCardProps) => {
    const { className, comment, isLoading } = props;

    if (isLoading) {
        return (
            <VStack
                data-testid={"CommentCard.Loading"}
                gap={"16"}
                max
                className={classNames(classes.CommentCard, {}, [
                    className,
                    classes.loading,
                ])}
            >
                <div className={classes.header}>
                    <Skeleton
                        width={30}
                        height={30}
                        border={"50%"}
                    />
                    <Skeleton
                        height={16}
                        width={100}
                        className={classes.username}
                    />
                </div>
                <Skeleton
                    className={classes.text}
                    width={"100%"}
                    height={50}
                />
            </VStack>
        );
    }

    if (!comment) {
        return null;
    }

    return (
        <VStack
            data-testid={"CommentCard.Content"}
            gap={"8"}
            max
            className={classNames(classes.CommentCard, {}, [className])}
        >
            <AppLink
                to={getRouteProfile(comment.user.id)}
                className={classes.header}
            >
                {comment.user?.avatar && (
                    <Avatar
                        size={30}
                        src={comment.user.avatar}
                    />
                )}
                <Text
                    className={classes.username}
                    title={comment.user.username}
                />
            </AppLink>
            <Text
                className={classes.text}
                text={comment.text}
            />
        </VStack>
    );
});
