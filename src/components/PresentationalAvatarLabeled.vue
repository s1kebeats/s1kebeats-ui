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

interface Props {
  username: string;
  image?: string | null;
  position?: 'right' | 'left';
}
const props = withDefaults(defineProps<Props>(), {
  position: 'left'
});
</script>
