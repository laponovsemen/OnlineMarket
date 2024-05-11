import type {Meta, StoryObj} from "@storybook/react";

import {StarRating} from "./StarRating";
import {ThemeDecorator} from "../../../shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "../../../app/providers/ThemeProvider";
import {StoreDecorator} from "../../../shared/config/storybook/StoreDecorator/StoreDecorator";

const meta = {
    title: "/StarRating",
    component: StarRating,
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
} satisfies Meta<typeof StarRating>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {},

};
