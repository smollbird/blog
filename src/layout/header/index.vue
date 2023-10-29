<template>
    <div class="head">
        <div style="margin: 0 10%; display: flex">
            <div class="logo">
                <img src="@/assets/vue.svg" alt="logo" />
            </div>

            <nav></nav>

            <login></login>
        </div>
    </div>
</template>

<script setup lang="ts">
import Nav from '@/components/h/nav/index.vue';
import Login from '@/components/login/index.vue';
</script>

<style scoped lang="less">
.head {
    height: 80px;
    background-color: var(--nav-background-light);
    .logo {
        width: 80px;
        height: 100%;
        display: flex;
        img {
            margin: auto;
            width: 100%;
            height: 100%;
        }
    }
}
</style>
