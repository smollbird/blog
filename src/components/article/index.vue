<template>
    <div class="article-item" @click="handler">
        <h4 class="title">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h4>
        <p class="content">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat molestias nihil quasi optio maiores
            incidunt inventore omnis ut exercitationem sapiente, provident facere sequi magnam tempore cum aut iste sunt
            nesciunt.
        </p>
        <div class="article-footer">
            <div class="tags">
                <!-- <i class="iconfont icon-huati"></i> -->
                <span class="tag">html</span>
                <span class="tag">css</span>
                <span class="tag">javascript</span>
            </div>
            <div class="operation-bar">
                <span class="like"><i class="iconfont icon-aixin"></i>10</span>
                <span class="comment"><i class="iconfont icon-pinglun"></i>20</span>
                <span class="exposure"><i class="iconfont icon-yanjing"></i>30</span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import type { Article } from '@/types/index.d.ts';
const router = useRouter();
type Props{
    article:Article;
}
const props = defineProps<Props>();
const emits = defineEmits('entry');

const handler = () => {
    emits('entry',props.article)
    router.push('/detail')
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
