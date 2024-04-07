<script setup>
const props = defineProps(['title'])
</script>

<template>
  <div class="p-4">
    <span class="fs-2 roboto-bold">
    {{ props.title}}
    </span>
    <section class="products-container d-flex">
      <div class="d-flex overflow-x-scroll">
        <slot/>
      </div>
    </section>
  </div>
</template>

<style scoped>


</style>