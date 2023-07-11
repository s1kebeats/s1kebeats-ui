import TextInput from './TextInput.vue';
import { shallowMount } from '@vue/test-utils';
import { describe, it, expect, vi, afterAll, beforeAll } from 'vitest';

const defaultMountOptions = {
  props: {
    name: 'testName',
    label: 'testLabel'
  }
};

const textInputSelector = '[data-testid=textInput]';
const textInputContainerSelector = '[data-testid=textInputContainer]';
const clearButtonSelector = '[data-testid=clearButton]';
const clearButtonIconSelector = '[data-testid=clearButtonIcon]';
const upperLabelSelector = '[data-testid=upperLabel]';
const optionalIconSelector = '[data-testid=optionalIcon]';
const optionalIconButtonSelector = '[data-testid=optionalIconButton]';
const messageHintSelector = '[data-testid=messageHint]';

describe('TextInput', () => {
  beforeAll(() => {
    vi.useFakeTimers();
  });
  afterAll(() => {
    vi.restoreAllMocks();
  });
  describe('User Interactions', () => {
    it('input - should emit new value', async () => {
      const testValue = 'testValue';
      const wrapper = shallowMount(TextInput, defaultMountOptions);

      await wrapper.get(textInputSelector).setValue(testValue);

      expect(wrapper.emitted()).toHaveProperty('updateValue');
      expect(wrapper.emitted('updateValue')).toHaveLength(1);
      expect(wrapper.emitted('updateValue')![0][0]).toBe(testValue);
    });
    it('focusin - should render clear button icon when focused', async () => {
      const wrapper = shallowMount(TextInput, defaultMountOptions);

      await wrapper.get(textInputSelector).trigger('focusin');

      expect(wrapper.get(clearButtonIconSelector).isVisible()).toBe(true);
    });
    it('focusin + click - should clear input value when focused on clear button click', async () => {
      const wrapper = shallowMount(TextInput, defaultMountOptions);

      await wrapper.get(textInputSelector).trigger('focusin');
      await wrapper.get(textInputSelector).setValue('newValue');
      await wrapper.get(clearButtonSelector).trigger('click');

      expect(
        (wrapper.get(textInputSelector).element as HTMLInputElement).value
      ).toBe('');
    });
    it('focusout - should not render clear button icon when not focused', async () => {
      const wrapper = shallowMount(TextInput, defaultMountOptions);

      await wrapper.get(textInputSelector).trigger('focusout');

      expect(wrapper.get(clearButtonIconSelector).isVisible()).toBe(false);
    });
    it('focusout + click - should not clear input value when not focused on clear button click', async () => {
      const testValue = 'testValue';
      const wrapper = shallowMount(TextInput, defaultMountOptions);

      await wrapper.get(textInputSelector).trigger('focusout');
      await wrapper.get(textInputSelector).setValue(testValue);
      await wrapper.get(clearButtonSelector).trigger('click');

      expect(
        (wrapper.get(textInputSelector).element as HTMLInputElement).value
      ).toBe(testValue);
    });
  });
  describe('props', () => {
    it('name - should render with set name', () => {
      const wrapper = shallowMount(TextInput, defaultMountOptions);
      expect(wrapper.get(textInputSelector).attributes('name')).toBe(
        defaultMountOptions.props.name
      );
    });
    it('label - should render with set input placeholder', () => {
      const wrapper = shallowMount(TextInput, defaultMountOptions);
      expect(wrapper.get(textInputSelector).attributes('placeholder')).toBe(
        defaultMountOptions.props.label
      );
    });
    it('label - should render with set upper label text', () => {
      const wrapper = shallowMount(TextInput, {
        props: {
          ...defaultMountOptions.props,
          value: 'testValue'
        }
      });
      expect(wrapper.get(upperLabelSelector).text()).toBe(
        defaultMountOptions.props.label
      );
    });
    it('icon - should render with set icon', () => {
      const testIcon = 'testIcon';
      const wrapper = shallowMount(TextInput, {
        props: {
          ...defaultMountOptions.props,
          icon: testIcon
        }
      });
      expect(wrapper.get(optionalIconSelector).attributes('icon')).toBe(
        testIcon
      );
    });
    it('preset - should render with empty preset by default', () => {
      const wrapper = shallowMount(TextInput, defaultMountOptions);
      expect(
        (wrapper.get(textInputSelector).element as HTMLInputElement).value
      ).toBe('');
    });
    it('preset - should not render upper label when not provided', () => {
      const wrapper = shallowMount(TextInput, defaultMountOptions);
      expect(wrapper.get(upperLabelSelector).isVisible()).toBe(false);
    });
    it('preset - should render upper label when provided', () => {
      const wrapper = shallowMount(TextInput, {
        props: {
          ...defaultMountOptions.props,
          preset: 'testValue'
        }
      });
      expect(wrapper.get(upperLabelSelector).isVisible()).toBe(true);
    });
    it('preset - should render with set value', () => {
      const testValue = 'testValue';
      const wrapper = shallowMount(TextInput, {
        props: {
          ...defaultMountOptions.props,
          preset: testValue
        }
      });
      expect(
        (wrapper.get(textInputSelector).element as HTMLInputElement).value
      ).toBe(testValue);
    });
    it('disabled - should render with "false" disabled attr on text input by default', () => {
      const wrapper = shallowMount(TextInput, defaultMountOptions);
      expect(wrapper.get(textInputSelector).attributes()).not.toHaveProperty(
        'disabled'
      );
    });
    it('disabled - should render with "false" disabled attr on clear button by default', () => {
      const wrapper = shallowMount(TextInput, defaultMountOptions);
      expect(wrapper.get(clearButtonSelector).attributes()).not.toHaveProperty(
        'disabled'
      );
    });
    it('disabled - should render with "false" disabled attr on optional icon button by default', () => {
      const wrapper = shallowMount(TextInput, {
        props: {
          ...defaultMountOptions.props,
          icon: 'test'
        }
      });
      expect(
        wrapper.get(optionalIconButtonSelector).attributes()
      ).not.toHaveProperty('disabled');
    });
    it('disabled - should render with "true" disabled attr on text input when provided', () => {
      const wrapper = shallowMount(TextInput, {
        props: {
          ...defaultMountOptions.props,
          disabled: true
        }
      });
      expect(wrapper.get(textInputSelector).attributes()).toHaveProperty(
        'disabled'
      );
    });
    it('disabled - should render with "true" disabled attr on clear button when provided', () => {
      const wrapper = shallowMount(TextInput, {
        props: {
          ...defaultMountOptions.props,
          disabled: true
        }
      });
      expect(wrapper.get(clearButtonSelector).attributes()).toHaveProperty(
        'disabled'
      );
    });
    it('disabled - should render with "true" disabled attr on optional icon button when provided', () => {
      const wrapper = shallowMount(TextInput, {
        props: {
          ...defaultMountOptions.props,
          disabled: true,
          icon: 'test'
        }
      });
      expect(
        wrapper.get(optionalIconButtonSelector).attributes()
      ).toHaveProperty('disabled');
    });
    it('message - should not render message hint when not provided', () => {
      const wrapper = shallowMount(TextInput, defaultMountOptions);
      expect(wrapper.find(messageHintSelector).exists()).toBe(false);
    });
    it('message - should render message hint when provided', () => {
      const wrapper = shallowMount(TextInput, {
        props: {
          ...defaultMountOptions.props,
          message: 'testMessage'
        }
      });
      expect(wrapper.find(messageHintSelector).exists()).toBe(true);
    });
    it('message - should render valid message when provided', () => {
      const testMessage = 'testMessage';
      const wrapper = shallowMount(TextInput, {
        props: {
          ...defaultMountOptions.props,
          message: testMessage
        }
      });
      expect(wrapper.find(messageHintSelector).text()).toBe(testMessage);
    });
    it('callback - should call provided callback on optional icon button click', async () => {
      const callback = vi.fn();
      const wrapper = shallowMount(TextInput, {
        props: {
          ...defaultMountOptions.props,
          callback,
          icon: 'testIcon'
        }
      });

      await wrapper.get(optionalIconButtonSelector).trigger('click');

      expect(callback).toHaveBeenCalled();
    });
    it('debounce - should emit without a debounce by default', async () => {
      const wrapper = shallowMount(TextInput, defaultMountOptions);

      await wrapper.get(textInputSelector).setValue('1');
      await wrapper.get(textInputSelector).setValue('2');
      await wrapper.get(textInputSelector).setValue('3');

      expect(wrapper.emitted('updateValue')).toHaveLength(3);
    });
    it('debounce - should emit with debounce when set to "true"', async () => {
      const wrapper = shallowMount(TextInput, {
        props: {
          ...defaultMountOptions.props,
          debounce: true
        }
      });

      await wrapper.get(textInputSelector).setValue('1');
      await wrapper.get(textInputSelector).setValue('2');
      await wrapper.get(textInputSelector).setValue('3');

      vi.runAllTimers();

      expect(wrapper.emitted()).toHaveProperty('updateValue');
      expect(wrapper.emitted('updateValue')).toHaveLength(1);
      expect(wrapper.emitted('updateValue')![0][0]).toBe('3');
    });
  });
  it('snapshot - should match the snapshot', () => {
    const wrapper = shallowMount(TextInput, defaultMountOptions);

    expect(wrapper.get(textInputContainerSelector)).toMatchInlineSnapshot(`
      DOMWrapper {
        "isDisabled": [Function],
        "wrapperElement": <div
          class="flex flex-col desktop-text-sm gap-1"
          data-testid="textInputContainer"
        >
          <div
            class="flex items-center transition-all rounded-xl min-h-[52px] px-6 gap-3 bg-grayscale-input"
            data-testid="presentationalInput"
          >
            <!--v-if-->
            <div
              class="flex flex-col justify-center"
            >
              <span
                class="desktop-text-xs text-grayscale-label"
                data-testid="upperLabel"
                style="display: none;"
              >
                testLabel
              </span>
              <input
                class="bg-transparent focus:outline-none text-grayscale-header placeholder:text-grayscale-label"
                data-testid="textInput"
                name="testName"
                placeholder="testLabel"
                type="text"
              />
            </div>
            <button
              class="w-[22px]"
              data-testid="clearButton"
            >
              <transition-stub
                appear="false"
                css="true"
                name="fade"
                persisted="true"
              >
                <anonymous-stub
                  class="text-[22px]"
                  data-testid="clearButtonIcon"
                  icon="material-symbols:close-rounded"
                  style="display: none;"
                />
              </transition-stub>
            </button>
          </div>
          <!--v-if-->
        </div>,
      }
    `);
  });
});
