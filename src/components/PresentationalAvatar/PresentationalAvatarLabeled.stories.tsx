import PresentationalAvatarLabeled from './PresentationalAvatarLabeled.vue';
import type { Meta } from '@storybook/vue3';
import { faker } from '@faker-js/faker';

const meta: Meta<typeof PresentationalAvatarLabeled> = {
  component: PresentationalAvatarLabeled
};

export default meta;

const avatarSizes: InstanceType<
  typeof PresentationalAvatarLabeled
>['$props']['size'][] = ['sm', 'md'];

export const Presentation = () => (
  <div class="flex flex-col gap-5">
    {avatarSizes.map((size) => {
      return (
        <div>
          <div class="flex items-center gap-5">
            <PresentationalAvatarLabeled
              size={size}
              username="JohnDoe"
              position="left"
            />
            <PresentationalAvatarLabeled
              size={size}
              username="JohnDoe"
              position="right"
            />
          </div>
          <div class="flex gap-5">
            <PresentationalAvatarLabeled
              size={size}
              username="JohnDoe"
              image={faker.image.avatar()}
              position="left"
            />
            <PresentationalAvatarLabeled
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
