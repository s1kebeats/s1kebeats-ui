import EmailInput from './EmailInput.vue';
import type { Meta } from '@storybook/vue3';

const meta: Meta<typeof EmailInput> = {
  component: EmailInput
};

export default meta;

const emailInputStates: InstanceType<typeof EmailInput>['$props']['state'][] = [
  null,
  'success',
  'error'
];
const emailInputSizes: InstanceType<typeof EmailInput>['$props']['size'][] = [
  'sm',
  'md',
  'lg',
  'xl'
];

export const Presentation = () => (
  <div class="inline-grid grid-cols-2 gap-5">
    {emailInputStates.map((state) => {
      return (
        <div class="flex flex-col gap-5 items-start">
          {emailInputSizes.map((size) => {
            return (
              <div class="flex items-center gap-5">
                <EmailInput
                  name="input"
                  state={state}
                  size={size}
                  key={size! + state!}
                />
                <EmailInput
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
