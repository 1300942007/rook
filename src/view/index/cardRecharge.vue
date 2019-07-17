<template>
    <div class="app-box">
        <temp-card-recharge
                :page-data="pageData"
                :swiper-data="swiperData"
            @pageBack="''"
        ></temp-card-recharge>
    </div>
</template>

<script>
    import TempCardRecharge from "./cardRecharge/tempRecharge";
    export default {
        name: "IndexCardRecharge",
        components: {TempCardRecharge},
        data () {
            return {
                pageData: [
                    {'img': '/static/img/card1.png', 'title': '中国石油', brief:'首充3000元，不限量', 'discount': '9.4折'},
                    {'img': '/static/img/card2.png', 'title': '中国石化', brief:'首充3000元，不限量', 'discount': '9.5折'},
                ],
                swiperData: [
                    '/static/img/card3.png'
                ],
            }
        }
    }
</script>

<style scoped>

</style>