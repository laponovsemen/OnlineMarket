import type {Meta, StoryObj} from "@storybook/react";

import {Page} from "./Page";
import {ThemeDecorator} from "../../../shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "../../../app/providers/ThemeProvider";
import {StoreDecorator} from "../../../shared/config/storybook/StoreDecorator/StoreDecorator";

const meta = {
    title: "/Page",
    component: Page,
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
} satisfies Meta<typeof Page>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {
        children: <div></div>
    },

};
