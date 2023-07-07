import PresentationalAvatarLabeled from './PresentationalAvatarLabeled.vue';
import type { Meta, StoryObj } from '@storybook/vue3';
import { faker } from '@faker-js/faker';

const meta: Meta<typeof PresentationalAvatarLabeled> = {
  component: PresentationalAvatarLabeled
};

export default meta;

type Story = StoryObj<typeof PresentationalAvatarLabeled>;

export const WithoutImage: Story = {
  render: (args) => ({
    components: {
      PresentationalAvatarLabeled
    },
    setup() {
      return {
        args
      };
    },
    template: '<PresentationalAvatarLabeled v-bind="args" />'
  }),
  args: {
    username: 'testUsername',
    image: null
  }
};

export const WithImage: Story = {
  render: (args) => ({
    components: {
      PresentationalAvatarLabeled
    },
    setup() {
      return {
        args
      };
    },
    template: '<PresentationalAvatarLabeled v-bind="args" />'
  }),
  args: {
    username: 'testUsername',
    image: faker.image.avatar()
  }
};

export const PositionRight: Story = {
  render: (args) => ({
    components: {
      PresentationalAvatarLabeled
    },
    setup() {
      return {
        args
      };
    },
    template: '<PresentationalAvatarLabeled v-bind="args" />'
  }),
  args: {
    username: 'testUsername',
    image: null,
    position: 'right'
  }
};

export const PositionLeft: Story = {
  render: (args) => ({
    components: {
      PresentationalAvatarLabeled
    },
    setup() {
      return {
        args
      };
    },
    template: '<PresentationalAvatarLabeled v-bind="args" />'
  }),
  args: {
    username: 'testUsername',
    image: null,
    position: 'left'
  }
};
