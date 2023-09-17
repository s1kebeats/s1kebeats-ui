import SBPresentationalAvatarLabeled from './SBPresentationalAvatarLabeled.vue';
import type { Meta } from '@storybook/vue3';
import { faker } from '@faker-js/faker';

const meta: Meta<typeof SBPresentationalAvatarLabeled> = {
  component: SBPresentationalAvatarLabeled
};

export default meta;

const avatarSizes: InstanceType<
  typeof SBPresentationalAvatarLabeled
>['$props']['size'][] = ['sm', 'md'];

export const Presentation = () => (
  <div class="flex flex-col gap-5">
    {avatarSizes.map((size) => {
      return (
        <div>
          <div class="flex items-center gap-5">
            <SBPresentationalAvatarLabeled
              size={size}
              username="JohnDoe"
              position="left"
            />
            <SBPresentationalAvatarLabeled
              size={size}
              username="JohnDoe"
              position="right"
            />
          </div>
          <div class="flex gap-5">
            <SBPresentationalAvatarLabeled
              size={size}
              username="JohnDoe"
              image={faker.image.avatar()}
              position="left"
            />
            <SBPresentationalAvatarLabeled
              size={size}
              image={faker.image.avatar()}
              username="JohnDoe"
              position="right"
            />
          </div>
        </div>
      );
    })}
  </div>
);
