<template>
    <header>
        <div class="backArrow" @click="$router.go(-1)">
            <img src="@/assets/img/chevron-back-outline.svg" alt="back">
        </div>
        <div class="search">
            <img src="@/assets/img/search-outline.svg" alt="search">
            <input type="input" v-model="newKeyWord" @keyup.enter="onEnterPress">
        </div>
        <div class="support">
            <img src="@/assets/img/chatbubbles-outline.svg" alt="support">
        </div>
    </header>
    <section class="message">
        <div class="title">
            <h3>Search Results</h3>
        </div>
        <div class="detail">
            <span>
                {{ searchResult.length }} result(s)
            </span>
        </div>
    </section>
    <article class="result" v-for="(item) in searchResult" :key="item.id" @click="productPage(item.title)">
        <figure>
            <a>
                <img :src="item.imgUrl">
            </a>
        </figure>
        <div class="result-detail">
            <p class="result-title">{{ item.title }}</p>
            <p class="price">${{ item.price }}</p>
        </div>
    </article>
</template>

<script>
import { ref, onBeforeMount } from 'vue'
import { useRoute } from 'vue-router'
import router from '@/router'
import axios from 'axios'
export default {
    setup() {
        let searchKeyWord = ref('')
        let newKeyWord = ref('')
        let searchResult = ref([])
        const route = useRoute()
        searchKeyWord = route.query.q
        const onEnterPress = async () => {
            const response = await axios({
                url: '/api/goods/shopList', params: {
                    searchName: newKeyWord.value
                }
            })
            searchResult.value = response.data.data
            // console.log(searchResult.value);
        }

        const productPage = (title)=>{
            router.push({path:'/product',query:{title}})
        }
        onBeforeMount(async () => {
            const response = await axios({
                url: '/api/goods/shopList', params: {
                    searchName: route.query.q
                }
            })
            searchResult.value = response.data.data
            console.log(searchResult.value);
        })
        return {
            searchKeyWord,
            newKeyWord,
            searchResult,
            onEnterPress,
            productPage,
        }
    }
}
</script>

<style lang="less" scoped>
header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 1.3rem;
    background-color: rgb(74, 210, 148);
    display: flex;
    justify-content: space-around;
    align-items: center;
    z-index: 99;

    .backArrow {
        width: .7111rem;
        display: flex;
        justify-content: center;

        img {
            width: .7111rem;
            height: .7111rem;
        }
    }

    .search {
        width: 4rem;
        display: flex;
        background-color: #fff;
        border-radius: 15px;

        img {
            display: block;
            width: .4rem;
        }

        input {
            width: 3.5rem;
            outline: none;
            border: none;
            height: 0.7rem;
            border-radius: 0 15px 15px 0;
        }
    }

    .support {
        display: flex;
        align-content: center;

        img {
            width: .7111rem;
            height: .7111rem;
        }
    }
}

.message {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 2rem;
    background-color: rgb(248, 247, 242);
    margin-block-start: 1.3rem;
    .title {
        font-size: .5333rem;
    }
}

.result {
    display: flex;
    flex-direction: row;
    width: 100%;
    gap: 0.35rem;
    border-top: 1px solid #e1e1e1;
    a {
        height: 2.2rem;
        display: flex;
        align-items: center;
    }

    figure {
        width: 2rem;
        display: flex;
        justify-content: center;

        img {
            width: 1.5rem;
        }
    }

    .result-detail {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 90%;
    }
}
</style>