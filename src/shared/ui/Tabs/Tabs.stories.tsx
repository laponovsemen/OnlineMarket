import type {Meta, StoryObj} from "@storybook/react";

import {Tabs} from "./Tabs";
import {ThemeDecorator} from "../../../shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "../../../app/providers/ThemeProvider";
import {StoreDecorator} from "../../../shared/config/storybook/StoreDecorator/StoreDecorator";
import {action} from "@storybook/addon-actions";

const meta = {
    title: "/Tabs",
    component: Tabs,
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
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {
        tabs: [
            {
                value: "tab 1",
                content: "tab 1"
            },
            {
                value: "tab 2",
                content: "tab 2"
            },
            {
                value: "tab 3",
                content: "tab 3"
            },
        ],
        value: "tab 2",
        onTabClick: action("onTabClick"),
    },

};
