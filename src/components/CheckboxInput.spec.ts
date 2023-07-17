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

describe('CheckboxInput', () => {
  describe('props', () => {
    it('name - should render with set name', () => {
      const wrapper = shallowMount(CheckboxInput, defaultMountOptions);

      expect(wrapper.get(realCheckboxInputSelector).attributes('name')).toBe(
        defaultMountOptions.props.name
      );
    });
    it('checked - should render with "false" by default', () => {
      const wrapper = shallowMount(CheckboxInput, defaultMountOptions);

      expect(wrapper.get(realCheckboxInputSelector).attributes('value')).toBe(
        'false'
      );
    });
    it('checked - should render set attr', () => {
      const testCheckedValue = true;
      const wrapper = shallowMount(CheckboxInput, {
        props: {
          ...defaultMountOptions.props,
          checked: testCheckedValue
        }
      });

      expect(wrapper.get(realCheckboxInputSelector).attributes('value')).toBe(
        testCheckedValue.toString()
      );
    });
    it('position - should render left label by default', () => {
      const wrapper = shallowMount(CheckboxInput, defaultMountOptions);

      expect(wrapper.find(checkboxInputLabelLeftSelector).exists()).toBe(true);
    });
    it('position - should not render right label by default', () => {
      const wrapper = shallowMount(CheckboxInput, defaultMountOptions);

      expect(wrapper.find(checkboxInputLabelRightSelector).exists()).toBe(
        false
      );
    });
    it('position - should render right label when set to "right"', () => {
      const wrapper = shallowMount(CheckboxInput, {
        props: {
          ...defaultMountOptions.props,
          position: 'right'
        }
      });

      expect(wrapper.find(checkboxInputLabelRightSelector).exists()).toBe(true);
    });
    it('position - should not render left label when set to "right"', () => {
      const wrapper = shallowMount(CheckboxInput, {
        props: {
          ...defaultMountOptions.props,
          position: 'right'
        }
      });

      expect(wrapper.find(checkboxInputLabelLeftSelector).exists()).toBe(false);
    });
    it('label - should not render any label if not provided', () => {
      const wrapper = shallowMount(CheckboxInput, {
        props: {
          ...defaultMountOptions.props,
          label: undefined
        }
      });

      expect(wrapper.find(checkboxInputLabelRightSelector).exists()).toBe(
        false
      );
      expect(wrapper.find(checkboxInputLabelLeftSelector).exists()).toBe(false);
    });
    it('label - should render with provided label text', () => {
      const wrapper = shallowMount(CheckboxInput, defaultMountOptions);

      expect(wrapper.get(checkboxInputLabelLeftSelector).text()).toBe(
        defaultMountOptions.props.label
      );
    });
    it('disabled - should render with "false" and emit value by default', async () => {
      const wrapper = shallowMount(CheckboxInput, defaultMountOptions);

      await wrapper.get(customCheckboxInputSelector).trigger('click');

      expect(wrapper.emitted()).toHaveProperty('updateValue');
    });
    it('disabled - should not emit new value when set to true', async () => {
      const wrapper = shallowMount(CheckboxInput, defaultMountOptions);

      await wrapper.get(customCheckboxInputSelector).trigger('click');

      expect(wrapper.emitted()).not.toHaveProperty('updateValue');
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
      expect(wrapper.emitted('updateValue')![0][0]).toBe(false);
    });
  });
});
