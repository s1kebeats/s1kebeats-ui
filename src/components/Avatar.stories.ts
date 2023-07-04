import Avatar from './Avatar.vue'
import type { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta<typeof Avatar> = {
    component: Avatar,
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Primary: Story = {}