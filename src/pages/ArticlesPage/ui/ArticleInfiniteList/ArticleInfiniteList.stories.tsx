import type {Meta, StoryObj} from "@storybook/react";

import {ArticleInfiniteList} from "./ArticleInfiniteList";
import {StoreDecorator} from "../../../../shared/config/storybook/StoreDecorator/StoreDecorator";

const meta = {
    title: "/ArticleInfiniteList",
    component: ArticleInfiniteList,
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
} satisfies Meta<typeof ArticleInfiniteList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {},

};
