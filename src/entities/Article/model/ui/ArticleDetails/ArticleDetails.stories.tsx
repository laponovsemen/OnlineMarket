import type {Meta, StoryObj} from "@storybook/react";

import {ArticleDetails} from "./ArticleDetails";
import {StoreDecorator} from "../../../../../shared/config/storybook/StoreDecorator/StoreDecorator";

const meta = {
    title: "/ArticleDetails",
    component: ArticleDetails,
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
} satisfies Meta<typeof ArticleDetails>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {id: "1"},
};
