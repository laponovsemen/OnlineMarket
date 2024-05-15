import React from "react";
import {Button} from "../../../shared/ui/Button/Button";
import {useDispatch} from "react-redux";
import { useCounterActions} from "../model/slice/counterSlice";
import {useTranslation} from "react-i18next";
import {useCounterValue} from "@/entities/Counter/model/selectors/getCounterValue/getCounterValue";

export const Counter = () => {
    const dispatch = useDispatch();
    const counterValue = useCounterValue();
    const {t} = useTranslation();
    const {decrement, increment, addFive} = useCounterActions();


    const handleIncrement = () => {
        increment();
    };
    const handleDecrement = () => {
        decrement();
    };

    const handleAddFive = () => {
        addFive(5);
    };


    return (
        <div >
            <h1 data-testid={"value-title"}>{counterValue}</h1>
            <Button
                onClick={handleIncrement}
                data-testid={"increment-btn"}
            >
                {t("increment")}
            </Button>
            <Button
                onClick={handleDecrement}
                data-testid={"decrement-btn"}
            >
                {t("decrement")}

            </Button>
            <Button
                onClick={handleAddFive}
                data-testid={"decrement-btn"}
            >
                {t("add five")}

            </Button>
        </div>
    );
};

