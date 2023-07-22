import CheckboxInput from './CheckboxInput.vue';
import { describe, it, expect } from 'vitest';
import { shallowMount } from '@vue/test-utils';

const defaultMountOptions = {
  props: {
    name: 'testName',
    label: 'testLabel'
  }
};

const realCheckboxInputSelector = '[data-testid=realCheckboxInput]';
const checkboxInputLabelRightSelector = '[data-testid=checkboxInputLabelRight]';
const checkboxInputLabelLeftSelector = '[data-testid=checkboxInputLabelLeft]';
const customCheckboxInputSelector = '[data-testid=customCheckboxInput]';
const checkboxIndicatorSelector = '[data-testid=checkboxIndicator]';

describe('CheckboxInput', () => {
  describe('props', () => {
    it('name - should render with set name', () => {
      const wrapper = shallowMount(CheckboxInput, defaultMountOptions);

      expect(wrapper.get(realCheckboxInputSelector).attributes('name')).toBe(
        defaultMountOptions.props.name
      );
    });
    it('checked - should render unchecked by default', () => {
      const wrapper = shallowMount(CheckboxInput, defaultMountOptions);

      expect(wrapper.get(realCheckboxInputSelector).attributes('value')).toBe(
        'false'
      );
    });
    it('checked - should render checked when set to true', () => {
      const wrapper = shallowMount(CheckboxInput, {
        props: {
          ...defaultMountOptions.props,
          checked: true
        }
      });

      expect(wrapper.get(realCheckboxInputSelector).attributes('value')).toBe(
        'true'
      );
    });
    it('label - should not render any label when not provided', () => {
      const wrapper = shallowMount(CheckboxInput, {
        props: {
          ...defaultMountOptions.props,
          label: undefined
        }
      });

      expect(
        wrapper.find(checkboxInputLabelRightSelector).exists() ||
          wrapper.find(checkboxInputLabelLeftSelector).exists()
      ).toBe(false);
    });
    it('label - should render some label when provided', () => {
      const wrapper = shallowMount(CheckboxInput, defaultMountOptions);
      expect(
        wrapper.find(checkboxInputLabelLeftSelector).exists() ||
          wrapper.find(checkboxInputLabelLeftSelector).exists()
      ).toBe(true);
    });
    it('position + label - should render with left label only with default position', () => {
      const wrapper = shallowMount(CheckboxInput, defaultMountOptions);

      expect(wrapper.find(checkboxInputLabelLeftSelector).exists()).toBe(true);
      expect(wrapper.find(checkboxInputLabelRightSelector).exists()).toBe(
        false
      );
    });
    it('position + label - should render with right label only when position is set to "right"', () => {
      const wrapper = shallowMount(CheckboxInput, {
        props: {
          ...defaultMountOptions.props,
          position: 'right'
        }
      });

      expect(wrapper.find(checkboxInputLabelRightSelector).exists()).toBe(true);
      expect(wrapper.find(checkboxInputLabelLeftSelector).exists()).toBe(false);
    });
    it('disabled - should render with "false" by default', async () => {
      const wrapper = shallowMount(CheckboxInput, defaultMountOptions);

      expect(
        wrapper.get(realCheckboxInputSelector).attributes()
      ).not.toHaveProperty('disabled');
    });
    it('disabled - should render with set value when provided', async () => {
      const wrapper = shallowMount(CheckboxInput, {
        props: {
          ...defaultMountOptions.props,
          disabled: true
        }
      });

      expect(
        wrapper.get(realCheckboxInputSelector).attributes()
      ).toHaveProperty('disabled');
    });
  });
  describe('User Interactions', () => {
    it('click - should toggle and emit new value', async () => {
      const wrapper = shallowMount(CheckboxInput, defaultMountOptions);

      await wrapper.get(customCheckboxInputSelector).trigger('click');

      expect(wrapper.emitted()).toHaveProperty('updateValue');
      expect(wrapper.emitted('updateValue')).toHaveLength(1);
      expect(wrapper.emitted('updateValue')![0][0]).toBe(true);

      await wrapper.get(customCheckboxInputSelector).trigger('click');

      expect(wrapper.emitted('updateValue')).toHaveLength(2);
      expect(wrapper.emitted('updateValue')![1][0]).toBe(false);
    });
    // ! why not working???
    it('click - should toggle indicator visibility', async () => {
      const wrapper = shallowMount(CheckboxInput, defaultMountOptions);

      expect(wrapper.get(checkboxIndicatorSelector).isVisible()).toBe(false);

      await wrapper.get(customCheckboxInputSelector).trigger('click');
      expect(wrapper.get(checkboxIndicatorSelector).isVisible()).toBe(true);

      await wrapper.get(customCheckboxInputSelector).trigger('click');
      expect(wrapper.get(checkboxIndicatorSelector).isVisible()).toBe(false);
    });
    it('enter - should toggle and emit new value when pressed on input', async () => {
      const wrapper = shallowMount(CheckboxInput, defaultMountOptions);
      await wrapper.get(customCheckboxInputSelector).trigger('keydown.enter');

      expect(wrapper.emitted()).toHaveProperty('updateValue');
      expect(wrapper.emitted('updateValue')).toHaveLength(1);
      expect(wrapper.emitted('updateValue')![0][0]).toBe(true);

      await wrapper.get(customCheckboxInputSelector).trigger('keydown.enter');

      expect(wrapper.emitted('updateValue')).toHaveLength(2);
      expect(wrapper.emitted('updateValue')![1][0]).toBe(false);
    });
    // ! why not working???
    it('enter - should toggle indicator visibility when pressed on input', async () => {
      const wrapper = shallowMount(CheckboxInput, defaultMountOptions);
      expect(wrapper.get(checkboxIndicatorSelector).isVisible()).toBe(false);

      await wrapper.get(customCheckboxInputSelector).trigger('keydown.enter');
      expect(wrapper.get(checkboxIndicatorSelector).isVisible()).toBe(true);

      await wrapper.get(customCheckboxInputSelector).trigger('keydown.enter');
      expect(wrapper.get(checkboxIndicatorSelector).isVisible()).toBe(false);
    });
  });
  it('snapshot - should match the snapshot', () => {
    const wrapper = shallowMount(CheckboxInput, defaultMountOptions);

    expect(wrapper.element).toMatchInlineSnapshot(`
      <div
        class="flex items-center gap-2"
      >
        <label
          class="desktop-text-sm"
          data-testid="checkboxInputLabelLeft"
          for="testName"
        >
          testLabel
        </label>
        <input
          class="hidden"
          data-testid="realCheckboxInput"
          name="testName"
          type="checkbox"
          value="false"
        />
        <div
          aria-checked="false"
          class="flex items-center justify-center transition-all focus:outline-[rgba(0,0,0,.1)] focus:outline focus:outline-[8px] disabled:opacity-50 w-[30px] h-[30px] rounded-lg bg-grayscale-line hover:bg-grayscale-placehold"
          data-testid="customCheckboxInput"
          role="checkbox"
          tabindex="0"
        >
          <transition-stub
            appear="false"
            css="true"
            name="fade"
            persisted="true"
          >
            <anonymous-stub
              class="text-grayscale-bg text-[22px]"
              data-testid="checkboxIndicator"
              icon="material-symbols:check-small-rounded"
              style="display: none;"
            />
          </transition-stub>
        </div>
        <!--v-if-->
      </div>
    `);
  });
});
