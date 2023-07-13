import ConfidentialInput from './ConfidentialInput.vue';
import Button from './Button.vue';
import type { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta<typeof ConfidentialInput> = {
  component: ConfidentialInput
};

export default meta;

type Story = StoryObj<typeof ConfidentialInput>;

export const Primary: Story = {
  render: () => ({
    components: {
      ConfidentialInput,
      Button
    },
    template: `
    <div class="flex flex-col gap-5">
      <div class="flex gap-4 items-start">
        <ConfidentialInput @update-value="() => { console.log('update') }" :debounce="true" :callback="() => { console.log('boo') }" icon="material-symbols:search-rounded" type="primary" message="Hinty" size="sm" name="input" label="sm Text Input" />
        <Button size="sm">Button</Button>
      </div>
      <div class="flex gap-4 items-start">
        <ConfidentialInput @update-value="() => { console.log('update') }" icon="material-symbols:search-rounded" state="success" message="Hinty" size="md" name="input" label="md Text Input" />
        <Button size="md">Button</Button>
      </div>
      <div class="flex gap-4 items-start">
        <ConfidentialInput state="error" message="Hinty" size="lg" name="input" label="lg Text Input" />
        <Button size="lg">Button</Button>
      </div>
      <div class="flex gap-4 items-start">
        <ConfidentialInput size="xl" message="Hinty" name="input" label="xl Text Input" />
        <Button size="xl">Button</Button>
      </div>
    </div>
    `
  })
};

export const Md: Story = {
  render: (args) => ({
    components: {
      ConfidentialInput
    },
    setup() {
      return {
        args
      };
    },
    template: `
        <ConfidentialInput v-bind="args">
        </ConfidentialInput>
      `
  }),
  args: {
    size: 'md',
    name: 'ConfidentialInput',
    label: 'Type your text here'
  }
};
