import SBTextInput from './SBTextInput.vue';
import type { Meta } from '@storybook/vue3';

const meta: Meta<typeof SBTextInput> = {
  component: SBTextInput
};

export default meta;

const SBTextInputStates: InstanceType<typeof SBTextInput>['$props']['state'][] =
  [null, 'success', 'error'];
const SBTextInputSizes: InstanceType<typeof SBTextInput>['$props']['size'][] = [
  'sm',
  'md',
  'lg',
  'xl'
];

export const Presentation = () => (
  <div class="inline-grid grid-cols-2 gap-5">
    {SBTextInputStates.map((state) => {
      return (
        <div class="flex flex-col gap-5 items-start">
          {SBTextInputSizes.map((size) => {
            return (
              <div class="flex gap-5">
                <SBTextInput
                  name="input"
                  label="Type in your username"
                  icon="material-symbols:account-circle"
                  state={state}
                  size={size}
                  key={size! + state!}
                />
                <SBTextInput
                  name="input"
                  label="Type in your username"
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
