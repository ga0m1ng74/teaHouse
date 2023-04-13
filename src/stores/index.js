import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

//setup store
export const useUserStore = defineStore('profile', () => {

    let loginStatus = ref(false) //login status
    let person = ref([])
    return {
        loginStatus,
        person,
    }
})