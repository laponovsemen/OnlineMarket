import { useState } from "react";
import classes from "./Counter.module.scss";

export const CustomCounter = () => {
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <button
                className={classes.button}
                onClick={increment}
            >
                {/* eslint-disable-next-line i18next/no-literal-string */}
                {/* eslint-disable-next-line i18next/no-literal-string */}
                increment {count}
            </button>
        </div>
    );
};
