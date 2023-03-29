<template>
    <div class="sortCard" v-for="(item,index) in sortCardMessage" :key="index">
        <slot>
            <div class="card-title">
                <h3>{{item.title}}</h3>
            </div>
            <div class="card-detail">
                <span>
                    {{ item.detail }}
                </span>
            </div>
        </slot>
    </div>
</template>

<script>
export default {
    props:['sortCardMessage'],
    setup(props) {
        
        return {
            
        }
    }
}
</script>

<style lang="less" scoped>
.sortCard {
    display: flex;
    flex-direction: column;
    text-align: center;
    background-color: rgb(248, 247, 242);
    width: 100%;
    height: 1fr 2fr;
    .card-title {
        margin-block-start: .2222rem;
        font-size: .4444rem;
    }

    .card-detail {
        width: 100%;
        font-size: .2222rem;
        margin-block-end: .2222rem;
    }
}
</style>