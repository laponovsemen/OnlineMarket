import {Meta, StoryObj} from "@storybook/react";
import {Modal} from "./Modal";
import {ThemeDecorator} from "../../config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "../../../app/providers/ThemeProvider";

const meta = {
    title: "shared/Modal",
    component: Modal,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        //backgroundColor: { control: "color" },
    },
    args: {},
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        isOpen: true,
        children: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque blanditiis cupiditate eaque error illo nisi optio provident quam repudiandae similique, ullam voluptatibus. Dignissimos laborum necessitatibus nostrum quos totam voluptate."
    },
};

export const PrimaryDark: Story = {
    args: {
        isOpen: true,
        children: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque blanditiis cupiditate eaque error illo nisi optio provident quam repudiandae similique, ullam voluptatibus. Dignissimos laborum necessitatibus nostrum quos totam voluptate."
    },
    decorators: [ThemeDecorator(Theme.DARK)]
};
