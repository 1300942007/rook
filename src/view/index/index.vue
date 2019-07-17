<template>
    <div class="app-box">
        <base-head>
            <div slot="head-left">广州<i class="icon icon-jiantou"></i></div>
            <div slot="head-right" ><i class="icon icon-jia"></i></div>
        </base-head>
        <temp-index-main
            :swiperData="swiperData"
        ></temp-index-main>

        <base-foot :foot-data="footData"></base-foot>
    </div>
</template>

<script>
import TempIndexMain from "./index/tempMain";

export default {
    name: 'IndexIndex',
    components: {TempIndexMain},
    data () {
        return {
            swiperData: [
                '/static/img/1.png',
                '/static/img/1.png',
                '/static/img/1.png',
            ],
            footData: [
                {title: '首页', class: 'foot-active', icon: 'icon-shouye', url: null},
                {title: '附近店', icon: 'icon-dianpufill', url: null},
                {title: '购物车', icon: 'icon-yduigouwuchexuanzhong', url: null},
                {title: '我的', icon: 'icon-gerenzhongxin', url: null},
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
@import '__ASS__/css/fun.scss';
.app-box /deep/ .head-box{
    background: none;
    padding: appRem(20px) appRem(25px);
    .head-left{
        border-radius: appRem(30px);
        background: rgba(88, 61, 151, 0.7);
        color: #ffffff;
    }
    .head-right{
        width: appRem(60px);
        padding: 0;
        border-radius: 50%;
        background: rgba(88, 61, 151, 0.7);
        color: #ffffff;
    }
}
</style>
