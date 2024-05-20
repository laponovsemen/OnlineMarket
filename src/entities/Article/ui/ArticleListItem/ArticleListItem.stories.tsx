import type { Meta, StoryObj } from "@storybook/react";

import { ArticleListItem } from "./ArticleListItem";
import { StoreDecorator } from "../../../../shared/config/storybook/StoreDecorator/StoreDecorator";
// eslint-disable-next-line semen-the-sailor-plugin/path-checker
import { ArticleType, ArticleView } from "@/entities/Article";

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
    decorators: [StoreDecorator({})],
} satisfies Meta<typeof ArticleListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {
        view: ArticleView.SMALL,
        target: "",
        article: {
            title: "title",
            id: "1",
            views: 123,
            type: [ArticleType.IT],
            user: {
                id: "1",
                username: "username",
                avatar: "",
                roles: [],
            },
            img: "",
            blocks: [],
            createdAt: new Date().toISOString(),
            subtitle: "subtitle",
        },
    },
};
