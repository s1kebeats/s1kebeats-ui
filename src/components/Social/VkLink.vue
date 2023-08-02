<template>
  <SocialLink
    url="https://vk.com/"
    :username="username"
    icon="mdi:vk"
    :size="size"
    data-testid="socialLink"
  />
</template>
<script setup lang="ts">
import SocialLink from './ui/SocialLink.vue';
import type Props from './ui/SocialLink.props';

const props = defineProps<Omit<Props, 'url' | 'icon'>>();
</script>
