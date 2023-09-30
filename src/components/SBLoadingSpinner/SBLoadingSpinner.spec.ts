import SBLoadingSpinner from './SBLoadingSpinner.vue';
import { describe, it, expect } from 'vitest';
import { shallowMount } from '@vue/test-utils';

describe('SBLoadingSpinner', () => {
  it('snapshot - should match the snapshot', () => {
    const wrapper = shallowMount(SBLoadingSpinner);
    expect(wrapper.element).toMatchInlineSnapshot(`
      <div
        class="sbloadingspinner border-[2px] border-current aspect-square transition-all w-[24px]"
        data-testid="loadingSpinner"
      />
    `);
  });
});
