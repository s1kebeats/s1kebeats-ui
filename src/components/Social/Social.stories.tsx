import InstagramLink from './InstagramLink.vue';
import VkLink from './VkLink.vue';
import YoutubeLink from './YoutubeLink.vue';
import type { Meta } from '@storybook/vue3';
import Button from '@/components/Button/Button.vue';

const meta: Meta<typeof InstagramLink> = {
  component: InstagramLink
};

export default meta;

const socialLinkSizes: InstanceType<typeof InstagramLink>['$props']['size'][] =
  ['sm', 'md', 'lg'];

export const Presentation = () => (
  <div class="flex flex-col gap-5">
    {socialLinkSizes.map((size) => {
      return (
        <div class="flex gap-5 items-center">
          <InstagramLink size={size} username="username" />
          <VkLink size={size} username="username" />
          <YoutubeLink size={size} username="username" />
        </div>
      );
    })}
  </div>
);
