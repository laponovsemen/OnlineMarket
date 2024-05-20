import type { Meta, StoryObj } from "@storybook/react";

import { CommentCard } from "./CommentCard";
import { StoreDecorator } from "../../../../shared/config/storybook/StoreDecorator/StoreDecorator";

const meta = {
    title: "entities/CommentCard",
    component: CommentCard,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        //backgroundColor: { control: "color" },
    },
    decorators: [StoreDecorator({})],
} satisfies Meta<typeof CommentCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {},
};
