<template>
  <form @submit.prevent="submitForm" class="row g-3">
    <div class="col-md-8">
      <label for="editNome" class="form-label">Name:</label>
      <input type="text" v-model="editedUser.nome" id="editNome" name="editNome" class="form-control custom-input" required>
    </div>

    <div class="col-md-6">
      <label for="editEmail" class="form-label">E-mail:</label>
      <input type="email" v-model="editedUser.email" id="editEmail" name="editEmail" class="form-control custom-input" required>
    </div>

    <div class="col-md-6">
      <label for="editSenha" class="form-label">New Password:</label>
      <input type="password" v-model="editedUser.senha" id="editSenha" name="editSenha" class="form-control custom-input" required>
    </div>

    <div class="col-md-6">
      <label for="editPais" class="form-label">Country:</label>
      <select v-model="editedUser.pais" id="editPais" name="editPais" class="form-select custom-select" required>
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
      <button type="submit" class="btn text-light roboto-bold">Update</button>
    </div>
  </form>
</template>

<script setup>
import { ref } from 'vue';

const editedUser = ref({
  nome: '',
  email: '',
  senha: '',
  dataNascimento: '',
  pais: '',
  aceitaTermos: false
});

const countries = [
  { code: 'BR', name: 'Brazil' },
  { code: 'US', name: 'United States' },
  { code: 'CA', name: 'Canada' },
  { code: 'AU', name: 'Australia' },
  { code: 'GB', name: 'United Kingdom' },
];

const submitForm = () => {
  
  console.log('Alterações salvas com sucesso!', editedUser.value);
};
</script>

<style scoped>
.custom-input {
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #ffffff;
  border-radius: 0;
  color: #ffffff;
  padding: 8px 0;
  box-shadow: none;
  outline: none;
}

.custom-input::placeholder {
  color: #ffffff;
  opacity: 0.5;
}

.custom-input:focus {
  border-color: #ffffff;
  box-shadow: none;
}

.date-input {
  color: #ffffff;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #ffffff;
}

.custom-select {
  color: #ffffff;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #ffffff;
}

.custom-select option {
  color: #ffffff;
  background-color: #000000;
}

.form-check-input {
  margin-top: 0.3rem;
}

.custom-input:focus-visible {
  outline: none;
}

.custom-input:focus-visible {
  background-color: transparent;
}

.switch-button {
  transition: linear 0.2s;
  color: rgb(248, 249, 250);
}

.switch-button:hover {
  color: #dfa2ad;
}

.btn-section {
  min-width: 10rem;
}
</style>
