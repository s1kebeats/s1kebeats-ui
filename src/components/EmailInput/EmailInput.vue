<template>
  <TextInput
    data-testid="textInputComponent"
    :size="size"
    :name="name"
    label="Введите электронную почту"
    :icon="icon ? 'material-symbols:alternate-email-rounded' : null"
    :preset="preset"
    :disabled="disabled"
    :message="message || localMessage"
    :state="state || localState"
    :debounce="true"
    @update-value="updateValue"
    type="email"
  />
</template>
<script setup lang="ts">
import TextInput from '../TextInput/TextInput.vue';
import * as EmailValidator from 'email-validator';
import { onMounted, ref } from 'vue';
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

const localMessage = ref(props.message ? props.message : '');
const localState = ref(props.state ? props.state : null);

// don't forget to reset prop-provided message and state after emit (in form component)

function updateValue(emitted: string) {
  if (!emitted) {
    localMessage.value = '';
    localState.value = null;
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

onMounted(() => {
  if (props.preset) {
    updateValue(props.preset);
  }
});
</script>
