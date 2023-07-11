<template>
  <TextInput
    :size="size"
    :name="name"
    label="Введите электронную почту"
    icon="material-symbols:alternate-email-rounded"
    :preset="preset"
    :disabled="disabled"
    :message="message || localMessage"
    :state="state || localState"
    :debounce="true"
    @update-value="updateValue"
  />
</template>
<script setup lang="ts">
import TextInput from './TextInput.vue';
import * as EmailValidator from 'email-validator';
import { ref } from 'vue';

const emit = defineEmits<{
  (e: 'updateValue', value: string): void;
}>();

const props = defineProps<{
  size?: 'sm' | 'md' | 'lg' | 'xl';
  name: string;
  preset?: string;
  disabled?: boolean;
  message?: string;
  state?: 'success' | 'error';
}>();

const localMessage = ref(props.message ? props.message : '');
const localState = ref(props.state ? props.state : undefined);

// don't forget to reset prop-provided message and state after emit (in form component)

async function updateValue(emitted: string) {
  if (!emitted) {
    localMessage.value = '';
    localState.value = undefined;
    emit('updateValue', emitted);
    return;
  }
  if (EmailValidator.validate(emitted)) {
    localMessage.value = '';
    localState.value = 'success';
    emit('updateValue', emitted);
    return;
  }
  localMessage.value = 'Введите настоящую электронную почту';
  localState.value = 'error';
}
</script>
