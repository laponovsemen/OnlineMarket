import type {Meta, StoryObj} from "@storybook/react";

import {NotificationItem} from "./NotificationItem";
import {StoreDecorator} from "../../../../shared/config/storybook/StoreDecorator/StoreDecorator";

const meta = {
    title: "/NotificationItem",
    component: NotificationItem,
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
} satisfies Meta<typeof NotificationItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {
        item: {
            title: "title",
            description: " desc",
            id: "1",
        }
    },

};
