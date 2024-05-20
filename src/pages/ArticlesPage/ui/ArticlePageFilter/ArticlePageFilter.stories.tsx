import type { Meta, StoryObj } from "@storybook/react";

import { ArticlePageFilter } from "./ArticlePageFilter";
import { StoreDecorator } from "../../../../shared/config/storybook/StoreDecorator/StoreDecorator";

const meta = {
    title: "/ArticlePageFilter",
    component: ArticlePageFilter,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        //backgroundColor: { control: "color" },
    },
    decorators: [StoreDecorator({})],
} satisfies Meta<typeof ArticlePageFilter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {},
};
