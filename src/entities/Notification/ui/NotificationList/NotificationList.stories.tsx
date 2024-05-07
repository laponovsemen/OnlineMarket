import type {Meta, StoryObj} from "@storybook/react";

import {NotificationList} from "./NotificationList";
import {StoreDecorator} from "../../../../shared/config/storybook/StoreDecorator/StoreDecorator";

const meta = {
    title: "/NotificationList",
    component: NotificationList,
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
} satisfies Meta<typeof NotificationList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {},

};
