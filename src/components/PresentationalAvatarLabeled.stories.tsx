import PresentationalAvatarLabeled from './PresentationalAvatarLabeled.vue';
import type { Meta } from '@storybook/vue3';
import { faker } from '@faker-js/faker';

const meta: Meta<typeof PresentationalAvatarLabeled> = {
  component: PresentationalAvatarLabeled
};

export default meta;

const presentationalAvatarPositions: InstanceType<
  typeof PresentationalAvatarLabeled
>['$props']['position'][] = ['left', 'right'];

export const Presentation = () => (
  <div>
    <div class="flex gap-5">
      <PresentationalAvatarLabeled username="JohnDoe" position="left" />
      <PresentationalAvatarLabeled username="JohnDoe" position="right" />
    </div>
    <div class="flex gap-5">
      <PresentationalAvatarLabeled
        username="JohnDoe"
        image={faker.image.avatar()}
        position="left"
      />
      <PresentationalAvatarLabeled
        image={faker.image.avatar()}
        username="JohnDoe"
        position="right"
      />
    </div>
  </div>
);
