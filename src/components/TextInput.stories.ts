import TextInput from './TextInput.vue';
import Button from './Button.vue';
import type { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta<typeof TextInput> = {
  component: TextInput
};

export default meta;

type Story = StoryObj<typeof TextInput>;

export const Primary: Story = {
  render: () => ({
    components: {
      TextInput,
      Button
    },
    template: `
    <div class="flex flex-col gap-5">
      <div class="flex gap-4 items-start">
        <TextInput type="primary" message="Hinty" size="sm" name="input" label="sm Text Input" />
        <Button size="sm">Button</Button>
      </div>
      <div class="flex gap-4 items-start">
        <TextInput state="success" message="Hinty" size="md" name="input" label="md Text Input" />
        <Button size="md">Button</Button>
      </div>
      <div class="flex gap-4 items-start">
        <TextInput state="error" message="Hinty" size="lg" name="input" label="lg Text Input" />
        <Button size="lg">Button</Button>
      </div>
      <div class="flex gap-4 items-start">
        <TextInput size="xl" message="Hinty" name="input" label="xl Text Input" />
        <Button size="xl">Button</Button>
      </div>
    </div>
    `
  })
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
