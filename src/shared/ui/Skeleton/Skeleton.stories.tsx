import type {Meta, StoryObj} from "@storybook/react";

import {Skeleton} from "./Skeleton";
import {ThemeDecorator} from "../../../shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {StoreDecorator} from "../../../shared/config/storybook/StoreDecorator/StoreDecorator";

const meta = {
    title: "shared/Skeleton",
    component: Skeleton,
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
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NormalLight: Story = {
    args: {
        width: "100%",
        height: 200
    },
};

export const CircleLight: Story = {
    args: {
        border: "50%",
        width: 100,
        height: 100
    },
};

export const NormalDark: Story = {
    args: {
        width: "100%",
        height: 200
    },
    decorators: [
        ThemeDecorator(Theme.DARK)
    ]
};

export const CircleDark: Story = {
    args: {
        border: "50%",
        width: 100,
        height: 100
    },
    decorators: [
        ThemeDecorator(Theme.DARK)
    ]
};

export const NormalOrange: Story = {
    args: {
        width: "100%",
        height: 200
    },
    decorators: [
        ThemeDecorator(Theme.ORANGE)
    ]
};

export const CircleOrange: Story = {
    args: {
        border: "50%",
        width: 100,
        height: 100
    },
    decorators: [
        ThemeDecorator(Theme.ORANGE)
    ]
};
