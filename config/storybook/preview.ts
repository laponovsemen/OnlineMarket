import type {Preview} from "@storybook/react";
import {StyleDecorator} from "@/shared/config/storybook/StyleDecorator/StyleDecorator";
import {ThemeDecorator} from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {RouterDecorator} from "@/shared/config/storybook/RouterDecorator/RouterDecorator";
import {TranslationDecorator} from "@/shared/config/storybook/TranslationDecorator/TranslationDecorator";
import {SuspenseDecorator} from "@/shared/config/storybook/SuspenseDecorator/SuspenseDecorator";
import {Theme} from "@/shared/const/theme";

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
    decorators: [
        StyleDecorator,
        ThemeDecorator(Theme.LIGHT),
        RouterDecorator,
        TranslationDecorator,
        SuspenseDecorator
    ]

};

export default preview;
