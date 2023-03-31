<template>
    <div>
        <Header></Header>
        <div class="fun-tab">
            <fun-tabs v-model="selectedId" activeColor="#4AD294" @change="handleTabsChange">
                <fun-tab-item v-for="(item) in funTabList" :name="item.id" :title="item.title" />
            </fun-tabs>
        </div>
        <div v-for="(item,index) in pageContent" :key="index">
            <section class="swiper">
                <Swiper 
                v-if="item[0].type=='swiperList'"
                :swiperList = 'item[0].data'
                ></Swiper>
            </section>
            <Icons 
            v-if="item[1].type=='iconList'"
            :iconList = 'item[1].data'
            ></Icons>

            <SortCard
            v-if="item[2].type =='sortCardMessage'"
            :sortCardMessage = 'item[2].data'
            ></SortCard>

            <Recommend 
            v-if="item[3].type=='recommendList'"
            :recommendList = 'item[3].data'
            ></Recommend>
            <!-- <Classfication></Classfication> -->
        </div>
        <!-- footer -->
        <TabBar></TabBar>
    </div>
</template>

<script>
import TabBar from '@/components/common/TabBar.vue'
import Header from '@/components/home/Header.vue'
import Swiper from '@/components/home/Swiper.vue'
import Icons from '@/components/home/Icons.vue'
import Recommend from '@/components/home/Recommend.vue'
import SortCard from '@/components/common/SortCard.vue'
import Classfication from '@/components/home/Classfication.vue'
import { ref, reactive, onBeforeMount, onUpdated } from 'vue'
/**
 * fun tab plugin
 */
import { FunTabs, FunTabItem } from 'fun-tab';
/**
 * axios
 */
import axios from 'axios'
export default {
    name: "Home",
    components: { TabBar, Header, Swiper, Icons, Recommend, SortCard, Classfication },
    setup() {
        let selectedId = ref(1)
        let funTabList = ref([])
        let pageContent = reactive({})
        const handleTabsChange = (value) => {
            console.log('FunTabs change:', value)
            //
            requestHomePage(value)
        }

        const requestHomePage = async (value) => {
            try {
                const response = await axios({ url: '/api/index_list/home/'+(value?value:1) })
                //page content
                pageContent.value = await response.data.page
            } catch (error) {
                console.log(error.message)
            }
        }
        const requestTabBarInfo = async()=>{
            try {
                const response = await axios({ url: '/api/index_list/tapBar/' })
                 //tapBar
                funTabList.value = await response.data.tapBar
                
            } catch (error) {
                console.log(error.message)
            }
        }
        onBeforeMount(() => {
            //request home page data
            requestTabBarInfo()
            requestHomePage()
        })
        onUpdated(() => {
            window.scrollTo(0,0)
        })

        return {
            selectedId,
            funTabList,
            pageContent,
            handleTabsChange
        }
    }
}
</script>

<style lang="less" scoped>
.fun-tab {
    top: 1.3rem;
    position: fixed;
    width: 100%;
    cursor: pointer;
    z-index: 9;
}

.swiper {
    margin-block-start: 2.2rem;
    width: 100%;
}
</style>