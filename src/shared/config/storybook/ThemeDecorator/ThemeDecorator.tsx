import {Theme} from "@/shared/const/theme";
// eslint-disable-next-line semen-the-sailor-plugin/layer-imports
import {ThemeProvider} from "@/app/providers/ThemeProvider";


export const ThemeDecorator = (theme: Theme) => (story : () => any) => {
    return (
        <ThemeProvider initialTheme={theme}>
            <div className={`app ${theme}`}>
                {story()}
            </div>
        </ThemeProvider>

    );
};
