<template>
  <div
    class="flex flex-col"
    :class="{
      'desktop-text-xs': size === 'sm',
      'desktop-text-sm gap-1': size === 'md' || size === 'lg',
      'desktop-text-md gap-2': size === 'xl'
    }"
  >
    <div
      class="bg-grayscale-input flex items-center transition-all"
      :class="{
        'rounded-lg min-h-[48px] px-4 gap-3': size === 'sm',
        'rounded-xl min-h-[52px] px-6 gap-3': size === 'md',
        'rounded-xl min-h-[56px] px-8 gap-4': size === 'lg',
        'rounded-2xl min-h-[60px] px-8 gap-4': size === 'xl',
        '!bg-grayscale-bg outline-grayscale-header outline outline-[2px]':
          focused,
        'opacity-50': disabled,
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
          class="bg-transparent focus:outline-none text-grayscale-header placeholder:text-grayscale-label"
          @focus="focused = true"
          @blur="focused = false"
          v-model="value"
          :disabled="disabled"
        />
      </div>

      <!-- TODO: Show close icon when focused is true -->
      <Icon
        icon="material-symbols:close-rounded"
        :class="{
          'text-[19px]': size === 'sm',
          'text-[22px]': size === 'md' || size === 'lg',
          'text-[24px]': size === 'xl'
        }"
      />
    </div>
    <span
      v-show="message"
      class="text-grayscale-header"
      :class="{
        '!text-success-default_strong': state === 'success',
        '!text-danger-default_strong': state === 'error'
      }"
      >{{ message }}</span
    >
  </div>
</template>
<script setup lang="ts">
import { Icon } from '@iconify/vue';
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
