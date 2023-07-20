import { shallowMount } from '@vue/test-utils';
import Button from './Button.vue';
import { describe, it, expect } from 'vitest';

const buttonIconSelector = '[data-testid=buttonIcon]';
const testIcon = 'testIcon';

describe('Button', () => {
  describe('props', () => {
    it('icon - should render icon when provided', () => {
      const wrapper = shallowMount(Button, {
        props: {
          icon: testIcon
        }
      });
      expect(wrapper.find(buttonIconSelector).exists()).toBe(true);
    });
    it('icon - should not render icon when not provided', () => {
      const wrapper = shallowMount(Button);
      expect(wrapper.find(buttonIconSelector).exists()).toBe(false);
    });
    it('icon - should render with set icon', () => {
      const wrapper = shallowMount(Button, {
        props: {
          icon: testIcon
        }
      });
      expect(wrapper.get(buttonIconSelector).attributes('icon')).toBe(testIcon);
    });
  });
  it('snapshot - should match the snapshot', () => {
    const wrapper = shallowMount(Button);
    expect(wrapper.element).toMatchInlineSnapshot(`
      <button
        class="flex items-center justify-center link transition-all disabled:cursor-not-allowed desktop-text-sm rounded-xl min-h-[52px] px-6 gap-3 text-grayscale-bg bg-primary hover:bg-primary-default_strong focus:outline-8 focus:outline focus:outline-primary-bg_strong disabled:opacity-50 active:bg-grayscale-header"
      >
        
        
        <!--v-if-->
        <!--v-if-->
      </button>
    `);
  });
});
