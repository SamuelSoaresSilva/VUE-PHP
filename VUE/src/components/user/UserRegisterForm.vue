<script setup>

const countries = [
  { code: 'BR', name: 'Brazil' },
  { code: 'US', name: 'United States' },
  { code: 'CA', name: 'Canada' },
  { code: 'AU', name: 'Australia' },
  { code: 'GB', name: 'United Kingdom' },
];

</script>

<template>
  <div>
    <h2 class="fw-bolder pb-2">Register</h2>
    <form @submit.prevent="submitForm" class="row g-3">
      <div class="col-md-8">
        <label for="nome" >Name:</label>
        <input type="text" v-model="nome" id="nome" name="nome" class="form-control custom-input" required>
      </div>

      <div class="col-md-4">
        <label for="dataNascimento" >Birthday:</label>
        <div class="custom-date-input">
          <input type="date" v-model="dataNascimento" id="dataNascimento" name="dataNascimento" class="form-control custom-input date-input" required>
        </div>
      </div>

      <div class="col-md-6">
        <label for="email" >E-mail:</label>
        <input type="email" v-model="email" id="email" name="email" class="form-control custom-input" required>
      </div>

      <div class="col-md-6">
        <label for="senha" >Password:</label>
        <input type="password" v-model="senha" id="senha" name="senha" class="form-control custom-input" required>
      </div>

      <div class="col-md-6">
        <label for="pais" >Country:</label>
        <select v-model="pais" id="pais" name="pais" class="form-select custom-select" required>
          <option value="" disabled selected>Select your country</option>
          <option v-for="country in countries" :key="country.code" :value="country.name">{{ country.name }}</option>
        </select>
      </div>

      <div class="col-md-6">
        <div class="form-check">
          <input type="checkbox" v-model="aceitaTermos" id="aceitaTermos" name="aceitaTermos" class="form-check-input" required>
          <label for="aceitaTermos" class="form-check-label small-text"><small>I accept the terms <br>and conditions</small></label>
        </div>
      </div>

      <div class="col-12 text-center">
        <button type="submit" class="btn text-light roboto-bold fs-3">Register</button>
      </div>
    </form>
  </div>
</template>

