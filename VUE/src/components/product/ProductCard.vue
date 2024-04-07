<script setup>
  const props = defineProps(['name','price','image'])
</script>

<template>
  <div class="d-inline-block p-0">
    <div>
      <img
        :src="image" :alt="name+' image'"
        class="w-100"
      >
    </div>
    <div class="bg-dark-subtle d-flex flex-column p-2 w-100">
      <span class="roboto-bold">
        {{props.name}}
      </span>
      <span class="text-end">
        R$ {{ props.price }}
      </span>
    </div>
  </div>
</template>

<style scoped>


</style>