import Button from './Button.vue';
import type { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta<typeof Button> = {
  component: Button
};

export default meta;

const buttonTypes: InstanceType<typeof Button>['$props']['type'][] = [
  'primary',
  'secondary',
  'subtle',
  'ghost'
];
const buttonSizes: InstanceType<typeof Button>['$props']['size'][] = [
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
                <Button
                  icon="material-symbols:add-rounded"
                  position="right"
                  type={type}
                  size={size}
                  key={size! + type!}
                >
                  Button
                </Button>
                <Button type={type} size={size} key={size! + type!}>
                  Button
                </Button>
                <Button
                  icon="material-symbols:add-rounded"
                  position="left"
                  type={type}
                  size={size}
                  key={size! + type!}
                >
                  Button
                </Button>
                <Button
                  icon="material-symbols:add-rounded"
                  type={type}
                  size={size}
                  key={size! + type!}
                />
              </div>
            );
          })}
        </div>
      );
    })}
  </div>
);
