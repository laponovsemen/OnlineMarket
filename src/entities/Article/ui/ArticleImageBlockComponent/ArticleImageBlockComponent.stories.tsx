import type {Meta, StoryObj} from "@storybook/react";

import {ArticleImageBlockComponent} from "./ArticleImageBlockComponent";
import {StoreDecorator} from "../../../../shared/config/storybook/StoreDecorator/StoreDecorator";
import {ArticleBlockType} from "../../model/types/article";

const meta = {
    title: "entities/ArticleImageBlockComponent",
    component: ArticleImageBlockComponent,
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
} satisfies Meta<typeof ArticleImageBlockComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {
        block: {
            title: "sometitle",
            type: ArticleBlockType.IMAGE,
            id: "21",
            src: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSBxekEQUQYwZlbU6Fk9BatzsvzAAuf9OIbmNhNXg52NyfdCCmEzfB5BsxzFpnlMNSN1tUB5zfBv_wn2NjyoqkXlGXB9qjC6rBYUmKzhw"
        }
    },

};
