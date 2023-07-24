<template>
  <TextInput
    data-testid="textInputComponent"
    :size="size"
    :name="name"
    label="Введите электронную почту"
    :icon="icon ? 'material-symbols:alternate-email-rounded' : null"
    :preset="preset"
    :disabled="disabled"
    :message="message"
    :state="state"
    :debounce="true"
    @update-value="updateValue"
    type="email"
  />
</template>
<script setup lang="ts">
import TextInput from '../TextInput/TextInput.vue';
import { onMounted } from 'vue';
import type TextInputProps from '../TextInput/TextInput.props';

const emit = defineEmits<{
  (e: 'updateValue', value: string): void;
}>();

const props = withDefaults(
  defineProps<
    Omit<TextInputProps, 'label' | 'icon' | 'debounce'> & { icon: boolean }
  >(),
  {
    icon: true
  }
);

// don't forget to reset prop-provided message and state after emit (in form component)

function updateValue(value: string) {
  emit('updateValue', value);
}

onMounted(() => {
  if (props.preset) {
    updateValue(props.preset);
  }
});
</script>
