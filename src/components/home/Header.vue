<template>
    <header>
        <div class="logo">
            <img src="@/assets/img/tea.png" alt="tea-logo">
        </div>
        <div class="search">
            <img src="@/assets/img/search-outline.svg" alt="search">
            <input type="text" placeholder="Oolong tea">
        </div>
        <div class="support">
            <img src="@/assets/img/chatbubbles-outline.svg" alt="help center">
        </div>
    </header>
</template>

<script>
export default {
    name: 'Header'
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
}

.logo {
    width: 1.3rem;
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
    img{
        display: block;
        width: .4rem;
    }
    input{
        width: 3.5rem;
        outline: none;
        border: none;
        height: 0.7rem;
        border-radius: 0 15px 15px 0;
    }
    input:focus{
        
    }
}

.support {
    img {
        width: .7111rem;
        height: .7111rem;
    }
}
</style>