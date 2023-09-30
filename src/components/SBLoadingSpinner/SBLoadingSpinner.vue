<template>
  <div
    class="sbloadingspinner border-[2px] border-current aspect-square transition-all"
    data-testid="loadingSpinner"
    :class="[spinnerSizingClasses]"
  ></div>
</template>
<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(
  defineProps<{ size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' }>(),
  {
    size: 'md',
  }
);

const spinnerSizingClasses = computed(() => {
  switch (props.size) {
    case 'xs':
      return 'w-[12px]';
    case 'sm':
      return 'w-[16px]';
    default:
      return 'w-[24px]';
  }
});
</script>
<style lang="scss">
.sbloadingspinner {
  clear: both;
  border-top: transparent solid !important;
  border-radius: 50%;
  -webkit-animation: sbloadingspinnerRotation 0.6s infinite linear;
  animation: sbloadingspinnerRotation 0.6s infinite linear;
}
@keyframes sbloadingspinnerRotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}
</style>
