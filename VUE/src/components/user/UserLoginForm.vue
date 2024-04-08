<script setup>
  
  </script>

<template>
    <div>
      <h2>Login</h2>
      <form @submit.prevent="submitForm" class="row g-3">
        <div class="col-md-6">
          <label for="email" class="form-label">E-mail:</label>
          <input type="email" v-model="email" id="email" name="email" class="form-control custom-input" required>
        </div>
  
        <div class="col-md-6">
          <label for="senha" class="form-label">Password:</label>
          <input type="password" v-model="senha" id="senha" name="senha" class="form-control custom-input" required>
        </div>
  
        <div class="col-12 text-center">
        <button type="submit" class="btn text-light roboto-bold">Enter</button>
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
  
  /* Manter estilo de campo transparente ao focar */
  .custom-input:focus-visible {
    background-color: transparent; /* Manter o fundo transparente ao focar */
  }
  
  /* Estilo para o texto digitado */
  .custom-input::value {
    color: #ffffff; /* Cor do texto digitado */
  }
  </style>
  