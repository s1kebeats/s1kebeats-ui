<template>
  <SBSocialLink
    url="https://instagram.com/@"
    :username="username"
    icon="mdi:instagram"
    :size="size"
    data-testid="socialLink"
  />
</template>
<script setup lang="ts">
import SBSocialLink, { type SBSocialLinkProps } from './ui';

const props = defineProps<Omit<SBSocialLinkProps, 'url' | 'icon'>>();
</script>
