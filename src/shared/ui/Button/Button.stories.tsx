import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import {Button, ButtonTheme} from "./Button";
import {ThemeDecorator} from "../../config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "../../../app/providers/ThemeProvider";

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

export const Primary: Story = {
    args: {
        children: "Text"
    },
};


export const Outline: Story = {
    args: {
        theme: ButtonTheme.OUTLINE,
        children: "Text"
    },
};

export const OutlineDark: Story = {
    args: {
        theme: ButtonTheme.OUTLINE,
        children: "Text"
    },
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];
