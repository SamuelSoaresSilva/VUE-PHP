<template>
  <h2 class="fw-bolder pb-2">Update data account</h2>
  <form @submit.prevent="submitForm" class="row g-3">
    <div class="col-md-12">
      <label for="updateName">Name:</label>
      <input type="text" v-model="updateUser.name" id="updateName" name="updateName" class="form-control custom-input" >
    </div>

    <div class="col-12">
      <label for="updateEmail">E-mail:</label>
      <input type="email" v-model="updateUser.email" id="updateEmail" name="updateEmail" class="form-control custom-input" >
    </div>

    <div class="col-md-6">
      <label for="updatePassword" >New password:</label>
      <input type="text" v-model="updateUser.password" id="updatePassword" name="updatePassword" class="form-control custom-input">
    </div>
    <div class="col-md-6">
      <label for="confirmUpdatePassword" >Confirm new password:</label>
      <input type="password" v-model="updateUser.confirmPassword" id="confirmUpdatePassword" name="confirmUpdatePassword" class="form-control custom-input">
    </div>

    <div class="col">
      <label for="password" >Old password:</label>
      <input type="password" v-model="password" id="password" name="password" class="form-control custom-input" required>
    </div>


    <div class="col-12 text-center ">
      <button type="submit" class="btn text-light roboto-bold fs-3">Update</button>
    </div>
  </form>
</template>

<script setup>
import { ref } from 'vue';

const updateUser = ref({
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
});


const submitForm = () => {
  console.log('Alterações salvas com sucesso!', updateUser.value);
};
</script>

<style scoped>

</style>
