import UsernameInput from './UsernameInput.vue';
import type { Meta } from '@storybook/vue3';

const meta: Meta<typeof UsernameInput> = {
  component: UsernameInput
};

export default meta;

const usernameInputStates: InstanceType<
  typeof UsernameInput
>['$props']['state'][] = [null, 'success', 'error'];
const usernameInputSizes: InstanceType<
  typeof UsernameInput
>['$props']['size'][] = ['sm', 'md', 'lg', 'xl'];

export const Presentation = () => (
  <div class="inline-grid grid-cols-2 gap-5">
    {usernameInputStates.map((state) => {
      return (
        <div class="flex flex-col gap-5 items-start">
          {usernameInputSizes.map((size) => {
            return (
              <div class="flex items-center gap-5">
                <UsernameInput
                  name="input"
                  state={state}
                  size={size}
                  key={size! + state!}
                />
                <UsernameInput
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
