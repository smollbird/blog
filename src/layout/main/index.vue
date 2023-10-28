<template>
    <div class="main">
        <div class="center">
            <div class="article-list">
                <Article @entry="handlerEntry" v-for="article in articles" :article="article"></Article>
            </div>
        </div>

        <div class="right">
            <Tags></Tags>

            <HotSearchList></HotSearchList>

            <div class="calendar"></div>
        </div>
    </div>
</template>

<script setup lang="ts">
import Article from '@/components/article/index.vue';
import HotSearchList from '@/components/hotSearchList/index.vue';
import Tags from '@/components/tags/index.vue';
import type { Article } from '@/types/index.d.ts';

const articles:<Article[]> = [
    {
        title: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
        content: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat molestias nihil quasi optio maiores
            incidunt inventore omnis ut exercitationem sapiente, provident facere sequi magnam tempore cum aut iste sunt
            nesciunt.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat molestias nihil quasi optio maiores
            incidunt inventore omnis ut exercitationem sapiente, provident facere sequi magnam tempore cum aut iste sunt
            nesciunt.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat molestias nihil quasi optio maiores
            incidunt inventore omnis ut exercitationem sapiente, provident facere sequi magnam tempore cum aut iste sunt
            nesciunt.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat molestias nihil quasi optio maiores
            incidunt inventore omnis ut exercitationem sapiente, provident facere sequi magnam tempore cum aut iste sunt
            nesciunt.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat molestias nihil quasi optio maiores
            incidunt inventore omnis ut exercitationem sapiente, provident facere sequi magnam tempore cum aut iste sunt
            nesciunt.`,
        description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat molestias nihil quasi optio maiores
            incidunt inventore omnis ut exercitationem sapiente, provident facere sequi magnam tempore cum aut iste sunt
            nesciunt.`,
        tags: ['html', 'css', 'javascript', 'vue'],
        like: 10,
        comment: 20,
        saw: 30,
        author: 'hsc',
        createTime: '2023-10-28 21:36'
    },
    {
        title: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
        content: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat molestias nihil quasi optio maiores
            incidunt inventore omnis ut exercitationem sapiente, provident facere sequi magnam tempore cum aut iste sunt
            nesciunt.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat molestias nihil quasi optio maiores
            incidunt inventore omnis ut exercitationem sapiente, provident facere sequi magnam tempore cum aut iste sunt
            nesciunt.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat molestias nihil quasi optio maiores
            incidunt inventore omnis ut exercitationem sapiente, provident facere sequi magnam tempore cum aut iste sunt
            nesciunt.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat molestias nihil quasi optio maiores
            incidunt inventore omnis ut exercitationem sapiente, provident facere sequi magnam tempore cum aut iste sunt
            nesciunt.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat molestias nihil quasi optio maiores
            incidunt inventore omnis ut exercitationem sapiente, provident facere sequi magnam tempore cum aut iste sunt
            nesciunt.`,
        description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat molestias nihil quasi optio maiores
            incidunt inventore omnis ut exercitationem sapiente, provident facere sequi magnam tempore cum aut iste sunt
            nesciunt.`,
        tags: ['html', 'css', 'javascript', 'vue'],
        like: 10,
        comment: 20,
        saw: 30,
        author: 'hsc',
        createTime: '2023-10-28 21:36'
    },
    {
        title: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
        content: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat molestias nihil quasi optio maiores
            incidunt inventore omnis ut exercitationem sapiente, provident facere sequi magnam tempore cum aut iste sunt
            nesciunt.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat molestias nihil quasi optio maiores
            incidunt inventore omnis ut exercitationem sapiente, provident facere sequi magnam tempore cum aut iste sunt
            nesciunt.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat molestias nihil quasi optio maiores
            incidunt inventore omnis ut exercitationem sapiente, provident facere sequi magnam tempore cum aut iste sunt
            nesciunt.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat molestias nihil quasi optio maiores
            incidunt inventore omnis ut exercitationem sapiente, provident facere sequi magnam tempore cum aut iste sunt
            nesciunt.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat molestias nihil quasi optio maiores
            incidunt inventore omnis ut exercitationem sapiente, provident facere sequi magnam tempore cum aut iste sunt
            nesciunt.`,
        description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat molestias nihil quasi optio maiores
            incidunt inventore omnis ut exercitationem sapiente, provident facere sequi magnam tempore cum aut iste sunt
            nesciunt.`,
        tags: ['html', 'css', 'javascript', 'vue'],
        like: 10,
        comment: 20,
        saw: 30,
        author: 'hsc',
        createTime: '2023-10-28 21:36'
    },
    {
        title: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
        content: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat molestias nihil quasi optio maiores
            incidunt inventore omnis ut exercitationem sapiente, provident facere sequi magnam tempore cum aut iste sunt
            nesciunt.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat molestias nihil quasi optio maiores
            incidunt inventore omnis ut exercitationem sapiente, provident facere sequi magnam tempore cum aut iste sunt
            nesciunt.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat molestias nihil quasi optio maiores
            incidunt inventore omnis ut exercitationem sapiente, provident facere sequi magnam tempore cum aut iste sunt
            nesciunt.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat molestias nihil quasi optio maiores
            incidunt inventore omnis ut exercitationem sapiente, provident facere sequi magnam tempore cum aut iste sunt
            nesciunt.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat molestias nihil quasi optio maiores
            incidunt inventore omnis ut exercitationem sapiente, provident facere sequi magnam tempore cum aut iste sunt
            nesciunt.`,
        description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat molestias nihil quasi optio maiores
            incidunt inventore omnis ut exercitationem sapiente, provident facere sequi magnam tempore cum aut iste sunt
            nesciunt.`,
        tags: ['html', 'css', 'javascript', 'vue'],
        like: 10,
        comment: 20,
        saw: 30,
        author: 'hsc',
        createTime: '2023-10-28 21:36'
    },
    {
        title: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
        content: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat molestias nihil quasi optio maiores
            incidunt inventore omnis ut exercitationem sapiente, provident facere sequi magnam tempore cum aut iste sunt
            nesciunt.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat molestias nihil quasi optio maiores
            incidunt inventore omnis ut exercitationem sapiente, provident facere sequi magnam tempore cum aut iste sunt
            nesciunt.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat molestias nihil quasi optio maiores
            incidunt inventore omnis ut exercitationem sapiente, provident facere sequi magnam tempore cum aut iste sunt
            nesciunt.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat molestias nihil quasi optio maiores
            incidunt inventore omnis ut exercitationem sapiente, provident facere sequi magnam tempore cum aut iste sunt
            nesciunt.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat molestias nihil quasi optio maiores
            incidunt inventore omnis ut exercitationem sapiente, provident facere sequi magnam tempore cum aut iste sunt
            nesciunt.`,
        description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat molestias nihil quasi optio maiores
            incidunt inventore omnis ut exercitationem sapiente, provident facere sequi magnam tempore cum aut iste sunt
            nesciunt.`,
        tags: ['html', 'css', 'javascript', 'vue'],
        like: 10,
        comment: 20,
        saw: 30,
        author: 'hsc',
        createTime: '2023-10-28 21:36'
    },
    {
        title: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
        content: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat molestias nihil quasi optio maiores
            incidunt inventore omnis ut exercitationem sapiente, provident facere sequi magnam tempore cum aut iste sunt
            nesciunt.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat molestias nihil quasi optio maiores
            incidunt inventore omnis ut exercitationem sapiente, provident facere sequi magnam tempore cum aut iste sunt
            nesciunt.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat molestias nihil quasi optio maiores
            incidunt inventore omnis ut exercitationem sapiente, provident facere sequi magnam tempore cum aut iste sunt
            nesciunt.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat molestias nihil quasi optio maiores
            incidunt inventore omnis ut exercitationem sapiente, provident facere sequi magnam tempore cum aut iste sunt
            nesciunt.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat molestias nihil quasi optio maiores
            incidunt inventore omnis ut exercitationem sapiente, provident facere sequi magnam tempore cum aut iste sunt
            nesciunt.`,
        description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat molestias nihil quasi optio maiores
            incidunt inventore omnis ut exercitationem sapiente, provident facere sequi magnam tempore cum aut iste sunt
            nesciunt.`,
        tags: ['html', 'css', 'javascript', 'vue'],
        like: 10,
        comment: 20,
        saw: 30,
        author: 'hsc',
        createTime: '2023-10-28 21:36'
    },
    {
        title: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
        content: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat molestias nihil quasi optio maiores
            incidunt inventore omnis ut exercitationem sapiente, provident facere sequi magnam tempore cum aut iste sunt
            nesciunt.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat molestias nihil quasi optio maiores
            incidunt inventore omnis ut exercitationem sapiente, provident facere sequi magnam tempore cum aut iste sunt
            nesciunt.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat molestias nihil quasi optio maiores
            incidunt inventore omnis ut exercitationem sapiente, provident facere sequi magnam tempore cum aut iste sunt
            nesciunt.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat molestias nihil quasi optio maiores
            incidunt inventore omnis ut exercitationem sapiente, provident facere sequi magnam tempore cum aut iste sunt
            nesciunt.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat molestias nihil quasi optio maiores
            incidunt inventore omnis ut exercitationem sapiente, provident facere sequi magnam tempore cum aut iste sunt
            nesciunt.`,
        description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat molestias nihil quasi optio maiores
            incidunt inventore omnis ut exercitationem sapiente, provident facere sequi magnam tempore cum aut iste sunt
            nesciunt.`,
        tags: ['html', 'css', 'javascript', 'vue'],
        like: 10,
        comment: 20,
        saw: 30,
        author: 'hsc',
        createTime: '2023-10-28 21:36'
    },
    {
        title: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
        content: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat molestias nihil quasi optio maiores
            incidunt inventore omnis ut exercitationem sapiente, provident facere sequi magnam tempore cum aut iste sunt
            nesciunt.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat molestias nihil quasi optio maiores
            incidunt inventore omnis ut exercitationem sapiente, provident facere sequi magnam tempore cum aut iste sunt
            nesciunt.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat molestias nihil quasi optio maiores
            incidunt inventore omnis ut exercitationem sapiente, provident facere sequi magnam tempore cum aut iste sunt
            nesciunt.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat molestias nihil quasi optio maiores
            incidunt inventore omnis ut exercitationem sapiente, provident facere sequi magnam tempore cum aut iste sunt
            nesciunt.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat molestias nihil quasi optio maiores
            incidunt inventore omnis ut exercitationem sapiente, provident facere sequi magnam tempore cum aut iste sunt
            nesciunt.`,
        description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat molestias nihil quasi optio maiores
            incidunt inventore omnis ut exercitationem sapiente, provident facere sequi magnam tempore cum aut iste sunt
            nesciunt.`,
        tags: ['html', 'css', 'javascript', 'vue'],
        like: 10,
        comment: 20,
        saw: 30,
        author: 'hsc',
        createTime: '2023-10-28 21:36'
    },
    {
        title: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
        content: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat molestias nihil quasi optio maiores
            incidunt inventore omnis ut exercitationem sapiente, provident facere sequi magnam tempore cum aut iste sunt
            nesciunt.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat molestias nihil quasi optio maiores
            incidunt inventore omnis ut exercitationem sapiente, provident facere sequi magnam tempore cum aut iste sunt
            nesciunt.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat molestias nihil quasi optio maiores
            incidunt inventore omnis ut exercitationem sapiente, provident facere sequi magnam tempore cum aut iste sunt
            nesciunt.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat molestias nihil quasi optio maiores
            incidunt inventore omnis ut exercitationem sapiente, provident facere sequi magnam tempore cum aut iste sunt
            nesciunt.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat molestias nihil quasi optio maiores
            incidunt inventore omnis ut exercitationem sapiente, provident facere sequi magnam tempore cum aut iste sunt
            nesciunt.`,
        description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat molestias nihil quasi optio maiores
            incidunt inventore omnis ut exercitationem sapiente, provident facere sequi magnam tempore cum aut iste sunt
            nesciunt.`,
        tags: ['html', 'css', 'javascript', 'vue'],
        like: 10,
        comment: 20,
        saw: 30,
        author: 'hsc',
        createTime: '2023-10-28 21:36'
    },
    {
        title: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
        content: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat molestias nihil quasi optio maiores
            incidunt inventore omnis ut exercitationem sapiente, provident facere sequi magnam tempore cum aut iste sunt
            nesciunt.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat molestias nihil quasi optio maiores
            incidunt inventore omnis ut exercitationem sapiente, provident facere sequi magnam tempore cum aut iste sunt
            nesciunt.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat molestias nihil quasi optio maiores
            incidunt inventore omnis ut exercitationem sapiente, provident facere sequi magnam tempore cum aut iste sunt
            nesciunt.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat molestias nihil quasi optio maiores
            incidunt inventore omnis ut exercitationem sapiente, provident facere sequi magnam tempore cum aut iste sunt
            nesciunt.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat molestias nihil quasi optio maiores
            incidunt inventore omnis ut exercitationem sapiente, provident facere sequi magnam tempore cum aut iste sunt
            nesciunt.`,
        description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat molestias nihil quasi optio maiores
            incidunt inventore omnis ut exercitationem sapiente, provident facere sequi magnam tempore cum aut iste sunt
            nesciunt.`,
        tags: ['html', 'css', 'javascript', 'vue'],
        like: 10,
        comment: 20,
        saw: 30,
        author: 'hsc',
        createTime: '2023-10-28 21:36'
    },
    {
        title: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
        content: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat molestias nihil quasi optio maiores
            incidunt inventore omnis ut exercitationem sapiente, provident facere sequi magnam tempore cum aut iste sunt
            nesciunt.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat molestias nihil quasi optio maiores
            incidunt inventore omnis ut exercitationem sapiente, provident facere sequi magnam tempore cum aut iste sunt
            nesciunt.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat molestias nihil quasi optio maiores
            incidunt inventore omnis ut exercitationem sapiente, provident facere sequi magnam tempore cum aut iste sunt
            nesciunt.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat molestias nihil quasi optio maiores
            incidunt inventore omnis ut exercitationem sapiente, provident facere sequi magnam tempore cum aut iste sunt
            nesciunt.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat molestias nihil quasi optio maiores
            incidunt inventore omnis ut exercitationem sapiente, provident facere sequi magnam tempore cum aut iste sunt
            nesciunt.`,
        description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat molestias nihil quasi optio maiores
            incidunt inventore omnis ut exercitationem sapiente, provident facere sequi magnam tempore cum aut iste sunt
            nesciunt.`,
        tags: ['html', 'css', 'javascript', 'vue'],
        like: 10,
        comment: 20,
        saw: 30,
        author: 'hsc',
        createTime: '2023-10-28 21:36'
    },
    {
        title: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
        content: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat molestias nihil quasi optio maiores
            incidunt inventore omnis ut exercitationem sapiente, provident facere sequi magnam tempore cum aut iste sunt
            nesciunt.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat molestias nihil quasi optio maiores
            incidunt inventore omnis ut exercitationem sapiente, provident facere sequi magnam tempore cum aut iste sunt
            nesciunt.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat molestias nihil quasi optio maiores
            incidunt inventore omnis ut exercitationem sapiente, provident facere sequi magnam tempore cum aut iste sunt
            nesciunt.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat molestias nihil quasi optio maiores
            incidunt inventore omnis ut exercitationem sapiente, provident facere sequi magnam tempore cum aut iste sunt
            nesciunt.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat molestias nihil quasi optio maiores
            incidunt inventore omnis ut exercitationem sapiente, provident facere sequi magnam tempore cum aut iste sunt
            nesciunt.`,
        description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat molestias nihil quasi optio maiores
            incidunt inventore omnis ut exercitationem sapiente, provident facere sequi magnam tempore cum aut iste sunt
            nesciunt.`,
        tags: ['html', 'css', 'javascript', 'vue'],
        like: 10,
        comment: 20,
        saw: 30,
        author: 'hsc',
        createTime: '2023-10-28 21:36'
    }
];
const handlerEntry = (value) => {
    router.push('/detail');
};
</script>

<style scoped lang="less">
.main {
    margin: 0 10% 20px;
    display: flex;
    .center {
        flex: 2;
        margin-right: 10px;
        .article-list {
            padding: 0 10px;
            height: calc(100vh - 140px);
            overflow-y: scroll;
            &::-webkit-scrollbar {
                display: none;
            }
        }
    }
    .right {
        flex: 1;
    }
}
</style>
