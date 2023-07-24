<template>
  <Button
    class="w-[max-content]"
    :size="size"
    :type="type"
    :icon="loading ? null : icon"
    :position="position"
  >
    <LoadingSpinner :size="size" v-if="loading" />
    <slot v-else />
  </Button>
</template>
<script setup lang="ts">
import Button from '../Button/Button.vue';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner.vue';
import type Props from '../Button/Button.props';

const props = defineProps<Props & { loading: boolean }>();
</script>
