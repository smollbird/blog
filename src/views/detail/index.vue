<template>
    <div class="details">
        <h4 class="title">{{ title }}</h4>
        <div class="author">
            <span>{{ author }}</span
            ><span>{{ createTime }}</span>
        </div>
        <div class="content">
            {{ content }}
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();
const { title, content, author, createTime } = route.query;
</script>

<style scoped lang="less">
.details{
   
    .title{
        margin: 10px 0;
        font-size: 24px;
        text-align: center;
    }
    .author{
        margin: 10px 0;
        font-size: 14px;
        color: var(--color-text);
        text-align: center;
        span{
            margin: 0 8px;
        }
    }
    .content{
        font-size: 12px;
        color: var(--color-text);
        margin: 10px 0;
    }
}
</style>
