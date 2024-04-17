import type { Meta, StoryObj } from "@storybook/react";
import {Avatar} from "./Avatar";
import {ThemeDecorator} from "../../config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "../../../app/providers/ThemeProvider";
import AvatarImg from "../../assets/test/avatar_stories.jpg";
const meta = {
    title: "shared/Avatar",
    component: Avatar,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        //backgroundColor: { control: "color" },
    },

} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args : {
        src: AvatarImg
    }
};
export const PrimaryDark: Story = {
    args : {
        src: AvatarImg
    },
    decorators: [ThemeDecorator(Theme.DARK)]
};

export const Avatar150x150: Story = {
    args: {
        size: 150,
        src: AvatarImg
    },
};
export const Avatar150x150Dark: Story = {
    args: {
        size: 150,
        src: AvatarImg
    },
    decorators: [ThemeDecorator(Theme.DARK)]
};

export const Avatar300x300: Story = {
    args: {
        size: 300,
        src: AvatarImg
    },
};
export const Avatar300x300Dark: Story = {
    args: {
        size: 300,
        src: AvatarImg
    },
    decorators: [ThemeDecorator(Theme.DARK)]
};

export const Avatar450x450: Story = {
    args: {
        size: 450,
        src: AvatarImg
    },
};
export const Avatar450x450Dark: Story = {
    args: {
        size: 450,
        src: AvatarImg
    },
    decorators: [ThemeDecorator(Theme.DARK)]
};
