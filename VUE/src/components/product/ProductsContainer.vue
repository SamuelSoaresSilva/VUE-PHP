<script setup>
const props = defineProps(['title'])
</script>

<template>
  <div class="p-4">
    <span class="fs-2 roboto-bold">
      <strong>
        {{ props.title }}
      </strong>
    </span>
    <section class="products-container d-flex">
      <div class="d-flex overflow-x-scroll products">
        <slot/>
      </div>
    </section>
  </div>
</template>

<style scoped>
.products::-webkit-scrollbar{
  height: 0.5rem;
}
.products::-webkit-scrollbar-thumb{
  background-color: grey;
}
</style>
