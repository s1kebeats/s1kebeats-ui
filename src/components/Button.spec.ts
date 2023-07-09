import { mount } from '@vue/test-utils';
import Button from './Button.vue';
import { describe, it, expect } from 'vitest';

describe('Button', () => {
  it('snapshot - should match the snapshot', () => {
    const wrapper = mount(Button);
    expect(wrapper.get('[data-testid=button]')).toMatchInlineSnapshot(`
          DOMWrapper {
            "isDisabled": [Function],
            "wrapperElement": <button
              class="flex items-center justify-center link transition-all desktop-text-sm rounded-xl min-h-[52px] px-6 gap-3 border-2 border-primary text-primary hover:text-primary-default_strong hover:border-primary-default_strong focus:border-white focus:outline-8 focus:outline focus:outline-primary-bg_strong disabled:opacity-50 active:text-grayscale-header active:border-grayscale-header"
              data-testid="button"
            >
              
              
              
              
            </button>,
          }
        `);
  });
});
