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
                <img src="@/assets/img/radio-button-off-outline.svg">
            </div>
            <div class="goods-image">
                <figure>
                    <img src="@/assets/img/Tie_Guan_Yin_Oolong.jpeg">
                </figure>
            </div>
            <div class="wrap-right">
                <div class="goods-title">
                    <span>ENGLISH BREAKFAST (BLACK TEA)</span>
                </div>
                <div class="option">
                    <div class="goods-price">
                        <span>$11.99</span>
                    </div>
                    <div class="number">
                        <span>-</span>
                        9
                        <span>+</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="goods-wrap">
            <div class="select">
                <img src="@/assets/img/radio-button-off-outline.svg">
            </div>
            <div class="goods-image">
                <figure>
                    <img src="@/assets/img/Tie_Guan_Yin_Oolong.jpeg">
                </figure>
            </div>
            <div class="wrap-right">
                <div class="goods-title">
                    <span>ENGLISH BREAKFAST (BLACK TEA)</span>
                </div>
                <div class="option">
                    <div class="goods-price">
                        <span>$11.99</span>
                    </div>
                    <div class="number">
                        <span>-</span>
                        9
                        <span>+</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="goods-wrap">
            <div class="select">
                <img src="@/assets/img/radio-button-off-outline.svg">
            </div>
            <div class="goods-image">
                <figure>
                    <img src="@/assets/img/Tie_Guan_Yin_Oolong.jpeg">
                </figure>
            </div>
            <div class="wrap-right">
                <div class="goods-title">
                    <span>ENGLISH BREAKFAST (BLACK TEA)</span>
                </div>
                <div class="option">
                    <div class="goods-price">
                        <span>$11.99</span>
                    </div>
                    <div class="number">
                        <span>-</span>
                        9
                        <span>+</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="goods-wrap">
            <div class="select">
                <img src="@/assets/img/radio-button-off-outline.svg">
            </div>
            <div class="goods-image">
                <figure>
                    <img src="@/assets/img/Tie_Guan_Yin_Oolong.jpeg">
                </figure>
            </div>
            <div class="wrap-right">
                <div class="goods-title">
                    <span>ENGLISH BREAKFAST (BLACK TEA)</span>
                </div>
                <div class="option">
                    <div class="goods-price">
                        <span>$11.99</span>
                    </div>
                    <div class="number">
                        <span>-</span>
                        9
                        <span>+</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="goods-wrap">
            <div class="select">
                <img src="@/assets/img/radio-button-off-outline.svg">
            </div>
            <div class="goods-image">
                <figure>
                    <img src="@/assets/img/Tie_Guan_Yin_Oolong.jpeg">
                </figure>
            </div>
            <div class="wrap-right">
                <div class="goods-title">
                    <span>ENGLISH BREAKFAST (BLACK TEA)</span>
                </div>
                <div class="option">
                    <div class="goods-price">
                        <span>$11.99</span>
                    </div>
                    <div class="number">
                        <span>-</span>
                        9
                        <span>+</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="goods-wrap">
            <div class="select">
                <img src="@/assets/img/radio-button-off-outline.svg">
            </div>
            <div class="goods-image">
                <figure>
                    <img src="@/assets/img/Tie_Guan_Yin_Oolong.jpeg">
                </figure>
            </div>
            <div class="wrap-right">
                <div class="goods-title">
                    <span>ENGLISH BREAKFAST (BLACK TEA)</span>
                </div>
                <div class="option">
                    <div class="goods-price">
                        <span>$11.99</span>
                    </div>
                    <div class="number">
                        <span>-</span>
                        9
                        <span>+</span>
                    </div>
                </div>
            </div>
        </div>
        <TabBar></TabBar>
    </div>
</template>

<script>
import TabBar from '@/components/common/TabBar.vue'
export default {
    name: "Cart",
    components: { TabBar, }
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
        width: 35px;
        display: flex;
        align-items: center;
        filter: invert(84%) sepia(16%) saturate(1501%) hue-rotate(90deg) brightness(89%) contrast(82%);
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
        .goods-title{
            padding: 5px;
        }
        .option{
            display: flex;
            justify-content: space-between;
            
            .goods-price{
                width: 80px;
                span{
                    color: rgb(74, 210, 148);
                }
            }
            .number{
                width: 80px;
                display: flex;
                justify-content: space-around;

                span{
                    width: 15px;
                }
            }
        }
    }
}
</style>