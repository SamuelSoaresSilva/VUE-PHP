<script setup>
import AppBackgroundGif from '@/components/AppBackgroundGif.vue'
import { onMounted, ref, watch } from 'vue'
import { useAddLetter } from '@/composables/useAddLetter.js'
import UserRegisterForm from '@/components/user/UserRegisterForm.vue'
import UserLoginForm from '@/components/user/UserLoginForm.vue'
import AppTitleButton from '@/components/AppTitleButton.vue'

const havesAccount = ref(false);
const loginMsg = ref("Already have an account? \nLog in by clicking below")
const registerMsg = ref("Have no account yet? \n  Create by clicking below")
const showMsg = ref(havesAccount.value ? registerMsg.value : loginMsg.value)
const {
  addLetter,
  msg,
} = useAddLetter();

onMounted(() => { addLetter(havesAccount.value ?  'Register' : 'Login')} )
watch(havesAccount,() => {
  addLetter(havesAccount.value ?  'Register' : 'Login')
  showMsg.value = havesAccount.value ? registerMsg.value : loginMsg.value
})

</script>

<template>
  <AppBackgroundGif>
    <section class="row w-75 gap-2">
      <section class="col bg-dark bg-opacity-50 rounded-4 p-4 background-blur align-content-center">
        <app-title-button title="NoStore" class="fs-4 fs-6"/>
        <span class="d-flex">
          {{ showMsg }}
        </span>

        <button @click="havesAccount = !havesAccount">
          <span class="fs-1 roboto-bold switch-button">
            [ {{ msg }} ].
          </span>
        </button>

      </section>
      <section class="col bg-dark bg-opacity-50 rounded-4 p-4 align-content-center">
        <UserRegisterForm/>
      </section>
    </section>
    <br>

  </AppBackgroundGif>
</template>

<style scoped>
.background-gif{
  background-image: url("@/assets/images/userBackgroundGif.gif");
}
.background-blur{
  backdrop-filter: blur(2rem);
}
.switch-button{
  transition: linear 0.2s;
  color: rgb(248, 249, 250);
}
.switch-button:hover{
  color: #dfa2ad;
}
</style>