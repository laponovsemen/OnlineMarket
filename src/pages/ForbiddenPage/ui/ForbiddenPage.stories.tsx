import type {Meta, StoryObj} from "@storybook/react";

import ForbiddenPage from "./ForbiddenPage";
import {ThemeDecorator} from "../../../shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {StoreDecorator} from "../../../shared/config/storybook/StoreDecorator/StoreDecorator";
import {Theme} from "@/shared/const/theme";

const meta = {
    title: "/ForbiddenPage",
    component: ForbiddenPage,
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
} satisfies Meta<typeof ForbiddenPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {},

};
