import type {Meta, StoryObj} from "@storybook/react";

import {ArticleCodeBlockComponent} from "./ArticleCodeBlockComponent";
import {StoreDecorator} from "../../../../../shared/config/storybook/StoreDecorator/StoreDecorator";

const meta = {
    title: "/ArticleCodeBlockComponent",
    component: ArticleCodeBlockComponent,
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
} satisfies Meta<typeof ArticleCodeBlockComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {},

};
