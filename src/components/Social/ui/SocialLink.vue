<template>
  <a target="_blank" data-testid="socialLink" :href="url + username">
    <Icon
      :icon="icon"
      data-testid="socialLinkIcon"
      :class="[iconSizingClasses]"
    />
  </a>
</template>
<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { computed } from 'vue';
import type Props from './SocialLink.props';

const props = defineProps<Props>();

const iconSizingClasses = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'text-[25px]';
    case 'lg':
      return 'text-[35px]';
    default:
      return 'text-[30px]';
  }
});
</script>
