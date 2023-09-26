import SBBtn from './SBBtn.vue';
import type { Meta } from '@storybook/vue3';

const meta: Meta<typeof SBBtn> = {
  component: SBBtn,
};

export default meta;

const SBBtnDesignTypes: InstanceType<typeof SBBtn>['$props']['designType'][] = [
  'primary',
  'secondary',
  'subtle',
  'ghost',
];
const SBBtnSizes: InstanceType<typeof SBBtn>['$props']['size'][] = [
  'xs',
  'sm',
  'md',
  'lg',
  'xl',
];
const SBBtnColors: InstanceType<typeof SBBtn>['$props']['color'][] = [
  'primary',
  'secondary',
  'success',
  'warning',
  'danger',
];

export const Presentation = () => (
  <div class="grid gap-5">
    {SBBtnColors.map((color) => {
      return (
        <div class="grid gap-5">
          {SBBtnDesignTypes.map((designType) => {
            return (
              <div class="flex flex-col gap-5 items-start">
                {SBBtnSizes.map((size) => {
                  return (
                    <div class="flex gap-5">
                      <SBBtn
                        color={color}
                        icon="material-symbols:add-rounded"
                        position="right"
                        design-type={designType}
                        size={size}
                        key={size! + designType!}
                      >
                        Button
                      </SBBtn>
                      <SBBtn
                        color={color}
                        icon="material-symbols:add-rounded"
                        loading={true}
                        position="right"
                        design-type={designType}
                        size={size}
                        key={size! + designType!}
                      >
                        Button
                      </SBBtn>
                      <SBBtn
                        color={color}
                        design-type={designType}
                        size={size}
                        key={size! + designType!}
                      >
                        Button
                      </SBBtn>
                      <SBBtn
                        color={color}
                        loading={true}
                        design-type={designType}
                        size={size}
                        key={size! + designType!}
                      >
                        Button
                      </SBBtn>
                      <SBBtn
                        color={color}
                        icon="material-symbols:add-rounded"
                        position="left"
                        design-type={designType}
                        size={size}
                        key={size! + designType!}
                      >
                        Button
                      </SBBtn>
                      <SBBtn
                        color={color}
                        loading={true}
                        icon="material-symbols:add-rounded"
                        position="left"
                        design-type={designType}
                        size={size}
                        key={size! + designType!}
                      >
                        Button
                      </SBBtn>
                      <SBBtn
                        color={color}
                        icon="material-symbols:close-rounded"
                        design-type={designType}
                        size={size}
                        key={size! + designType!}
                      />
                      <SBBtn
                        color={color}
                        loading={true}
                        icon="material-symbols:add-rounded"
                        design-type={designType}
                        size={size}
                        key={size! + designType!}
                      />
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      );
    })}
  </div>
);
