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
      <Button icon="material-symbols:alternate-email-rounded" v-bind="args">
        Кнопка
      </Button>
      <Button icon="material-symbols:alternate-email-rounded">
        Кнопка
      </Button>
      <Button icon="material-symbols:alternate-email-rounded" size="lg">
        Кнопка
      </Button>
      <Button icon="material-symbols:alternate-email-rounded" size="xl">
        Кнопка
      </Button>
    `
  }),
  args: {
    size: 'sm',
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
    type: 'secondary',
    icon: 'material-symbols:alternate-email-rounded'
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
    type: 'subtle',
    icon: 'material-symbols:alternate-email-rounded'
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
    type: 'ghost',
    icon: 'material-symbols:alternate-email-rounded'
  }
};
