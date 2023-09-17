import SBSocialLink from './SBSocialLink.vue';
import type { Meta } from '@storybook/vue3';
import SBBtn from '@/components/SBBtn';

const meta: Meta<typeof SBSocialLink> = {
  component: SBSocialLink
};

export default meta;

const socialLinkSizes: InstanceType<typeof SBSocialLink>['$props']['size'][] = [
  'sm',
  'md',
  'lg'
];

export const Presentation = () => (
  <div class="flex flex-col gap-5">
    {socialLinkSizes.map((size) => {
      return (
        <div class="flex gap-5 items-center">
          <SBSocialLink
            icon="mdi:vk"
            size={size}
            username="username"
            url="url"
          />
          <SBBtn
            icon="material-symbols:add-rounded"
            position="right"
            size={size}
          >
            Button
          </SBBtn>
        </div>
      );
    })}
  </div>
);
