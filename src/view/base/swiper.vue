<template>
    <swiper class="swiper-box" :options="swiperOption">
        <!-- slides -->
        <swiper-slide v-for="(val, key) in swiperData" :key="key">
            <img class="img" :src="val">
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css"
export default {
    name: 'BaseSwiper',
    components: {
        swiper,
        swiperSlide
    },
    props: {
        swiperData: {
            type: Array,
            default: () => ([])
        },
        swiperOption: {
            type: [Object],
            default: ()=>({
                pagination: '.swiper-pagination',
                autoplay : 2000,
                autoplayDisableOnInteraction : false,
            })
        }
    },
}
</script>

<style scoped>
.swiper-box{
    width: 100%;
    height: 100%;
    overflow: hidden;
}
</style>