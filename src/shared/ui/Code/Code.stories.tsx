import type {Meta, StoryObj} from "@storybook/react";

import {Code} from "./Code";
import {ThemeDecorator} from "../../../shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "../../../app/providers/ThemeProvider";
import {StoreDecorator} from "../../../shared/config/storybook/StoreDecorator/StoreDecorator";

const meta = {
    title: "shared/Code",
    component: Code,
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
} satisfies Meta<typeof Code>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {
        text : "const meta = {\n" +
            "    title: \"/Code\",\n" +
            "    component: Code,\n" +
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
            "} satisfies Meta<typeof Code>;"
    },

};