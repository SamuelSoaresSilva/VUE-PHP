<script setup>
  const props = defineProps(['name','price','image'])
</script>

<template>
    <a href="#">
      <div>
        <div class="card">
          <img
            :src="image" :alt="name+' image'"
            class="object-fit-cover"
          >
        </div>
        <div class="roboto-bold border bg-dark d-flex flex-column px-3 py-2 text-light">
          <span class="">
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

.card{
  width: 16rem;
}

</style>