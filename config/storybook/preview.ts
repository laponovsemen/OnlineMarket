import type { Preview } from "@storybook/react";
import { StyleDecorator } from "@/shared/config/storybook/StyleDecorator/StyleDecorator";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { RouterDecorator } from "@/shared/config/storybook/RouterDecorator/RouterDecorator";
import { TranslationDecorator } from "@/shared/config/storybook/TranslationDecorator/TranslationDecorator";
import { SuspenseDecorator } from "@/shared/config/storybook/SuspenseDecorator/SuspenseDecorator";
import { Theme } from "@/shared/const/theme";

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        layout: "fullscreen",
        themes: {
            default: "light",
            list: [
                { name: "light", class: Theme.LIGHT, color: "#ffffff" },
                { name: "dark", class: Theme.DARK, color: "#000000" },
                { name: "orange", class: Theme.ORANGE, color: "#ffb005" },
            ],
        },
    },
    decorators: [
        StyleDecorator,
        ThemeDecorator(Theme.LIGHT),
        RouterDecorator,
        TranslationDecorator,
        SuspenseDecorator,
    ],
};

export default preview;
