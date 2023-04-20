<template>
    <div v-if="cartList.length">
        <header class="header">
            <div class="title">
                <span>CART</span>
                <img src="@/assets/img/location-outline.svg" alt="location">
            </div>
            <div class="message">
                <!-- <p @click="showPopup">deliver to:1101A, 32 Waterloo...</p> -->
                <p @click="showPopup">deliver to:{{ (checked == '1') ? '1101A, 32 Waterloo...' : '1 Pitt St,Sydney NSW...'
                }}</p>
                <van-popup v-model:show="showTop" round position="top" :style="{ height: '20%' }">
                    <van-radio-group v-model="checked" :style="{ padding: '30px' }">
                        <van-radio name="1" checked-color="#51d196" default="1101A, 32 Waterloo...">1101A, 32
                            Waterloo...</van-radio>
                        <van-radio name="2" checked-color="#51d196" default="1 Pitt St,Sydney NSW...">1 Pitt St,Sydney
                            NSW...</van-radio>
                    </van-radio-group>
                </van-popup>
            </div>
        </header>
        <div class="goods-frame">
            <!-- <div class="goods-wrap" v-for="(item, index) in cartList" :key="index">
                <div class="select">
                    <van-checkbox v-model="item.isChecked" checked-color="#51d196"></van-checkbox>
                </div>
                <div class="goods-image">
                    <figure>
                        <img :src="item.itemImgUrl">
                    </figure>
                </div>
                <div class="wrap-right">
                    <div class="goods-title">
                        <span>{{ item.itemName }}{{ item.itemSize }}</span>
                        <div class="delete-icon" @click="goodsDetele(item.id, index)">
                            <img src="@/assets/img/trash-outline.svg">
                        </div>
                    </div>
                    <div class="option">
                        <div class="goods-price">
                            <span>${{ item.itemPrice }}</span>
                        </div>
                        <div class="number">
                            <van-stepper v-model="item.itemNumber" min="1" max="9" disable-input input-width="20px"
                                @change="numberChange($event, item)" />
                        </div>
                    </div>
                </div>
            </div> -->
            <div class="goods-container" v-for="(item, index) in cartList" :key="index">
                <div class="select">
                    <van-checkbox v-model="item.isChecked" checked-color="#51d196"></van-checkbox>
                </div>
                <div class="right">
                    <van-card :price="item.itemPrice" :desc="item.itemSize" :title="item.itemName" :thumb="item.itemImgUrl"
                        currency="$">
                        <template #footer>
                            <van-button size="small" @click="goodsDetele(item.id, index)" icon="delete">
                            </van-button>
                            <van-stepper v-model="item.itemNumber" min="1" max="9" disable-input input-width="20px"
                                @change="numberChange($event, item)" button-size="34px" />
                        </template>
                        <template #bottom>
                        </template>
                    </van-card>
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
                        ${{ totalPrice }}
                    </span>
                </div>
                <div class="checkout-btn">
                    <!-- <button @click="checkout" v-if="totalPrice > 0">Checkout</button> -->
                    <van-button @click="checkout" v-if="totalPrice > 0" round>
                        <span>Checkout</span>
                    </van-button>
                </div>
            </div>
        </div>
        <TabBar></TabBar>
    </div>
    <div v-else class="empty">
        <div class="trolleyImg">
            <img src="@/assets/img/cart-outline.svg">
        </div>
        <h2>Your trolley is empty</h2>
        <h4>start searching to add products to your trolley</h4>
        <TabBar></TabBar>
    </div>
</template>

