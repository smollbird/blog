<template>
    <div class="article-item" @click="handler">
        <h4 class="title">{{ article.title }}</h4>
        <p class="content">
            {{ article.description }}
        </p>
        <div class="article-footer">
            <div class="tags">
                <span v-for="tag in article.tags" class="tag">{{ tag }}</span>
            </div>
            <div class="operation-bar">
                <span data-value="like" class="like"><i class="iconfont icon-aixin"></i>{{ article.like }}</span>
                <span data-value="comment" class="comment"><i class="iconfont icon-pinglun"></i>{{ article.comment }}</span>
                <span data-value="exposure" class="exposure"><i class="iconfont icon-yanjing"></i>{{ article.saw }}</span>
            </div>
            <Button type="primary" :loading="false" size="small"></Button>
        </div>
    </div>
</template>

<script setup lang="ts">
import Button from '@/components/h/button/index.vue';
import type { ArticleType } from '@/types/index.d.ts';
import type { Ref } from 'vue';
import { ref } from 'vue';
type Props = {
    article: ArticleType;
};

const { article } = defineProps<Props>();
const emits = defineEmits(['entry']);
console.log(article,'article');
const handler = function (evt: Event) {
    if(evt.target instanceof HTMLSpanElement){
        handlerLike(evt);
        return;
    }
    emits('entry', article);
};

const isLike:Ref<boolean> = ref(false);
const handlerLike = (evt: Event) => {
    console.log(evt);
    isLike.value = !isLike.value;
};
</script>

<style scoped lang="less">
.article-item {
    margin: 20px 0;
    padding: 10px;
    border-radius: 4px;
    box-shadow: 0 0 08px 2px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    .title {
        font-size: 18px;
        color: #2a2a2a;
    }
    .content {
        margin: 10px 0;
        font-size: 12px;
        color: var(--color-text);
    }
    .article-footer {
        display: flex;
        align-items: center;
        .tags {
            .tag {
                margin: 0 4px;
                padding: 4px;
                border-radius: 4px;
                background-color: #d5d5d5;
            }
        }
        .operation-bar {
            margin-left: auto;
            span {
                margin: 0 4px;
                i {
                    font-size: 13px;
                }
            }
        }
    }
}
</style>
