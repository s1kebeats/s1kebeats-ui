import CheckboxInput from './CheckboxInput.vue';
import TextInput from './TextInput.vue';
import Button from './Button.vue';
import type { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta<typeof CheckboxInput> = {
  component: CheckboxInput
};

export default meta;

type Story = StoryObj<typeof CheckboxInput>;

export const Primary: Story = {
  render: () => ({
    components: {
      CheckboxInput,
      Button,
      TextInput
    },
    template: `
    <div class="flex flex-col gap-5">
        <div class="flex items-center gap-2"> <TextInput size="sm" name="textInput" label="Type here" /> <Button size="sm"> Button </Button> <CheckboxInput size="sm" name="first" /> </div>
        <div class="flex items-center gap-2"> <TextInput size="md" name="textInput" label="Type here" /> <Button size="md"> Button </Button> <CheckboxInput size="md" name="first" /> </div>
        <div class="flex items-center gap-2"> <TextInput size="lg" name="textInput" label="Type here" /> <Button size="lg"> Button </Button> <CheckboxInput size="lg" name="first" /> </div>
        <div class="flex items-center gap-2"> <TextInput size="xl" name="textInput" label="Type here" /> <Button size="xl"> Button </Button> <CheckboxInput size="xl" name="first" /> </div>
    </div>
    `
  })
};
