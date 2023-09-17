import SBPresentationalAvatar from './SBPresentationalAvatar.vue';
import type { Meta } from '@storybook/vue3';
import { faker } from '@faker-js/faker';

const meta: Meta<typeof SBPresentationalAvatar> = {
  component: SBPresentationalAvatar
};

export default meta;

const avatarSizes: InstanceType<
  typeof SBPresentationalAvatar
>['$props']['size'][] = ['sm', 'md', 'custom'];

export const Presentation = () => (
  <div class="flex flex-col gap-5">
    {avatarSizes.map((size) => {
      if (size === 'custom') {
        return (
          <div class="flex gap-5">
            <SBPresentationalAvatar
              class="text-2xl w-[100px]"
              size={size}
              username="JohnDoe"
            />
            <SBPresentationalAvatar
              class="text-2xl w-[100px]"
              size={size}
              username="JohnDoe"
              image={faker.image.avatar()}
            />
          </div>
        );
      }
      return (
        <div class="flex gap-5">
          <SBPresentationalAvatar size={size} username="JohnDoe" />
          <SBPresentationalAvatar
            size={size}
            username="JohnDoe"
            image={faker.image.avatar()}
          />
        </div>
      );
    })}
  </div>
);
