<template>
  <button
    class="flex items-center justify-center link transition-all"
    :class="{
      'desktop-text-xs rounded-[8px] py-[10px] px-[16px] gap-[12px]':
        size === 'sm',
      'desktop-text-sm rounded-[12px] py-[14px] px-[24px] gap-[12px]':
        size === 'md',
      'desktop-text-sm rounded-[12px] py-[18px] px-[32px] gap-[16px]':
        size === 'lg',
      'desktop-text-md rounded-[16px] py-[19px] px-[32px] gap-[16px]':
        size === 'xl',
      'text-grayscale-bg bg-primary hover:bg-primary-default_strong focus:outline-[8px] focus:outline focus:outline-primary-bg_strong disabled:opacity-[0.5] active:bg-grayscale-header':
        type === 'primary',
      'border-[2px] border-primary text-primary hover:text-primary-default_strong hover:border-primary-default_strong focus:border-white focus:outline-[8px] focus:outline focus:outline-primary-bg_strong disabled:opacity-[0.5] active:text-grayscale-header active:border-grayscale-header':
        type === 'secondary',
      '': type === 'subtle',
      '': type === 'ghost'
    }"
  >
    Button
    <!-- <slot /> -->
    <!-- <slot name="icon" /> -->
  </button>
</template>
<script setup lang="ts">
interface Props {
  size: 'sm' | 'md' | 'lg' | 'xl'
  type: 'primary' | 'secondary' | 'subtle'
}

const props = withDefaults(defineProps<Props>(), {
  size: 'md',
  type: 'secondary'
})
</script>
