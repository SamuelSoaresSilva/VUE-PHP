<script setup>

const countries = [
  { code: 'BR', name: 'Brasil' },
  { code: 'US', name: 'Estados Unidos' },
  { code: 'CA', name: 'Canadá' },
  { code: 'AU', name: 'Austrália' },
  { code: 'GB', name: 'Reino Unido' },
];

</script>

<template>
  <div>
    <h2>User Registration</h2>
    <form @submit.prevent="submitForm" class="row g-3">
      <div class="col-md-8">
        <label for="nome" class="form-label">Full Name:</label>
        <input type="text" v-model="nome" id="nome" name="nome" class="form-control custom-input" required>
      </div>

      <div class="col-md-4">
        <label for="dataNascimento" class="form-label">Date of Birth:</label>
        <div class="custom-date-input">
          <input type="date" v-model="dataNascimento" id="dataNascimento" name="dataNascimento" class="form-control custom-input date-input" required>
        </div>
      </div>

      <div class="col-md-6">
        <label for="email" class="form-label">E-mail:</label>
        <input type="email" v-model="email" id="email" name="email" class="form-control custom-input" required>
      </div>

      <div class="col-md-6">
        <label for="senha" class="form-label">Password:</label>
        <input type="password" v-model="senha" id="senha" name="senha" class="form-control custom-input" required>
      </div>

      <div class="col-md-6">
        <label for="pais" class="form-label">Country:</label>
        <select v-model="pais" id="pais" name="pais" class="form-select custom-select" required>
          <option value="" disabled selected>Select your country</option>
          <option v-for="country in countries" :key="country.code" :value="country.name">{{ country.name }}</option>
        </select>
      </div>

      <div class="col-md-6">
        <div class="form-check">
          <input type="checkbox" v-model="aceitaTermos" id="aceitaTermos" name="aceitaTermos" class="form-check-input">
          <label for="aceitaTermos" class="form-check-label small-text">I accept the terms and conditions</label>
        </div>
      </div>

      <div class="col-12 text-center">
        <button type="submit" class="btn text-light roboto-bold">Register</button>
      </div>
    </form>
  </div>
</template>

<style scoped>
.custom-input {
  background-color: transparent; /* Fundo transparente */
  border: none; /* Remover a borda padrão */
  border-bottom: 1px solid #ffffff; /* Linha branca na parte inferior */
  border-radius: 0; /* Remover o arredondamento */
  color: #ffffff; /* Cor do texto */
  padding: 8px 0; /* Espaçamento interno */
  box-shadow: none; /* Remover sombra */
  outline: none; /* Remover contorno ao focar */
}

.custom-input::placeholder {
  color: #ffffff; /* Cor do placeholder */
  opacity: 0.5; /* Opacidade do placeholder */
}

/* Estilo para remover contorno ao focar */
.custom-input:focus {
  border-color: #ffffff; /* Cor da linha inferior ao focar */
  box-shadow: none; /* Remover sombra ao focar */
}

/* Estilo para o seletor de data */
.custom-input[type="date"] {
  color: #ffffff; /* Cor do texto */
  background-color: transparent; /* Fundo transparente */
  border: none; /* Remover a borda padrão */
  border-bottom: 1px solid #ffffff; /* Linha branca na parte inferior */
}

/* Estilo para o seletor de país */
.custom-select {
  color: #ffffff; /* Cor do texto */
  background-color: transparent; /* Fundo transparente */
  border: none; /* Remover a borda padrão */
  border-bottom: 1px solid #ffffff; /* Linha branca na parte inferior */
}

/* Estilo para opções do seletor de país */
.custom-select option {
  color: #ffffff; /* Cor do texto das opções */
  background-color: #000000; /* Cor de fundo das opções */
}

.form-check-input {
  margin-top: 0.3rem; /* Ajuste do posicionamento do checkbox/radio */
}

/* Remover contorno de foco ao clicar */
.custom-input:focus-visible {
  outline: none;
}

/* Manter estilo de campo transparente ao focar */
.custom-input:focus-visible {
  background-color: transparent; /* Manter o fundo transparente ao focar */
}

/* Estilo para o seletor de data */
.date-input {
  color: #ffffff; /* Cor do texto */
  background-color: transparent; /* Fundo transparente */
  border: none; /* Remover a borda padrão */
  border-bottom: 1px solid #ffffff; /* Linha branca na parte inferior */
}

/* Estilo para opções do seletor de data (não suportado em todos os navegadores) */
.date-input::-webkit-calendar-picker-indicator {
  filter: invert(1); /* Inverter as cor
  es do ícone */
}
.small-text {
  font-size: 0.8em; /* Adjust font size for smaller text */
}
</style>