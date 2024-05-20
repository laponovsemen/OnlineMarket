import classes from "./StarRating.module.scss";
import { memo, useState } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Icon } from "../Icon/Icon";
import starIcon from "./../../assets/icons/star.svg";

interface StarRatingProps {
    className?: string;
    onSelect?: (starsCount: number) => void;
    size?: number;
    selectedStars?: number;
}

const stars = [1, 2, 3, 4, 5];

/**
 *  пример компоненты с программно управляемым ховером через джс
 */

export const StarRating = memo((props: StarRatingProps) => {
    const { className, size = 30, selectedStars = 0, onSelect } = props;

    const [currentStarsCount, setCurrentStarsCount] = useState(selectedStars);
    const [isSelected, setIsSelected] = useState(Boolean(selectedStars));

    const onHover = (starsCount: number) => () => {
        if (!isSelected) {
            setCurrentStarsCount(starsCount);
        }
    };

    const onLeave = () => {
        if (!isSelected) {
            setCurrentStarsCount(0);
        }
    };

    const onClick = (starsCount: number) => () => {
        if (!isSelected) {
            onSelect?.(starsCount);
            setCurrentStarsCount(starsCount);
            setIsSelected(true);
        }
    };

    return (
        <div className={classNames(classes.StarRating, {}, [className])}>
            {stars.map((starNumber, index) => (
                <Icon
                    className={classNames(
                        classes.starIcon,
                        {
                            [classes.hovered]: currentStarsCount >= starNumber,
                            [classes.normal]: !(
                                currentStarsCount >= starNumber
                            ),
                            [classes.selected]: isSelected,
                        },
                        [],
                    )}
                    Svg={starIcon}
                    key={index}
                    height={size}
                    width={size}
                    onMouseLeave={onLeave}
                    onMouseEnter={onHover(starNumber)}
                    onClick={onClick(starNumber)}
                    data-testid={`StarRating.${starNumber}`}
                    data-selected={currentStarsCount >= starNumber}
                />
            ))}
        </div>
    );
});
