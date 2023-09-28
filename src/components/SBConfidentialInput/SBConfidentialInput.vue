<template>
  <div
    class="flex flex-col"
    :class="[
      inputContainerClasses,
      {
        'cursor-not-allowed': disabled,
      },
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
          'bg-grayscale-input': !focused,
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
          icon="material-symbols:lock"
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
          v-show="value"
          class="w-full text-sm truncate"
          :class="inputLabelClasses"
          >{{ label }}</span
        >
        <input
          :autocomplete="autocomplete"
          data-testid="confidentialInput"
          :type="showValue ? 'text' : 'password'"
          :name="name"
          ref="confidentialInput"
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
          'w-[19px]': size === 'sm',
          'w-[22px]': size === 'md' || size === 'lg',
          'w-[24px]': size === 'xl',
          'cursor-not-allowed': disabled,
        }"
        data-testid="toggleValueButton"
        @click.prevent="toggleValueVisibility"
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
              'hover:text-black': callback,
            },
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
import { type SBTextInputProps } from '../SBTextInput';
const props = withDefaults(
  defineProps<Omit<SBTextInputProps, 'type' | 'icon'> & { icon?: boolean }>(),
  {
    size: 'md',
    disabled: false,
    debounce: false,
    icon: true,
    autocomplete: 'off',
  }
);

const emit = defineEmits<{
  (e: 'update:value', value: string): void;
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
