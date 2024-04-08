<script setup>
import AppViewPage from "@/components/AppViewPage.vue";
import ProductPageCard from "@/components/product/ProductPageCard.vue";
// eslint-disable-next-line no-unused-vars
const product = {
  id: 1,
  nome: "Camiseta Branca",
  descricao: "Camiseta básica na cor branca",
  preco: 29.99,
  quantidadeEstoque: 50,
  categoria: "Roupas",
  imagem: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/23ca5baa-65b2-4e77-b3d2-87a2c86fb939/sb-zoom-blazer-mid-premium-skate-shoes-qr7mWL.png"
}
</script>

<template>
  <AppViewPage>
    <img
        src='@/assets/images/backgroundWine.jpg'
        class="w-100 z-n1"
        alt="background"
        @dragstart.prevent
    >
    <product-page-card :image="product.imagem"
                       :name="product.nome"
                       :price="product.preco"
                       :quantity="product.quantidadeEstoque"
                       :description="product.descricao"
    >

    </product-page-card>
  </AppViewPage>
</template>

<style scoped>

</style>
