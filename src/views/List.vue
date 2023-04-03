<template>
    <div>
        <section>
            <div class="select-left">
                <ul>
                    <li v-for="(item, index) in categoryMenuList.menuList" :key="index" @click="menuClick(index)" :class="{active:index==pageIndex}">
                        <span>{{ item.name }}</span>
                    </li>
                </ul>
            </div>


            <div class="select-right">
                <div class="right-wrap" v-for="(item, index) in categoryMenuList.menuList" :key="index">
                    <div class="wrap-title">
                        <span>{{ item.name }}</span>
                    </div>
                    <div class="wrap-container">
                        <div class="wrap-detail" v-for="(k, i) in item.details" :key="i">
                            <a href="">
                                <figure>
                                    <img :src="k.imgUrl">
                                </figure>
                                <div class="detail-span">
                                    <span>{{ k.name }}</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <TabBar></TabBar>
    </div>
</template>

<script>
import TabBar from '@/components/common/TabBar.vue'
import { ref, onMounted ,onUnmounted} from 'vue'
import axios from 'axios'
export default {
    name: "List",
    components: { TabBar },
    setup() {
        let categoryMenuList = ref([])
        let categoryListDetails = ref([])
        let pagePosition = ref(0)
        let pageIndex =ref(0)
        const screenLocation = [0,390,770,990,1370,1720,2083]
        const requestCategoryInfo = async () => {
            try {
                const response = await axios({ url: '/api/category/menuList' })
                //category data
                categoryMenuList.value = await response.data

                console.log(categoryMenuList.value);
            } catch (error) {
                console.log(error.message)
            }
        }

        const menuClick = (index) => {
            console.log(index)
            window.scrollTo(0,screenLocation[index])
        }

        const pagePositionHandler = ()=>{
            pagePosition = window.pageYOffset
            console.log(pagePosition);
            if(pagePosition>=0 && pagePosition<390) pageIndex.value =0
            else if (pagePosition>=390 && pagePosition<770) pageIndex.value=1
            else if (pagePosition>=770 && pagePosition<990) pageIndex.value=2
            else if (pagePosition>=990 && pagePosition<1350) pageIndex.value=3
            else if (pagePosition>=1350 && pagePosition<1420) pageIndex.value=4
            else if (pagePosition>=1720 && pagePosition<1950) pageIndex.value=5
            else if (pagePosition>=1950 ) pageIndex.value=6
        }

        onMounted(() => {
            requestCategoryInfo()
            window.addEventListener('scroll',pagePositionHandler)
        })
        onUnmounted(() => {
            window.removeEventListener('scroll',pagePositionHandler)
        })
        return {
            categoryMenuList,
            categoryListDetails,
            menuClick,
            pageIndex
        }
    }
}
</script>

<style lang="less" scoped>

section {
    display: flex;
    flex: 1;
    overflow: hidden;
}

.select-left {
    background-color: rgb(248, 247, 242);
    width: 1.7rem;
    height: 100vh;
    display: flex;
    justify-content: center;
    position: fixed;
    li {
        height: 1.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        font-size: .2222rem;

        span {
            font-size: .2222rem;
            font-weight: bold;
        }

        &.active {
            color: rgb(74, 210, 148);
            background-color: #fff;
        }
    }
}

.select-right {
    height: 2750px;
    width: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    margin-left: 1.7rem;
    .right-wrap {
        display: flex;
        flex-direction: column;
        margin-top: 0.8rem;
        
        .wrap-title {
            text-align: center;
            font-size: .4444rem;
            font-weight: bold;
        }

        .wrap-container {
            display: flex;
            flex-wrap: wrap;
            // justify-content: space-between;

            gap: .3333rem;
            margin-top: 0.33rem;
            margin-left: .1778rem;

            .wrap-detail {

                figure {
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    img {
                        width: 1.4444rem;
                    }
                }

                .detail-span {
                    display: flex;
                    margin-top: 10px;
                    height: 1rem;
                    justify-content: center;
                    align-items: center;
                    text-align: center;
                    font-size: .2667rem;
                    width: 1.55rem;

                    span {
                        overflow: hidden;
                    }
                }
            }
        }
    }
}</style>