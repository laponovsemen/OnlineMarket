import type { Meta, StoryObj } from "@storybook/react";

import { ArticleDetailsComments } from "./ArticleDetailsComments";
import { StoreDecorator } from "../../../../shared/config/storybook/StoreDecorator/StoreDecorator";

const meta = {
    title: "/ArticleDetailsComments",
    component: ArticleDetailsComments,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        //backgroundColor: { control: "color" },
    },
    decorators: [StoreDecorator({})],
} satisfies Meta<typeof ArticleDetailsComments>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {
        id: "1",
    },
};
