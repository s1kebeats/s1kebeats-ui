import PresentationalAvatar from './PresentationalAvatar.vue'
import type { Meta, StoryObj } from '@storybook/vue3'
import { faker } from '@faker-js/faker'

const meta: Meta<typeof PresentationalAvatar> = {
  component: PresentationalAvatar
}

export default meta

type Story = StoryObj<typeof PresentationalAvatar>

export const WithoutImage: Story = {
  render: (args) => ({
    components: { PresentationalAvatar },
    setup() {
      return { args }
    },
    template: '<PresentationalAvatar v-bind="args" />'
  }),
  args: {
    username: 'testUsername',
    image: null
  }
}

export const WithImage: Story = {
  render: (args) => ({
    components: { PresentationalAvatar },
    setup() {
      return { args }
    },
    template: '<PresentationalAvatar v-bind="args" />'
  }),
  args: {
    username: 'testUsername',
    image: faker.image.avatar()
  }
}
