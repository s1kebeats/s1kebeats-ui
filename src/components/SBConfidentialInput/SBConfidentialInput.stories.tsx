import SBConfidentialInput from './SBConfidentialInput.vue';
import type { Meta } from '@storybook/vue3';

const meta: Meta<typeof SBConfidentialInput> = {
  component: SBConfidentialInput,
};

export default meta;

const SBConfidentialInputStates: InstanceType<
  typeof SBConfidentialInput
>['$props']['state'][] = [null, 'success', 'error'];
const SBConfidentialInputSizes: InstanceType<
  typeof SBConfidentialInput
>['$props']['size'][] = ['sm', 'md', 'lg', 'xl'];

export const Presentation = () => (
  <div class="inline-grid grid-cols-2 gap-5">
    {SBConfidentialInputStates.map((state) => {
      return (
        <div class="flex flex-col gap-5 items-start">
          {SBConfidentialInputSizes.map((size) => {
            return (
              <div class="flex gap-5">
                <SBConfidentialInput
                  name="input"
                  label="Type in your password"
                  state={state}
                  size={size}
                  key={size! + state!}
                />
                <SBConfidentialInput
                  name="input"
                  label="Type in your password"
                  icon={false}
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
