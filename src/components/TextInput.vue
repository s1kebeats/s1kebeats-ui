<template>
  <div
    class="bg-grayscale-input flex items-center transition-all"
    :class="{
      '': size === 'sm',
      'rounded-[12px] py-[8px] px-[20px] gap-[16px]': size === 'md',
      '!py-[2px]': size === 'md' && value,
      'rounded-[16px] py-[12px] px-[20px] gap-[16px]': size === 'lg',
      '!py-[3px]': size === 'lg' && value,
      '': size === 'xl',
      '!bg-grayscale-bg outline-grayscale-header outline outline-[2px]':
        focused,
      'opacity-[0.5]': disabled,
      'outline-success outline outline-[2px] !bg-success-bg':
        state === 'success',
      'outline-danger outline outline-[2px] !bg-danger-bg': state === 'error'
    }"
    @click="focusOnClick"
  >
    <!-- TODO: Show loading spinner if loading props provided -->
    <template v-if="loading"> LOADING_ICON </template>
    <div class="flex flex-col justify-center">
      <span
        v-show="value"
        class="desktop-text-xs text-grayscale-label"
        :class="{
          '!text-success-default_strong': state === 'success',
          '!text-danger-default_strong': state === 'error'
        }"
        >{{ label }}</span
      >
      <input
        type="text"
        :name="name"
        ref="textInput"
        :placeholder="label"
        class="bg-transparent desktop-text-sm focus:outline-none text-grayscale-header placeholder:text-grayscale-label"
        @focus="focused = true"
        @blur="focused = false"
        v-model="value"
        :disabled="disabled"
      />
    </div>

    <!-- TODO: Show close icon when focused is true -->
    <template v-if="focused"> CLEAR_ICON </template>
  </div>
  <span
    v-show="message"
    class="text-grayscale-header desktop-text-xs"
    :class="{
      '!text-success-default_strong': state === 'success',
      '!text-danger-default_strong': state === 'error'
    }"
    >{{ message }}</span
  >
</template>
<script setup lang="ts">
import { ref } from 'vue';

interface Props {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  name: string;
  label: string;
  loading?: boolean;
  value?: string;
  disabled?: boolean;
  message?: string;
  state?: 'success' | 'error';
}
const props = withDefaults(defineProps<Props>(), {
  size: 'md',
  loading: false,
  disabled: false
});

const value = ref(props.value);

const textInput = ref();
const focused = ref(false);

function focusOnClick() {
  if (focused.value) return;
  focused.value = true;
  textInput.value.focus();
}
</script>
