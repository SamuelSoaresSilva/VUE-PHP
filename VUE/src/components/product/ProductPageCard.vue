<script setup>
const props = defineProps(['name','description','price','quantity','category','image'])
</script>

<template>
  <section class="row w-75 gap-2 m-4 bg-dark bg-opacity-10">
    <section class="col-lg">
      <div>
        <img :src="props.image" alt="Not Found Image" class="img-fluid">
      </div>
    </section>
    <section class="col">
        <h2 class="fs-1 text-dark roboto-bold">
          {{ props.name || 'Product Not Found' }}
        </h2>
        <span class="fs-4 ">
          R$ {{ props.price }}
        </span>
      <span>
        {{ props.description }}
      </span>
      <span>
        {{ props.quantity }}
      </span>
    </section>
  </section>
</template>

<style scoped>
section{
  padding: 0;
}
</style>
