<template>
  <div
    data-testid="presentationalAvatar"
    class="flex items-center justify-center bg-primary w-[48px] h-[48px] rounded-full"
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

const props = defineProps<{
  username: string;
  image?: string | null;
}>();
const cutUsername = computed(() => props.username.slice(0, 2).toUpperCase());
</script>
