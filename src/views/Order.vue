<template>
    <div>
        <header>
            <img src="@/assets/img/chevron-back-outline.svg" alt="back" class="svg-color-vue" @click="$router.go(-1)">
        </header>
        <div class="order-upper">
            <van-collapse v-model="activeNames">
                <van-collapse-item title="show order summary" name="1">
                    <!-- <div class="goods-wrap">
                        <div class="goods-image">
                            <img src="@/assets/img/Tie_Guan_Yin_Oolong.jpeg">
                        </div>
                        <div class="goods-text">
                            <div class="goods-title">
                                <span>Stockholm Blend (Black Tea)100g</span>
                            </div>
                        </div>
                        <div class="goods-right">
                            <div class="goods-price">
                                <span>$2100.00</span>
                            </div>
                            <div class="goods-number">
                                <span>9</span>
                            </div>
                        </div>
                    </div> -->
                    <van-card v-for="(item, index) in orderList" :key="index" :num="item.itemNumber" :price="item.itemPrice"
                        :desc="item.itemSize" :title="item.itemName" :thumb="item.itemImgUrl" currency="$" />
                    <div class="totalPrice">
                        <span>Total(with GST)${{ totalPrice }}</span>
                    </div>
                </van-collapse-item>
                <van-collapse-item title="show shipping address" name="2">
                    <van-radio-group v-model="checkedAddress">
                        <van-radio name="1" checked-color="#51d196">
                            <div class="address-detail">
                                <span>Alex</span>
                                <div class="address-line1">
                                    <span>0401000111</span>
                                </div>
                                <div class="address-line2">
                                    <span>1101A,32 Waterloo Rd, </span>
                                    <span>Sydney,NSW 2000</span>
                                </div>
                            </div>
                        </van-radio>
                        <van-radio name="2" checked-color="#51d196">
                            <div class="address-detail">
                                <span>Mike</span>
                                <div class="address-line1">
                                    <span>0401000222</span>
                                </div>
                                <div class="address-line2">
                                    <span>1 Pitt St, </span>
                                    <span>Sydney,NSW 2000</span>
                                </div>
                            </div>
                        </van-radio>
                    </van-radio-group>
                </van-collapse-item>
            </van-collapse>
        </div>
        <div class="order-express">
            <div class="title">
                <span>Express Checkout</span>
            </div>
            <div class="payment">
                <van-radio-group v-model="checked">
                    <van-radio name="1" checked-color="#51d196">
                        <div class="payment-detail">
                            <div class="payment-image">
                                <img src="@/assets/img/Alipay_logo_(2020).svg">
                            </div>
                            <div class="payment-title">
                                <span>AliPay</span>
                            </div>
                        </div>
                    </van-radio>
                    <van-radio name="2" disabled>
                        <div class="payment-detail">
                            <div class="payment-image">
                                <img src="@/assets/img/paypal.svg">
                            </div>
                            <div class="payment-title">
                                <span>PayPal(coming soon)</span>
                            </div>
                        </div>
                    </van-radio>
                    <van-radio name="3" disabled>
                        <div class="payment-detail">
                            <div class="payment-image">
                                <img src="@/assets/img/shoppay.svg">
                            </div>
                            <div class="payment-title">
                                <span>ShopPay(coming soon)</span>
                            </div>
                        </div>
                    </van-radio>
                </van-radio-group>
            </div>
            <div class="payment-btn" v-if="totalPrice>0">
                <van-button round color="#51d196" @click="continueToPay">
                    <span>Continue</span>
                </van-button>
            </div>
        </div>
        <!-- <footer>
            <span>footer</span>
        </footer> -->
    </div>
</template>

<script>
import { ref, onBeforeMount, computed } from 'vue'
import axios from 'axios';
import { useRoute } from 'vue-router'
// import qs from 'qs';
export default {
    setup() {
        const activeNames = ref(['1']);
        const checked = ref('1');
        const checkedAddress = ref('1')
        let orderSelect = []
        let orderList = ref([])
        const route = useRoute()
        /**
         * methods
         */
        const continueToPay = async () => {
            /**
             * 1 change orderStatus 
             * 2 delete the selected item from the cart
             */
            let token = JSON.parse(localStorage.getItem('userInfo')).token
            let orderCode = JSON.parse(localStorage.getItem('orderCode'))
            const response = await axios({
                url: '/api/orderSubmit',
                method: 'post',
                headers: {
                    token,
                },
                data: {
                    orderCode,
                    orderSelect,
                }
            })

            if (response.data.success) {
                const result = await axios({
                    url: '/api/payment',
                    method: 'post',
                    headers: {
                        token,
                        "Content-Type":'application/x-www-form-urlencoded'
                    },
                    data:{
                        orderCode
                    }
                })
                console.log(result.data);
                if(result.data.success){
                    window.location.href = result.data.paymentUrl
                }
            }
        }
        const totalPrice = computed(() => {
            let total = 0;
            orderList.value.forEach(element => {
                total += element.itemPrice * element.itemNumber
            })
            return total.toFixed(2)
        })
        /**
         * hooks
         */
        onBeforeMount(() => {
            orderSelect = route.query.itemSelect
            // console.log(orderSelect);
        })
        onBeforeMount(async () => {
            let token = JSON.parse(localStorage.getItem('userInfo')).token
            //query user's cart list
            try {
                const response = await axios({
                    url: '/api/cart/allList',
                    method: 'post',
                    headers: {
                        token
                    }
                })
                if (response.data.success) {
                    response.data.data.forEach(element => {
                        orderSelect.forEach(e => {
                            if (element.id == e) {
                                orderList.value.push(element)
                            }
                        })
                    })
                }
            } catch (error) {
                console.log(error.message);
            }
        })
        return {
            orderList,
            activeNames,
            checked,
            checkedAddress,
            totalPrice,
            continueToPay,
        }
    }
}
</script>

<style lang="less" scoped>
.svg-color-vue {
    filter: invert(84%) sepia(16%) saturate(1501%) hue-rotate(90deg) brightness(89%) contrast(82%);
}

header {

    img {
        width: 40px;
    }
}

.order-upper {
    .goods-wrap {
        height: 64px;
        display: flex;
        justify-content: space-between;
        margin-top: 10px;

        .goods-image {
            img {
                width: 64px;
            }
        }

        .goods-text {
            width: 200px;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .goods-right {
            width: 100px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            .goods-price {
                span {
                    color: rgb(74, 210, 148)
                }
            }
        }
    }

    .address-detail {
        margin-bottom: 10px;
    }

    .totalPrice {
        text-align: end;

        span {
            font-size: 20px;
            font-weight: bold;
            color: rgb(74, 210, 148);
        }
    }
}

.order-express {
    margin-bottom: 100px;

    .title {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100px;

        span {
            font-size: 20px;
            font-weight: bold;
        }
    }

    .payment {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .payment-detail {

            height: 100px;

            .payment-image {
                img {
                    height: 50px;
                }
            }
        }
    }

    .payment-btn {
        display: flex;
        justify-content: center;
        align-items: center;

        span {
            color: #fff;
        }
    }
}
</style>