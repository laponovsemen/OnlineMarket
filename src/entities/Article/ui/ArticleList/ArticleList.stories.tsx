import type { Meta, StoryObj } from "@storybook/react";

import { ArticleList } from "./ArticleList";
import { StoreDecorator } from "../../../../shared/config/storybook/StoreDecorator/StoreDecorator";
import { ArticleView } from "./../../model/consts/articleConsts";

const meta = {
    title: "/ArticleList",
    component: ArticleList,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        //backgroundColor: { control: "color" },
    },
    decorators: [StoreDecorator({})],
} satisfies Meta<typeof ArticleList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {
        isLoading: true,
        target: "",
        view: ArticleView.SMALL,
        articles: [],
    },
};
