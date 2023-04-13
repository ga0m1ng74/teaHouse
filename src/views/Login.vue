<template>
    <header>
        <img src="@/assets/img/chevron-back-outline.svg" alt="back" class="svg-color-vue" @click="$router.push('/')">
    </header>
    <div>
        <div class="page-title">
            <span>Customer Login</span>
        </div>
        <div class="login" v-if="loginShowFlag">
            <div class="form">
                <van-form @submit="onSubmit">
                    <van-cell-group inset>
                        <van-field v-model="username" name="username" label="username" placeholder="admin@test.com"
                            :rules="[{ validator, message: 'incorrect username' }]" />
                        <van-field v-model="password" type="password" name="password" label="password" placeholder="123456"
                            :rules="[{ pattern, message: 'incorrect password' }]" />
                    </van-cell-group>
                    <div style="margin: 15px;">
                        <van-button block round native-type="submit" color="#51d196">
                            <span>Login</span>
                        </van-button>
                    </div>
                </van-form>
                <a @click="loginShowFlag = !loginShowFlag">Forgot your password?</a>
            </div>
            <div class="sign-up">
                <p>
                    New customer? <a href="/register">Sign up for an account</a>
                </p>
            </div>
        </div>
        <div class="recover-pwd" v-else>
            <div class="form">
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
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
import axios from 'axios'
import { showToast } from 'vant';
import router from '@/router';
import { useUserStore } from '@/stores';
export default {
    name: "Login",
    setup() {
        let loginShowFlag = ref(true)
        let username = ref('')
        let password = ref('')
        //pinia
        const userStore = useUserStore()
        //
        const pattern = /\d{6}/
        const validator = (val) => /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/.test(val)
        const onSubmit = async () => {
            // console.log('onSubmit',username.value,password.value)
            try {
                const response = await axios({
                    url: '/api/login',
                    method:'post',
                    data: {
                        username:username.value,
                        password:password.value
                    }
                })
                showToast({message:response.data.data.msg,overlay:true})
                //login failure
                if(!response.data.data.success) return
                //login success
                console.log(response.data.data)
                
                //pinia
                userStore.loginStatus = response.data.data.success
                userStore.person = response.data.data
                //local storage
                // localStorage.setItem('username',userStore.person.data[0].username)
                // localStorage.setItem('token',userStore.person.data[0].token)
                localStorage.setItem('userInfo',JSON.stringify(userStore.person.data[0]))
                //jump to my login page
                router.push('/me')
            } catch (error) {
                console.log(error.message)
            }
        }

        return {
            loginShowFlag,
            username,
            password,
            pattern,
            onSubmit,
            validator,
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

    .form {
        width: 80%;
        text-align: center;
        margin-block-end: 100px;

        span {
            color: #fff;
            font-size: 20px;
            font-weight: bold;
        }
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

    a {
        color: rgb(74, 210, 148);
    }
}

.recover-pwd {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    .form {
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

    .message {
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
            height: 45px;
            background-color: rgb(74, 210, 148);
            color: #fff;
            font-size: 20px;
            font-weight: bold;
            border: none;
            border-radius: 40px;
        }
    }

    span {
        color: rgb(74, 210, 148);
    }
}
</style>