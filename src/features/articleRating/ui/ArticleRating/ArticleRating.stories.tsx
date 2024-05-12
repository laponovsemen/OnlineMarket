import type {Meta, StoryObj} from "@storybook/react";

import ArticleRating from "./ArticleRating";
import {StoreDecorator} from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
// @ts-ignore
import withMock from "storybook-addon-mock";

const meta = {
    title: "features/ArticleRating",
    component: ArticleRating,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        //backgroundColor: { control: "color" },
    },
    decorators: [
        withMock,
        StoreDecorator({
            user: {
                authData: {id: "1"}
            }
        })
    ]
} satisfies Meta<typeof ArticleRating>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NormalWithRate: Story = {
    args: {
        articleId: "1"
    },
    parameters : {
        mockData: [{
            url: `${__API__}/article-ratings?userId=1&articleId=1`,
            method:"GET",
            status: 200,
            response : [
                {
                    rate: 4,
                }
            ]
        }]
    }
};

export const NormalWithoutRate: Story = {
    args: {
        articleId: "1"
    },
    parameters : {
        mockData: [{
            url: `${__API__}/article-ratings?userId=1&articleId=1`,
            method:"GET",
            status: 200,
            response : []
        }]
    }
};
