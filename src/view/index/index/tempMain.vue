<template>
    <base-scroll class="main-box main-margin-bottom">
        <div class="scroll-box">
            <base-swiper
                    :swiper-data="swiperData"
            ></base-swiper>
        </div>
        <base-link class="index-alert">
            <i class="">+</i>
            添加你的爱车，享受精准服务推荐，实时违章提醒！
        </base-link>
        <div class="list-icon5 index-menu">
            <base-link class="list-line" v-for="(val, key) in menuData" :key="key" :link="val.url">
                <div class="line-icon80">
                    <img class="img" :src="val.icon">
                </div>
                <div class="line-title">{{val.title}}</div>
            </base-link>
        </div>
        <div class="list-img2">
            <base-link class="list-line" v-for="(val, key) in menuData2" :key="key" :link="val.url">
                <div class="line-icon">
                    <img class="img" :src="val.icon">
                </div>
                <div class="line-float">
                    <div class="line-title">{{val.title}}</div>
                    <div class="line-text" v-if="val.price">
                        <span>{{val.price}}</span>
                        <span class="index-price">元起</span>
                    </div>
                </div>
            </base-link>
        </div>
        <div class="index-advert">
            养肝护肝，解酒醒酒珍藏品 — 芙蓉宝
        </div>
    </base-scroll>
</template>

<script>
    import BaseSwiper from "__VIEW__/base/swiper";
    export default {
        name: "TempIndexMain",
        components: {BaseSwiper},
        props: {
            swiperData: {
                type: Array,
                default: () => ([])
            }
        },
        data () {
            return {
                menuData: [
                    {title: '油卡充值', icon: '/static/img/icon1.png', url: '/index/cardRecharge'},
                    {title: '查违缴费', icon: '/static/img/icon2.png', url: null},
                    {title: '特惠车险', icon: '/static/img/icon3.png', url: null},
                    {title: '代驾停车', icon: '/static/img/icon4.png', url: null},
                    {title: '车帮合伙人', icon: '/static/img/icon5.png', url: null},
                    {title: '养护快修', icon: '/static/img/icon6.png', url: null},
                    {title: '车品汽配', icon: '/static/img/icon7.png', url: null},
                    {title: '生活服务', icon: '/static/img/icon8.png', url: null},
                    {title: '精品优选', icon: '/static/img/icon9.png', url: null},
                    {title: '更多分类', icon: '/static/img/icon10.png', url: null}
                ],
                menuData2: [
                    {title: '钣金喷漆特惠套餐', price: '298',icon: '/static/img/icon1-1.png', url: null},
                    {title: '大小保养套餐', icon: '/static/img/icon1-2.png', url: null},
                    {title: '特惠品牌车轮胎专场', price: '298', icon: '/static/img/icon1-3.png', url: null},
                    {title: '特惠机油专场', icon: '/static/img/icon1-4.png', url: null},
                ],

            }
        }
    }
</script>

<style src="__ASS__/css/index.scss" lang="scss" scoped>

</style>