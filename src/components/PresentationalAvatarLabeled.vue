<template>
  <div
    data-testid="presentationalAvatarLabeled"
    class="flex items-center gap-[5px] h-[56px]"
  >
    <template v-if="position === 'right'">
      <span
        data-testid="presentationalAvatarLabeledLabel"
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
    </template>
    <template v-else>
      <PresentationalAvatar
        data-testid="presentationalAvatar"
        :username="username"
        :image="image"
        class="m-[4px]"
      />
      <span
        data-testid="presentationalAvatarLabeledLabel"
        class="link desktop-text-xs text-grayscale-body py-[5px] px-[10px]"
      >
        @{{ username }}
      </span>
    </template>
  </div>
</template>
<script setup lang="ts">
import PresentationalAvatar from './PresentationalAvatar.vue';

interface Props {
  username: string;
  image: string | null;
  position?: 'right' | 'left';
}
const props = withDefaults(defineProps<Props>(), {
  position: 'left'
});
</script>
