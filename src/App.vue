<script setup lang="ts">
import Layout from '@/layout/index.vue';
import { ref } from 'vue';
import type { Ref } from 'vue';

const theme: Ref<string> = ref('light');
</script>

<template>
    <div id="html-page" :data-theme="theme">
        <Layout></Layout>
    </div>
</template>

<style scoped></style>
