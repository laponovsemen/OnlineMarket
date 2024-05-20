import type { Meta, StoryObj } from "@storybook/react";

import { AppImage } from "./AppImage";
import { StoreDecorator } from "../../../shared/config/storybook/StoreDecorator/StoreDecorator";

const meta = {
    title: "/AppImage",
    component: AppImage,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        //backgroundColor: { control: "color" },
    },
    decorators: [StoreDecorator({})],
} satisfies Meta<typeof AppImage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {},
};
