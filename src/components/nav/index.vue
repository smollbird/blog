<template>
    <ul class="nav">
        <li>首页</li>
        <li>专栏</li>
        <li>typescript</li>
        <li>node</li>
    </ul>
</template>

<script setup lang="ts"></script>

<style scoped lang="less">
.nav {
    display: flex;
    li {
        margin: auto 10px;
        font-size: 16px;
        height: 100%;
        line-height: 80px;
        color: var(--color);
        &:hover {
            color: var(--color-active);
            background-color: var(--background-active-ight);
        }
    }
}
</style>
