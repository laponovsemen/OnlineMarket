import type { Meta, StoryObj } from "@storybook/react";

import {ThemeSwitcher} from "./ThemeSwitcher";
import {ThemeDecorator} from "../../../shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "../../../app/providers/ThemeProvider";

const meta = {
    title: "widgets/ThemeSwitcher",
    component: ThemeSwitcher,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        //backgroundColor: { control: "color" },
    },
    args: {

    }
} satisfies Meta<typeof ThemeSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {},
};
export const Dark: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)]
};