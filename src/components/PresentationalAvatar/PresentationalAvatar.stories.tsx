import PresentationalAvatar from './PresentationalAvatar.vue';
import type { Meta } from '@storybook/vue3';
import { faker } from '@faker-js/faker';

const meta: Meta<typeof PresentationalAvatar> = {
  component: PresentationalAvatar
};

export default meta;

export const Presentation = () => (
  <div class="flex gap-5">
    <PresentationalAvatar username="JohnDoe" />
    <PresentationalAvatar username="JohnDoe" image={faker.image.avatar()} />
  </div>
);
