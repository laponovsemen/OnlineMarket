import type { Meta, StoryObj } from "@storybook/react";
import {Select} from "./Select";
const meta = {
    title: "shared/Select",
    component: Select,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        //backgroundColor: { control: "color" },
    },

} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args : {
        label: "Укажите значения",
        options: [
            {value: "111", content:"First point"},
            {value: "222", content:"Second point"},
            {value: "333", content:"Third point"},
        ]
    }
};
