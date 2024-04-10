<script setup>
import AppViewPage from '@/components/AppViewPage.vue'
import CartPageCard from '@/components/Cart/CartPageCard.vue'

</script>

<template>
<app-view-page>
  <img
    src='../assets/images/backgroundGold.jpg'
    class="w-100 z-n1"
    alt="background"
    @dragstart.prevent
  >
  <cart-page-card>

  </cart-page-card>

</app-view-page>
</template>

<style scoped>

</style>