<template>
  <div
    data-testid="presentationalAvatarLabeled"
    class="flex items-center gap-[5px] h-[56px]"
  >
    <span
      v-if="position === 'right'"
      data-testid="presentationalAvatarLabelRight"
      class="link desktop-text-xs text-grayscale-body py-[5px] px-[10px]"
    >
      @{{ username }}
    </span>
    <PresentationalAvatar
      data-testid="presentationalAvatar"
      :username="username"
      :image="image"
      class="m-[4px]"
      :size="size"
    />
    <span
      v-if="position === 'left'"
      data-testid="presentationalAvatarLabelLeft"
      class="link desktop-text-xs text-grayscale-body py-[5px] px-[10px]"
    >
      @{{ username }}
    </span>
  </div>
</template>
<script setup lang="ts">
import PresentationalAvatar from './PresentationalAvatar.vue';
import type Props from './PresentationalAvatar.props';

const props = withDefaults(
  defineProps<
    Props & {
      position?: 'right' | 'left';
    }
  >(),
  {
    position: 'left'
  }
);
</script>
