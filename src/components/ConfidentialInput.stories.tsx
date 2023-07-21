import ConfidentialInput from './ConfidentialInput.vue';
import type { Meta } from '@storybook/vue3';

const meta: Meta<typeof ConfidentialInput> = {
  component: ConfidentialInput
};

export default meta;

const confidentialInputStates: InstanceType<
  typeof ConfidentialInput
>['$props']['state'][] = [null, 'success', 'error'];
const confidentialInputSizes: InstanceType<
  typeof ConfidentialInput
>['$props']['size'][] = ['sm', 'md', 'lg', 'xl'];

export const Presentation = () => (
  <div class="inline-grid grid-cols-2 gap-5">
    {confidentialInputStates.map((state) => {
      return (
        <div class="flex flex-col gap-5 items-start">
          {confidentialInputSizes.map((size) => {
            return (
              <div class="flex gap-5">
                <ConfidentialInput
                  name="input"
                  label="Type in your password"
                  icon="material-symbols:lock"
                  state={state}
                  size={size}
                  key={size! + state!}
                />
                <ConfidentialInput
                  name="input"
                  label="Type in your password"
                  state={state}
                  size={size}
                  key={size! + state!}
                />
              </div>
            );
          })}
        </div>
      );
    })}
  </div>
);
