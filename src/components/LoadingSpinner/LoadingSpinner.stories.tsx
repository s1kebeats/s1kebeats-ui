import LoadingSpinner from './LoadingSpinner.vue';
import type { Meta } from '@storybook/vue3';

const meta: Meta<typeof LoadingSpinner> = {
  component: LoadingSpinner
};

export default meta;

const loadingSpinnerSizes: InstanceType<
  typeof LoadingSpinner
>['$props']['size'][] = ['sm', 'md', 'lg', 'xl'];

export const Presentation = () => (
  <div class="flex flex-col gap-5 items-start">
    {loadingSpinnerSizes.map((size) => {
      return <LoadingSpinner size={size} key={size} />;
    })}
  </div>
);
