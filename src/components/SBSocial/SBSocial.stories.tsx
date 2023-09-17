import SBInstagramLink from './SBInstagramLink.vue';
import SBVkLink from './SBVkLink.vue';
import SBYoutubeLink from './SBYoutubeLink.vue';
import type { Meta } from '@storybook/vue3';

const meta: Meta<typeof SBInstagramLink> = {
  component: SBInstagramLink
};

export default meta;

const socialLinkSizes: InstanceType<typeof SBInstagramLink>['$props']['size'][] =
  ['sm', 'md', 'lg'];

export const Presentation = () => (
  <div class="flex flex-col gap-5">
    {socialLinkSizes.map((size) => {
      return (
        <div class="flex gap-5 items-center">
          <SBInstagramLink size={size} username="username" />
          <SBVkLink size={size} username="username" />
          <SBYoutubeLink size={size} username="username" />
        </div>
      );
    })}
  </div>
);
