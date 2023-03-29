<template>
    <div class="classList">
        <ul>
            <li v-for="item in classList" :key="item.id">
                <figure class="figure">
                    <a href="">
                        <img :src="item.imgUrl" alt="">
                    </a>
                </figure>
                <div>
                    <div class="title">
                        <h4>{{ item.name }}</h4>
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
import SortCard from '@/components/common/SortCard.vue'
import { reactive } from 'vue'
export default {
    name: 'Classfication',
    components: { SortCard },
    setup() {
        const classList = reactive([
            {
                id: 1,
                name: 'FRENCH EARL GREY (BLACK TEA)',
                imgUrl: './img/black/French_Earl_Grey_Black_Tea.jpeg',
                price: '16.50'
            },
            {
                id: 2,
                name: 'ENGLISH BREAKFAST (BLACK TEA)',
                imgUrl: './img/black/English-Breakfast-Black-Tea.webp',
                price: '12.00'
            },
            {
                id: 3,
                name: 'Prince of Wales (Black Tea)',
                imgUrl: './img/black/Prince_of_Wales_Superior.jpeg',
                price: '12.50'
            },
            {
                id: 4,
                name: 'Stockholm Blend (Black Tea)',
                imgUrl: './img/black/Stockholm_Blend_Black_Tea.jpeg',
                price: '16.50'
            },
        ])
        return {
            classList,
        }
    }
}
</script>


<style lang="less" scoped>
.classList {
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