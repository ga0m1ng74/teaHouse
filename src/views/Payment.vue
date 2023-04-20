<template>
    <div>
        {{ paymentSuccessFlag }}
        <div class="payment-result">
            <div v-if="paymentSuccessFlag">
                <div class="finish">
                    <van-button round color="#51d196" @click="$router.push('/')">
                        <span>Finish</span>
                    </van-button>
                </div>
                <div class="status-image">
                    <img src="@/assets/img/checkmark-circle-outline.svg">
                </div>
                <div class="status-text">
                    <span>Order Completed Successfully!</span>
                </div>
                <div class="checkOrder">
                    <van-button round color="#51d196">
                        <span>check your order</span>
                    </van-button>
                </div>
            </div>
            <div v-else>
                <div class="finish">
                    <span>Finish</span>
                </div>
                <div class="status-image">
                    <img src="@/assets/img/close-circle-outline.svg">
                </div>
                <div class="status-text">
                    <span>Order Failure!</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref, onBeforeMount } from 'vue';
import axios from 'axios';
import { useRoute } from 'vue-router'
export default {
    setup() {
        const route = useRoute();
        let paymentSuccessFlag = ref(false);
        /**
         * methods
         */
        const queryPayment = async () => {
            let token = JSON.parse(localStorage.getItem('userInfo')).token
            let data = {
                out_trade_no: route.query.out_trade_no,
                trade_no: route.query.trade_no,
            }
            try {
                const response = await axios({
                    url: '/api/queryPayment',
                    method: 'post',
                    headers: {
                        token,
                        "Content-Type": 'application/x-www-form-urlencoded'
                    },
                    data
                })
                console.log(response.data);
                if (response.data.code == 1) {
                    console.log(1111);
                    paymentSuccessFlag.value = true;
                }
            } catch (error) {
                console.log(error.message);
            }
        }
        /**
         * hooks
         */
        onBeforeMount(() => {
            queryPayment()
        })

        return {
            paymentSuccessFlag,
        }
    }
}
</script>


<style lang="less" scoped>
.payment-result{
    margin-top: 40px;
    width: 100%;
    .finish{
        display: flex;
        flex-direction: row-reverse;
        align-items: end;
    }
    .status-image{
        display: flex;
        justify-content: center;
        img{
            width: 100px;
        }
    }
    .status-text{
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        span{
            font-size: 30px;
            font-weight: bold;
        }
    }
    .checkOrder{
        display: flex;
        justify-content: center;
        margin-top: 20px;
    }
}
</style>