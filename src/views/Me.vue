<template>
    <div>
        <div class="page-title">
            <span>Customer Login</span>
        </div>
        <div class="login" v-if="loginShowFlag">
            <form action="/me/login" method="post">
                <div class="login-email">
                    <div class="login-title"><label>E-MAIL</label></div>
                    <input type="email" placeholder="your@email.com" name="customer[email]" class="field">
                </div>
                <div class="login-pwd">
                    <div class="login-title"><label>PASSWORD</label></div>
                    <input type="password" name="customer[password]" class="field">
                </div>
                <div class="submit">
                    <input type="submit" value="SUBMIT">
                </div>
                <a @click="loginShowFlag = !loginShowFlag">Forgot your password?</a>
            </form>
            <div class="sign-up">
                <p>
                    New customer? <a href="/register">Sign up for an account</a>
                </p>
            </div>
        </div>
        <div class="recover-pwd" v-else>
            <form action="#" method="post">
                <div class="recover-email">
                    <div class="recover-title"><label>E-MAIL</label></div>
                    <input type="email" name="email" class="field" placeholder="your@email.com">
                </div>
                <div class="message">
                    <p>We’ll send you an email to reset your password.</p>
                </div>
                <div class="submit">
                    <input type="submit" value="SUBMIT">
                </div>
                <a @click="loginShowFlag = !loginShowFlag">
                    <span>or cancel</span>
                </a>
            </form>
        </div>
        <TabBar></TabBar>
    </div>
</template>

<script>
import TabBar from '@/components/common/TabBar.vue'
import { ref } from 'vue'
export default {
    name: "Me",
    components: { TabBar },
    setup() {
        let loginShowFlag = ref(true)
        return {
            loginShowFlag
        }
    }
}
</script>

<style lang="less" scoped>
.page-title {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
    margin-bottom: 20px;

    span {
        font-size: 30px;
        font-weight: bold;
    }
}

.login {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    label {
        font-size: 15px;
        font-weight: bold;
        margin-block-start: 20px;
    }

    form {
        width: 80%;
        text-align: center;
        margin-block-end: 100px;
    }

    .login-email {
        margin-bottom: 40px;
    }

    .login-title {
        height: 40px;
        display: flex;
        align-items: center;
    }

    .field {
        height: 40px;
        width: 100%;
        border: none;
        outline: none;
        border-radius: none;
        border-bottom: 1px solid rgb(74, 210, 148);
        text-align: center;
    }

    .submit {
        width: 80%;
        height: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 30px;

        input {
            width: 100%;
            height: 40px;
            background-color: rgb(74, 210, 148);
            color: #fff;
            font-size: 20px;
            font-weight: bold;
            border: none;
            border-radius: 10px;
        }
    }
    a{
        color: rgb(74, 210, 148);
    }
}

.recover-pwd {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    form {
        width: 80%;
        text-align: center;
        margin-block-end: 100px;
    }

    .recover-email {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .recover-title {
            width: 100%;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: left;
            label {
                font-size: 15px;
                font-weight: bold;
                margin-block-start: 20px;
            }
        }

        input {
            width: 100%;
            height: 40px;
            border: none;
            border-bottom: 1px solid rgb(74, 210, 148);
            outline: none;
            text-align: center;
        }
    }
    .message{
        margin-top: 71px;
        
    }
    .submit {
        width: 80%;
        height: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 30px;

        input {
            width: 100%;
            height: 40px;
            background-color: rgb(74, 210, 148);
            color: #fff;
            font-size: 20px;
            font-weight: bold;
            border: none;
            border-radius: 10px;
        }
    }
    span{
        color: rgb(74, 210, 148);
    }
}
</style>