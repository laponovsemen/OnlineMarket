import type { Meta, StoryObj } from "@storybook/react";

import { ArticleDetailsPageHeader } from "./ArticleDetailsPageHeader";
import { StoreDecorator } from "../../../../shared/config/storybook/StoreDecorator/StoreDecorator";

const meta = {
    title: "/ArticleDetailsPageHeader",
    component: ArticleDetailsPageHeader,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        //backgroundColor: { control: "color" },
    },
    decorators: [StoreDecorator({})],
} satisfies Meta<typeof ArticleDetailsPageHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {},
};
