<template>
    <div class="Recommond">
        <ul>
            <li v-for="item in recommendList" :key="item.id">
                <figure class="figure">
                    <a href="">
                        <img :src="item.imgUrl" alt="">
                    </a>
                </figure>
                <div>
                    <div class="title">
                        <h4>{{ item.title }}</h4>
                    </div>
                    <div class="price">
                        <p>From ${{ item.price }} </p>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>

export default {
    name: 'Recommond',
    props:['recommendList'],
    setup() {
        
        return {
            
        }
    }
}
</script>

<style lang="less" scoped>
h3 {
    text-align: center;
}

.Recommond {

    ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        width: 100%;
    }

    li {
        width: 50%;
        margin-bottom: 1rem;
    }

    .figure {
        display: flex;
        justify-content: center;
        align-content: center;
        img {
            width: 2rem;
        }
    }

    .title,
    .price {
        text-align: center;
    }

}
</style>