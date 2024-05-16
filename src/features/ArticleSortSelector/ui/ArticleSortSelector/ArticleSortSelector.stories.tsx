import type {Meta, StoryObj} from "@storybook/react";

import {ArticleSortSelector} from "./ArticleSortSelector";
import {StoreDecorator} from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
import {ArticleSortField} from "@/entities/Article";

const meta = {
    title: "features/ArticleSortSelector",
    component: ArticleSortSelector,
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
} satisfies Meta<typeof ArticleSortSelector>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {
        className: "",
        onChangeOrder: () => {},
        onChangeSort: () => {},
        order: "asc",
        sort: ArticleSortField.CREATED
    },

};
