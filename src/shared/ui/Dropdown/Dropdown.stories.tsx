import type {Meta, StoryObj} from "@storybook/react";

import {Dropdown} from "./Dropdown";
import {ThemeDecorator} from "../../../shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "../../../app/providers/ThemeProvider";
import {StoreDecorator} from "../../../shared/config/storybook/StoreDecorator/StoreDecorator";
import {Button} from "../Button/Button";

const meta = {
    title: "/Dropdown",
    component: Dropdown,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        //backgroundColor: { control: "color" },
    },
    decorators: [
        StoreDecorator({})
    ]
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
        trigger: <Button>Open!</Button>,
        items: [
            {
                content: "first"
            },
            {
                content: "second"
            },
            {
                content: "third"
            },
        ]
    },

};
