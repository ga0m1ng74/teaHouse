<template>
    <header>
        <img src="@/assets/img/chevron-back-outline.svg" alt="back" class="svg-color-vue" @click="$router.go(-1)">
    </header>
    <section class="page">
        <div class="page-title">
            <span>Sign up</span>
        </div>
        <div class="register-wrap">
            <div class="phone">
                <span>+61</span>
                <input type="number" placeholder="your number" class="phone-field" v-model="phoneNumber">
                <button @click="btnSendHandler" :disabled="isDisabled">{{ btnSendMessage }}</button>
            </div>
            <div class="sms-code">
                <input type="number" placeholder="code" name="code" class="sms-field">
                <button>VERIFY</button>
            </div>
        </div>
    </section>
    <div class="message">
        <div class="sub-message">
            <span>
                We will send an SMS to verify your phone.
                Please enter the code.
            </span>
            <img src="@/assets/img/mail-unread-outline.svg" alt="message" class="svg-color-vue">
        </div>
    </div>
</template>

<script>
import { ref,onBeforeMount } from 'vue'
export default {
    setup() {
        let buttonSend = {
            msg:'SEND',
            counter:100,
        }
        let reg = /^(4|5)\d{8}$/
        let phoneNumber = ref('')
        let timer
        let btnSendMessage = ref('')
        let isDisabled = ref(false)
        /**
         * hook
         */
        onBeforeMount(() => {
            btnSendMessage.value = buttonSend.msg
        })
        /**
         * method
         */
        const btnSendHandler = ()=>{
            //phone number is correct?
            // console.log('btnSendHandler');
            if(!reg.test(phoneNumber.value)){
                alert('please check your phone number')
            }else{
                //correct
                isDisabled.value = true
                btnSendMessage.value = buttonSend.counter
                timer = setInterval(() => {
                    counterDown()
                }, 1000)
            }
        }
        const counterDown = ()=>{
            btnSendMessage.value = --buttonSend.counter
            if(buttonSend.counter < 0){
                clearInterval(timer)
                isDisabled.value = false
                buttonSend.counter = 100
                btnSendMessage.value = buttonSend.msg
            }
        }

        return {
            isDisabled,
            phoneNumber,
            btnSendMessage,
            btnSendHandler
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

.page {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.page-title {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 45px;

    span {
        font-size: 30px;
        font-weight: bold;
    }
}

.register-wrap {
    width: 80%;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 50px;

    .phone {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 20px;
        height: 50px;

        span {
            width: 50px;
        }

        input {
            outline: none;
            border: none;
            border-bottom: 1px solid rgb(74, 210, 148);
            text-align: center;
            width: 150px;
            font-size: 20px;
        }

        button {
            border: none;
            color: #fff;
            background-color: rgb(74, 210, 148);
            width: 100px;
            height: 30px;
            border-radius: 10px;
        }
    }

    .sms-code {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 20px;
        height: 50px;

        input {
            outline: none;
            border: none;
            border-bottom: 1px solid rgb(74, 210, 148);
            text-align: center;
            width: 200px;
            font-size: 20px;
        }

        button {
            border: none;
            color: #fff;
            background-color: rgb(74, 210, 148);
            width: 100px;
            height: 30px;
            border-radius: 10px;
        }
    }
}

.message {
    margin-top: 100px;
    display: flex;
    justify-content: center;
    .sub-message{
        width: 70%;
    }
    span {
        font-size: 15px;
    }
    img{
        width: 22px;
    }
}
</style>