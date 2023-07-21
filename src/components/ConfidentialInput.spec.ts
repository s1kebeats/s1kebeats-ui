import { shallowMount } from '@vue/test-utils';
import ConfidentialInput from './ConfidentialInput.vue';
import { describe, it, expect, vi, beforeAll, afterEach } from 'vitest';

const defaultMountOptions = {
  props: {
    name: 'testName',
    label: 'testLabel'
  }
};

const testIcon = 'testIcon';

const confidentialInputSelector = '[data-testid=confidentialInput]';
const confidentialInputContainerSelector =
  '[data-testid=confidentialInputContainer]';
const toggleValueButtonSelector = '[data-testid=toggleValueButton]';
const toggleValueButtonIconSelector = '[data-testid=toggleValueButtonIcon]';
const upperLabelSelector = '[data-testid=upperLabel]';
const optionalIconSelector = '[data-testid=optionalIcon]';
const optionalIconButtonSelector = '[data-testid=optionalIconButton]';
const messageHintSelector = '[data-testid=messageHint]';

describe('ConfidentialInput', () => {
  beforeAll(() => {
    vi.useFakeTimers();
  });
  afterEach(() => {
    vi.restoreAllMocks();
  });
  describe('props', () => {
    it('name - should render with set name', () => {
      const wrapper = shallowMount(ConfidentialInput, defaultMountOptions);
      expect(wrapper.get(confidentialInputSelector).attributes('name')).toBe(
        defaultMountOptions.props.name
      );
    });
    it('label - should render with set input placeholder', () => {
      const wrapper = shallowMount(ConfidentialInput, defaultMountOptions);
      expect(
        wrapper.get(confidentialInputSelector).attributes('placeholder')
      ).toBe(defaultMountOptions.props.label);
    });
    it('label - should render with set upper label text', () => {
      const wrapper = shallowMount(ConfidentialInput, {
        props: {
          ...defaultMountOptions.props
        }
      });
      expect(wrapper.get(upperLabelSelector).text()).toBe(
        defaultMountOptions.props.label
      );
    });
    it('icon - should not render icon when not provided', () => {
      const wrapper = shallowMount(ConfidentialInput, defaultMountOptions);
      expect(wrapper.find(optionalIconButtonSelector).exists()).toBe(false);
    });
    it('icon - should render icon when provided', () => {
      const wrapper = shallowMount(ConfidentialInput, {
        props: {
          ...defaultMountOptions.props,
          icon: testIcon
        }
      });
      expect(wrapper.find(optionalIconButtonSelector).exists()).toBe(true);
    });
    it('icon - should render with set icon', () => {
      const wrapper = shallowMount(ConfidentialInput, {
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
      const wrapper = shallowMount(ConfidentialInput, defaultMountOptions);
      expect(
        (wrapper.get(confidentialInputSelector).element as HTMLInputElement)
          .value
      ).toBe('');
    });
    it('preset - should not render upper label when not provided', () => {
      const wrapper = shallowMount(ConfidentialInput, defaultMountOptions);
      expect(wrapper.get(upperLabelSelector).isVisible()).toBe(false);
    });
    it('preset - should render upper label when provided', () => {
      const wrapper = shallowMount(ConfidentialInput, {
        props: {
          ...defaultMountOptions.props,
          preset: 'testValue'
        }
      });
      expect(wrapper.get(upperLabelSelector).isVisible()).toBe(true);
    });
    it('preset - should render with set value', () => {
      const testValue = 'testValue';
      const wrapper = shallowMount(ConfidentialInput, {
        props: {
          ...defaultMountOptions.props,
          preset: testValue
        }
      });
      expect(
        (wrapper.get(confidentialInputSelector).element as HTMLInputElement)
          .value
      ).toBe(testValue);
    });
    it('disabled - should render without disabled attr on confidential input by default', () => {
      const wrapper = shallowMount(ConfidentialInput, defaultMountOptions);
      expect(
        wrapper.get(confidentialInputSelector).attributes()
      ).not.toHaveProperty('disabled');
    });
    it('disabled - should render without disabled attr on toggleValue button by default', () => {
      const wrapper = shallowMount(ConfidentialInput, defaultMountOptions);
      expect(
        wrapper.get(toggleValueButtonSelector).attributes()
      ).not.toHaveProperty('disabled');
    });
    it('disabled - should render without disabled attr on optional icon button by default', () => {
      const wrapper = shallowMount(ConfidentialInput, {
        props: {
          ...defaultMountOptions.props,
          icon: 'test'
        }
      });
      expect(
        wrapper.get(optionalIconButtonSelector).attributes()
      ).not.toHaveProperty('disabled');
    });
    it('disabled - should render with disabled attr on confidential input when provided', () => {
      const wrapper = shallowMount(ConfidentialInput, {
        props: {
          ...defaultMountOptions.props,
          disabled: true
        }
      });
      expect(
        wrapper.get(confidentialInputSelector).attributes()
      ).toHaveProperty('disabled');
    });
    it('disabled - should render with disabled attr on toggleValue button when provided', () => {
      const wrapper = shallowMount(ConfidentialInput, {
        props: {
          ...defaultMountOptions.props,
          disabled: true
        }
      });
      expect(
        wrapper.get(toggleValueButtonSelector).attributes()
      ).toHaveProperty('disabled');
    });
    it('disabled - should render with disabled attr on optional icon button when provided', () => {
      const wrapper = shallowMount(ConfidentialInput, {
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
      const wrapper = shallowMount(ConfidentialInput, defaultMountOptions);
      expect(wrapper.find(messageHintSelector).exists()).toBe(false);
    });
    it('message - should render message hint when provided', () => {
      const wrapper = shallowMount(ConfidentialInput, {
        props: {
          ...defaultMountOptions.props,
          message: 'testMessage'
        }
      });
      expect(wrapper.find(messageHintSelector).exists()).toBe(true);
    });
    it('message - should render provided message hint text', () => {
      const testMessage = 'testMessage';
      const wrapper = shallowMount(ConfidentialInput, {
        props: {
          ...defaultMountOptions.props,
          message: testMessage
        }
      });
      expect(wrapper.find(messageHintSelector).text()).toBe(testMessage);
    });
    it('callback - should call provided callback on optional icon button click', async () => {
      const callback = vi.fn();
      const wrapper = shallowMount(ConfidentialInput, {
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
      const wrapper = shallowMount(ConfidentialInput, defaultMountOptions);

      await wrapper.get(confidentialInputSelector).setValue('1');
      await wrapper.get(confidentialInputSelector).setValue('2');
      await wrapper.get(confidentialInputSelector).setValue('3');

      expect(wrapper.emitted('updateValue')).toHaveLength(3);
    });
    it('debounce - should emit with debounce when set to "true"', async () => {
      const wrapper = shallowMount(ConfidentialInput, {
        props: {
          ...defaultMountOptions.props,
          debounce: true
        }
      });

      await wrapper.get(confidentialInputSelector).setValue('1');
      await wrapper.get(confidentialInputSelector).setValue('2');
      await wrapper.get(confidentialInputSelector).setValue('3');

      vi.runAllTimers();

      expect(wrapper.emitted()).toHaveProperty('updateValue');
      expect(wrapper.emitted('updateValue')).toHaveLength(1);
      expect(wrapper.emitted('updateValue')![0][0]).toBe('3');
    });
  });
  describe('User Interactions', () => {
    it('toggleValue button click - should toggle input type from "password" to "text" and vice versa', async () => {
      const wrapper = shallowMount(ConfidentialInput, defaultMountOptions);

      expect(wrapper.get(confidentialInputSelector).attributes('type')).toBe(
        'password'
      );

      await wrapper.get(toggleValueButtonSelector).trigger('click');
      expect(wrapper.get(confidentialInputSelector).attributes('type')).toBe(
        'text'
      );

      await wrapper.get(toggleValueButtonSelector).trigger('click');
      expect(wrapper.get(confidentialInputSelector).attributes('type')).toBe(
        'password'
      );
    });
    it('toggleValue button click - should toggle toggleValue button icon', async () => {
      const wrapper = shallowMount(ConfidentialInput, defaultMountOptions);

      expect(
        wrapper.get(toggleValueButtonIconSelector).attributes('icon')
      ).toBe('material-symbols:visibility-off-outline-rounded');

      await wrapper.get(toggleValueButtonSelector).trigger('click');
      expect(
        wrapper.get(toggleValueButtonIconSelector).attributes('icon')
      ).toBe('material-symbols:visibility-outline-rounded');

      await wrapper.get(toggleValueButtonSelector).trigger('click');
      expect(
        wrapper.get(toggleValueButtonIconSelector).attributes('icon')
      ).toBe('material-symbols:visibility-off-outline-rounded');
    });
    it('input - should emit new value', async () => {
      const testValue = 'testValue';
      const wrapper = shallowMount(ConfidentialInput, defaultMountOptions);

      await wrapper.get(confidentialInputSelector).setValue(testValue);

      expect(wrapper.emitted()).toHaveProperty('updateValue');
      expect(wrapper.emitted('updateValue')).toHaveLength(1);
      expect(wrapper.emitted('updateValue')![0][0]).toBe(testValue);
    });
  });
  it('snapshot - should match the snapshot', () => {
    const wrapper = shallowMount(ConfidentialInput, defaultMountOptions);

    expect(wrapper.element).toMatchInlineSnapshot(`
      <div
        class="flex flex-col desktop-text-sm gap-1"
        data-testid="confidentialInputContainer"
      >
        <div
          class="flex items-center transition-all rounded-xl min-h-[52px] px-6 gap-3 bg-grayscale-input"
          data-testid="presentationalInput"
        >
          <!--v-if-->
          <div
            class="grow flex flex-col justify-center"
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
              data-testid="confidentialInput"
              name="testName"
              placeholder="testLabel"
              type="password"
            />
          </div>
          <button
            class="w-[22px]"
            data-testid="toggleValueButton"
          >
            <anonymous-stub
              class="transition-all hover:text-black text-[22px] text-grayscale-label"
              data-testid="toggleValueButtonIcon"
              icon="material-symbols:visibility-off-outline-rounded"
            />
          </button>
        </div>
        <!--v-if-->
      </div>
    `);
  });
});
