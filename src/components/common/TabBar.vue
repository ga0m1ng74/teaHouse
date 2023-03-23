<template>
    <div class="tabbar">
        <ul>
            <li v-for="(item, index) in routerList" :key="index" @click="switchTab(item.path)">
                <div class="footerImg">
                    <img :src="routerLogic.includes(item.path) ? item.slected : item.active">
                </div>
                <div class="footerSpan">
                    <span>{{ item.title }}</span>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
export default {
    name: "TabBar",
    setup() {
        let routerList = reactive([{
            title: 'Home',
            path: '/home',
            active: '../src/assets/img/home-outline.svg',
            slected: '../src/assets/img/home.svg',
        }, {
            title: 'Category',
            path: '/list',
            active: '../src/assets/img/list-outline.svg',
            slected: '../src/assets/img/list.svg',
        }, {
            title: 'Cart',
            path: '/cart',
            active: '../src/assets/img/cart-outline.svg',
            slected: '../src/assets/img/cart.svg',
        }, {
            title: 'My',
            path: '/my',
            active: '../src/assets/img/person-outline.svg',
            slected: '../src/assets/img/person.svg',
        }
        ])
        const router = useRouter()
        const routerLogic = router.currentRoute.value.path
        var switchTab = (path) => {
            // console.log(router.currentRoute.value.path);
            if (router.currentRoute.value.path == path) return
            router.push(path)
        }





        return {
            routerList,
            switchTab,
            routerLogic
        }
    }
}
</script>

<style lang="less" scoped>
.tabbar {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 54px;
    background-color: #fff;
    z-index: 9;

    ul {
        display: flex;
        padding-top: 6px;

        li {
            width: calc(100%/4);
            display: flex;
            flex-direction: column;
            outline: 1px solid #ccc;

            img {
                width: 28px;
                height: 28px;
            }

            span {
                font-size: 14px;
            }

            .footerImg,
            .footerSpan {
                display: flex;
                flex: content;
                justify-content: center;
            }
        }
    }

}
</style>