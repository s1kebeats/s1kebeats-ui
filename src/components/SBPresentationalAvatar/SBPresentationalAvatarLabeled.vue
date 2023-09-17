<template>
  <div
    data-testid="presentationalAvatarLabeled"
    class="flex items-center gap-[5px] h-[56px]"
  >
    <span
      v-if="position === 'right'"
      data-testid="presentationalAvatarLabelRight"
      class="font-semibold text-sm text-grayscale-body py-[5px] px-[10px]"
    >
      @{{ username }}
    </span>
    <SBPresentationalAvatar
      data-testid="presentationalAvatar"
      :username="username"
      :image="image"
      class="m-[4px]"
      :size="size"
    />
    <span
      v-if="position === 'left'"
      data-testid="presentationalAvatarLabelLeft"
      class="font-semibold text-sm text-grayscale-body py-[5px] px-[10px]"
    >
      @{{ username }}
    </span>
  </div>
</template>
<script setup lang="ts">
import SBPresentationalAvatar from './SBPresentationalAvatar.vue';
import type Props from './SBPresentationalAvatar.props';

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