<script>
import TabBar from '@/components/common/TabBar.vue'
import { ref, onBeforeMount, computed } from 'vue'
import { useUserStore } from '@/stores';
import { showConfirmDialog, Popup, RadioGroup, Radio } from 'vant';
import router from '@/router';
import axios from 'axios';
export default {
    name: "Cart",
    components: { TabBar, },
    setup() {
        let cartList = ref([])
        /**
         * vant
         */
        const showTop = ref(false)
        const checked = ref('1')
        //pinia
        const userStore = useUserStore()

        /**
         * methods
         */
        const showPopup = () => {
            showTop.value = true;
        }

        const goodsDetele = (id, index) => {
            console.log('goodsDetele', id);
            showConfirmDialog({
                title: 'DELETE',
                confirmButtonText: 'confirm',
                confirmButtonColor: '#51d196',
                cancelButtonText: 'cancel',
                cancelButtonColor: '#f8f7f2',
                theme: 'round-button',
                message:
                    'Are you sure to delete this product?'
            })
                .then(async () => {
                    // on confirm
                    console.log('confirm');

                    try {
                        const response = await axios({
                            url: '/api/cart/delete',
                            method: 'post',
                            data: {
                                id
                            }
                        })
                        if (response.data.success) {
                            console.log(cartList.value)
                            cartList.value.splice(index, 1)
                        }
                    } catch (error) {
                        console.log(error.message);
                    }
                })
                .catch(() => {
                    // on cancel
                    console.log('cancel');
                });
        }

        const numberChange = async (value, item) => {
            //updated the item's number
            let token = JSON.parse(localStorage.getItem('userInfo')).token
            try {
                const response = await axios({
                    url: '/api/cart/updateNumber',
                    method: 'post',
                    headers: {
                        token
                    },
                    data: {
                        id: item.id,
                        newNumber: value
                    }
                })
            } catch (error) {
                console.log(error.message)
            }
        }
        const checkout = async () => {
            let itemSelect = []
            let itemArr = []
            cartList.value.forEach(element => {
                if (element.isChecked) {
                    itemSelect.push(element.id)
                    itemArr.push(element)
                }
            })

            /**
             * F->B submit an order
             * B->F generate an order unique number
             */
            let token = JSON.parse(localStorage.getItem('userInfo')).token
            try {
                let response = await axios({
                    url: '/api/generateOrder/',
                    method: 'post',
                    headers: {
                        token
                    },
                    data: {
                        itemArr
                    }
                })
                console.log(response.data);
                if(response.data.success){
                    localStorage.setItem('orderCode',JSON.stringify(response.data.orderCode))
                }
                router.push({
                    path:'/order',
                    query:{
                        itemSelect,
                    }
                })
            } catch (error) {
                console.log(error.message);
            }
        }
        const totalPrice = computed(() => {
            let total = 0;
            cartList.value.forEach(element => {
                if (element.isChecked) {
                    total += element.itemPrice * element.itemNumber
                }
            })
            return total.toFixed(2)
        })
        /**
         * hooks
         */
        onBeforeMount(async () => {

            if (localStorage.getItem('userInfo')) {
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
                    console.log(response.data);
                    if (response.data.success) {
                        cartList.value = response.data.data
                        console.log(cartList.value);
                    }
                } catch (error) {
                    console.log(error.message);
                }
            }
        })
        return {
            // value,
            // itemSelect,

            checked,
            showTop,
            cartList,
            totalPrice,

            showPopup,
            goodsDetele,
            numberChange,
            checkout,
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

.goods-frame {
    margin-bottom: 2.2222rem;
}

.goods-container {
    display: flex;
    background-color: #f7f8fa;
    margin-bottom: 10px;

    .select {
        display: flex;
        justify-content: center;
        width: 30px;
    }

    .right {
        width: 100%;

        .delete-icon {
            img {
                width: 25px;
            }
        }
    }
}

// .goods-wrap {
//     width: 100%;
//     height: 2.2222rem;
//     border-top: 1px solid #c1c1c1;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     padding: 5px;

//     .select {
//         display: flex;
//         justify-content: center;
//         width: 40px;

//         img {
//             width: 35px;
//         }
//     }

//     .goods-image {
//         display: flex;
//         justify-content: center;
//         align-items: center;

//         img {
//             width: 1.8rem;
//             height: 1.8rem;
//         }
//     }

//     .wrap-right {
//         display: flex;
//         flex-direction: column;

//         gap: 20px;

//         .goods-title {
//             padding: 5px;
//             display: flex;
//             justify-content: center;
//             align-items: center;

//             span {
//                 width: 200px;
//             }

//             .delete-icon {
//                 width: 25px;
//             }
//         }

//         .option {
//             display: flex;
//             justify-content: space-between;

//             .goods-price {
//                 display: flex;
//                 align-items: center;
//                 width: 80px;

//                 span {
//                     color: rgb(74, 210, 148);
//                 }
//             }

//             .number {
//                 width: 80px;
//                 display: flex;
//                 justify-content: space-around;

//                 span {
//                     width: 15px;
//                 }
//             }
//         }
//     }
// }

.checkout-wrap {
    bottom: 50px;
    position: fixed;
    width: 100%;
    background-color: #fff;

    .checkout {
        height: 32px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 10px;

        .total-price {
            display: flex;
            align-items: center;
        }

        .checkout-btn {

            button {
                border: none;
                color: #fff;
                background-color: rgb(74, 210, 148);
                height: 30px;

                span {
                    color: #fff;
                    font-weight: bold;
                }
            }
        }
    }
}

.empty {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    height: 100vh;

    img {
        width: 40px;
    }
}
</style>