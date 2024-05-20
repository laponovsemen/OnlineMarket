import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Button, ButtonSize, ButtonTheme } from "./Button";
import { ThemeDecorator } from "../../config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/shared/const/theme";

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
        children: "Text",
    },
};

export const ClearInverted: Story = {
    args: {
        theme: ButtonTheme.CLEAR_INVERTED,
        children: "Text",
    },
};

export const Primary: Story = {
    args: {
        children: "Text",
    },
};

export const BackgroundTheme: Story = {
    args: {
        theme: ButtonTheme.BACKGROUND,
        children: "Text",
    },
};

export const BackgroundThemeDark: Story = {
    args: {
        theme: ButtonTheme.BACKGROUND,
        children: "Text",
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const InvertedBackgroundTheme: Story = {
    args: {
        theme: ButtonTheme.BACKGROUND_INVERTED,
        children: "Text",
    },
};

export const InvertedBackgroundThemeDark: Story = {
    args: {
        theme: ButtonTheme.BACKGROUND_INVERTED,
        children: "Text",
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const Outline: Story = {
    args: {
        theme: ButtonTheme.OUTLINE,
        children: "Text",
    },
};

export const OutlineSizeM: Story = {
    args: {
        theme: ButtonTheme.OUTLINE,
        children: "Text",
        size: ButtonSize.M,
    },
};

export const OutlineSizeL: Story = {
    args: {
        theme: ButtonTheme.OUTLINE,
        children: "Text",
        size: ButtonSize.L,
    },
};
export const OutlineSizeXL: Story = {
    args: {
        theme: ButtonTheme.OUTLINE,
        children: "Text",
        size: ButtonSize.XL,
    },
};
export const OutlineDark: Story = {
    args: {
        theme: ButtonTheme.OUTLINE,
        children: "Text",
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const Square: Story = {
    args: {
        theme: ButtonTheme.BACKGROUND,
        children: ">",
        square: true,
    },
};

export const SquareSizeM: Story = {
    args: {
        theme: ButtonTheme.BACKGROUND_INVERTED,
        children: ">",
        square: true,
        size: ButtonSize.M,
    },
};

export const SquareSizeL: Story = {
    args: {
        theme: ButtonTheme.BACKGROUND_INVERTED,
        children: ">",
        square: true,
        size: ButtonSize.L,
    },
};

export const SquareSizeXL: Story = {
    args: {
        theme: ButtonTheme.BACKGROUND_INVERTED,
        children: ">",
        square: true,
        size: ButtonSize.XL,
    },
};

export const Disabled: Story = {
    args: {
        theme: ButtonTheme.OUTLINE,
        children: ">",
        disabled: true,
    },
};

export const SquareDark: Story = {
    args: {
        theme: ButtonTheme.BACKGROUND,
        children: ">",
        square: true,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
