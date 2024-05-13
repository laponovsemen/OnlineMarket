import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import AboutPage from "./AboutPage";
import {ThemeDecorator} from "../../../shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {StoreDecorator} from "../../../shared/config/storybook/StoreDecorator/StoreDecorator";
import {Theme} from "@/shared/const/theme";

const meta = {
    title: "pages/AboutPage",
    component: AboutPage,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        //backgroundColor: { control: "color" },
    },
    args: {

    },
    decorators: [
        StoreDecorator({})
    ]
} satisfies Meta<typeof AboutPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {},

};
export const Dark: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)]
};
