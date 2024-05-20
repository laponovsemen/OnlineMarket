// для того чтобы корректно работала типизация
// необходимо из них вынести типы
import {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useMemo,
    useRef,
    useState,
} from "react";

type SpringType = typeof import("@react-spring/web"); // тайп оф от импорта
type GestureType = typeof import("@use-gesture/react"); // тайп оф от импорта

interface AnimationContextPayload {
    Gesture?: GestureType;
    Spring?: SpringType;
    isLoaded?: boolean;
}

const AnimationContext = createContext<AnimationContextPayload>({});

// Обе либы зависят друг от друга
// и проимпортироваться они должны вместе паралельно
const getAsyncAnimationModules = async () => {
    const Spring = import("@react-spring/web"); // ленивый асинхронный импорт
    const Gesture = import("@use-gesture/react"); // ленивый асинхронный импорт

    return Promise.all([Spring, Gesture]);
};

export const useAnimationLibs = () => {
    return useContext(AnimationContext) as Required<AnimationContextPayload>;
};

export const AnimationProvider = ({ children }: { children: ReactNode }) => {
    const SpringRef = useRef<SpringType>();
    const GestureRef = useRef<GestureType>();
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        getAsyncAnimationModules().then(([Spring, Gesture]) => {
            SpringRef.current = Spring;
            GestureRef.current = Gesture;
            setIsLoaded(true);
        });
    }, []);

    const value = useMemo(
        () => ({
            Gesture: GestureRef.current,
            Spring: SpringRef.current,
            isLoaded,
        }),
        [isLoaded],
    );

    return (
        <AnimationContext.Provider value={value}>
            {children}
        </AnimationContext.Provider>
    );
};
