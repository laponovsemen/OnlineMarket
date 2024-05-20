import type { Meta, StoryObj } from "@storybook/react";

import LoginForm from "./LoginForm";
import { ThemeDecorator } from "../../../../shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { StoreDecorator } from "../../../../shared/config/storybook/StoreDecorator/StoreDecorator";
import { Theme } from "@/shared/const/theme";

const meta = {
    title: "features/LoginForm",
    component: LoginForm,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        //backgroundColor: { control: "color" },
    },
    args: {},
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {},
    decorators: [
        StoreDecorator({
            loginForm: {
                username: "123",
                password: "123",
            },
        }),
    ],
};

export const NormalWithError: Story = {
    args: {},
    decorators: [
        StoreDecorator({
            loginForm: {
                username: "123",
                password: "123",
                error: "Error",
            },
        }),
    ],
};

export const NormalLoading: Story = {
    args: {},
    decorators: [
        StoreDecorator({
            loginForm: {
                username: "123",
                password: "123",
                isLoading: true,
            },
        }),
    ],
};
export const Dark: Story = {
    args: {},
    decorators: [
        ThemeDecorator(Theme.DARK),
        StoreDecorator({
            loginForm: {
                username: "123",
                password: "123",
            },
        }),
    ],
};

export const DarkWithError: Story = {
    args: {},
    decorators: [
        ThemeDecorator(Theme.DARK),
        StoreDecorator({
            loginForm: {
                username: "123",
                password: "123",
                error: "some error",
            },
        }),
    ],
};

export const DarkLoading: Story = {
    args: {},
    decorators: [
        ThemeDecorator(Theme.DARK),
        StoreDecorator({
            loginForm: {
                username: "123",
                password: "123",
                isLoading: true,
            },
        }),
    ],
};
