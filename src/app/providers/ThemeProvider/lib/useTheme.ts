import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from "./ThemeContext";
import {useContext} from "react";

interface UseThemeResult {
	toggleTheme : () => void;
	theme: Theme
}

export function useTheme() : UseThemeResult {
    const {theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = () => {
        //const newTheme: Theme = theme === Theme.DARK ? Theme.LIGHT: Theme.DARK;
        let newTheme: Theme;
        switch (theme) {
        case Theme.DARK:
            newTheme = Theme.LIGHT;
            break;
        case Theme.LIGHT:
            newTheme = Theme.ORANGE;
            break;
        case Theme.ORANGE:
            newTheme = Theme.DARK;
            break;
        default:
            newTheme = Theme.LIGHT;
        }
        setTheme?.(newTheme); // ошибка в том что контекст инициализируется не сразу
        document.body.className = newTheme;
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };
    return {
        theme: theme || Theme.LIGHT,
        toggleTheme
    };
}

