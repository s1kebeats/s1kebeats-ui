import SBBtn from './SBBtn.vue';
import type { Meta } from '@storybook/vue3';

const meta: Meta<typeof SBBtn> = {
  component: SBBtn
};

export default meta;

const SBBtnUiTypes: InstanceType<typeof SBBtn>['$props']['uiType'][] = [
  'primary',
  'secondary',
  'subtle',
  'ghost'
];
const SBBtnSizes: InstanceType<typeof SBBtn>['$props']['size'][] = [
  'xs',
  'sm',
  'md',
  'lg',
  'xl'
];

export const Presentation = () => (
  <div class="grid gap-5">
    {SBBtnUiTypes.map((uiType) => {
      return (
        <div class="flex flex-col gap-5 items-start">
          {SBBtnSizes.map((size) => {
            return (
              <div class="flex gap-5">
                <SBBtn
                  icon="material-symbols:add-rounded"
                  position="right"
                  ui-type={uiType}
                  size={size}
                  key={size! + uiType!}
                >
                  Button
                </SBBtn>
                <SBBtn
                  icon="material-symbols:add-rounded"
                  loading={true}
                  position="right"
                  ui-type={uiType}
                  size={size}
                  key={size! + uiType!}
                >
                  Button
                </SBBtn>
                <SBBtn ui-type={uiType} size={size} key={size! + uiType!}>
                  Button
                </SBBtn>
                <SBBtn
                  loading={true}
                  ui-type={uiType}
                  size={size}
                  key={size! + uiType!}
                >
                  Button
                </SBBtn>
                <SBBtn
                  icon="material-symbols:add-rounded"
                  position="left"
                  ui-type={uiType}
                  size={size}
                  key={size! + uiType!}
                >
                  Button
                </SBBtn>
                <SBBtn
                  loading={true}
                  icon="material-symbols:add-rounded"
                  position="left"
                  ui-type={uiType}
                  size={size}
                  key={size! + uiType!}
                >
                  Button
                </SBBtn>
                <SBBtn
                  icon="material-symbols:close-rounded"
                  ui-type={uiType}
                  size={size}
                  key={size! + uiType!}
                />
                <SBBtn
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
