<template>
    <div class="types">
        <span v-for="_ in 20" class="type">html</span>
    </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="less">
.types {
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
    margin: 20px 0;
    border-radius: 4px;
    box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.2);
    .type {
        margin: 5px;
        padding: 4px;
        border-radius: 4px;
        background-color: #909090;
    }
}
</style>
