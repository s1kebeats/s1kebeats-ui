import { shallowMount } from '@vue/test-utils';
import SBBtn from './SBBtn.vue';
import { describe, it, expect } from 'vitest';

const buttonIconSelector = '[data-testid=buttonIcon]';
const testIcon = 'testIcon';
const buttonContentWrapperSelector = '[data-testid=buttonContentWrapper]';
const loadingSpinnerSelector = '[data-testid=loadingSpinner]';

describe('SBBtn', () => {
  describe('props', () => {
    it('loading - should render button content without loadingSpinner by default', () => {
      const wrapper = shallowMount(SBBtn);
      expect(wrapper.find(buttonContentWrapperSelector).isVisible()).toBe(true);
      expect(wrapper.find(loadingSpinnerSelector).exists()).toBe(false);
    });
    it('loading - should render loadingSpinner without button content when set to "true"', () => {
      const wrapper = shallowMount(SBBtn, {
        props: {
          loading: true,
        },
      });
      expect(wrapper.find(buttonContentWrapperSelector).classes()).toContain(
        'opacity-0'
      );
      expect(wrapper.find(loadingSpinnerSelector).exists()).toBe(true);
    });
    it('icon - should render icon when provided', () => {
      const wrapper = shallowMount(SBBtn, {
        props: {
          icon: testIcon,
        },
      });
      expect(wrapper.find(buttonIconSelector).exists()).toBe(true);
    });
    it('icon - should not render icon when not provided', () => {
      const wrapper = shallowMount(SBBtn);
      expect(wrapper.find(buttonIconSelector).exists()).toBe(false);
    });
    it('icon - should render with set icon', () => {
      const wrapper = shallowMount(SBBtn, {
        props: {
          icon: testIcon,
        },
      });
      expect(wrapper.get(buttonIconSelector).attributes('icon')).toBe(testIcon);
    });
    it('type - should render with type "button" by default', () => {
      const wrapper = shallowMount(SBBtn, {
        props: {
          icon: testIcon,
        },
      });
      expect(wrapper.get('button').attributes('type')).toBe('button');
    });
    it('type - should render with set value', () => {
      const testValue = 'submit';
      const wrapper = shallowMount(SBBtn, {
        props: {
          icon: testIcon,
          type: testValue,
        },
      });
      expect(wrapper.get('button').attributes('type')).toBe(testValue);
    });
  });
  it('snapshot - should match the snapshot', () => {
    const wrapper = shallowMount(SBBtn);
    expect(wrapper.element).toMatchInlineSnapshot(`
      <button
        class="font-semibold transition-all disabled:cursor-not-allowed disabled:opacity-50 focus:outline focus:outline-8 sbbtn-color-primary sbbtn-design-primary text-base rounded-xl min-h-[52px] px-6"
        type="button"
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
