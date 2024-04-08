<script setup>
  const props = defineProps(['name','price','image','id'])
</script>

<template>
  <router-link
  :to="{
    name: 'product-page',
    params: {id: props.id}
  }">
    <div class="product-card card rounded-0">
      <div class="card rounded-0">
        <img
            :src="image" :alt="name+' image'"
            class="object-fit-cover"
        >
      </div>
      <div class="roboto-bold border bg-dark d-flex flex-column px-3 py-2 text-light">
          <span class="max">
            {{ props.name }}
          </span>
        <span class="text-end">
            R$ {{ props.price }}
          </span>
      </div>
    </div>
  </router-link>
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
