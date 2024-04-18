import classes from "./Code.module.scss";
import {memo, ReactNode, useCallback} from "react";
import {classNames} from "../../lib/classNames/classNames";
import {Button, ButtonTheme} from "../Button/Button";
import CopyIcon from "../../assets/icons/copy-20-20.svg";
import {Icon} from "../Icon/Icon";


interface CodeProps {
	className?: string
    text: string
}

export const Code = memo((props: CodeProps) => {

    const {
        className,
        text
    } = props;

    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(text);
        //alert("copied to clipboard");
    }, [text]);

    return (
        <pre className={
            classNames(
                classes.Code,
                {},
                [className])
        }>  {/*тег пре позволяет сохранить все переносы в тексте и все что есть в тексте*/}
            <Button
                onClick={onCopy}
                className={classes.copyBtn}
                theme={ButtonTheme.CLEAR}
            >
                <CopyIcon className={classes.copyIcon}/>
            </Button>
            <code>

                {text}
            </code>
        </pre>
    );
});

