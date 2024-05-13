import type {Meta, StoryObj} from "@storybook/react";

import {ListBox} from "./ListBox";
import {ThemeDecorator} from "../../../../config/storybook/ThemeDecorator/ThemeDecorator";
import {StoreDecorator} from "../../../../config/storybook/StoreDecorator/StoreDecorator";
import {action} from "@storybook/addon-actions";

const meta = {
    title: "shared/ListBox",
    component: ListBox,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        //backgroundColor: { control: "color" },
    },
    decorators: [
        StoreDecorator({}),
        Story => <div style={{padding: 100}}><Story/></div>
    ]
} satisfies Meta<typeof ListBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
        items: [
            {content: "ksdfjkasdkla", value: "123"},
            {content: "ksdf", value: "1234"},
        ],
        onChange: action("onChangeAction")
    },
};

export const TopLeft: Story = {
    args: {
        direction: "top left",
        value: "OPEN",

        items: [
            {content: "ksdfjkasdkla", value: "123"},
            {content: "ksdf", value: "1234"},
        ],
        onChange: action("onChangeAction")
    },
};

export const TopRight: Story = {
    args: {
        direction: "top right",
        value: "OPEN",

        items: [
            {content: "ksdfjkasdkla", value: "123"},
            {content: "ksdf", value: "1234"},
        ],
        onChange: action("onChangeAction")
    },
};

export const BottomLeft: Story = {
    args: {
        direction: "bottom left",
        value: "OPEN",

        items: [
            {content: "ksdfjkasdkla", value: "123"},
            {content: "ksdf", value: "1234"},
        ],
        onChange: action("onChangeAction")
    },
};

export const BottomRight: Story = {
    args: {
        direction: "bottom right",
        value: "OPEN",
        items: [
            {content: "ksdfjkasdkla", value: "123"},
            {content: "ksdf", value: "1234"},
        ],
        onChange: action("onChangeAction")
    },
};
