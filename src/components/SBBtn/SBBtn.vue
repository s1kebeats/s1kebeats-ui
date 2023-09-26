<template>
  <button
    class="font-semibold transition-all disabled:cursor-not-allowed"
    :class="[buttonSizingClasses, buttonTypeClasses]"
    :type="type"
  >
    <div class="relative flex items-center justify-center">
      <div
        data-testid="buttonContentWrapper"
        class="flex items-center justify-center"
        :class="[
          buttonElementsContainerSizingClasses,
          { 'opacity-0': loading },
        ]"
      >
        <slot v-if="position === 'left'" />
        <Icon
          v-if="icon"
          data-testid="buttonIcon"
          :icon="icon"
          :class="[iconSizingClasses, { 'opacity-0': loading }]"
        />
        <slot v-if="position === 'right'" />
      </div>
      <SBLoadingSpinner
        data-testid="loadingSpinner"
        class="absolute"
        v-if="loading"
        :size="size"
      />
    </div>
  </button>
</template>
<script setup lang="ts">
import SBLoadingSpinner from '../SBLoadingSpinner';
import { computed } from 'vue';
import { Icon } from '@iconify/vue';
import Props from './SBBtn.props';

const props = withDefaults(defineProps<Props>(), {
  size: 'md',
  designType: 'primary',
  position: 'left',
  loading: false,
  type: 'button',
});

const buttonSizingClasses = computed(() => {
  switch (props.size) {
    case 'xs':
      return 'text-xs rounded-md min-h-[32px] px-2';
    case 'sm':
      return 'text-sm rounded-lg min-h-[48px] px-4';
    case 'lg':
      return 'text-base rounded-xl min-h-[56px] px-8';
    case 'xl':
      return 'text-lg rounded-2xl min-h-[60px] px-8';
    default:
      return 'text-base rounded-xl min-h-[52px] px-6';
  }
});

const buttonElementsContainerSizingClasses = computed(() => {
  switch (props.size) {
    case 'xs':
      return 'gap-1';
    case 'lg':
    case 'xl':
      return 'gap-4';
    default:
      return 'gap-3';
  }
});

const buttonTypeClasses = computed(() => {
  switch (props.designType) {
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
    case 'xs':
    case 'sm':
      return 'text-[16px]';
    default:
      return 'text-[24px]';
  }
});
</script>
