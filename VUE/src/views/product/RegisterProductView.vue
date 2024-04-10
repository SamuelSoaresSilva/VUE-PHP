<script setup>
import UserUpdateForm from "@/components/user/UserUpdateForm.vue";
import AppBackgroundGif from "@/components/AppBackgroundGif.vue";
</script>

<template>

  <AppBackgroundGif>
    <section class="row w-75 gap-2">
      <section class="col bg-dark bg-opacity-50 rounded-4 p-4 background-blur align-content-center">
<!--        formularioProduto-->
        <user-update-form></user-update-form>
      </section>
    </section>
  </AppBackgroundGif>

</template>

<style scoped>

.background-gif{
  background-image: url("@/assets/images/backgroundWine.jpg");
}
</style>
