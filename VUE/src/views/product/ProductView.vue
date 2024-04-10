<script setup>
import AppViewPage from "@/components/AppViewPage.vue";
import ProductPageCard from "@/components/product/ProductPageCard.vue";

const product = {
  id: 1,
  nome: "Women's V2K Run",
  descricao: "Avançar rápido. Rebobinar. Não importa – este tênis leva o retrô para o futuro. O V2K remasteriza tudo o que você adora no Vomero em um visual retirado diretamente de um catálogo de corrida dos primeiros anos. Camadas com uma mistura de azuis gelados, detalhes translúcidos e uma entressola macia com uma estética perfeitamente vintage. E uma sola grossa garante que você se sinta confortável onde quer que vá.",
  cor: 'Pure Platinum Wolf Grey',
  preco: 29.99,
  quantidadeEstoque: 50,
  categoria: "Roupas",
  imagem: ["https://imgnike-a.akamaihd.net/768x768/02849751.jpg","https://imgnike-a.akamaihd.net/768x768/02849751A3.jpg","https://imgnike-a.akamaihd.net/768x768/02849751A2.jpg","https://imgnike-a.akamaihd.net/768x768/02849751A4.jpg"]
}

</script>

<template>
  <AppViewPage>
    <img
        src='../../assets/images/backgroundWine.jpg'
        class="w-100 z-n1"
        alt="background"
        @dragstart.prevent
    >
    <product-page-card :image="product.imagem"
                       :name="product.nome"
                       :price="product.preco"
                       :color="product.cor"
                       :quantity="product.quantidadeEstoque"
                       :description="product.descricao"
                       :id="product.id"
    >
    </product-page-card>
    <button class="btn mx-3 px-1 fs-4 roboto-bold">
      [ Add to cart ].
    </button>
  </AppViewPage>
</template>

<style scoped>

</style>
