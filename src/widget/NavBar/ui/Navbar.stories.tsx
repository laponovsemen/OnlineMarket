import type { Meta, StoryObj } from "@storybook/react";

import {Navbar} from "./Navbar";
import {ThemeDecorator} from "../../../shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "../../../app/providers/ThemeProvider";
import {StoreDecorator} from "../../../shared/config/storybook/StoreDecorator/StoreDecorator";

const meta = {
    title: "widgets/Navbar",
    component: Navbar,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        //backgroundColor: { control: "color" },
    },
    decorators: [
        StoreDecorator({

        })
    ]
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {},

};

export const LightWithAuthorized: Story = {
    args: {},
    decorators: [
        StoreDecorator({
            user: {
                authData: {}
            }
        })
    ]
};

export const Dark: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)]
};

export const DarkWithAuthorized: Story = {
    args: {},
    decorators: [
        ThemeDecorator(Theme.DARK),
        StoreDecorator({
            user: {
                authData: {}
            }
        })
    ]
};
