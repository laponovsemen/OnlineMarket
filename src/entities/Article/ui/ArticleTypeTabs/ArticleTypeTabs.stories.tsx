import type {Meta, StoryObj} from "@storybook/react";

import {ArticleTypeTabs} from "./ArticleTypeTabs";
import {ThemeDecorator} from "../../../../shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {StoreDecorator} from "../../../../shared/config/storybook/StoreDecorator/StoreDecorator";
import {action} from "@storybook/addon-actions";
import {ArticleType} from "../../model/consts/articleConsts";

const meta = {
    title: "entities/ArticleTypeTabs",
    component: ArticleTypeTabs,
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
} satisfies Meta<typeof ArticleTypeTabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {
        value: ArticleType.ALL,
        onChangeType: action("onChangeTypeClick")
    },

};
