import type { Meta, StoryObj } from "@storybook/react";

import  ProfilePage from "./ProfilePage";
import {ThemeDecorator} from "../../../shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "../../../app/providers/ThemeProvider";
import {StoreDecorator} from "../../../shared/config/storybook/StoreDecorator/StoreDecorator";
import {Country} from "../../../entities/Country";
import {Currency} from "../../../entities/Currency";

const meta = {
    title: "pages/ProfilePage",
    component: ProfilePage,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        //backgroundColor: { control: "color" },
    },
    args: {

    },
    decorators: [StoreDecorator({
        profile: {
            form :{
                username: "volodia",
                age: 99,
                country: Country.UKRAINE,
                lastname: "poltoratskiy",
                first: "bahaha",
                city: "Toronto",
                currency: Currency.USD
            }
        }
    })]
} satisfies Meta<typeof ProfilePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {},
    decorators: [
    ]
};
export const Dark: Story = {
    args: {},
    decorators: [
        ThemeDecorator(Theme.DARK),
    ]
};
