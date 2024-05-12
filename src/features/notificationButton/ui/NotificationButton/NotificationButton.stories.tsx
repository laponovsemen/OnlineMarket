import type {Meta, StoryObj} from "@storybook/react";

import {NotificationButton} from "./NotificationButton";
import {StoreDecorator} from "@/shared/config/storybook/StoreDecorator/StoreDecorator";

const meta = {
    title: "features/Notification/NotificationButton",
    component: NotificationButton,
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
} satisfies Meta<typeof NotificationButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {},

};
