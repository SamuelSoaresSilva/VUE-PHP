<script setup>

</script>

<template>
  <div>
    <h2>Registro de Usuário</h2>
    <form @submit.prevent="submitForm" class="d-flex flex-column gap-3">
      <div class="d-flex flex-column">
        <label for="nome" >Nome completo:</label>
        <input type="text" v-model="nome" id="nome" name="nome" required>
      </div>
      <div class="d-flex flex-column">
        <label for="email">E-mail:</label>
        <input type="email" v-model="email" id="email" name="email" required>
      </div>

      <div class="d-flex flex-column">
        <label for="senha">Senha:</label>
        <input type="password" v-model="senha" id="senha" name="senha" required>
      </div>

      <div class="text-center">
        <button type="submit" class="btn text-light roboto-bold">Registrar</button>
      </div>
    </form>
  </div>
</template>

<style scoped>

</style>