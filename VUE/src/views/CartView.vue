<script setup>
import AppViewPage from '@/components/AppViewPage.vue'
import CartContainer from '@/components/Cart/CartContainer.vue'
import ProductCartCard from '@/components/product/ProductCartCard.vue'
// eslint-disable-next-line no-unused-vars
const produtos = [
  {
    id: 1,
    nome: "Camiseta Branca",
    descricao: "Camiseta básica na cor branca",
    preco: 29.99,
    quantidadeEstoque: 50,
    categoria: "Roupas",
    imagem: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/23ca5baa-65b2-4e77-b3d2-87a2c86fb939/sb-zoom-blazer-mid-premium-skate-shoes-qr7mWL.png"
  },
  {
    id: 2,
    nome: "Calça Jeans",
    descricao: "Calça jeans masculina",
    preco: 59.99,
    quantidadeEstoque: 30,
    categoria: "Roupas",
    imagem: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/84577983-c8a2-497a-a74a-a29b9f0c766d/blazer-mid-77-little-kids-shoes-8sxC3j.png"
  },
]
</script>

<template>
<app-view-page>
  <img
    src='../assets/images/backgroundGold.jpg'
    class="w-100 z-n1"
    alt="background"
    @dragstart.prevent
  >
  <cart-container>
    <product-cart-card v-for="product in produtos"
                       :key="product.id"
                       :name="product.nome"
                       :price="product.preco"
                       :image="product.imagem"
                       :category="product.categoria"
                       :id="product.id"
    />
  </cart-container>
</app-view-page>
</template>

<style scoped>

</style>