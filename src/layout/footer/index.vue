<template>
    <div class="footer">
        <div class="footer-container">
            <div class="description">个人博客</div>
            <div class="filings">
                <a href="#">服务协议</a><a href="#">隐私政策</a><span>浙ICP备2022000356号-3</span
                ><span>浙公网安备 33011002011859号</span>
            </div>

            <!-- <div class="friendly-links">
                    <h5>友情链接</h5>
                    <a href="https://www.iconfont.cn/manage/index?manage_type=myprojects&projectId=2580750">iconfont</a>
                </div> -->
            <div class="contact">
                <i class="iconfont icon-weibo"></i>
                <i class="iconfont icon-weixin"></i>
                <!-- <i class="iconfont icon-weibo"></i> -->
            </div>
        </div>
    </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="less">
.footer {
    color: #fff;
    background-color: #1e1e1e;
    .footer-container {
        margin: 0 10%;
        display: flex;
        align-items: center;
        .left {
            .description {
            }
        }
        .filings {
            margin: 0 auto;
            a,
            span {
                color: #fff;
                margin: 0 4px;
            }
        }
        .contact {
            i {
                margin-left: 0 8px;
            }
        }
    }
}
</style>
