<script setup>
import AppBackgroundGif from "@/components/AppBackgroundGif.vue";
import ProductRegisterForm from "@/components/product/ProductRegisterForm.vue";
import AppViewPage from '@/components/AppViewPage.vue'
</script>

<template>


    <app-view-page>
      <AppBackgroundGif>
      <section class="row w-75 gap-2">
        <section class="col bg-dark bg-opacity-50 rounded-4 p-4 background-blur align-content-center">
          <ProductRegisterForm/>
        </section>
      </section>
      </AppBackgroundGif>
    </app-view-page>



</template>

<style scoped>

.background-gif{
  background-image: url("@/assets/images/backgroundWine.jpg");
}
</style>
