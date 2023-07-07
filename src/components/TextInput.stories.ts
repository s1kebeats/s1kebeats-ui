import TextInput from './TextInput.vue';
import type { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta<typeof TextInput> = {
  component: TextInput
};

export default meta;

type Story = StoryObj<typeof TextInput>;

export const Primary: Story = {
  render: (args) => ({
    components: {
      TextInput
    },
    setup() {
      return {
        args
      };
    },
    template: `
      <TextInput v-bind="args">
      </TextInput>
    `
  }),
  args: {
    size: 'lg',
    name: 'textInput',
    label: 'Type your text here'
  }
};

export const Md: Story = {
    render: (args) => ({
      components: {
        TextInput
      },
      setup() {
        return {
          args
        };
      },
      template: `
        <TextInput v-bind="args">
        </TextInput>
      `
    }),
    args: {
      size: 'md',
      name: 'textInput',
      label: 'Type your text here'
    }
  };