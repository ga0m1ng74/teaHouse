<template>
    <div>
        <header>
            <img src="@/assets/img/chevron-back-outline.svg" alt="back" class="svg-color-vue" @click="$router.go(-1)">
        </header>
        <section class="display" v-if="productResult[0]">
            <figure>
                <img :src="productResult[0].imgUrl">
            </figure>
            <div class="title">
                <span>{{ productResult[0].title }}</span>
            </div>
            <div class="price">
                <span>${{ dynamicPrice }}</span>
            </div>
            <div class="description">
                <div class="description-title">
                    <span>DESCRIPTION</span>
                </div>
                <div class="description-text">
                    <span>
                        {{ productResult[0].DESCRIPTION }}
                    </span>
                </div>

            </div>
            <div class="options">
                <div class="options-left">
                    <div class="options-name">
                        <label for="">SIZE:</label>
                    </div>
                    <div class="options-select">
                        <select @change="setPrice">
                            <option value="100g" selected="selected">100g</option>
                            <option value="250g">250g</option>
                            <option value="500g">500g</option>
                            <option value="1Kg">1Kg</option>
                        </select>
                    </div>
                </div>
                <div class="options-right">
                    <div class="options-name">
                        <label for="">QUANTITY:</label>
                    </div>
                    <div class="options-quantity">
                        <span @click="qtyMinus">-</span>
                        <input type="text" :value="qty" min="1" max="9" readonly>
                        <span @click="qtyAdd">+</span>
                    </div>
                </div>
            </div>
            <div class="button">
                <button value="add to cart" @click="addToCartHandler">
                    <span>ADD TO CART</span>
                </button>
            </div>
            <div class="extra-info">
                <h4 class="sub-title">BREWING GUIDE</h4>
                <p>{{ productResult[0].BREWING }}</p>
                <h4 class="sub-title">INGREDIENTS</h4>
                <p> {{ productResult[0].INGREDIENTS }}</p>
            </div>
        </section>
        <section class="display" v-else>
            <div class="construction">
                <h2>PAGE UNDER CONSTRUCTION</h2>
                <img src="@/assets/img/construct-outline.svg">
            </div>
        </section>
    </div>
</template>

<script>
import Header from '@/components/home/Header.vue';
import axios from 'axios'
import { useRoute } from 'vue-router'
import { ref, onBeforeMount, onMounted } from 'vue'
import { useUserStore } from '@/stores';
import router from '@/router';
import { showSuccessToast, showFailToast } from 'vant';
export default {
    components: { Header },
    setup() {
        let qty = ref(1)
        const route = useRoute()
        let productResult = ref({})
        let dynamicPrice = ref('')
        let productZise = '100g'
        //pinia
        const userStore = useUserStore()
        /**
         * methods
         */
        const qtyMinus = () => {
            qty.value--
            if (qty.value <= 0) {
                qty.value = 1
                // alert('quantity must more than 0')
                showFailToast({ message: 'quantity must more than 0', overlay: true, wordBreak: 'break-word' })
            }
        }
        const qtyAdd = () => {
            qty.value++
            if (qty.value >= 10) {
                qty.value = 9
                // alert('quantity must less than 10')
                showFailToast({ message: 'quantity must less than 10', overlay: true, wordBreak: 'break-word' })
            }
        }
        const setPrice = (e) => {
            productZise = e.target.value
            //set dynamic price on page
            switch (e.target.value) {
                case '100g':
                    dynamicPrice.value = productResult.value[0].price
                    break;
                case '250g':
                    dynamicPrice.value = Math.floor(productResult.value[0].price * 2.5 * 0.98).toFixed(2)
                    break;
                case '500g':
                    dynamicPrice.value = Math.floor(productResult.value[0].price * 5 * 0.95).toFixed(2)
                    break;
                case '1Kg':
                    dynamicPrice.value = Math.floor(productResult.value[0].price * 9).toFixed(2)
                    break;
            }
        }

        const addToCartHandler = async () => {
            //get dynamic price and number
            // console.log(dynamicPrice.value)
            // console.log(qty.value)
            // console.log(productZise)
            if (localStorage.getItem('userInfo')) {
                let token = JSON.parse(localStorage.getItem('userInfo')).token
                showSuccessToast({ message: 'add success!', overlay: true, wordBreak: 'break-word' })
                //axios
                try {
                    const response = await axios({
                        url: '/api/product/addToCart',
                        method: 'post',
                        data: {
                            productTitle: productResult.value[0].title,
                            itemNumber: qty.value,
                            itemPrice: dynamicPrice.value,
                            itemSize: productZise,
                        },
                        headers: {
                            token
                        }
                    })
                    console.log(response.data);
                } catch (error) {
                    console.log(error.message);
                }
            } else {
                showFailToast({ message: 'please login!', overlay: true, wordBreak: 'break-word' })
                router.push('/login')
            }
        }
        /**
         * hooks
         */
        onBeforeMount(async () => {
            let title = route.query.title
            const response = await axios({
                url: '/api/product/title',
                params: {
                    title
                }
            })
            productResult.value = response.data.data
            //get dynamicPrice
            dynamicPrice.value = productResult.value[0].price
            // console.log(productResult.value);
        })

        onMounted(() => {
            window.scrollTo(0, 0)
        })
        return {
            qty,
            productResult,
            dynamicPrice,
            qtyMinus,
            qtyAdd,
            setPrice,
            addToCartHandler,
        }
    }
}
</script>


<style lang="less" scoped>
.svg-color-vue {
        filter: invert(84%) sepia(16%) saturate(1501%) hue-rotate(90deg) brightness(89%) contrast(82%);
    }
header {
    position: fixed;
    top: 0;
    z-index: 9;
    width: 100%;
    background-color: #fff;
    img {
        width: 40px;
    }
}
.display {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-block-start: 50px;
    img {
        width: 80%;
    }

    .title {
        font-size: 30px;
        font-weight: bold;
    }

    .price {
        font-size: 25px;
    }

    .description {
        background-color: rgb(248, 247, 242);
        width: 90%;
        display: flex;
        flex-direction: column;
        // align-items: center;
        text-align: left;

        .description-title {
            font-size: large;
            font-weight: bold;
            margin-block: .4444rem;
        }

        .description-text {
            text-align: left;
            margin-block: .4444rem;
        }
    }

    .options {
        width: 80%;
        margin-top: 20px;

        .options-name {
            text-align: left;
        }

        .options-select {
            select {
                width: 100%;
                height: .8889rem;
                outline-color: rgb(74, 210, 148);
            }

            margin-bottom: 20px;
        }

        .options-right {
            display: flex;
            flex-direction: column;
            justify-items: center;

            // align-items: center;
            .options-quantity {
                outline: 1px solid rgb(74, 210, 148);
                width: 100%;
                height: .8889rem;
                justify-content: center;
                border-radius: 10px;

                input {
                    width: 15%;
                    height: .8889rem;
                    border: 0px solid;
                    text-align: center;
                }
            }
        }
    }

    .button {
        width: 80%;
        height: .8889rem;
        margin-block: .8889rem;

        button {
            width: 100%;
            height: 100%;
            background-color: rgb(74, 210, 148);
            border: 0px solid;
            border-radius: 10px;
        }

        span {
            font-size: 20px;
            font-weight: bold;
            color: #fff;
        }
    }

    .extra-info {
        width: 90%;
        text-align: left;

        .sub-title {
            margin-top: 20px;
            margin-bottom: 10px;
        }
    }

    .construction {
        margin-top: 4rem;

        img {
            width: 25%;
        }
    }
}
</style>