import SBLoadingSpinner from './SBLoadingSpinner.vue';
import type { Meta } from '@storybook/vue3';

const meta: Meta<typeof SBLoadingSpinner> = {
  component: SBLoadingSpinner
};

export default meta;

const SBLoadingSpinnerSizes: InstanceType<
  typeof SBLoadingSpinner
>['$props']['size'][] = ['xs', 'sm', 'md', 'lg', 'xl'];

export const Presentation = () => (
  <div class="flex flex-col gap-5 items-start">
    {SBLoadingSpinnerSizes.map((size) => {
      return <SBLoadingSpinner size={size} key={size} />;
    })}
  </div>
);
