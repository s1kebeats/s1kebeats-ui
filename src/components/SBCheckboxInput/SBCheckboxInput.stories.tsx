import SBCheckboxInput from './SBCheckboxInput.vue';
import type { Meta } from '@storybook/vue3';

const meta: Meta<typeof SBCheckboxInput> = {
  component: SBCheckboxInput,
};

export default meta;

const SBCheckboxInputSizes: InstanceType<
  typeof SBCheckboxInput
>['$props']['size'][] = ['sm', 'md', 'lg', 'xl'];

export const Presentation = () => (
  <div class="flex flex-col gap-5 items-start">
    {SBCheckboxInputSizes.map((size) => {
      return (
        <div class="flex gap-5">
          <SBCheckboxInput name="input" size={size} key={size} />

          <SBCheckboxInput
            label="Receive notifications?"
            name="input"
            position="right"
            size={size}
            key={size + 'right'}
          />
          <SBCheckboxInput
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
