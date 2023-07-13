import EmailInput from './EmailInput.vue';
import { describe, it, expect } from 'vitest';
import { mount, shallowMount } from '@vue/test-utils';

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

const testEmail = 'test@example.com';
const textInputComponentSelector = '[data-testid=textInputComponent]';

describe('EmailInput', () => {
  describe('props', () => {
    it('size - should render textInput with set size attr', () => {
      // maybe props type inheritance doesn't work properly
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
    it('preset - should not emit new value if invalid email was provided', async () => {
      const wrapper = shallowMount(EmailInput, {
        props: {
          name: 'emailInput',
          preset: 'notAnEmail'
        }
      });

      expect(wrapper.emitted()).not.toHaveProperty('updateValue');
    });
    it('preset - should render with error message if invalid email was provided', async () => {
      const wrapper = shallowMount(EmailInput, {
        props: {
          name: 'emailInput',
          preset: 'notAnEmail'
        }
      });

      expect(
        wrapper.get(textInputComponentSelector).attributes('message')
      ).toBeTruthy();
    });
    it('preset - should render with "error" state if invalid email was provided', async () => {
      const wrapper = shallowMount(EmailInput, {
        props: {
          name: 'emailInput',
          preset: 'notAnEmail'
        }
      });

      expect(wrapper.get(textInputComponentSelector).attributes('state')).toBe(
        'error'
      );
    });
    it('preset - should emit new value if valid email was provided', async () => {
      const wrapper = mount(EmailInput, {
        props: {
          name: 'emailInput',
          preset: testEmail
        }
      });

      expect(wrapper.emitted()).toHaveProperty('updateValue');
      expect(wrapper.emitted('updateValue')).toHaveLength(1);
      expect(wrapper.emitted('updateValue')![0][0]).toBe(testEmail);
    });
    it('preset - should render with "success" state if valid email was provided', async () => {
      const wrapper = mount(EmailInput, {
        props: {
          name: 'emailInput',
          preset: testEmail
        }
      });

      expect(wrapper.get(textInputComponentSelector).attributes('state')).toBe(
        'success'
      );
    });
    it('preset - should not render error message if valid email was provided', async () => {
      const wrapper = mount(EmailInput, {
        props: {
          name: 'emailInput',
          preset: testEmail
        }
      });

      expect(
        wrapper.get(textInputComponentSelector).attributes('message')
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
