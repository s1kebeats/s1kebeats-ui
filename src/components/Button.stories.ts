import Button from './Button.vue';
import type { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta<typeof Button> = {
  component: Button
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  render: (args) => ({
    components: {
      Button
    },
    setup() {
      return {
        args
      };
    },
    template: `
      <Button v-bind="args">
        Кнопка
      </ Button>
    `
  }),
  args: {
    size: 'md',
    type: 'primary'
  }
};

export const Secondary: Story = {
  render: (args) => ({
    components: {
      Button
    },
    setup() {
      return {
        args
      };
    },
    template: `
      <Button v-bind="args">
        Кнопка
      </ Button>
    `
  }),
  args: {
    size: 'md',
    type: 'secondary'
  }
};
export const Subtle: Story = {
  render: (args) => ({
    components: {
      Button
    },
    setup() {
      return {
        args
      };
    },
    template: `
      <Button v-bind="args">
        Кнопка
      </ Button>
    `
  }),
  args: {
    size: 'md',
    type: 'subtle'
  }
};
export const Ghost: Story = {
  render: (args) => ({
    components: {
      Button
    },
    setup() {
      return {
        args
      };
    },
    template: `
      <Button v-bind="args">
        Кнопка
      </ Button>
    `
  }),
  args: {
    size: 'md',
    type: 'ghost'
  }
};
