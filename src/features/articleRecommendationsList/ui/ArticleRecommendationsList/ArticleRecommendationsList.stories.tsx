import type { Meta, StoryObj } from "@storybook/react";
import { ArticleRecommendationsList } from "./ArticleRecommendationsList";

import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
// @ts-ignore
import { Article } from "@/entities/Article";

const article: Article = {
    id: "1",
    img: "",
    createdAt: "",
    views: 123,
    user: {
        id: "1",
        username: "123",
    },
    blocks: [],
    type: [],
    title: "123",
    subtitle: "123kmkljk",
};

const meta = {
    title: "features/ArticleRecommendationsList",
    component: ArticleRecommendationsList,
    tags: ["autodocs"],
    argTypes: {
        //backgroundColor: { control: "color" },
    },
    decorators: [StoreDecorator({})],
    parameters: {
        layout: "centered",
    },
} satisfies Meta<typeof ArticleRecommendationsList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {},
    parameters: {
        mockData: [
            {
                url: "https://jsonplaceholder.typicode.com/todos/1",
                method: "GET",
                status: 200,
                response: [
                    { ...article, id: "1" },
                    { ...article, id: "2" },
                    { ...article, id: "3" },
                ],
            },
        ],
    },
};
