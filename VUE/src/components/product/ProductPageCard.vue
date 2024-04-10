<script setup>

const props = defineProps(['name','description','price','quantity','category','image','color','id'])

</script>

<template>
  <section>
    <section class="px-4 pt-4">
      <div class="overflow-x-scroll w-100 images-container d-flex align-items-center">
          <img v-for="imageFromArray in props.image" :key="imageFromArray" :src=imageFromArray class="w-75 img-fluid" alt="Not found" @dragstart.prevent/>
      </div>


      <div class="d-flex flex-column py-2 roboto-bold">
        <span class="fs-1"> {{ props.name }}</span>
        <span class="fs-5">{{ props.quantity }} Units left</span>
        <p class="fs-3">R$ {{ props.price }}</p>

        <div class="justify playfair-display fw-bold d-flex">
        {{ props.description}}
        </div>

      </div>

    </section>


  </section>
</template>

<style scoped>
section{
  padding: 0;
}
.images-container::-webkit-scrollbar{
  height: 0.3rem;
}
.images-container::-webkit-scrollbar-thumb{
  background-color: black;
}
.justify{
  text-align: justify;
}
</style>
