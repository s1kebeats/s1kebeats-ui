import LoadingButton from './LoadingButton.vue';
import type { Meta } from '@storybook/vue3';

const meta: Meta<typeof LoadingButton> = {
  component: LoadingButton
};

export default meta;

const buttonTypes: InstanceType<typeof LoadingButton>['$props']['type'][] = [
  'primary',
  'secondary',
  'subtle',
  'ghost'
];
const buttonSizes: InstanceType<typeof LoadingButton>['$props']['size'][] = [
  'sm',
  'md',
  'lg',
  'xl'
];

export const Presentation = () => (
  <div class="inline-grid grid-cols-2 gap-5">
    {buttonTypes.map((type) => {
      return (
        <div class="flex flex-col gap-5 items-start">
          {buttonSizes.map((size) => {
            return (
              <div class="flex gap-5">
                <LoadingButton
                  icon="material-symbols:add-rounded"
                  position="right"
                  type={type}
                  size={size}
                  key={size! + type!}
                  loading={true}
                >
                  LoadingButton
                </LoadingButton>
                <LoadingButton
                  loading={false}
                  icon="material-symbols:add-rounded"
                  type={type}
                  size={size}
                  key={size! + type!}
                >
                  LoadingButton
                </LoadingButton>
              </div>
            );
          })}
        </div>
      );
    })}
  </div>
);
