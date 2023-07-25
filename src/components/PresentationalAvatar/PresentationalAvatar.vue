<template>
  <div
    data-testid="presentationalAvatar"
    class="flex items-center justify-center bg-primary rounded-full"
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
      class="desktop-text-xs link text-grayscale-bg"
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
      return 'w-[40px] h-[40px]';
    default:
      return 'w-[48px] h-[48px]';
  }
});
</script>
