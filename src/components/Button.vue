<template>
  <button
    class="flex items-center justify-center link transition-all"
    :class="{
      'desktop-text-xs rounded-lg min-h-[48px] px-4 gap-3': size === 'sm',
      'desktop-text-sm rounded-xl min-h-[52px] px-6 gap-3': size === 'md',
      'desktop-text-sm rounded-xl min-h-[56px] px-8 gap-4': size === 'lg',
      'desktop-text-md rounded-2xl min-h-[60px] px-8 gap-4': size === 'xl',
      'text-grayscale-bg bg-primary hover:bg-primary-default_strong focus:outline-8 focus:outline focus:outline-primary-bg_strong disabled:opacity-50 active:bg-grayscale-header':
        type === 'primary',
      'border-2 border-primary text-primary hover:text-primary-default_strong hover:border-primary-default_strong focus:border-white focus:outline-8 focus:outline focus:outline-primary-bg_strong disabled:opacity-50 active:text-grayscale-header active:border-grayscale-header':
        type === 'secondary',
      'border-2 border-grayscale-line text-primary hover:border-grayscale-placeholder hover:text-primary-default_strong focus:border-white focus:outline-8 focus:outline focus:outline-grayscale-input active:border-grayscale-header active:text-grayscale-header disabled:opacity-50':
        type === 'subtle',
      'text-primary hover:text-primary-default_strong focus:outline-8 focus:outline focus:outline-grayscale-input active:text-grayscale-header disabled:opacity-50':
        type === 'ghost'
    }"
  >
    <slot />
    <slot name="icon" />
  </button>
</template>
<script setup lang="ts">
interface Props {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  type?: 'primary' | 'secondary' | 'subtle' | 'ghost';
}

const props = withDefaults(defineProps<Props>(), {
  size: 'md',
  type: 'secondary'
});
</script>
