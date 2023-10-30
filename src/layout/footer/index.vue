<template>
    <div class="footer">
        <div class="footer-container">
            <div class="description">个人博客</div>
            <div class="filings">
                <a href="#">服务协议</a><a href="#">隐私政策</a>
                <span
                    ><a href="https://beian.miit.gov.cn/#/Integrated/index" target="_blank" rel="noopener noreferrer"
                        >赣ICP备2023007216号</a
                    ></span
                >
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
