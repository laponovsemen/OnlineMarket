import type { Meta, StoryObj } from "@storybook/react";

import { AppLink, AppLinkTheme } from "./AppLink";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/shared/const/theme";

const meta = {
    title: "shared/AppLink",
    component: AppLink,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        //backgroundColor: { control: "color" },
    },
    args: {
        to: "/",
    },
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        theme: AppLinkTheme.PRIMARY,
        children: "AppLink",
    },
};
export const PrimaryDark: Story = {
    args: {
        theme: AppLinkTheme.PRIMARY,
        children: "AppLink",
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const Secondary: Story = {
    args: {
        theme: AppLinkTheme.SECONDARY,
        children: "AppLink",
    },
    //decorators: [ThemeDecorator(Theme.DARK)]
};

export const SecondaryDark: Story = {
    args: {
        theme: AppLinkTheme.SECONDARY,
        children: "AppLink",
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
