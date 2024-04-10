<script setup>
const props = defineProps(['name','price','image','id'])
console.log(props.image)
</script>

<template>
  <div class="product-card card rounded-0">
    <div class="card rounded-0">
      <img
        :src="props.image" :alt="name+' image'"
        class="object-fit-cover"
      >
    </div>
    <div class="roboto-bold border bg-dark d-flex flex-column px-3 py-2 text-light">
          <span>
            {{ props.name }}
          </span>
      <span class="text-end">
            R$ {{ props.price }}
          </span>
    </div>
  </div>
</template>

<style scoped>

</style>