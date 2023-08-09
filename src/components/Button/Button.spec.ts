import { shallowMount } from '@vue/test-utils';
import Button from './Button.vue';
import { describe, it, expect } from 'vitest';

const buttonIconSelector = '[data-testid=buttonIcon]';
const testIcon = 'testIcon';
const buttonContentWrapperSelector = '[data-testid=buttonContentWrapper]';
const loadingSpinnerSelector = '[data-testid=loadingSpinner]';

describe('Button', () => {
  describe('props', () => {
    it('loading - should render button content without loadingSpinner by default', () => {
      const wrapper = shallowMount(Button);
      expect(wrapper.find(buttonContentWrapperSelector).isVisible()).toBe(true);
      expect(wrapper.find(loadingSpinnerSelector).exists()).toBe(false);
    });
    it('loading - should render loadingSpinner without button content when set to "true"', () => {
      const wrapper = shallowMount(Button, {
        props: {
          loading: true
        }
      });
      expect(wrapper.find(buttonContentWrapperSelector).classes()).toContain(
        'opacity-0'
      );
      expect(wrapper.find(loadingSpinnerSelector).exists()).toBe(true);
    });
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
        class="font-semibold transition-all disabled:cursor-not-allowed text-base rounded-xl min-h-[52px] px-6 text-grayscale-bg bg-primary hover:bg-primary-default_strong focus:outline-8 focus:outline focus:outline-primary-bg_strong disabled:opacity-50 active:bg-grayscale-header"
      >
        <div
          class="relative flex items-center justify-center"
        >
          <div
            class="flex items-center justify-center gap-3"
            data-testid="buttonContentWrapper"
          >
            
            
            <!--v-if-->
            <!--v-if-->
          </div>
          <!--v-if-->
        </div>
      </button>
    `);
  });
});
