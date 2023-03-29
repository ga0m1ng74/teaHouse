<template>
    <div>
        <swiper :pagination="true" :modules="modules" :autoplay="true" class="Swiper">
            <swiper-slide class="swiper-slide" v-for="(item) in swiperList" :key="item.id">
                <img :src="item.imgUrl">
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper';

/**
 * Import from vue
 */
import { reactive, onBeforeMount } from 'vue'
export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    props: ['swiperList'],
    setup(props) {
        // const swiperList = reactive([
        //     {
        //         id:1,
        //         imgUrl:'./img/English-Breakfast-Black-Tea.webp'
        //     },
        //     {
        //         id:2,
        //         imgUrl:'./img/Traditional_Black.webp'
        //     },
        //     {
        //         id:3,
        //         imgUrl:'./img/Ceylon_Highgrown.jpeg'
        //     },
        // ])
        onBeforeMount(() => {

        })

        return {
            modules: [Pagination, Autoplay],
            
        };
    }
}
</script>

<style lang="less" scoped>
.Swiper {
    width: 100%;
    height: 4rem;

    .swiper-slide {
        text-align: center;
        font-size: 18px;
        // background-color: lavender;

        /* Center slide text vertically */
        display: flex;
        justify-content: center;
        align-items: center;

        img {
            display: block;
            height: 100%;
            object-fit: cover;
        }
    }

    --swiper-pagination-color: #4AD294;
}
</style>