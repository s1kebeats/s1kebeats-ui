import SBUsernameInput from './SBUsernameInput.vue';
import type { Meta } from '@storybook/vue3';

const meta: Meta<typeof SBUsernameInput> = {
  component: SBUsernameInput,
};

export default meta;

const SBUsernameInputStates: InstanceType<
  typeof SBUsernameInput
>['$props']['state'][] = [null, 'success', 'error'];
const SBUsernameInputSizes: InstanceType<
  typeof SBUsernameInput
>['$props']['size'][] = ['sm', 'md', 'lg', 'xl'];

export const Presentation = () => (
  <div class="inline-grid grid-cols-2 gap-5">
    {SBUsernameInputStates.map((state) => {
      return (
        <div class="flex flex-col gap-5 items-start">
          {SBUsernameInputSizes.map((size) => {
            return (
              <div class="flex items-center gap-5">
                <SBUsernameInput
                  name="input"
                  state={state}
                  size={size}
                  key={size! + state!}
                />
                <SBUsernameInput
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
