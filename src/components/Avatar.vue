<template>
    <div class="bg-primary w-[48px] h-[48px] rounded-full">
        <img v-if="authStore.user!.image" :src="authStore.user!.image" />
        <span v-else>{{ authStore.user!.username.slice(0,2) }}</span>
    </div>
</template>
<script setup lang="ts">
import useAuthStore from '@/stores/auth';
const authStore = useAuthStore()
</script>