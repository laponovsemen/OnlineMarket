import type {Meta, StoryObj} from "@storybook/react";

import {ArticleSortSelector} from "./ArticleSortSelector";
import {StoreDecorator} from "../../../../shared/config/storybook/StoreDecorator/StoreDecorator";

const meta = {
    title: "/ArticleSortSelector",
    component: ArticleSortSelector,
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
} satisfies Meta<typeof ArticleSortSelector>;

export default meta;
type Story = StoryObj<typeof meta>;

/*export const Light: Story = {
    args: {

    },

};*/
