<template>
  <div
    class="flex flex-col"
    :class="[inputContainerClasses]"
    data-testid="textInputContainer"
  >
    <div
      class="flex items-center transition-all"
      data-testid="presentationalInput"
      :class="[
        inputPresentationalSizingClasses,
        inputPresentationalStateClasses,
        {
          'opacity-50': disabled,
          'bg-grayscale-bg outline-grayscale-header outline outline-[2px]':
            focused,
          'bg-grayscale-input': !focused,
          'cursor-not-allowed': disabled,
        },
      ]"
      @focusin="focused = true"
      @focusout="focused = false"
    >
      <button
        data-testid="optionalIconButton"
        :disabled="disabled"
        v-if="icon"
        @click.prevent="callback ? callback() : null"
        :class="{
          'cursor-default': !callback,
          'cursor-not-allowed': disabled,
        }"
      >
        <Icon
          data-testid="optionalIcon"
          :icon="icon"
          class="transition-all"
          :class="[
            inputIconClasses,
            coloredIconClasses,
            {
              '!text-black': focused,
              'hover:text-black': callback,
            },
          ]"
        />
      </button>
      <div
        class="flex grow flex-col items-start justify-center overflow-hidden"
      >
        <span
          data-testid="upperLabel"
          v-if="label"
          v-show="value"
          class="w-full text-sm truncate"
          :class="inputLabelClasses"
          >{{ label }}</span
        >
        <input
          :autocomplete="autocomplete"
          data-testid="textInput"
          @keypress.enter="callback ? callback() : null"
          :type="type"
          :name="name"
          ref="textInput"
          :placeholder="label"
          class="bg-transparent w-full truncate focus:outline-none text-grayscale-header placeholder:text-grayscale-label placeholder:truncate"
          v-model.trim="value"
          :disabled="disabled"
          :class="{
            'cursor-not-allowed': disabled,
          }"
        />
      </div>

      <button
        :class="{
          'min-w-[19px]': size === 'sm',
          'min-w-[22px]': size === 'md' || size === 'lg',
          'min-w-[24px]': size === 'xl',
        }"
        data-testid="clearValueButton"
        @click.prevent="focused ? clearInputValue() : null"
        :disabled="disabled"
      >
        <transition name="fade">
          <Icon
            data-testid="clearValueButtonIcon"
            v-show="focused"
            icon="material-symbols:close-rounded"
            :class="inputIconClasses"
          />
        </transition>
      </button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { computed, ref, watch, watchEffect } from 'vue';
import type Props from './SBTextInput.props';
const props = withDefaults(defineProps<Props>(), {
  size: 'md',
  disabled: false,
  debounce: false,
  type: 'text',
  autocomplete: 'off',
});

const emit = defineEmits<{
  (e: 'update:value', value: string): void;
}>();

const value = ref('');

const textInput = ref<HTMLInputElement | null>(null);
const focused = ref(false);

const messageClasses = computed(() => {
  switch (props.state) {
    case 'success':
      return 'text-success-default_strong';
    case 'error':
      return 'text-danger-default_strong';
    default:
      return 'text-grayscale-header';
  }
});

const inputIconClasses = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'text-[19px]';
    case 'xl':
      return 'text-[24px]';
    default:
      return 'text-[22px]';
  }
});

const inputContainerClasses = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'text-sm';
    case 'xl':
      return 'text-lg gap-2';
    default:
      return 'text-base gap-1';
  }
});

const inputLabelClasses = computed(() => {
  switch (props.state) {
    case 'success':
      return 'text-success-default_strong';
    case 'error':
      return 'text-danger-default_strong';
    default:
      return 'text-grayscale-label';
  }
});

const inputPresentationalSizingClasses = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'rounded-lg min-h-[48px] px-4 gap-3';
    case 'lg':
      return 'rounded-xl min-h-[56px] px-8 gap-4';
    case 'xl':
      return 'rounded-2xl min-h-[60px] px-8 gap-4';
    default:
      return 'rounded-xl min-h-[52px] px-6 gap-3';
  }
});

const inputPresentationalStateClasses = computed(() => {
  switch (props.state) {
    case 'success':
      return '!outline-success outline outline-[2px] !bg-success-bg';
    case 'error':
      return '!outline-danger outline outline-[2px] !bg-danger-bg';
    default:
      return '';
  }
});

const coloredIconClasses = computed(() => {
  switch (props.state) {
    case 'success':
      return 'text-success-default_strong';
    case 'error':
      return 'text-danger-default_strong';
    default:
      return 'text-grayscale-label';
  }
});

function clearInputValue() {
  value.value = '';
  textInput.value!.focus();
}

let timeOut: NodeJS.Timeout;
watch(value, () => {
  if (!props.debounce) {
    emit('update:value', value.value);
    return;
  }
  if (timeOut) {
    clearTimeout(timeOut);
  }
  timeOut = setTimeout(() => {
    emit('update:value', value.value);
  }, 500);
});

watchEffect(() => {
  value.value = props.preset ? props.preset : '';
});
</script>
