import PresentationalAvatar from './PresentationalAvatar.vue'
import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'

const presentationalAvatarSelector = '[data-testid=presentationalAvatar]'
const presentationalAvatarImageSelector = '[data-testid=presentationalAvatarImage]'
const presentationalAvatarAbbrSelector = '[data-testid=presentationalAvatarAbbr]'

describe('PresentationalAvatar', () => {
  describe('props', () => {
    it('image - should render image when provided', () => {
      const wrapper = mount(PresentationalAvatar, {
        props: {
          username: 'testUsername',
          image: 'testImage'
        }
      })

      expect(wrapper.find(presentationalAvatarImageSelector).exists()).toBe(true)
    })
    it('image - should not render username abbr when provided', () => {
      const wrapper = mount(PresentationalAvatar, {
        props: {
          username: 'testUsername',
          image: 'testImage'
        }
      })

      expect(wrapper.find(presentationalAvatarAbbrSelector).exists()).toBe(false)
    })
    it('image - should render username abbr when set to null', () => {
      const wrapper = mount(PresentationalAvatar, {
        props: {
          username: 'testUsername',
          image: null
        }
      })

      expect(wrapper.find(presentationalAvatarAbbrSelector).exists()).toBe(true)
    })
    it('image - should not render image when set to null', () => {
      const wrapper = mount(PresentationalAvatar, {
        props: {
          username: 'testUsername',
          image: null
        }
      })

      expect(wrapper.find(presentationalAvatarImageSelector).exists()).toBe(false)
    })
    it('username - should render valid username abbr', () => {
      const testUsername = 'testUsername'
      const wrapper = mount(PresentationalAvatar, {
        props: {
          username: testUsername,
          image: null
        }
      })
      expect(wrapper.get(presentationalAvatarAbbrSelector).text()).toBe(
        testUsername.slice(0, 2).toUpperCase()
      )
    })
  })
  it('snaphshot - should match the snapshot', () => {
    const wrapper = mount(PresentationalAvatar, {
      props: {
        username: 'testUsername',
        image: null
      }
    })

    expect(wrapper.get(presentationalAvatarSelector)).toMatchInlineSnapshot(`
          DOMWrapper {
            "isDisabled": [Function],
            "wrapperElement": <div
              class="flex items-center justify-center bg-primary w-[48px] h-[48px] rounded-full"
              data-testid="presentationalAvatar"
            >
              <span
                class="desktop-text-xs link text-grayscale-bg"
                data-testid="presentationalAvatarAbbr"
              >
                TE
              </span>
            </div>,
          }
        `)
  })
})
