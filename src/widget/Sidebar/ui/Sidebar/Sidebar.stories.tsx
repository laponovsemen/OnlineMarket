import type { Meta, StoryObj } from "@storybook/react";

import {Theme} from "../../../../app/providers/ThemeProvider";
import {Sidebar} from "./Sidebar";
import {ThemeDecorator} from "../../../../shared/config/storybook/ThemeDecorator/ThemeDecorator";

const meta = {
    title: "widgets/Sidebar",
    component: Sidebar,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        //backgroundColor: { control: "color" },
    },
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {},
};

export const Dark: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)]
};


