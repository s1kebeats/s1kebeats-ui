import UsernameInput from './UsernameInput.vue';
import { describe, it, expect } from 'vitest';
import { shallowMount } from '@vue/test-utils';

const defaultMountOptions = {
  props: {
    name: 'usernameInput',
    size: 'xl',
    preset: 'preset',
    disabled: false,
    message: 'message',
    state: 'success'
  }
};

const textInputComponentSelector = '[data-testid=textInputComponent]';

describe('UsernameInput', () => {
  describe('props', () => {
    it('debounce - should render textInput with set value', () => {
      const testValue = true;
      const wrapper = shallowMount(UsernameInput, {
        props: {
          ...defaultMountOptions.props,
          debounce: testValue
        }
      });
      expect(
        wrapper.get(textInputComponentSelector).attributes('debounce')
      ).toBe(testValue.toString());
    });
    it('autocomplete - should render textInput with set value', () => {
      const testValue = 'on';
      const wrapper = shallowMount(UsernameInput, {
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
      const wrapper = shallowMount(UsernameInput, defaultMountOptions);

      expect(wrapper.get(textInputComponentSelector).attributes('size')).toBe(
        defaultMountOptions.props.size
      );
    });
    it('name - should render textInput with set name attr', () => {
      const wrapper = shallowMount(UsernameInput, defaultMountOptions);

      expect(wrapper.get(textInputComponentSelector).attributes('name')).toBe(
        defaultMountOptions.props.name
      );
    });
    it('preset - should render textInput with set preset attr', () => {
      const wrapper = shallowMount(UsernameInput, defaultMountOptions);

      expect(wrapper.get(textInputComponentSelector).attributes('preset')).toBe(
        defaultMountOptions.props.preset
      );
    });
    it('icon - should render with provided icon by default', () => {
      const wrapper = shallowMount(UsernameInput, defaultMountOptions);
      expect(
        wrapper.find(textInputComponentSelector).attributes('icon')
      ).toBeTruthy();
    });
    it('icon - should render without provided icon when set to "false"', () => {
      const wrapper = shallowMount(UsernameInput, {
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
      const wrapper = shallowMount(UsernameInput, defaultMountOptions);

      expect(
        wrapper.get(textInputComponentSelector).attributes('disabled')
      ).toBe(defaultMountOptions.props.disabled.toString());
    });
    it('message - should render textInput with set message attr', () => {
      const wrapper = shallowMount(UsernameInput, defaultMountOptions);

      expect(
        wrapper.get(textInputComponentSelector).attributes('message')
      ).toBe(defaultMountOptions.props.message);
    });
    it('state - should render textInput with set state attr', () => {
      const wrapper = shallowMount(UsernameInput, defaultMountOptions);

      expect(wrapper.get(textInputComponentSelector).attributes('state')).toBe(
        defaultMountOptions.props.state
      );
    });
  });
  it('snapshot - should match the snapshot', () => {
    const wrapper = shallowMount(UsernameInput, defaultMountOptions);

    expect(wrapper.get(textInputComponentSelector)).toMatchInlineSnapshot(`
      DOMWrapper {
        "isDisabled": [Function],
        "wrapperElement": <text-input-stub
          autocomplete="off"
          data-testid="textInputComponent"
          debounce="false"
          disabled="false"
          icon="material-symbols:account-circle"
          label="Введите имя пользователя"
          message="message"
          name="usernameInput"
          preset="preset"
          size="xl"
          state="success"
          type="text"
        />,
      }
    `);
  });
});
