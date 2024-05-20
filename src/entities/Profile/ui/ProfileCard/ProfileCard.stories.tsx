import type { Meta, StoryObj } from "@storybook/react";

import { ProfileCard } from "./ProfileCard";
import { Country } from "../../../Country";
import { Currency } from "../../../Currency";
import { StoreDecorator } from "../../../../shared/config/storybook/StoreDecorator/StoreDecorator";
import avatar from "./../../../../shared/assets/test/avatar_stories.jpg";

const meta = {
    title: "entities/ProfileCard",
    component: ProfileCard,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        //backgroundColor: { control: "color" },
    },
    decorators: [StoreDecorator({})],
} satisfies Meta<typeof ProfileCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        data: {
            username: "admin",
            age: 22,
            country: Country.UKRAINE,
            lastname: "ulbi tv",
            first: "Semen",
            city: "Henichi",
            currency: Currency.EUR,
            avatar: avatar,
        },
    },
};

export const WithError: Story = {
    args: {
        error: "Some error occured",
    },
};

export const Loading: Story = {
    args: {
        isLoading: true,
    },
};
