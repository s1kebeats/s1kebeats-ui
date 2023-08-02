import SocialLink from './SocialLink.vue';
import type { Meta } from '@storybook/vue3';
import Button from '@/components/Button/Button.vue';

const meta: Meta<typeof SocialLink> = {
  component: SocialLink
};

export default meta;

const socialLinkSizes: InstanceType<typeof SocialLink>['$props']['size'][] = [
  'sm',
  'md',
  'lg'
];

export const Presentation = () => (
  <div class="flex flex-col gap-5">
    {socialLinkSizes.map((size) => {
      return (
        <div class="flex gap-5 items-center">
          <SocialLink icon="mdi:vk" size={size} username="username" url="url" />
          <Button
            icon="material-symbols:add-rounded"
            position="right"
            size={size}
          >
            Button
          </Button>
        </div>
      );
    })}
  </div>
);
