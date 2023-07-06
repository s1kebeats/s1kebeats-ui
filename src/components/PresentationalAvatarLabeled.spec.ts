import PresentationalAvatarLabeled from './PresentationalAvatarLabeled.vue'
import { describe, it, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'

const defaultMountOptions = {
  props: {
    username: 'testUsername',
    image: 'testImage'
  }
}

const presentationalAvatarSelector = '[data-testid=presentationalAvatar]'
const presentationalAvatarLabeledSelector =
  '[data-testid=presentationalAvatarLabeled]'
const presentationalAvatarLabeledLabelSelector =
  '[data-testid=presentationalAvatarLabeledLabel]'

describe('PresentationalAvatarLabeled', () => {
  describe('props', () => {
    it('username - should render avatar with set username', () => {
      const wrapper = shallowMount(
        PresentationalAvatarLabeled,
        defaultMountOptions
      )

      expect(
        wrapper.get(presentationalAvatarSelector).attributes('username')
      ).toBe(defaultMountOptions.props.username)
    })
    it('username - should render label with set username', () => {
      const wrapper = shallowMount(
        PresentationalAvatarLabeled,
        defaultMountOptions
      )

      expect(wrapper.get(presentationalAvatarLabeledLabelSelector).text()).toBe(
        `@${defaultMountOptions.props.username}`
      )
    })
    it('image - should render avatar with set image', () => {
      const wrapper = shallowMount(
        PresentationalAvatarLabeled,
        defaultMountOptions
      )

      expect(
        wrapper.get(presentationalAvatarSelector).attributes('image')
      ).toBe(defaultMountOptions.props.image)
    })
  })
  it('snaphshot - should match the snapshot', () => {
    const wrapper = shallowMount(
      PresentationalAvatarLabeled,
      defaultMountOptions
    )

    expect(wrapper.get(presentationalAvatarLabeledSelector))
      .toMatchInlineSnapshot(`
          DOMWrapper {
            "isDisabled": [Function],
            "wrapperElement": <div
              class="flex items-center gap-[5px] h-[56px]"
              data-testid="presentationalAvatarLabeled"
            >
              
              <presentational-avatar-stub
                class="m-[4px]"
                data-testid="presentationalAvatar"
                image="testImage"
                username="testUsername"
              />
              <span
                class="link desktop-text-xs text-grayscale-body py-[5px] px-[10px]"
                data-testid="presentationalAvatarLabeledLabel"
              >
                 @testUsername
              </span>
              
            </div>,
          }
        `)
  })
})
