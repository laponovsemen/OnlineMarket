import type { Meta, StoryObj } from "@storybook/react";

import { EditableProfileCardHeader } from "./EditableProfileCardHeader";
import { StoreDecorator } from "../../../../shared/config/storybook/StoreDecorator/StoreDecorator";

const meta = {
    title: "/EditableProfileCardHeader",
    component: EditableProfileCardHeader,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        //backgroundColor: { control: "color" },
    },
    decorators: [StoreDecorator({})],
} satisfies Meta<typeof EditableProfileCardHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {},
};
