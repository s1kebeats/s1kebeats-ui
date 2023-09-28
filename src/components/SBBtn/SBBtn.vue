<template>
  <button
    class="font-semibold transition-all disabled:cursor-not-allowed disabled:opacity-50 focus:outline focus:outline-8"
    :class="[`color-${color}`, `design-${design}`, buttonSizingClasses]"
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
  design: 'primary',
  color: 'primary',
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
<style lang="scss" scoped>
.color {
  @each $suffix, $color, $strongColor,
    $strongBgColor
      in (
        'primary',
        var(--color-primary),
        var(--color-primary-strong),
        var(--color-primary-bg-strong)
      ),
    (
      'secondary',
      var(--color-secondary),
      var(--color-secondary-strong),
      var(--color-secondary-bg-strong)
    ),
    (
      'success',
      var(--color-success),
      var(--color-success-strong),
      var(--color-success-bg-strong)
    ),
    (
      'warning',
      var(--color-warning),
      var(--color-warning-strong),
      var(--color-warning-bg-strong)
    ),
    (
      'danger',
      var(--color-danger),
      var(--color-danger-strong),
      var(--color-danger-bg-strong)
    )
  {
    &-#{$suffix} {
      background-color: $color;
      border-color: $color;
      color: $color;
      &:hover {
        background-color: $strongColor;
        color: $strongColor;
        border-color: $strongColor;
      }
      &:focus {
        outline-color: $strongBgColor;
      }
    }
  }
}
.design {
  &-primary {
    color: var(--color-grayscale-bg);
    &:hover {
      color: var(--color-grayscale-bg);
    }
    &:active {
      background-color: var(--color-grayscale-header);
    }
  }
  &-subtle {
    border-color: var(--color-grayscale-line);
    &:hover {
      border-color: var(--color-grayscale-placehold);
    }
    &:focus {
      outline-color: var(--color-grayscale-input);
      background-color: var(--color-grayscale-bg);
    }
  }
  &-ghost {
    &:focus {
      outline-color: var(--color-grayscale-input);
    }
  }
  &-secondary,
  &-subtle,
  &-ghost {
    background-color: var(--color-grayscale-bg);
    &:hover {
      background-color: var(--color-grayscale-bg);
    }
    &:active {
      color: var(--color-grayscale-header);
    }
  }
  &-secondary,
  &-subtle {
    border-style: solid;
    border-width: 2px;
    &:focus {
      border-color: var(--color-grayscale-bg);
    }
    &:active {
      border-color: var(--color-grayscale-header);
      background-color: var(--color-grayscale-bg);
    }
  }
}
</style>
