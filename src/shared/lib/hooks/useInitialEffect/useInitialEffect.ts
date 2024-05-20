import { useEffect } from "react";

export function useInitialEffect(callback: () => void) {
    useEffect(() => {
        if (__PROJECT__ !== "storybook" && __PROJECT__ !== "jest") {
            callback();
        }
        // массив зависимостей пустой так как нужно только вызвать его при монтировании компоненты
        // eslint-disable-next-line
    }, []);
}
