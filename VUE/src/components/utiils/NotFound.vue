<script setup>
import { useAddLetter } from '@/composables/useAddLetter.js'
import { onMounted } from 'vue'

const {
  addLetter,
  msg
} = useAddLetter();

    const message = ('Not Found')

onMounted(() => addLetter(message))
</script>

<template>
  <section class="background-gif ">
      <div class="blur-container d-flex entire-page-container align-items-center justify-content-center text-light">
        <router-link class="roboto-bold fs-1 header-title"
        :to="{ name: 'home' }"
        >
          [ {{ msg }} ].
        </router-link>
      </div>
  </section>
</template>
<style scoped>
.background-gif{
  background-image: url("@/assets/images/backgroundGif.gif");
  background-size: cover;
  background-repeat: no-repeat;
}
.blur-container{
  backdrop-filter: blur(3rem);
}
</style>
