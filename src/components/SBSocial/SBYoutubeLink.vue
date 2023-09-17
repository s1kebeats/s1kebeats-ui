<template>
  <SBSocialLink
    url="https://www.youtube.com/@"
    :username="username"
    icon="mdi:youtube"
    :size="size"
    data-testid="socialLink"
  />
</template>
<script setup lang="ts">
import SBSocialLink, { type SBSocialLinkProps } from './ui';

const props = defineProps<Omit<SBSocialLinkProps, 'url' | 'icon'>>();
</script>
