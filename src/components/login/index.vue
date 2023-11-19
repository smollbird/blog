<template>
    <div class="login">
        <!-- <img src="@/assets/svg/logo.svg" alt="" class="avatar" /> -->
        <avatar alt="" :src="img" :size="32" shape="circle"></avatar>
        <p class="username">hsc</p>
        <i class="iconfont icon-down"></i>
        <ul class="downtab">
            <li @click="handlerToPage('peopleCenter')">个人中心</li>
            <li @click="handlerToPage('settings')">设置中心</li>
            <li @click="handlerToPage('logout')">退出登陆</li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import Avatar from '@/components/h/avatar/index.vue';
import img from '@/assets/svg/logo.svg';
import { useRouter } from 'vue-router';
// import { reactive } from 'vue';
const router = useRouter();
const handlerToPage = function(type: string){
    if(type === 'peopleCenter'){
        router.push('/user')
    }
}
</script>

<style scoped lang="less">
.login {
    margin-left: auto;
    margin-top: auto;
    margin-bottom: auto;
    position: relative;
    display: flex;
    align-items: center;
    img {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        border: 2px solid #ccc;
        background-color: #2a2a2a;
    }
    .username {
        font-size: 15px;
        width: 80px;
        cursor: pointer;
    }
    .downtab {
        display: none;
        position: absolute;
        left: 0;
        top: 100%;
        background-color: #fff;
        width: 100%;
        text-align: center;
        border-radius: 4px;
        box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.2);
        cursor: pointer;
        li {
            margin: 10px 0;
        }
    }
    &:hover .downtab {
        display: block;
    }
}
</style>
