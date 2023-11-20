<template>
    <div>
        <!-- people desc card -->
        <div class="desc-card">
            <div class="avatar">
                <img src="@/assets/vue.svg" alt="" />
            </div>
            <div class="self-introduction">
                <div class="self">
                    <span class="username">英语角</span>
                    <span class="description">这个人很懒，什么也没留下</span>
                </div>
                <div class="introduction-item">
                    <span class="introduction-tip-word">职业经历</span>
                    <span class="introduction-word">打工人</span>
                </div>
                <div class="introduction-item">
                    <span class="introduction-tip-word">教育经历</span>
                    <span class="introduction-word">学校</span>
                </div>
                <div class="introduction-item">
                    <span class="introduction-tip-word">个人简介</span>
                    <span class="introduction-word">这个人很懒，什么也没留下</span>
                </div>
            </div>
        </div>

        <!-- exhibition -->
        <div class="exhibition">
            <div class="left-text-exh">
                <div class="title">
                    <div class="title-item" v-for="item in exhibitionArr" :key="item">
                        <span>{{ item }}</span>
                        <span class="num">10</span>
                    </div>
                </div>
                <div class="content">
                    <div class="ariticle-item">
                        <Article v-for="article in articles" :key="article.title" :article="article"></Article>
                    </div>
                </div>
            </div>
            <div class="right-data-exh">
                <!-- 文章数据 -->
                <div class="data-exh-card card">
                    <div class="data-details">
                        <div class="data-detail-item">
                            <p>今日阅读(播放)数</p>
                            <p class="num">20</p>
                            <p>昨日数据 <i class="last-num">3</i></p>
                        </div>
                        <div class="divider"></div>
                        <div class="data-detail-item">
                            <p>今日新增赞同数</p>
                            <p class="num">20</p>
                            <p>昨日数据 <i class="last-num">3</i></p>
                        </div>
                    </div>
                    <div class="create">
                        <button @click="handlerToCreateWorks">去创作</button>
                    </div>
                </div>

                <!-- 个人成就 -->
                <div class="achieve-exh-card card">
                    <h3>个人成就</h3>
                    <div class="achieve-exh-item">
                        <p>获得18次赞同</p>
                        <p>
                            <span>获得17次喜欢</span>
                            <span>获得17次收藏</span>
                        </p>
                    </div>
                </div>
                <div class="achieve-exh-interaction card">
                    <div>
                        关注了
                        <p class="num">10</p>
                    </div>
                    <div class="divider"></div>
                    <div>
                        关注者
                        <p class="num">20</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- left menu -->

        <!-- right exhibition -->
    </div>
</template>

<script setup lang="ts">
import Article from '@/components/article/index.vue';
import { useRouter } from 'vue-router';
import type { ArticleType } from '@/types';
const router = useRouter();
const articles: ArticleType[] = [
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
const exhibitionArr = ['动态', '文章', '专栏', '想法', '视频', '互动', '收藏', '关注'];
console.log(exhibitionArr);

const handlerToCreateWorks = function(){
    router.push('/edit')
}
</script>

<style scoped lang="less">
.desc-card {
    margin-top: 10px;
    padding: 0 10px;
    display: flex;
    align-items: center;
    height: 150px;
    border-radius: 4px;
    box-shadow: 0 0 8px 0px rgba(0, 0, 0, 0.3);
    .avatar {
        margin-right: 10px;
        img {
            width: 80px;
            height: 80px;
            border-radius: 8px;
        }
    }
    .self-introduction {
        .self {
            .username {
                font-size: 24px;
                font-weight: 600;
            }
            .description {
                margin-left: 4px;
                font-size: 13px;
                color: #494949;
            }
        }
        .introduction-item {
            .introduction-tip-word {
                font-size: 14px;
                font-weight: 600;
                margin-right: 20px;
            }
            .introduction-word {
                font-size: 13px;
                color: #494949;
            }
        }
    }
}

.exhibition {
    margin: 10px 0;
    padding: 10px;
    display: flex;
    gap: 10px;
    box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.3);
    border-radius: 4px;
    .left-text-exh {
        flex: 4;
        .title {
            display: flex;
            justify-content: space-around;
            align-items: center;
            padding-bottom: 5px;
            border-bottom: 2px solid #d8d8d8;
            .title-item {
                font-size: 16px;
                font-weight: 550;
                .num {
                    margin-left: 4px;
                    font-size: 13px;
                    color: #494949;
                    font-weight: normal;
                }
            }
        }
    }
    .right-data-exh {
        flex: 1;
        .card {
            margin-bottom: 10px;
            padding: 5px;
            border-radius: 4px;
            box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.3);
        }
        .data-exh-card {
            .data-details {
                display: flex;
                align-items: center;
                justify-content: space-around;
                text-align: center;
                background-color: rgba(132, 147, 165, 0.05);
                border-radius: 4px;
                .data-detail-item {
                    font-size: 12px;
                    .num {
                        font-size: 13px;
                        font-weight: 550;
                        color: #494949;
                    }
                    .last-num {
                        font-style: normal;
                        font-weight: 550;
                        color: #494949;
                    }
                }
            }
            .create {
                button {
                    width: 100%;
                }
            }
        }

        .achieve-exh-card {
            h3 {
                margin-bottom: 5px;
                font-size: 18px;
                padding: 8px 0;
                border-bottom: 1px solid #494949;
            }
        }
        .achieve-exh-interaction {
            display: flex;
            justify-content: space-around;
            align-items: center;
            text-align: center;

            .num {
                font-size: 15px;

                color: #494949;
                font-weight: 550;
            }
        }
    }
}

.divider {
    margin: 0 10px;
    width: 1px;
    height: 50px;
    background-color: rgba(132, 147, 165, 0.1);
}
</style>
