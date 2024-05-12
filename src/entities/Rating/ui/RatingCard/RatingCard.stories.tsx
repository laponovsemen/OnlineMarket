import type {Meta, StoryObj} from "@storybook/react";

import {RatingCard} from "./RatingCard";
import {StoreDecorator} from "@/shared/config/storybook/StoreDecorator/StoreDecorator";

const meta = {
    title: "entities/Rating/RatingCard",
    component: RatingCard,
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
} satisfies Meta<typeof RatingCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {},

};
