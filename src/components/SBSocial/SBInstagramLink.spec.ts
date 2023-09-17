import SBInstagramLink from './SBInstagramLink.vue';
import { describe, expect, it } from 'vitest';
import { shallowMount } from '@vue/test-utils';

const socialLinkSelector = '[data-testid=socialLink]';

const defaultMountOptions = {
  props: {
    username: 'username',
    size: 'lg'
  }
};

describe('SBInstagramLink', () => {
  describe('props', () => {
    it('username - should render socialLink with set username', () => {
      const wrapper = shallowMount(SBInstagramLink, defaultMountOptions);
      expect(wrapper.get(socialLinkSelector).attributes('username')).toBe(
        defaultMountOptions.props.username
      );
    });
    it('size - should render socialLink with set size', () => {
      const wrapper = shallowMount(SBInstagramLink, defaultMountOptions);
      expect(wrapper.get(socialLinkSelector).attributes('size')).toBe(
        defaultMountOptions.props.size
      );
    });
  });
  it('snapshot - should match the snapshot', () => {
    const wrapper = shallowMount(SBInstagramLink, defaultMountOptions);
    expect(wrapper.get(socialLinkSelector)).toMatchInlineSnapshot(`
      DOMWrapper {
        "isDisabled": [Function],
        "wrapperElement": <s-b-social-link-stub
          data-testid="socialLink"
          icon="mdi:instagram"
          size="lg"
          url="https://instagram.com/@"
          username="username"
        />,
      }
    `);
  });
});
