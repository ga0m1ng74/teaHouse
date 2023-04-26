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
            active: '/img/icons/home-outline.svg',
            slected: '/img/icons/home.svg',
        }, {
            title: 'Category',
            path: '/list',
            active: '/img/icons/grid-outline.svg',
            slected: '/img/icons/grid.svg',
        }, {
            title: 'Cart',
            path: '/cart',
            active: '/img/icons/cart-outline.svg',
            slected: '/img/icons/cart.svg',
        }, {
            title: 'Me',
            path: '/me',
            active: '/img/icons/person-outline.svg',
            slected: '/img/icons/person.svg',
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
    height: 1rem;
    background-color: #fff;
    z-index: 99;

    ul {
        display: flex;
        height: 1rem;

        li {
            width: calc(100%/4);
            display: flex;
            flex-direction: column;
            background-color: rgb(74, 210, 148);

            img {
                width: .4444rem;
                height: .4444rem;
            }

            span {
                font-size: .1778rem;
            }

            .footerImg,
            .footerSpan {
                display: flex;
                flex: content;
                justify-content: center;
                align-items: center;
            }
        }
    }

}
</style>