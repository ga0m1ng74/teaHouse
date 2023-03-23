<template>
    <div>
        <h4>HOME</h4>
        <Header></Header>
        <TabBar></TabBar>
    </div>
</template>

<script>
import TabBar from '@/components/common/TabBar.vue'
import Header from '@/components/home/Header.vue'
export default {
    name:"Home",
    components:{TabBar,Header}
}
</script>