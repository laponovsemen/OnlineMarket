import type {Meta, StoryObj} from "@storybook/react";

import {ArticleImageBlockComponent} from "./ArticleImageBlockComponent";
import {StoreDecorator} from "../../../../../shared/config/storybook/StoreDecorator/StoreDecorator";

const meta = {
    title: "/ArticleImageBlockComponent",
    component: ArticleImageBlockComponent,
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
} satisfies Meta<typeof ArticleImageBlockComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {},

};
