<template>
  <div
    data-testid="presentationalAvatar"
    class="aspect-square flex items-center justify-center bg-primary rounded-full"
    :class="[avatarSizingClasses]"
  >
    <img
      data-testid="presentationalAvatarImage"
      class="w-full h-full rounded-full"
      v-if="image"
      :src="image"
    />
    <span
      data-testid="presentationalAvatarAbbr"
      v-else
      class="font-semibold text-grayscale-bg"
      >{{ cutUsername }}</span
    >
  </div>
</template>
<script setup lang="ts">
import { computed } from 'vue';
import type Props from './PresentationalAvatar.props';

const props = withDefaults(defineProps<Props>(), {
  size: 'md'
});
const cutUsername = computed(() => props.username.slice(0, 2).toUpperCase());

const avatarSizingClasses = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'text-sm w-[40px]';
    case 'custom':
      return '';
    default:
      return 'text-sm w-[48px]';
  }
});
</script>
