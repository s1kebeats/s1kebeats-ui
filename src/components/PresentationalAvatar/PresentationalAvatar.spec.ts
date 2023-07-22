import PresentationalAvatar from './PresentationalAvatar.vue';
import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';

const presentationalAvatarSelector = '[data-testid=presentationalAvatar]';
const presentationalAvatarImageSelector =
  '[data-testid=presentationalAvatarImage]';
const presentationalAvatarAbbrSelector =
  '[data-testid=presentationalAvatarAbbr]';

describe('PresentationalAvatar', () => {
  describe('props', () => {
    it('image - should render image without abbr when provided', () => {
      const wrapper = mount(PresentationalAvatar, {
        props: {
          username: 'testUsername',
          image: 'testImage'
        }
      });

      expect(wrapper.find(presentationalAvatarImageSelector).exists()).toBe(
        true
      );
      expect(wrapper.find(presentationalAvatarAbbrSelector).exists()).toBe(
        false
      );
    });
    it('image - should render username abbr without image when not', () => {
      const wrapper = mount(PresentationalAvatar, {
        props: {
          username: 'testUsername',
          image: null
        }
      });

      expect(wrapper.find(presentationalAvatarAbbrSelector).exists()).toBe(
        true
      );
      expect(wrapper.find(presentationalAvatarImageSelector).exists()).toBe(
        false
      );
    });
    it('username - should render valid username abbr', () => {
      const testUsername = 'testUsername';
      const wrapper = mount(PresentationalAvatar, {
        props: {
          username: testUsername,
          image: null
        }
      });
      expect(wrapper.get(presentationalAvatarAbbrSelector).text()).toBe(
        testUsername.slice(0, 2).toUpperCase()
      );
    });
  });
  it('snaphshot - should match the snapshot', () => {
    const wrapper = mount(PresentationalAvatar, {
      props: {
        username: 'testUsername',
        image: null
      }
    });

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
        `);
  });
});
