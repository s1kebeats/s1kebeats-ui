import LoadingSpinner from './LoadingSpinner.vue';
import { describe, it, expect } from 'vitest';
import { shallowMount } from '@vue/test-utils';

describe('LoadingSpinner', () => {
  it('snapshot - should match the snapshot', () => {
    const wrapper = shallowMount(LoadingSpinner);
    expect(wrapper.element).toMatchInlineSnapshot(`
          <div
            class="spinner border-[2px] border-current aspect-square w-[24px]"
            data-testid="loadingSpinner"
            data-v-bbf2ec71=""
          />
        `);
  });
});
