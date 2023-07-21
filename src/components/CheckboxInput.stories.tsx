import CheckboxInput from './CheckboxInput.vue';
import type { Meta } from '@storybook/vue3';

const meta: Meta<typeof CheckboxInput> = {
  component: CheckboxInput
};

export default meta;

const checkboxInputSizes: InstanceType<
  typeof CheckboxInput
>['$props']['size'][] = ['sm', 'md', 'lg', 'xl'];

export const Presentation = () => (
  <div class="flex flex-col gap-5 items-start">
    {checkboxInputSizes.map((size) => {
      return (
        <div class="flex gap-5">
          <CheckboxInput name="input" size={size} key={size} />

          <CheckboxInput
            label="Receive notifications?"
            name="input"
            position="right"
            size={size}
            key={size + 'right'}
          />
          <CheckboxInput
            label="Receive notifications?"
            name="input"
            position="left"
            size={size}
            key={size + 'left'}
          />
        </div>
      );
    })}
  </div>
);
