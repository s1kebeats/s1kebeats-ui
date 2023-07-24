<template>
  <Button
    :size="size"
    :type="type"
    :icon="loading ? null : icon"
    :position="position"
    class="relative overflow-hidden"
  >
    <div
      class="absolute flex items-center justify-center w-full h-full"
      v-if="loading"
    >
      <LoadingSpinner :size="size" />
    </div>
    <slot />
  </Button>
</template>
<script setup lang="ts">
import Button from '../Button/Button.vue';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner.vue';
import type Props from '../Button/Button.props';
import { computed } from 'vue';

const props = defineProps<Props & { loading: boolean }>();

const loadingScreenColoringClasses = computed(() => {
  switch (props.type) {
  }
});
</script>
