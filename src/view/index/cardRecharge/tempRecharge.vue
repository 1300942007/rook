<template>
    <base-scroll class="main-box">
        <base-swiper
            :swiper-data="swiperData"
        ></base-swiper>
        <div class="recharge-box">
            <div class="recharge-title">专属充值卡</div>
            <div class="list-box">
                <div class="list-line">
                    <div class="line-left">
                        <div class="line-img list-img-radius list-img-border">
                            ?
                        </div>
                        <div class="line-box">
                            你还没绑定专属加油卡
                        </div>
                    </div>
                    <base-link class="line-right">去绑定<i class="icon icon-arrow-right"></i></base-link>
                </div>
            </div>
            <div class="list-text3">
                <div v-for="(val, key) in rechargeData" :key="key" class="list-line" @click="priceBack($event, val.price, key)">
                    <div :class="'line-text-border '+ val.active" >
                        {{val.price}}元
                    </div>
                </div>
            </div>
            <div class="recharge-button" ref="submit" >
                立即充值
            </div>
        </div>
        <div class="recharge-box" style="margin-top: 10px">
            <div class="recharge-title">申请专属卡</div>
            <div class="recharge-sub-title" style="color: #999999">即时到账，全国通用，不限油品</div>
            <div class="list-select">
                <div v-for="(val, key) in cardData" :key="key" :class="'list-line ' + val.active" @click="cardBack(key,key)">{{val.title}}</div>
            </div>
            <div class="list-box">
                <div class="list-line" v-for="(val, key) in pageData" style="background: #f9f9f9">
                    <div class="line-left">
                        <div class="line-img list-img-radius card-img">
                            <img class="img" :src="val.img">
                        </div>
                        <div class="line-box">
                            <div class="line-title">{{val.title}}<span class="card-title-color">{{val.discount}}</span>加油卡</div>
                            <div class="line-brief">{{val.brief}}</div>
                        </div>
                    </div>
                    <base-link class="line-right"><i class="line-button icon icon-arrow-right"></i></base-link>
                </div>
            </div>
        </div>
        <div class="card-p" >
            客户电话：020-87558877<base-link>&nbsp;&nbsp;说明</base-link>
        </div>
    </base-scroll>
</template>

<script>
    import BaseSwiper from "../../base/swiper";
    export default {
        name: "TempCardRecharge",
        components: {BaseSwiper},
        props: {
            swiperData: {
                type: Array,
                default: () => ([])
            },
            pageData: {
                type: Array,
                default: () => ([])
            }
        },
        data () {
            return {
                rechargeData: [
                    {price: '500', active: ''},
                    {price: '1000', active: ''},
                    {price: '3000', active: ''},
                ],
                cardData: [
                    {title: '基础会员', active: 'list-line-active'},
                    {title: '标准会员', active: ''},
                    {title: '普通会员', active: ''},
                ]
            }
        },
        methods: {
            priceBack (e, price, key) {
                for (var i in this.$data.rechargeData) {
                    this.$data.rechargeData[i].active = key == i ? 'line-text-active' : ''
                }
                this.$refs.submit.classList.add('recharge-button-active')
            },
            cardBack (price, key) {
                for (var i in this.$data.cardData) {
                    this.$data.cardData[i].active = key == i ? 'list-line-active' : ''
                }
                return this.$emit('cardBack', price)
            }
        }
    }
</script>

<style lang="scss" scoped>
@import '__ASS__/css/fun.scss';
.main-box{
    background: #f2f2f2;
}
.recharge-box{
    background: #FFFFFF;
    padding: appRem(25px) appRem(20px);
    .recharge-title{
        font-size: appRem(35px);
        font-weight: bold;
        padding: appRem(25px) 0;
    }
    .recharge-button{
        width: 100%;
        padding: appRem(25px) 0;
        border-radius: appRem(50px);
        display:inline-flex;
        justify-content: center;
        align-items: center;
        background: #cccccc;
        color: #FFFFFF;
        margin: appRem(25px) 0;
        &.recharge-button-active{
            background: #3194fb;
        }
    }
    .card-img{
        margin: 0 0 0 appRem(20px);
    }
    .card-title-color{
        color: #ff0000;
        margin: 0 appRem(10px);
    }
}
.card-p{
    height: appRem(180px);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #999999;
}
</style>