module.exports = (layer, componentName) => `
import type {Meta, StoryObj} from "@storybook/react";

import { ${componentName} } from './${componentName}';
import {StoreDecorator} from "../../../../shared/config/storybook/StoreDecorator/StoreDecorator";

const meta =  {
    title: '${layer}/${componentName}',
    component: ${componentName},
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        StoreDecorator({})
    ]
} satisfies Meta<typeof ArticleRecommendationsList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {},

};
`;
