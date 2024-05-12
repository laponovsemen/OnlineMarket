import classes from "./RatingCard.module.scss";
import {useTranslation} from "react-i18next";
import {memo, useCallback, useState} from "react";
import {classNames} from "@/shared/lib/classNames/classNames";
import {Card} from "@/shared/ui/Card/Card";
import {HStack, VStack} from "@/shared/ui/Stack";
import {Text} from "@/shared/ui/Text/Text";
import {StarRating} from "@/shared/ui/StarRating/StarRating";
import {Modal} from "@/shared/ui/Modal/Modal";
import {Input} from "@/shared/ui/Input/Input";
import {Button, ButtonSize, ButtonTheme} from "@/shared/ui/Button/Button";
import {useTheme} from "@/app/providers/ThemeProvider";
import {BrowserView, MobileView} from "react-device-detect";
import {Drawer} from "@/shared/ui/Drawer/Drawer";

interface RatingCardProps {
	className?: string
    title? : string;
    feedbackTitle?: string
    hasFeedback?: boolean;
    rate?: number;
    onCancel? : (starsCount: number) => void;
    onAccept? : (starsCount: number, feedBack?: string) => void
}

export const RatingCard = memo((props: RatingCardProps) => {

    const {
        className,
        hasFeedback,
        onAccept,
        onCancel,
        feedbackTitle,
        title,
        rate = 0
    } = props;

    const {t} = useTranslation();
    const {theme} = useTheme();
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [starsCount, setStarsCount] = useState<number>(rate);
    const [feedback, setFeedback] = useState<string>("");

    /**
     * хендлер вызываемый при выборе количества звезд
     * при том что вызывается при нажатии,
     * если hasFeedback === true тогда откроется модальное окно с обработиком фидбека,
     * иначе кол-во звезд улетит наверх
     */
    const onSelectStars = useCallback((selectedStarsCount: number) => {
        setStarsCount(selectedStarsCount);
        if(hasFeedback){
            setIsModalOpen(true);

        } else {
            onAccept?.(selectedStarsCount);
        }
    }, [hasFeedback, onAccept]);

    const acceptHandle = useCallback(() => {
        setIsModalOpen(false);
        onAccept?.(starsCount, feedback);
    },[feedback, onAccept, starsCount]);

    const cancelHandle = useCallback(() => {
        setIsModalOpen(false);
        onCancel?.(starsCount);
    },[onCancel, starsCount]);

    const modalContent = (
        <>
            <Text title={feedbackTitle}/>
            <Input
                value={feedback}
                onChange={setFeedback}
                placeholder={t("Ваш отзыв")}
            />
        </>

    );

    return (
        <Card
            max
            className={
                classNames(
                    classes.RatingCard,
                    {},
                    [className, theme])}
        >
            <VStack
                max
                align={"center"}
                gap={"8"}
            >
                <Text title={starsCount ? t("Спасибо за оценку") : title } />
                <StarRating
                    size={40}
                    selectedStars={starsCount}
                    onSelect={onSelectStars}
                />

                <BrowserView>
                    <Modal
                        isOpen={isModalOpen}
                        lazy
                    >
                        <VStack
                            max
                            gap={"32"}
                        >
                            {modalContent}
                            <HStack
                                max
                                gap={"16"}
                                justify={"end"}
                            >
                                <Button
                                    onClick={cancelHandle}
                                    theme={ButtonTheme.OUTLINE_RED}
                                >
                                    {t("Закрыть")}
                                </Button>

                                <Button
                                    onClick={acceptHandle}
                                >
                                    {t("Отправить")}
                                </Button>
                            </HStack>
                        </VStack>
                    </Modal>
                </BrowserView>
                <MobileView>
                    <Drawer
                        isOpen={isModalOpen}
                        lazy
                        onClose={cancelHandle}
                    >
                        <VStack
                            gap={"32"}
                        >
                            {modalContent}
                            <Button
                                onClick={acceptHandle}
                                size={ButtonSize.L}
                                fullWidth
                            >
                                {t("Отправить")}
                            </Button>
                        </VStack>

                    </Drawer>
                </MobileView>
            </VStack>
        </Card>
    );
});

