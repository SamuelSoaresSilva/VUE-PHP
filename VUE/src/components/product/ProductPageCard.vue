<script setup>

const props = defineProps(['name','description','price','quantity','category','image','color','id'])

</script>

<template>
  <section>
    <section>
      <div class="p-2 w-50 images-container d-flex">
          <img v-for="imageFromArray in props.image" :key="imageFromArray" :src=imageFromArray class="p-2 img" alt="Not found" />
      </div>


      <div class={styles.product_info}>
        <h3 class={styles.product_name}>{product.name}</h3>
        <h4 class={styles.product_brand}>{product.brand}</h4>
        <h4 class={styles.product_quantity}>{product.quantity} disponiveis</h4>
        <p class={styles.product_price}>R$ {product.value.toFixed(2)}</p>
        {/* <strong>ID: {product.idProduct}</strong> */}
        <div class={styles.product_description}>
          {product.description}
        </div>

        <button class={styles.btn_buy}>Comprar</button>
        <button class={styles.btn_add_cart}>Adicionar ao carrinho</button>
      </div>

    </section>


  </section>
</template>
<!--<template>-->
<!--  <section class="row m-4 bg-dark bg-opacity-10 justify-content-md-center">-->
<!--      <section class="col-lg-6">-->
<!--        <div>-->
<!--          <img :src="props.image" alt="Not Found Image" class="img-fluid">-->
<!--        </div>-->
<!--      </section>-->

<!--    <section class="col p-4 text-center">-->

<!--        <h2 class="fs-1 text-dark roboto-bold m-0">-->
<!--           [ {{ props.name || 'Product Not Found' }} ].-->
<!--        </h2>-->

<!--      <section class="p-2">-->
<!--        <span class="fs-4 ">-->
<!--          R$ {{ props.price }}-->
<!--        </span>-->
<!--      </section>-->
<!--      <section class="p-2">-->
<!--        <span class="roboto-medium">-->
<!--          {{ props.quantity }} units left-->
<!--        </span>-->
<!--      </section>-->
<!--    </section>-->

<!--    <section class="fs-4 p-4 playfair-display">-->

<!--        <span class="text-end">-->
<!--          {{ props.description }}-->
<!--        </span>-->
<!--    </section>-->
<!--  </section>-->
<!--</template>-->

<style scoped>
section{
  padding: 0;
}
.img{
  max-width: 30rem;
}
@media screen and (max-width: 1300px) {
  .img{
    max-width: 20rem;
  }
  .images-container{
    overflow-x: scroll ;
  }
}
</style>
