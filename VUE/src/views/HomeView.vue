<script>

import { defineComponent } from 'vue'
import AppViewPage from '@/components/AppViewPage.vue'

export default defineComponent({
  components: { AppViewPage }
})
</script>

<template>
    <AppViewPage>
      <img
        src='../assets/images/headerBackGround.jpg'
        class="img-fluid w-100 z-n1"
        alt="background"
        @dragstart.prevent
      >

    </AppViewPage>
</template>
