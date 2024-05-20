import type { Meta, StoryObj } from "@storybook/react";

import { Popover } from "./Popover";
import { StoreDecorator } from "../../../../config/storybook/StoreDecorator/StoreDecorator";

const meta = {
    title: "/Popover",
    component: Popover,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        //backgroundColor: { control: "color" },
    },
    decorators: [StoreDecorator({})],
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {
        className: "",
        children: <div />,
        trigger: <div />,
    },
};
