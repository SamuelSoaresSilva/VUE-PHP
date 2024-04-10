<script setup>
const props = defineProps(['name','price','image','id','category'])
console.log(props.image)
</script>

<template>
  <div class="product-card bg-light roboto-bold">
    <span class="fs-3 p-2 text-end">
      <router-link
        :to="{
          name: 'product-page',
          params: {id: props.id}
        }">
        [ {{ props.name }} ].
      </router-link>
    </span>
    <div class="d-flex flex-row border-bottom border-2">
      <img
        :src="props.image" :alt="name+' image'"
        class="img-card"
        @dragstart.prevent
      >
      <div class="d-flex flex-column w-100 p-2">
          <span class="d-flex flex-row gap-2">
            Category: <span class="playfair-display fw-bold">{{ props.category }}</span>
          </span>
        <div class="d-flex justify-content-between">
          <span class="">
            R$ {{ props.price }}
          </span>
          <button class="bi-trash btn p-0">
          </button>
        </div>
        <div>
          ID: {{ props.id }}
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped>
.product-card{
  padding: 1rem;
}
.img-card{
  max-height: 15rem;
  max-width: 15rem;
}
@media only screen and (max-width: 600px) {
  .img-card{
    max-height: 7rem;
    max-width: 7rem;
  }
  .product-card{
    padding: 0;
  }

}
</style>