import PresentationalAvatarLabeled from './PresentationalAvatarLabeled.vue';
import { describe, it, expect } from 'vitest';
import { shallowMount } from '@vue/test-utils';

const defaultMountOptions = {
  props: {
    username: 'testUsername',
    image: 'testImage',
    size: 'sm'
  } as const
};

const presentationalAvatarSelector = '[data-testid=presentationalAvatar]';
const presentationalAvatarLabeledSelector =
  '[data-testid=presentationalAvatarLabeled]';
const presentationalAvatarLabelRightSelector =
  '[data-testid=presentationalAvatarLabelRight]';
const presentationalAvatarLabelLeftSelector =
  '[data-testid=presentationalAvatarLabelLeft]';

describe('PresentationalAvatarLabeled', () => {
  describe('props', () => {
    it('username - should render avatar with set username', () => {
      const wrapper = shallowMount(
        PresentationalAvatarLabeled,
        defaultMountOptions
      );

      expect(
        wrapper.get(presentationalAvatarSelector).attributes('username')
      ).toBe(defaultMountOptions.props.username);
    });
    it('size - should render avatar with set size', () => {
      const wrapper = shallowMount(
        PresentationalAvatarLabeled,
        defaultMountOptions
      );

      expect(wrapper.get(presentationalAvatarSelector).attributes('size')).toBe(
        defaultMountOptions.props.size
      );
    });
    it('username - should render label with set username', () => {
      const wrapper = shallowMount(
        PresentationalAvatarLabeled,
        defaultMountOptions
      );

      expect(wrapper.get(presentationalAvatarLabelLeftSelector).text()).toBe(
        `@${defaultMountOptions.props.username}`
      );
    });
    it('image - should render avatar with set image', () => {
      const wrapper = shallowMount(
        PresentationalAvatarLabeled,
        defaultMountOptions
      );

      expect(
        wrapper.get(presentationalAvatarSelector).attributes('image')
      ).toBe(defaultMountOptions.props.image);
    });
    it('position - should render left label only by default', () => {
      const wrapper = shallowMount(
        PresentationalAvatarLabeled,
        defaultMountOptions
      );

      expect(wrapper.find(presentationalAvatarLabelLeftSelector).exists()).toBe(
        true
      );
      expect(
        wrapper.find(presentationalAvatarLabelRightSelector).exists()
      ).toBe(false);
    });
    it('position - should render right label only when set to right', () => {
      const wrapper = shallowMount(PresentationalAvatarLabeled, {
        props: {
          ...defaultMountOptions.props,
          position: 'right'
        }
      });

      expect(wrapper.find(presentationalAvatarLabelLeftSelector).exists()).toBe(
        false
      );
      expect(
        wrapper.find(presentationalAvatarLabelRightSelector).exists()
      ).toBe(true);
    });
  });
  it('snaphshot - should match the snapshot', () => {
    const wrapper = shallowMount(
      PresentationalAvatarLabeled,
      defaultMountOptions
    );

    expect(wrapper.get(presentationalAvatarLabeledSelector))
      .toMatchInlineSnapshot(`
        DOMWrapper {
          "isDisabled": [Function],
          "wrapperElement": <div
            class="flex items-center gap-[5px] h-[56px]"
            data-testid="presentationalAvatarLabeled"
          >
            <!--v-if-->
            <presentational-avatar-stub
              class="m-[4px]"
              data-testid="presentationalAvatar"
              image="testImage"
              size="sm"
              username="testUsername"
            />
            <span
              class="font-semibold text-sm text-grayscale-body py-[5px] px-[10px]"
              data-testid="presentationalAvatarLabelLeft"
            >
               @testUsername
            </span>
          </div>,
        }
      `);
  });
});
