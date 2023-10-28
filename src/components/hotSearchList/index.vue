<template>
    <div class="hot-word">
        <div class="hot-word-title">热搜榜</div>
        <div class="hot-word-item"><i class="iconfont icon-hot first"></i>人工智能</div>
        <div class="hot-word-item"><i class="iconfont icon-hot second"></i>云计算</div>
        <div class="hot-word-item"><i class="iconfont icon-hot third"></i>大数据</div>
        <div class="hot-word-item"><i class="number">4</i>数字孪生</div>
        <div class="hot-word-item"><i class="number">5</i>前端</div>
        <div class="hot-word-item"><i class="number">6</i>前端</div>
        <div class="hot-word-item"><i class="number">7</i>前端</div>
        <div class="hot-word-item"><i class="number">8</i>前端</div>
        <div class="hot-word-item"><i class="number">9</i>前端</div>
        <div class="hot-word-item"><i class="number last">10</i>前端</div>
    </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="less">
        .hot-word {
            padding: 10px;
            border-radius: 4px;
            box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.2);
            .hot-word-item {
                margin: 10px 0;
                border-bottom: 1px solid #ccc;
                .first {
                    color: #f00;
                }
                .second {
                    color: #fc3131;
                }
                .third {
                    color: #ff6a6a;
                }
                .number {
                    margin: 0 4px;
                    font-style: normal;
                    color: #ffb4b4;
                    &.last {
                        margin-left: 0px;
                        margin-right: 1px;
                    }
                }
            }
        }
</style>
