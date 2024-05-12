import type {Meta, StoryObj} from "@storybook/react";

import {NotificationList} from "./NotificationList";
import {StoreDecorator} from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
// @ts-ignore
import withMock from "storybook-addon-mock";
const meta = {
    title: "entities/Notification/NotificationList",
    component: NotificationList,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        //backgroundColor: { control: "color" },
    },
    decorators: [
        withMock,
        StoreDecorator({})
    ]
} satisfies Meta<typeof NotificationList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {},
    parameters : {
        mockData :[
            {
                url: `${__API__}/notifications`,
                method: "GET",
                status: 200,
                response: [
                    {
                        id: "1",
                        title: "Уведомление1",
                        description: "Поставь лайк и комментарий"
                    },
                    {
                        id: "2",
                        title: "Уведомление2",
                        description: "Поставь лайк и комментарий"
                    },
                    {
                        id: "3",
                        title: "Уведомление3",
                        description: "Поставь лайк и комментарий"
                    }
                ],
            },
        ]
    }

};
