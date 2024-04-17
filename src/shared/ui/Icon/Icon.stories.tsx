import type {Meta, StoryObj} from "@storybook/react";
import SVGIcon from "../../assets/icons/eye-20-20.svg";
import {Icon} from "./Icon";
import {ThemeDecorator} from "../../../shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "../../../app/providers/ThemeProvider";
import {StoreDecorator} from "../../../shared/config/storybook/StoreDecorator/StoreDecorator";

const meta = {
    title: "/Icon",
    component: Icon,
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
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {
        Svg: SVGIcon
    },

};
