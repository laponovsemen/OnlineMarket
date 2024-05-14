## Storybook

В проекте для каждого компонента описываются стори-кейсы.
Запросы на сервер мокаются с помощью *storybook-addon-mock*.

Файл со сторикейсами содержит рядом с компонентом с расширением .stories.tsx

Запустить сторибук можно командой:

`npm run storybook`

подробнее о [Storybook](https://storybook.js.org/)


```typescript
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import {Button, ButtonSize, ButtonTheme} from "./Button";
import {ThemeDecorator} from "../../config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "@/shared/const/theme";

const meta = {
    title: "shared/Button",
    component: Button,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        //backgroundColor: { control: "color" },
    },
    args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Clear: Story = {
    args: {
        theme: ButtonTheme.CLEAR,
        children: "Text"
    },
};

export const ClearInverted: Story = {
    args: {
        theme: ButtonTheme.CLEAR_INVERTED,
        children: "Text"
    },
};

export const Primary: Story = {
    args: {
        children: "Text"
    },
};

export const BackgroundTheme: Story = {
    args: {
        theme: ButtonTheme.BACKGROUND,
        children: "Text"
    },
};

export const BackgroundThemeDark: Story = {
    args: {
        theme: ButtonTheme.BACKGROUND,
        children: "Text"
    },
    decorators: [ThemeDecorator(Theme.DARK)]
};

export const InvertedBackgroundTheme: Story = {
    args: {
        theme: ButtonTheme.BACKGROUND_INVERTED,
        children: "Text"
    },
};

export const InvertedBackgroundThemeDark: Story = {
    args: {
        theme: ButtonTheme.BACKGROUND_INVERTED,
        children: "Text"
    },
    decorators: [ThemeDecorator(Theme.DARK)]
};

export const Outline: Story = {
    args: {
        theme: ButtonTheme.OUTLINE,
        children: "Text"
    },
};
```
