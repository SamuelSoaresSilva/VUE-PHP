<template>
    <div>
      <h2 class="fw-bolder pb-2">Edit Product</h2>
      <form @submit.prevent="submitForm" class="row g-3">
        <div class="col-md-8">
          <label for="editProductName">Product Name:</label>
          <input type="text" v-model="editedProductName" id="editProductName" class="form-control custom-input" required>
        </div>
  
        <div class="col-md-6">
          <label for="editProductDescription">Description:</label>
          <textarea v-model="editedProductDescription" id="editProductDescription" class="form-control custom-input" required></textarea>
        </div>
  
        <div class="col-md-6">
          <label for="editProductPrice">Price ($):</label>
          <input type="number" v-model="editedProductPrice" id="editProductPrice" class="form-control custom-input" required>
        </div>
  
        <div class="col-md-6">
          <label for="editProductCategory">Category:</label>
          <select v-model="editedProductCategory" id="editProductCategory" class="form-select custom-select" required>
            <option value="" disabled>Select category</option>
            <option value="Sneakers">Sneakers</option>
            <option value="Casual">Casual</option>
            <option value="Sports">Sports</option>
          </select>
        </div>
  
        <div class="col-md-6">
          <label for="editProductQuantity">Quantity:</label>
          <input type="number" v-model="editedProductQuantity" id="editProductQuantity" class="form-select custom-select" required>
        </div>
  
        <div class="col-12 text-center">
          <button type="submit" class="btn text-light roboto-bold fs-3">Save Changes</button>
        </div>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const editedProductName = ref();
  const editedProductDescription = ref();
  const editedProductPrice = ref();
  const editedProductCategory = ref('');
  const editedProductQuantity = ref();
  
  const submitForm = () => {
    const editedFormData = {
      name: editedProductName.value,
      description: editedProductDescription.value,
      price: parseFloat(editedProductPrice.value),
      category: editedProductCategory.value,
      quantity: parseInt(editedProductQuantity.value)
    };
  
    console.log('Changes Submitted:', editedFormData);
  
    clearForm();
  };
  
  const clearForm = () => {
    editedProductName.value = '';
    editedProductDescription.value = '';
    editedProductPrice.value = 0;
    editedProductCategory.value = '';
    editedProductQuantity.value = 0;
  };
  </script>
  
  <style scoped>
  .form-control {
    margin-bottom: 15px;
  }
  </style>
  