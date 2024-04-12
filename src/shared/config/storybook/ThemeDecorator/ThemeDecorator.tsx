import {Theme} from "../../../../app/providers/ThemeProvider";


export const ThemeDecorator = (theme: Theme) => (story : () => any) => {
    return (
        <div className={`app ${theme}`}>
            {story()}
        </div>
    );
};
