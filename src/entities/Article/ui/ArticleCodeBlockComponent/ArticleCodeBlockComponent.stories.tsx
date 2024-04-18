import type {Meta, StoryObj} from "@storybook/react";

import {ArticleCodeBlockComponent} from "./ArticleCodeBlockComponent";
import {StoreDecorator} from "../../../../shared/config/storybook/StoreDecorator/StoreDecorator";
import {ArticleBlockType} from "../../model/types/article";

const meta = {
    title: "entities/ArticleCodeBlockComponent",
    component: ArticleCodeBlockComponent,
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
} satisfies Meta<typeof ArticleCodeBlockComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {
        block: {
            id: "1",
            type: ArticleBlockType.CODE,
            code : "const meta = {\n" +
                "    title: \"/ArticleCodeBlockComponent\",\n" +
                "    component: ArticleCodeBlockComponent,\n" +
                "    parameters: {\n" +
                "        layout: \"centered\",\n" +
                "    },\n" +
                "    tags: [\"autodocs\"],\n" +
                "    argTypes: {\n" +
                "        //backgroundColor: { control: \"color\" },\n" +
                "    },\n" +
                "    decorators: [\n" +
                "        StoreDecorator({})\n" +
                "    ]\n" +
                "} satisfies Meta<typeof ArticleCodeBlockComponent>;"
        }
    },

};
