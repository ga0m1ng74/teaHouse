<template>
    <header>
        <div class="logo" @click="$router.push('/')">
            <img src="@/assets/img/tea.png" alt="tea-logo">
        </div>
        <div class="search">
            <img src="@/assets/img/search-outline.svg" alt="search">
            <input type="input" placeholder="Oolong tea" v-model="searchKeyWord" @keyup.enter="onEnterPress">
        </div>
        <div class="support">
            <img src="@/assets/img/chatbubbles-outline.svg" alt="help center">
        </div>
    </header>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
export default {
    name: 'Header',
    setup() {
        let searchKeyWord = ref('')
        const router = useRouter()
        const onEnterPress = () => {
            console.log('press enter')
            router.push(`/search?q=${searchKeyWord.value}`)
        }
        return {
            searchKeyWord,
            onEnterPress
        }
    }
}
</script>

<style lang="less" scoped>
header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 1.3rem;
    background-color: rgb(74, 210, 148);
    display: flex;
    justify-content: space-around;
    align-items: center;
    z-index: 99;

    .logo {
        width: .7111rem;
        display: flex;
        justify-content: center;

        img {
            width: .7111rem;
            height: .7111rem;
        }
    }

    .search {
        width: 4rem;
        display: flex;
        background-color: #fff;
        border-radius: 15px;

        img {
            display: block;
            width: .4rem;
        }

        input {
            width: 3.5rem;
            outline: none;
            border: none;
            height: 0.7rem;
            border-radius: 0 15px 15px 0;
        }
    }

    .support {
        display: flex;
        align-content: center;

        img {
            width: .7111rem;
            height: .7111rem;
        }
    }
}
</style>