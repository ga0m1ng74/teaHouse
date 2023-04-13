<template>
    <div>
        <header class="header">
            <div class="title">
                <span>CART</span>
                <img src="@/assets/img/location-outline.svg" alt="location">
            </div>
            <div class="message">
                <p>deliver to:1101A, 32 Waterloo...</p>
            </div>
        </header>
        <div class="goods-wrap">
            <div class="select">
                <van-checkbox v-model="itemSelect" checked-color="#51d196"></van-checkbox>
            </div>
            <div class="goods-image">
                <figure>
                    <img src="@/assets/img/Tie_Guan_Yin_Oolong.jpeg">
                </figure>
            </div>
            <div class="wrap-right">
                <div class="goods-title">
                    <span>ENGLISH BREAKFAST (BLACK TEA)</span>
                    <div class="delete-icon" @click="goodsDetele">
                        <img src="@/assets/img/trash-outline.svg">
                    </div>
                </div>
                <div class="option">
                    <div class="goods-price">
                        <span>$11.99</span>
                    </div>
                    <div class="number">
                        <van-stepper v-model="value" min="1" max="9" disable-input input-width="20px"/>
                    </div>
                </div>
            </div>
        </div>
        <div class="goods-wrap">
            <div class="select">
                <van-checkbox v-model="itemSelect" checked-color="#51d196"></van-checkbox>
            </div>
            <div class="goods-image">
                <figure>
                    <img src="@/assets/img/Tie_Guan_Yin_Oolong.jpeg">
                </figure>
            </div>
            <div class="wrap-right">
                <div class="goods-title">
                    <span>ENGLISH BREAKFAST (BLACK TEA)</span>
                    <div class="delete-icon" @click="goodsDetele">
                        <img src="@/assets/img/trash-outline.svg">
                    </div>
                </div>
                <div class="option">
                    <div class="goods-price">
                        <span>$11.99</span>
                    </div>
                    <div class="number">
                        <van-stepper v-model="value" min="1" max="9" disable-input input-width="20px"/>
                    </div>
                </div>
            </div>
        </div>
        <div class="goods-wrap">
            <div class="select">
                <van-checkbox v-model="itemSelect" checked-color="#51d196"></van-checkbox>
            </div>
            <div class="goods-image">
                <figure>
                    <img src="@/assets/img/Tie_Guan_Yin_Oolong.jpeg">
                </figure>
            </div>
            <div class="wrap-right">
                <div class="goods-title">
                    <span>ENGLISH BREAKFAST (BLACK TEA)</span>
                    <div class="delete-icon" @click="goodsDetele">
                        <img src="@/assets/img/trash-outline.svg">
                    </div>
                </div>
                <div class="option">
                    <div class="goods-price">
                        <span>$11.99</span>
                    </div>
                    <div class="number">
                        <van-stepper v-model="value" min="1" max="9" disable-input input-width="20px"/>
                    </div>
                </div>
            </div>
        </div>
        <div class="goods-wrap">
            <div class="select">
                <van-checkbox v-model="itemSelect" checked-color="#51d196"></van-checkbox>
            </div>
            <div class="goods-image">
                <figure>
                    <img src="@/assets/img/Tie_Guan_Yin_Oolong.jpeg">
                </figure>
            </div>
            <div class="wrap-right">
                <div class="goods-title">
                    <span>ENGLISH BREAKFAST (BLACK TEA)</span>
                    <div class="delete-icon" @click="goodsDetele">
                        <img src="@/assets/img/trash-outline.svg">
                    </div>
                </div>
                <div class="option">
                    <div class="goods-price">
                        <span>$11.99</span>
                    </div>
                    <div class="number">
                        <van-stepper v-model="value" min="1" max="9" disable-input input-width="20px"/>
                    </div>
                </div>
            </div>
        </div>
        <div class="checkout-wrap">
            <div class="checkout">
                <div class="total-price">
                    <span>
                        Total(with GST)
                    </span>
                    <span class="price-detail">
                        $218.78
                    </span>
                </div>
                <div class="checkout-btn">
                    <button @click="checkout">Checkout</button>
                </div>
            </div>
        </div>
        <TabBar></TabBar>
    </div>
</template>

<script>
import TabBar from '@/components/common/TabBar.vue'
import { ref } from 'vue'
export default {
    name: "Cart",
    components: { TabBar, },
    setup() {
        let itemSelect = ref(true)
        const value = ref(1)

        /**
         * methods
         */
        const goodsDetele = ()=>{
            console.log('goodsDetele');
        }
        const checkout = ()=>{
            console.log('checkout');
        }
        return {
            value,
            itemSelect,
            goodsDetele,
            checkout
        }
    }
}
</script>

<style lang="less" scoped>
.header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 25px;

    .title {
        display: flex;
        height: 30px;
        align-items: center;

        span {
            font-size: 20px;
        }

        img {
            height: 20px;
        }
    }

    .message {
        height: 10px;

        p {
            color: rgb(74, 210, 148);
            font-size: 10px;
        }
    }
}

.goods-wrap {
    width: 100%;
    height: 2.2222rem;
    border-top: 1px solid #c1c1c1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;

    .select {
        display: flex;
        justify-content: center;
        width: 40px;
        img {
            width: 35px;
        }
    }

    .goods-image {
        display: flex;
        justify-content: center;
        align-items: center;

        img {
            width: 1.8rem;
            height: 1.8rem;
        }
    }

    .wrap-right {
        display: flex;
        flex-direction: column;

        gap: 20px;

        .goods-title {
            padding: 5px;
            display: flex;
            justify-content: center;
            align-items: center;
            span{
                width: 200px;
            }
            .delete-icon{
                width: 25px;
            }
        }

        .option {
            display: flex;
            justify-content: space-between;

            .goods-price {
                display: flex;
                align-items: center;
                width: 80px;
                span {
                    color: rgb(74, 210, 148);
                }
            }

            .number {
                width: 80px;
                display: flex;
                justify-content: space-around;

                span {
                    width: 15px;
                }
            }
        }
    }
}

.checkout-wrap{
    bottom: 50px;
    position: fixed;
    width: 100%;
    background-color: #fff;
    .checkout {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px;
    
    .checkout-btn{
        button{
            border: none;
            color: #fff;
            background-color: rgb(74, 210, 148);
            width: 100px;
            height: 30px;
            border-radius: 10px;
        }
    }
}
}

</style>