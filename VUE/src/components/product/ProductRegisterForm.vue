<script setup>
import { ref } from 'vue';


const productName = ref('');
const productDescription = ref('');
const productPrice = ref(0);
const productCategory = ref('');
const productQuantity = ref(0);
const productImages = ref([])

const submitForm = () => {
  const formData = {
    name: productName.value,
    description: productDescription.value,
    price: parseFloat(productPrice.value),
    category: productCategory.value,
    quantity: parseInt(productQuantity.value),
    images: productImages(productImages.value)
  };

  console.log('Formulário enviado:', formData);

  clearForm();
};

const clearForm = () => {
  productName.value = '';
  productDescription.value = '';
  productPrice.value = 0;
  productCategory.value = '';
  productQuantity.value = 0;
};
</script>

<template>
    <div>
      <h2 class="fw-bolder">Product Register</h2>
      <form @submit.prevent="submitForm" class="row g-3">
        <div class="col-md-12">
          <label for="productName">Product Name:</label>
          <input type="text" v-model="productName" id="productName" class="form-control custom-input" required>
        </div>
  
        <div class="col-md-8">
          <label for="productPrice">Price ($):</label>
          <input type="number" v-model="productPrice" id="productPrice" class="form-control custom-input" step="0.01" min="0.01" required>
        </div>
  
        <div class="col-md-4">
          <label for="productQuantity">Quantity:</label>
          <input type="number" v-model="productQuantity" id="productQuantity" class="form-select custom-select" required>
        </div>

        <div class="col-md-4">
          <label for="productCategory">Category:</label>
          <select v-model="productCategory" id="productCategory" class="form-select custom-select" required>
            <option value="" disabled>Select category</option>
            <option value="Sneakers">Sneakers</option>
            <option value="Casual">Casual</option>
            <option value="Sports">Sports</option>
          </select>
        </div>

        <div class="col-md-8">
          <label for="productImages">Product images:</label>
          <input type="text" v-model="productImages" id="productImages" class="form-control custom-input" required>
        </div>

        <div class="col-md-12">
          <label for="productDescription" class="max-characters">Description:</label>
          <textarea v-model="productDescription" id="productDescription" class="form-control custom-input" maxlength="200" required></textarea>
        </div>
  
        <div class="col-12 text-center">
          <button type="submit" class="btn text-light roboto-bold fs-3">Register</button>
        </div>
      </form>
    </div>
  </template>
  
 
  
<style scoped>

</style>
  