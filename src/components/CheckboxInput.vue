<template>
  <div>
    <input
      :name="name"
      type="checkbox"
      :checked="checked"
      :value="value"
      class="hidden"
    />
    <div
      tabindex="0"
      @click="toggleValue"
      class="flex items-center justify-center transition-all focus:outline-[rgba(0,0,0,.1)] focus:outline focus:outline-[8px]"
      @keydown.enter="toggleValue"
      role="checkbox"
      :aria-checked="value"
      :class="[checkboxInputSizingClasses, checkboxInputColorClasses]"
    >
      <transition name="fade">
        <Icon
          v-show="value"
          class="text-grayscale-bg"
          :class="[iconSizingClasses]"
          icon="material-symbols:check-small-rounded"
        />
      </transition>
    </div>
    <label v-if="label" :for="name">{{ label }}</label>
  </div>
</template>
<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { computed, ref, watchEffect } from 'vue';

interface Props {
  name: string;
  checked?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  label?: string;
  disabled?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  size: 'md'
});
const emit = defineEmits<{
  (e: 'updateValue', value: boolean): void;
}>();

const value = ref(false);

function toggleValue() {
  value.value = !value.value;
  emit('updateValue', value.value);
}

const checkboxInputSizingClasses = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'w-[27px] h-[27px] rounded-lg';
    case 'lg':
      return 'w-[35px] h-[35px] rounded-lg';
    case 'xl':
      return 'w-[40px] h-[40px] rounded-lg';
    default:
      return 'w-[30px] h-[30px] rounded-lg';
  }
});

const iconSizingClasses = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'text-[21px]';
    case 'lg':
      return 'text-[25px]';
    case 'xl':
      return 'text-[30px]';
    default:
      return 'text-[22px]';
  }
});

const checkboxInputColorClasses = computed(() => {
  if (value.value) {
    return 'bg-primary hover:bg-primary-default_strong disabled:opacity-50';
  }
  return 'bg-grayscale-line hover:bg-grayscale-placehold';
});

watchEffect(() => {
  value.value = props.checked ? props.checked : false;
});
</script>
