<template>
    <div class="editor">
        <div class="operation">
            <template v-for="item in operator" :key="item">
                <hDivider v-if="item === 'divider'" direction="vertical"></hDivider>
                <hButton style="padding: 0 2px" v-else>{{ item }}</hButton>
            </template>
        </div>
        <div class="content" ref="editor" contenteditable></div>
    </div>
</template>

<script setup lang="ts">
import hDivider from '../../divider/index.vue';
import hButton from '../../button/index.vue';
import { onMounted, ref } from 'vue';
import type { Ref } from 'vue';

const editor: Ref<HTMLDivElement | null> = ref(null);

onMounted(() => {

});

const operator = [
    'undo',
    'redo',
    'clear',
    'divider',
    'title',
    'weight',
    'italic',
    'divider',
    'list',
    'cate',
    'quote',
    'separate',
    'code',
    'node',
    'divider',
    'image',
    'video',
    'link',
    'table'
];
</script>

<style scoped lang="less">
.editor {
    margin: 10px 0;
    min-height: 400px;
    // border: 1px solid #f0f;
    .operation {
        // display: flex;
        align-items: center;
        // gap: 5px;
    }
    .content {
        border: 1px solid #f00;
        min-height: 350px;
    }
}
</style>
