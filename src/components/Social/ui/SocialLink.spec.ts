import SocialLink from './SocialLink.vue';
import { describe, expect, it } from 'vitest';
import { shallowMount } from '@vue/test-utils';

const socialLinkIconSelector = '[data-testid=socialLinkIcon]';
const socialLinkSelector = '[data-testid=socialLink]';

const defaultMountOptions = {
  props: {
    username: 'username',
    icon: 'icon',
    url: 'url'
  },
  getUrl(): string {
    return this.props.url + this.props.username;
  }
};

describe('SocialLink', () => {
  describe('props', () => {
    it('username - should render with set username', () => {
      const wrapper = shallowMount(SocialLink, defaultMountOptions);
      expect(wrapper.get(socialLinkSelector).attributes('href')).toContain(
        defaultMountOptions.props.username
      );
    });
    it('url - should render with set url', () => {
      const wrapper = shallowMount(SocialLink, defaultMountOptions);

      expect(wrapper.get(socialLinkSelector).attributes('href')).toContain(
        defaultMountOptions.props.url
      );
    });
    it('username + url - should render with complete link', () => {
      const wrapper = shallowMount(SocialLink, defaultMountOptions);

      expect(wrapper.get(socialLinkSelector).attributes('href')).toBe(
        defaultMountOptions.getUrl()
      );
    });
    it('icon - should render with set icon', () => {
      const wrapper = shallowMount(SocialLink, defaultMountOptions);

      expect(wrapper.get(socialLinkIconSelector).attributes('icon')).toBe(
        defaultMountOptions.props.icon
      );
    });
  });
  it('snapshot - should match the snapshot', () => {
    const wrapper = shallowMount(SocialLink, defaultMountOptions);
    expect(wrapper.get(socialLinkSelector)).toMatchInlineSnapshot(`
      DOMWrapper {
        "isDisabled": [Function],
        "wrapperElement": <a
          data-testid="socialLink"
          href="urlusername"
          target="_blank"
        >
          <anonymous-stub
            class="text-[30px]"
            data-testid="socialLinkIcon"
            icon="icon"
          />
        </a>,
      }
    `);
  });
});
