<template>
  <SBTextInput
    data-testid="textInputComponent"
    :size="size"
    :name="name"
    label="Введите имя пользователя"
    :icon="icon ? 'material-symbols:account-circle' : null"
    :preset="preset"
    :disabled="disabled"
    :message="message"
    :state="state"
    :debounce="debounce"
    @update:value="updateValue"
    :autocomplete="autocomplete"
  />
</template>
<script setup lang="ts">
import SBTextInput, { type SBTextInputProps } from '../SBTextInput';
import { onMounted } from 'vue';

const emit = defineEmits<{
  (e: 'update:value', value: string): void;
}>();

const props = withDefaults(
  defineProps<Omit<SBTextInputProps, 'label' | 'icon'> & { icon?: boolean }>(),
  {
    icon: true,
  }
);

function updateValue(value: string) {
  emit('update:value', value);
}

onMounted(() => {
  if (props.preset) {
    updateValue(props.preset);
  }
});
</script>
