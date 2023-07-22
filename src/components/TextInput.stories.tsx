import TextInput from './TextInput.vue';
import type { Meta } from '@storybook/vue3';

const meta: Meta<typeof TextInput> = {
  component: TextInput
};

export default meta;

const textInputStates: InstanceType<typeof TextInput>['$props']['state'][] = [
  null,
  'success',
  'error'
];
const textInputSizes: InstanceType<typeof TextInput>['$props']['size'][] = [
  'sm',
  'md',
  'lg',
  'xl'
];

export const Presentation = () => (
  <div class="inline-grid grid-cols-2 gap-5">
    {textInputStates.map((state) => {
      return (
        <div class="flex flex-col gap-5 items-start">
          {textInputSizes.map((size) => {
            return (
              <div class="flex gap-5">
                <TextInput
                  name="input"
                  disabled={true}
                  label="Type in your username"
                  icon="material-symbols:account-circle"
                  state={state}
                  size={size}
                  key={size! + state!}
                />
                <TextInput
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
