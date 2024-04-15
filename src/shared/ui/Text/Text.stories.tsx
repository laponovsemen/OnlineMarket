import type {Meta, StoryObj} from "@storybook/react";
import {Text, TextTheme} from "./Text";
import {ThemeDecorator} from "../../config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "../../../app/providers/ThemeProvider";

const meta = {
    title: "shared/Text",
    component: Text,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        //backgroundColor: { control: "color" },
    },
    args: {  },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        title: "Title lorem ipsum",
        text: "Description Description DescriptionDescription Description Description "
    },
};

export const Error: Story = {
    args: {
        title: "Title lorem ipsum",
        text: "Description Description DescriptionDescription Description Description ",
        theme: TextTheme.ERROR
    },
};

export const OnlyTitle: Story = {
    args: {
        title: "Title lorem ipsum",
    },
};

export const OnlyText: Story = {
    args: {
        text: "Description Description DescriptionDescription Description Description "
    },
};

export const PrimaryDark: Story = {
    args: {
        title: "Title lorem ipsum",
        text: "Description Description DescriptionDescription Description Description "
    },
    decorators: [ThemeDecorator(Theme.DARK)]
};

export const ErrorDark: Story = {
    args: {
        title: "Title lorem ipsum",
        text: "Description Description DescriptionDescription Description Description ",
        theme: TextTheme.ERROR
    },
    decorators: [ThemeDecorator(Theme.DARK)]
};
export const OnlyTitleDark: Story = {
    args: {
        title: "Title lorem ipsum",
    },
    decorators: [ThemeDecorator(Theme.DARK)]
};

export const OnlyTextDark: Story = {
    args: {
        text: "Description Description DescriptionDescription Description Description "
    },
    decorators: [ThemeDecorator(Theme.DARK)]
};
