import type { Meta, StoryObj } from "@storybook/react";

import { Drawer } from "./Drawer";
import { StoreDecorator } from "../../../shared/config/storybook/StoreDecorator/StoreDecorator";

const meta = {
    title: "/Drawer",
    component: Drawer,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        //backgroundColor: { control: "color" },
    },
    decorators: [StoreDecorator({})],
} satisfies Meta<typeof Drawer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {
        children: <div />,
    },
};
