import SBEmailInput from './SBEmailInput.vue';
import type { Meta } from '@storybook/vue3';

const meta: Meta<typeof SBEmailInput> = {
  component: SBEmailInput,
};

export default meta;

const SBEmailInputStates: InstanceType<
  typeof SBEmailInput
>['$props']['state'][] = [null, 'success', 'error'];
const SBEmailInputSizes: InstanceType<typeof SBEmailInput>['$props']['size'][] =
  ['sm', 'md', 'lg', 'xl'];

export const Presentation = () => (
  <div class="inline-grid grid-cols-2 gap-5">
    {SBEmailInputStates.map((state) => {
      return (
        <div class="flex flex-col gap-5 items-start">
          {SBEmailInputSizes.map((size) => {
            return (
              <div class="flex items-center gap-5">
                <SBEmailInput
                  name="input"
                  state={state}
                  size={size}
                  key={size! + state!}
                />
                <SBEmailInput
                  icon={false}
                  name="input"
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
