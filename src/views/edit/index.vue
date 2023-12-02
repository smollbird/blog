<template>
    <div>
        <!-- 文本编辑区 -->
        <Editor></Editor>

        <hDivider />

        <!-- 文章设置 -->
        <div class="chapter-setting">
            <div class="cover">
                <span>封面设置：</span>
                <div class="upload-cover">
                    <img src="" alt="" />
                </div>
            </div>

            <div class="special-column">
                <span>专栏收录：</span>
                收录/ 不收录

                <p class="desc">将收录于文章中</p>
            </div>
        </div>
        <!-- footer 发布相关 -->
        <div class="release-setting">
            <div class="to-top">回到顶部</div>
            <div class="cal-words-num">字数：<span>0</span></div>
            <div class="save">
                草稿已保存/草稿保存中...
            </div>
            <div class="operation">
                <hSpace>
                    <hButton type="default">预览</hButton>
                    <hButton type="primary">更新</hButton>
                </hSpace>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import Editor from '@/components/h/editor/index.ts';
import hDivider from '@/components/h/divider/index.vue';
import hButton from '@/components/h/button/index.vue';
import hSpace from '@/components/h/space/index.vue';
</script>

<style scoped lang="less">
.release-setting {
    display: flex;
    align-items: center;
    margin: 20px 0;
    .cal-words-num {
        margin: 0 auto 0 30px;
    }
    .save{
        margin-right: 30px;
    }
}
</style>
