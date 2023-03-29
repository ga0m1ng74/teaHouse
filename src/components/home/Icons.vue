<template>
    <div>
        <ul class="Section-Icons">
            <li v-for="item in iconList" :key="item.id" class="icons">
                <a href="#">
                    <div class="icon-warper">
                        <div class="icons-img">
                            <img :src="item.imgUrl" :alt="item.title">
                        </div>
                        <div class="icons-title">
                            <span>{{ item.title }}</span>
                        </div>
                    </div>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
import { } from 'vue'
export default {
    props: ['iconList'],
    setup(props) {
        return {

        }
    }
}
</script>

<style lang="less" scoped>
.Section-Icons {
    margin-top: 2px;
    display: flex;

    .icons {
        width: 25%;
        // display: flex;
        // flex-direction: column;

        .icon-warper {

            // outline: 1px solid #4ad294;
            .icons-img {
                display: flex;
                justify-content: center;

                img {
                    width: 0.8rem;
                }
            }

            .icons-title {
                font-size: .25rem;
                display: flex;
                flex: content;
                justify-content: center;
            }
        }
    }
}</style>