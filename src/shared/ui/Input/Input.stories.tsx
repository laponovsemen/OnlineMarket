import type { Meta, StoryObj } from "@storybook/react";

import {Input} from "./Input";
import {ThemeDecorator} from "../../config/storybook/ThemeDecorator/ThemeDecorator";

const meta = {
    title: "shared/Input",
    component: Input,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        //backgroundColor: { control: "color" },
    },
    args: {

    }
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
        placeholder: "Type text",
        value: ";ldsjkf;lskdjf"
    },
};
export const Dark: Story = {
    args: {
        placeholder: "Type text",
        value: ";ldsjkf;lskdjf"
    },
    decorators: [ThemeDecorator(Theme.DARK)]
};
