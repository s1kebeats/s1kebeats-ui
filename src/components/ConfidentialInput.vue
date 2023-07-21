<template>
  <div
    class="flex flex-col"
    :class="[
      inputContainerClasses,
      {
        'cursor-not-allowed': disabled
      }
    ]"
    data-testid="confidentialInputContainer"
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
          'bg-grayscale-input': !focused
        }
      ]"
      @focusin="focused = true"
      @focusout="focused = false"
    >
      <button
        data-testid="optionalIconButton"
        :disabled="disabled"
        v-if="icon"
        @click="callback ? callback() : null"
        :class="{
          'cursor-default': !callback,
          'cursor-not-allowed': disabled
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
              'hover:text-black': callback
            }
          ]"
        />
      </button>
      <div class="grow flex flex-col justify-center">
        <span
          data-testid="upperLabel"
          v-show="value"
          class="desktop-text-xs"
          :class="inputLabelClasses"
          >{{ label }}</span
        >
        <input
          data-testid="confidentialInput"
          :type="showValue ? 'text' : 'password'"
          :name="name"
          ref="confidentialInput"
          :placeholder="label"
          class="bg-transparent focus:outline-none text-grayscale-header placeholder:text-grayscale-label"
          v-model="value"
          :disabled="disabled"
          :class="{
            'cursor-not-allowed': disabled
          }"
        />
      </div>

      <button
        :class="{
          'w-[19px]': size === 'sm',
          'w-[22px]': size === 'md' || size === 'lg',
          'w-[24px]': size === 'xl',
          'cursor-not-allowed': disabled
        }"
        data-testid="toggleValueButton"
        @click="toggleValueVisibility"
        :disabled="disabled"
      >
        <Icon
          data-testid="toggleValueButtonIcon"
          :icon="
            showValue
              ? 'material-symbols:visibility-outline-rounded'
              : 'material-symbols:visibility-off-outline-rounded'
          "
          class="transition-all hover:text-black"
          :class="[
            inputIconClasses,
            coloredIconClasses,
            {
              '!text-black': focused,
              'hover:text-black': callback
            }
          ]"
        />
      </button>
    </div>
    <span data-testid="messageHint" v-if="message" :class="messageClasses">{{
      message
    }}</span>
  </div>
</template>
<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { computed, ref, watch, watchEffect } from 'vue';
import type Props from './TextInput.props';
const props = withDefaults(defineProps<Omit<Props, 'type'>>(), {
  size: 'md',
  disabled: false,
  debounce: false
});

const emit = defineEmits<{
  (e: 'updateValue', value: string): void;
}>();

const value = ref('');

const confidentialInput = ref<HTMLInputElement | null>(null);
const focused = ref(false);
const showValue = ref(false);

function toggleValueVisibility() {
  showValue.value = !showValue.value;
}

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
      return 'desktop-text-xs';
    case 'xl':
      return 'desktop-text-md gap-2';
    default:
      return 'desktop-text-sm gap-1';
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

let timeOut: NodeJS.Timeout;
watch(value, () => {
  if (!props.debounce) {
    emit('updateValue', value.value);
    return;
  }
  if (timeOut) {
    clearTimeout(timeOut);
  }
  timeOut = setTimeout(() => {
    emit('updateValue', value.value);
  }, 500);
});

watchEffect(() => {
  value.value = props.preset ? props.preset : '';
});
</script>
