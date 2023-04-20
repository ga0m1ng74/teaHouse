<template>
    <div v-if="flag">
        <div class="avatar">
            <img :src="adminInfo.userImg" alt="avatar">
        </div>

        <van-cell-group inset>
            <van-cell title="username" :value="adminInfo.username" size="large"/>
            <van-cell title="password" :value="adminInfo.password" size="large"/>
            <van-cell title="token" :value="adminInfo.token" size="large"/>
            <van-cell title="address" value="1 Pitt St,Sydeny NSW" size="large"/>
        </van-cell-group>

        <div class="logout">
            <van-button color="#51d196" round @click="logoutHandler">
                <span>Logout</span>
            </van-button>
        </div>
        <TabBar></TabBar>
    </div>
</template>

<script>
import { useUserStore } from '@/stores/index.js'
import TabBar from '@/components/common/TabBar.vue'
import { ref,onBeforeMount } from 'vue'
import router from '@/router'
export default {
    components: { TabBar },
    setup() {
        const userStore = useUserStore()
        let adminInfo = ref({})
        let flag = ref(false)
        onBeforeMount(() => {
            adminInfo.value = JSON.parse(localStorage.getItem('userInfo'))||false
            if(adminInfo.value){
                console.log(1);
                flag.value = true

            }else{
                console.log(0);
                router.push('/login')
            }
        })

        const logoutHandler = ()=>{
            console.log('logoutHandler');
            localStorage.removeItem('userInfo')
            userStore.person.success = false
            router.push('/login')
        }
        return {
            userStore,
            flag,
            adminInfo,
            logoutHandler
        }
    }
}
</script>

<style lang="less" scoped>
.avatar {
    display: flex;
    justify-content: center;
    margin-top: 20px;
    img {
        width: 100px;
    }
}

.logout{
    display: flex;
    justify-content: center;
    margin-top: 100px;
    span{
        color: #fff;
        font-size: 20px;
        font-weight: bold;
    }
}
</style>