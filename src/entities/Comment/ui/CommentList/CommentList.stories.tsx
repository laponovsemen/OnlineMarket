import type {Meta, StoryObj} from "@storybook/react";

import {CommentList} from "./CommentList";
import {StoreDecorator} from "../../../../shared/config/storybook/StoreDecorator/StoreDecorator";

const meta = {
    title: "entities/CommentList",
    component: CommentList,
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
} satisfies Meta<typeof CommentList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {
        comments:[
            {
                id: "1",
                text: "hello world",
                user :{ id: "1", username: "Vasya"}
            },
            {
                id: "2",
                text: "Comment2 ",
                user :{ id: "2", username: "Petia"}
            },
        ]
    },

};