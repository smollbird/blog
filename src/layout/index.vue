<template>
    <div class="home">
        <Header></Header>

        <div class="main">
            <router-view></router-view>
        </div>

        <Footer></Footer>
    </div>
</template>
<script setup lang="ts">
import Header from './header/index.vue';
// import Main from './main/index.vue';
import Footer from './footer/index.vue';
</script>
<style scoped lang="less">
.home {
    & > .main {
        margin: 0 10%;
    }
}
</style>
