import SBTextInput from './SBTextInput.vue';
import { shallowMount } from '@vue/test-utils';
import { describe, it, expect, vi, afterEach, beforeAll } from 'vitest';

const defaultMountOptions = {
  props: {
    name: 'testName',
    label: 'testLabel'
  }
};

const textInputSelector = '[data-testid=textInput]';
const clearValueButtonSelector = '[data-testid=clearValueButton]';
const clearValueButtonIconSelector = '[data-testid=clearValueButtonIcon]';
const upperLabelSelector = '[data-testid=upperLabel]';
const optionalIconSelector = '[data-testid=optionalIcon]';
const optionalIconButtonSelector = '[data-testid=optionalIconButton]';
const messageHintSelector = '[data-testid=messageHint]';
const testIcon = 'testIcon';

describe('SBTextInput', () => {
  beforeAll(() => {
    vi.useFakeTimers();
  });
  afterEach(() => {
    vi.restoreAllMocks();
  });
  describe('props', () => {
    it('autocomplete - should render with "off" by default', () => {
      const wrapper = shallowMount(SBTextInput, defaultMountOptions);
      expect(wrapper.get(textInputSelector).attributes('autocomplete')).toBe(
        'off'
      );
    });
    it('autocomplete - should render with set value', () => {
      const testValue = 'on';
      const wrapper = shallowMount(SBTextInput, {
        props: {
          ...defaultMountOptions.props,
          autocomplete: testValue
        }
      });
      expect(wrapper.get(textInputSelector).attributes('autocomplete')).toBe(
        testValue
      );
    });
    it('name - should render with set name', () => {
      const wrapper = shallowMount(SBTextInput, defaultMountOptions);
      expect(wrapper.get(textInputSelector).attributes('name')).toBe(
        defaultMountOptions.props.name
      );
    });
    it('label - should render with set input placeholder', () => {
      const wrapper = shallowMount(SBTextInput, defaultMountOptions);
      expect(wrapper.get(textInputSelector).attributes('placeholder')).toBe(
        defaultMountOptions.props.label
      );
    });
    it('label - should render with set upper label text', () => {
      const wrapper = shallowMount(SBTextInput, {
        props: {
          ...defaultMountOptions.props
        }
      });
      expect(wrapper.get(upperLabelSelector).text()).toBe(
        defaultMountOptions.props.label
      );
    });
    it('icon - should not render icon when not provided', () => {
      const wrapper = shallowMount(SBTextInput, defaultMountOptions);
      expect(wrapper.find(optionalIconButtonSelector).exists()).toBe(false);
    });
    it('icon - should render icon when provided', () => {
      const wrapper = shallowMount(SBTextInput, {
        props: {
          ...defaultMountOptions.props,
          icon: testIcon
        }
      });
      expect(wrapper.find(optionalIconButtonSelector).exists()).toBe(true);
    });
    it('icon - should render with set icon', () => {
      const wrapper = shallowMount(SBTextInput, {
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
      const wrapper = shallowMount(SBTextInput, defaultMountOptions);
      expect(
        (wrapper.get(textInputSelector).element as HTMLInputElement).value
      ).toBe('');
    });
    it('preset - should not render upper label when not provided', () => {
      const wrapper = shallowMount(SBTextInput, defaultMountOptions);
      expect(wrapper.get(upperLabelSelector).isVisible()).toBe(false);
    });
    it('preset - should render upper label when provided', () => {
      const wrapper = shallowMount(SBTextInput, {
        props: {
          ...defaultMountOptions.props,
          preset: 'testValue'
        }
      });
      expect(wrapper.get(upperLabelSelector).isVisible()).toBe(true);
    });
    it('preset - should render with set value', () => {
      const testValue = 'testValue';
      const wrapper = shallowMount(SBTextInput, {
        props: {
          ...defaultMountOptions.props,
          preset: testValue
        }
      });
      expect(
        (wrapper.get(textInputSelector).element as HTMLInputElement).value
      ).toBe(testValue);
    });
    it('disabled - should render without disabled attr on text input by default', () => {
      const wrapper = shallowMount(SBTextInput, defaultMountOptions);
      expect(wrapper.get(textInputSelector).attributes()).not.toHaveProperty(
        'disabled'
      );
    });
    it('disabled - should render without disabled attr on clearValue button by default', () => {
      const wrapper = shallowMount(SBTextInput, defaultMountOptions);
      expect(
        wrapper.get(clearValueButtonSelector).attributes()
      ).not.toHaveProperty('disabled');
    });
    it('disabled - should render without disabled attr on optional icon button by default', () => {
      const wrapper = shallowMount(SBTextInput, {
        props: {
          ...defaultMountOptions.props,
          icon: 'test'
        }
      });
      expect(
        wrapper.get(optionalIconButtonSelector).attributes()
      ).not.toHaveProperty('disabled');
    });
    it('disabled - should render with disabled attr on text input when provided', () => {
      const wrapper = shallowMount(SBTextInput, {
        props: {
          ...defaultMountOptions.props,
          disabled: true
        }
      });
      expect(wrapper.get(textInputSelector).attributes()).toHaveProperty(
        'disabled'
      );
    });
    it('disabled - should render with disabled attr on clearValue button when provided', () => {
      const wrapper = shallowMount(SBTextInput, {
        props: {
          ...defaultMountOptions.props,
          disabled: true
        }
      });
      expect(wrapper.get(clearValueButtonSelector).attributes()).toHaveProperty(
        'disabled'
      );
    });
    it('disabled - should render with disabled attr on optional icon button when provided', () => {
      const wrapper = shallowMount(SBTextInput, {
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
      const wrapper = shallowMount(SBTextInput, defaultMountOptions);
      expect(wrapper.find(messageHintSelector).exists()).toBe(false);
    });
    it('message - should render message hint when provided', () => {
      const wrapper = shallowMount(SBTextInput, {
        props: {
          ...defaultMountOptions.props,
          message: 'testMessage'
        }
      });
      expect(wrapper.find(messageHintSelector).exists()).toBe(true);
    });
    it('message - should render provided message hint text', () => {
      const testMessage = 'testMessage';
      const wrapper = shallowMount(SBTextInput, {
        props: {
          ...defaultMountOptions.props,
          message: testMessage
        }
      });
      expect(wrapper.find(messageHintSelector).text()).toBe(testMessage);
    });
    it('callback - should call provided callback on optional icon button click', async () => {
      const callback = vi.fn();
      const wrapper = shallowMount(SBTextInput, {
        props: {
          ...defaultMountOptions.props,
          callback,
          icon: testIcon
        }
      });

      await wrapper.get(optionalIconButtonSelector).trigger('click');

      expect(callback).toHaveBeenCalled();
    });
    it('callback - should call provided callback on input enter press', async () => {
      const callback = vi.fn();
      const wrapper = shallowMount(SBTextInput, {
        props: {
          ...defaultMountOptions.props,
          callback,
          icon: testIcon
        }
      });

      await wrapper.get(textInputSelector).trigger('keypress.enter');

      expect(callback).toHaveBeenCalled();
    });
    it('debounce - should emit without a debounce by default', async () => {
      const wrapper = shallowMount(SBTextInput, defaultMountOptions);

      await wrapper.get(textInputSelector).setValue('1');
      await wrapper.get(textInputSelector).setValue('2');
      await wrapper.get(textInputSelector).setValue('3');

      expect(wrapper.emitted('update:value')).toHaveLength(3);
    });
    it('debounce - should emit with debounce when set to "true"', async () => {
      const wrapper = shallowMount(SBTextInput, {
        props: {
          ...defaultMountOptions.props,
          debounce: true
        }
      });

      await wrapper.get(textInputSelector).setValue('1');
      await wrapper.get(textInputSelector).setValue('2');
      await wrapper.get(textInputSelector).setValue('3');

      vi.runAllTimers();

      expect(wrapper.emitted()).toHaveProperty('update:value');
      expect(wrapper.emitted('update:value')).toHaveLength(1);
      expect(wrapper.emitted('update:value')![0][0]).toBe('3');
    });
    it('type - should render with "text" by default', () => {
      const wrapper = shallowMount(SBTextInput, defaultMountOptions);

      expect(wrapper.get(textInputSelector).attributes('type')).toBe('text');
    });
    it('type - should render with set type', () => {
      const testType = 'email';
      const wrapper = shallowMount(SBTextInput, {
        props: {
          ...defaultMountOptions.props,
          type: testType
        }
      });

      expect(wrapper.get(textInputSelector).attributes('type')).toBe(testType);
    });
  });
  describe('User Interactions', () => {
    it('focusout - should not render clearValue button icon when not focused', () => {
      const wrapper = shallowMount(SBTextInput, defaultMountOptions);

      expect(wrapper.find(clearValueButtonIconSelector).isVisible()).toBe(
        false
      );
    });
    it('focusin - should render clearValue button icon when focused', async () => {
      const wrapper = shallowMount(SBTextInput, defaultMountOptions);

      await wrapper.get(textInputSelector).trigger('focusin');

      expect(wrapper.find(clearValueButtonIconSelector).isVisible()).toBe(true);
    });
    it('input - should emit new value', async () => {
      const testValue = 'testValue';
      const wrapper = shallowMount(SBTextInput, defaultMountOptions);

      await wrapper.get(textInputSelector).setValue(testValue);

      expect(wrapper.emitted()).toHaveProperty('update:value');
      expect(wrapper.emitted('update:value')).toHaveLength(1);
      expect(wrapper.emitted('update:value')![0][0]).toBe(testValue);
    });
    it('input - should emit trimmed value', async () => {
      const testValue = '   testValue   ';
      const wrapper = shallowMount(SBTextInput, defaultMountOptions);

      await wrapper.get(textInputSelector).setValue(testValue);

      expect(wrapper.emitted()).toHaveProperty('update:value');
      expect(wrapper.emitted('update:value')).toHaveLength(1);
      expect(wrapper.emitted('update:value')![0][0]).toBe(testValue.trim());
    });
    it('clearValue button click + focusin - should clear input value when clicked and focused', async () => {
      const wrapper = shallowMount(SBTextInput, defaultMountOptions);

      await wrapper.get(textInputSelector).setValue('value');
      await wrapper.get(textInputSelector).trigger('focusin');
      await wrapper.get(clearValueButtonSelector).trigger('click');

      expect(
        (wrapper.get(textInputSelector).element as HTMLInputElement).value
      ).toBe('');
    });
    it('clearValue button click + focusout - should not clear input value when clicked but unfocused', async () => {
      const testValue = 'testValue';
      const wrapper = shallowMount(SBTextInput, defaultMountOptions);

      await wrapper.get(textInputSelector).setValue(testValue);
      await wrapper.get(clearValueButtonSelector).trigger('click');

      expect(
        (wrapper.get(textInputSelector).element as HTMLInputElement).value
      ).toBe(testValue);
    });
  });
  it('snapshot - should match the snapshot', () => {
    const wrapper = shallowMount(SBTextInput, defaultMountOptions);

    expect(wrapper.element).toMatchInlineSnapshot(`
      <div
        class="flex flex-col text-base gap-1"
        data-testid="textInputContainer"
      >
        <div
          class="flex items-center transition-all rounded-xl min-h-[52px] px-6 gap-3 bg-grayscale-input"
          data-testid="presentationalInput"
        >
          <!--v-if-->
          <div
            class="flex grow flex-col items-start justify-center overflow-hidden"
          >
            <span
              class="w-full text-sm truncate text-grayscale-label"
              data-testid="upperLabel"
              style="display: none;"
            >
              testLabel
            </span>
            <input
              autocomplete="off"
              class="bg-transparent w-full truncate focus:outline-none text-grayscale-header placeholder:text-grayscale-label placeholder:truncate"
              data-testid="textInput"
              name="testName"
              placeholder="testLabel"
              type="text"
            />
          </div>
          <button
            class="min-w-[22px]"
            data-testid="clearValueButton"
          >
            <transition-stub
              appear="false"
              css="true"
              name="fade"
              persisted="true"
            >
              <anonymous-stub
                class="text-[22px]"
                data-testid="clearValueButtonIcon"
                icon="material-symbols:close-rounded"
                style="display: none;"
              />
            </transition-stub>
          </button>
        </div>
        <!--v-if-->
      </div>
    `);
  });
});
