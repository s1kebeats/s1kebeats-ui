import EmailInput from './EmailInput.vue';
import { describe, it, expect } from 'vitest';
import { shallowMount } from '@vue/test-utils';

const defaultMountOptions = {
  props: {
    name: 'emailInput',
    size: 'xl',
    preset: 'preset',
    disabled: false,
    message: 'message',
    state: 'success'
  }
};

const textInputComponentSelector = '[data-testid=textInputComponent]';

describe('EmailInput', () => {
  describe('props', () => {
    it('autocomplete - should render textInput with set value', () => {
      const testValue = 'on';
      const wrapper = shallowMount(EmailInput, {
        props: {
          ...defaultMountOptions.props,
          autocomplete: testValue
        }
      });
      expect(
        wrapper.get(textInputComponentSelector).attributes('autocomplete')
      ).toBe(testValue);
    });
    it('size - should render textInput with set size attr', () => {
      const wrapper = shallowMount(EmailInput, defaultMountOptions);

      expect(wrapper.get(textInputComponentSelector).attributes('size')).toBe(
        defaultMountOptions.props.size
      );
    });
    it('name - should render textInput with set name attr', () => {
      const wrapper = shallowMount(EmailInput, defaultMountOptions);

      expect(wrapper.get(textInputComponentSelector).attributes('name')).toBe(
        defaultMountOptions.props.name
      );
    });
    it('preset - should render textInput with set preset attr', () => {
      const wrapper = shallowMount(EmailInput, defaultMountOptions);

      expect(wrapper.get(textInputComponentSelector).attributes('preset')).toBe(
        defaultMountOptions.props.preset
      );
    });
    it('icon - should render with provided icon by default', () => {
      const wrapper = shallowMount(EmailInput, defaultMountOptions);
      expect(
        wrapper.find(textInputComponentSelector).attributes('icon')
      ).toBeTruthy();
    });
    it('icon - should render without provided icon when set to "false"', () => {
      const wrapper = shallowMount(EmailInput, {
        props: {
          ...defaultMountOptions.props,
          icon: false
        }
      });
      expect(
        wrapper.find(textInputComponentSelector).attributes('icon')
      ).toBeFalsy();
    });
    it('disabled - should render textInput with set disabled attr', () => {
      const wrapper = shallowMount(EmailInput, defaultMountOptions);

      expect(
        wrapper.get(textInputComponentSelector).attributes('disabled')
      ).toBe(defaultMountOptions.props.disabled.toString());
    });
    it('message - should render textInput with set message attr', () => {
      const wrapper = shallowMount(EmailInput, defaultMountOptions);

      expect(
        wrapper.get(textInputComponentSelector).attributes('message')
      ).toBe(defaultMountOptions.props.message);
    });
    it('state - should render textInput with set state attr', () => {
      const wrapper = shallowMount(EmailInput, defaultMountOptions);

      expect(wrapper.get(textInputComponentSelector).attributes('state')).toBe(
        defaultMountOptions.props.state
      );
    });
  });
  it('snapshot - should match the snapshot', () => {
    const wrapper = shallowMount(EmailInput, defaultMountOptions);

    expect(wrapper.get(textInputComponentSelector)).toMatchInlineSnapshot(`
      DOMWrapper {
        "isDisabled": [Function],
        "wrapperElement": <text-input-stub
          autocomplete="off"
          data-testid="textInputComponent"
          debounce="true"
          disabled="false"
          icon="material-symbols:alternate-email-rounded"
          label="Введите электронную почту"
          message="message"
          name="emailInput"
          preset="preset"
          size="xl"
          state="success"
          type="email"
        />,
      }
    `);
  });
});
