<script setup>
  const props = defineProps(['name','price','image'])
</script>

<template>
    <a href="#">
      <div class="product-card card rounded-0">
        <div class="card rounded-0">
          <img
            :src="image" :alt="name+' image'"
            class="object-fit-cover"
          >
        </div>
        <div class="roboto-bold border bg-dark d-flex flex-column px-3 py-2 text-light">
          <span class="max">
            {{props.name}}
          </span>
          <span class="text-end">
            R$ {{ props.price }}
          </span>
        </div>
      </div>
    </a>
</template>

<style scoped>

.product-card{
  width: 16rem;
  transition: linear 0.2s;
}

.product-card:hover{
  width: 16.5rem;
  height: auto;
}

</style>