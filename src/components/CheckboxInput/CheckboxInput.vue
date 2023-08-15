<template>
  <div class="flex items-center" :class="[checkboxInputContainerSizingClasses]">
    <label
      data-testid="checkboxInputLabelLeft"
      v-if="label && position === 'left'"
      :for="name"
      :class="[checkboxInputLabelSizingClasses]"
      >{{ label }}</label
    >
    <input
      data-testid="realCheckboxInput"
      :name="name"
      type="checkbox"
      :checked="checked"
      :value="value"
      class="hidden"
      :disabled="disabled"
    />
    <div
      data-testid="customCheckboxInput"
      tabindex="0"
      @click="disabled ? null : toggleValue()"
      class="flex items-center justify-center transition-all focus:outline-[rgba(0,0,0,.1)] focus:outline focus:outline-[8px] disabled:opacity-50"
      @keydown.enter="disabled ? null : toggleValue()"
      role="checkbox"
      :aria-checked="value"
      :class="[
        checkboxInputSizingClasses,
        checkboxInputColorClasses,
        {
          'cursor-not-allowed': disabled
        }
      ]"
    >
      <transition name="fade">
        <Icon
          data-testid="checkboxIndicator"
          v-show="value"
          class="text-grayscale-bg"
          :class="[iconSizingClasses]"
          icon="material-symbols:check-small-rounded"
        />
      </transition>
    </div>
    <label
      data-testid="checkboxInputLabelRight"
      v-if="label && position === 'right'"
      :for="name"
      :class="[checkboxInputLabelSizingClasses]"
      >{{ label }}</label
    >
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
  position?: 'left' | 'right';
}

const props = withDefaults(defineProps<Props>(), {
  size: 'md',
  position: 'left'
});
const emit = defineEmits<{
  (e: 'update:value', value: boolean): void;
}>();

const value = ref(false);

function toggleValue() {
  value.value = !value.value;
  emit('update:value', value.value);
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

const checkboxInputContainerSizingClasses = computed(() => {
  switch (props.size) {
    case 'sm':
    case 'md':
      return 'gap-2';
    default:
      return 'gap-3';
  }
});

const checkboxInputLabelSizingClasses = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'text-sm';
    case 'lg':
      return 'text-base';
    case 'xl':
      return 'text-lg';
    default:
      return 'text-base';
  }
});

const checkboxInputColorClasses = computed(() => {
  if (value.value) {
    return 'bg-primary hover:bg-primary-default_strong';
  }
  return 'bg-grayscale-line hover:bg-grayscale-placehold';
});

watchEffect(() => {
  value.value = props.checked ? props.checked : false;
});
</script>
