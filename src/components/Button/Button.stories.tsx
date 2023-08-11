import Button from './Button.vue';
import type { Meta } from '@storybook/vue3';

const meta: Meta<typeof Button> = {
  component: Button
};

export default meta;

const buttonUiTypes: InstanceType<typeof Button>['$props']['uiType'][] = [
  'primary',
  'secondary',
  'subtle',
  'ghost'
];
const buttonSizes: InstanceType<typeof Button>['$props']['size'][] = [
  'xs',
  'sm',
  'md',
  'lg',
  'xl'
];

export const Presentation = () => (
  <div class="grid gap-5">
    {buttonUiTypes.map((uiType) => {
      return (
        <div class="flex flex-col gap-5 items-start">
          {buttonSizes.map((size) => {
            return (
              <div class="flex gap-5">
                <Button
                  icon="material-symbols:add-rounded"
                  position="right"
                  ui-type={uiType}
                  size={size}
                  key={size! + uiType!}
                >
                  Button
                </Button>
                <Button
                  icon="material-symbols:add-rounded"
                  loading={true}
                  position="right"
                  ui-type={uiType}
                  size={size}
                  key={size! + uiType!}
                >
                  Button
                </Button>
                <Button ui-type={uiType} size={size} key={size! + uiType!}>
                  Button
                </Button>
                <Button
                  loading={true}
                  ui-type={uiType}
                  size={size}
                  key={size! + uiType!}
                >
                  Button
                </Button>
                <Button
                  icon="material-symbols:add-rounded"
                  position="left"
                  ui-type={uiType}
                  size={size}
                  key={size! + uiType!}
                >
                  Button
                </Button>
                <Button
                  loading={true}
                  icon="material-symbols:add-rounded"
                  position="left"
                  ui-type={uiType}
                  size={size}
                  key={size! + uiType!}
                >
                  Button
                </Button>
                <Button
                  icon="material-symbols:close-rounded"
                  ui-type={uiType}
                  size={size}
                  key={size! + uiType!}
                />
                <Button
                  loading={true}
                  icon="material-symbols:add-rounded"
                  ui-type={uiType}
                  size={size}
                  key={size! + uiType!}
                />
              </div>
            );
          })}
        </div>
      );
    })}
  </div>
);
