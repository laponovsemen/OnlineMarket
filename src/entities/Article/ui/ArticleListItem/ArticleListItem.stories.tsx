import type {Meta, StoryObj} from "@storybook/react";

import {ArticleListItem} from "./ArticleListItem";
import {StoreDecorator} from "../../../../shared/config/storybook/StoreDecorator/StoreDecorator";

const meta = {
    title: "entities/ArticleListItem",
    component: ArticleListItem,
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
} satisfies Meta<typeof ArticleListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

/*export const Light: Story = {
    args: {},

};*/
