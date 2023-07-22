<template>
  <button
    class="flex items-center justify-center link transition-all disabled:cursor-not-allowed"
    :class="[buttonSizingClasses, buttonTypeClasses]"
  >
    <slot v-if="position === 'left'" />
    <Icon
      v-if="icon"
      data-testid="buttonIcon"
      :icon="icon"
      :class="[iconSizingClasses]"
    />
    <slot v-if="position === 'right'" />
  </button>
</template>
<script setup lang="ts">
import { computed } from 'vue';
import { Icon } from '@iconify/vue';

interface Props {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  type?: 'primary' | 'secondary' | 'subtle' | 'ghost';
  icon?: string;
  position?: 'left' | 'right';
}

const props = withDefaults(defineProps<Props>(), {
  size: 'md',
  type: 'primary',
  position: 'left'
});

const buttonSizingClasses = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'desktop-text-xs rounded-lg min-h-[48px] px-4 gap-3';
    case 'lg':
      return 'desktop-text-sm rounded-xl min-h-[56px] px-8 gap-4';
    case 'xl':
      return 'desktop-text-md rounded-2xl min-h-[60px] px-8 gap-4';
    default:
      return 'desktop-text-sm rounded-xl min-h-[52px] px-6 gap-3';
  }
});

const buttonTypeClasses = computed(() => {
  switch (props.type) {
    case 'secondary':
      return 'border-2 border-primary text-primary hover:text-primary-default_strong hover:border-primary-default_strong focus:border-white focus:outline-8 focus:outline focus:outline-primary-bg_strong disabled:opacity-50 active:text-grayscale-header active:border-grayscale-header';
    case 'subtle':
      return 'border-2 border-grayscale-line text-primary hover:border-grayscale-placeholder hover:text-primary-default_strong focus:border-white focus:outline-8 focus:outline focus:outline-grayscale-input active:border-grayscale-header active:text-grayscale-header disabled:opacity-50';
    case 'ghost':
      return 'text-primary hover:text-primary-default_strong focus:outline-8 focus:outline focus:outline-grayscale-input active:text-grayscale-header disabled:opacity-50';
    default:
      return 'text-grayscale-bg bg-primary hover:bg-primary-default_strong focus:outline-8 focus:outline focus:outline-primary-bg_strong disabled:opacity-50 active:bg-grayscale-header';
  }
});

const iconSizingClasses = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'text-[16px]';
    default:
      return 'text-[24px]';
  }
});
</script>
