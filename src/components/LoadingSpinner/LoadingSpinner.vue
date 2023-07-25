<template>
  <div
    class="spinner border-[2px] border-current aspect-square transition-all"
    data-testid="loadingSpinner"
    :class="[spinnerSizingClasses]"
  ></div>
</template>
<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(
  defineProps<{ size?: 'sm' | 'md' | 'lg' | 'xl' }>(),
  {
    size: 'md'
  }
);

const spinnerSizingClasses = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'w-[16px]';
    default:
      return 'w-[24px]';
  }
});
</script>
<style scoped lang="scss">
.spinner {
  clear: both;
  border-top: transparent solid !important;
  border-radius: 50%;
  -webkit-animation: spinnerRotation 0.6s infinite linear;
  animation: spinnerRotation 0.6s infinite linear;
}
@keyframes spinnerRotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}
</style>
