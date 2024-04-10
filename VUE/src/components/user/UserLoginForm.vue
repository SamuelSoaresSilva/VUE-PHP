<script setup>

</script>

<template>
    <div class="py-4">
      <h2 class="fw-bolder pb-2 ">Login</h2>
      <form @submit.prevent="submitForm" class="col">
        <div class="col pb-3">
          <label for="email" >E-mail:</label>
          <input type="email" v-model="email" id="email" name="email" class="form-control custom-input" required>
        </div>

        <div class="col pb-3">
          <label for="password" >Password:</label>
          <input type="password" v-model="password" id="password" name="password" class="form-control custom-input" required>
        </div>

        <div class="col-12 text-center">
        <button type="submit" class="btn text-light roboto-bold fs-3">Login</button>
      </div>
      </form>
    </div>
</template>
