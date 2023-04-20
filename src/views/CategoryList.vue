<template>
    <div>
        <header>
            <img src="@/assets/img/chevron-back-outline.svg" alt="back" class="svg-color-vue" @click="$router.go(-1)">
        </header>
        <div class="content">
            <div class="content-title">
                <span>{{ pageTitle }}</span>
            </div>
            <div class="item" v-for="(item,index) in pageList" :key="index">
                <van-card v-for="i in item" :price="i.price" :desc="i.classification" :title="i.title"
                    :thumb="i.imgUrl" currency="$" @click="productHandler(i.title)">
                </van-card>
            </div>
        </div>
    </div>
</template>

<script>
import router from '@/router'
import axios from 'axios'
import { ref, onBeforeMount } from 'vue'
import { useRoute } from 'vue-router'
export default {
    setup() {
        let pageTitle = ref('')
        const route = useRoute()
        let pageList = ref([])
        /**
         * methods
         */
        const productHandler=(title)=>{
            router.push({path:'/product',query:{title}})
        }
        /**
         * hooks
         */
        onBeforeMount(async () => {
            pageTitle.value = route.query.name
            try {
                const response = await axios({
                    url: '/api/category/detailList',
                    method: 'post',
                    data: {
                        name: pageTitle.value
                    }
                })
                pageList.value = response.data;
            } catch (error) {
                console.log(error.message)
            }
        })
        return {
            pageTitle,
            pageList,
            productHandler,
        }
    }
}
</script>

<style lang="less" scoped>
.svg-color-vue {
    filter: invert(84%) sepia(16%) saturate(1501%) hue-rotate(90deg) brightness(89%) contrast(82%);
}

header {
    position: fixed;
    top: 0;

    img {
        width: 40px;
    }
}

.content {
    margin-block-start: 50px;
    .content-title{
        display: flex;
        justify-content: center;
        span{
            font-size: 25px;
            font-weight: bold;
        }
    }
}
</style>