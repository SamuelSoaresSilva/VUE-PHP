<script setup>
import AppViewPage from '@/components/AppViewPage.vue'
import ProductsContainer from '@/components/product/ProductsContainer.vue'
import ProductCard from '@/components/product/ProductCard.vue'


const produtcs = [
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
  {
    id: 3,
    nome: "Tênis Esportivo",
    descricao: "Tênis esportivo para corrida",
    preco: 99.99,
    quantidadeEstoque: 20,
    categoria: "Calçados",
    imagem: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/2ead2040-4cc8-496a-a663-a8787b2b7347/blazer-low-77-jumbo-womens-shoes-ZQhzKS.png"
  },
  {
    id: 4,
    nome: "Bermuda Cargo",
    descricao: "Bermuda masculina estilo cargo",
    preco: 39.99,
    quantidadeEstoque: 40,
    categoria: "Roupas",
    imagem: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/2bde2591-990e-45ef-8853-6be6ce205a4a/blazer-low-77-jumbo-womens-shoes-PdFBP1.png"
  },
  {
    id: 5,
    nome: "Vestido Floral",
    descricao: "Vestido feminino com estampa floral",
    preco: 49.99,
    quantidadeEstoque: 25,
    categoria: "Roupas",
    imagem: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7bef7ebd-6033-4639-9781-5d1d15458cf7/sb-zoom-blazer-mid-premium-skate-shoes-rp2VHt.png"
  },
  {
    id: 6,
    nome: "Óculos de Sol",
    descricao: "Óculos de sol estilo aviador",
    preco: 19.99,
    quantidadeEstoque: 35,
    categoria: "Acessórios",
    imagem: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/85d32108-58c3-46e5-80b3-936d36049df5/blazer-low-77-little-kids-shoes-6B66Q5.png"
  },
  {
    id: 7,
    nome: "Jaqueta de Couro",
    descricao: "Jaqueta masculina de couro sintético",
    preco: 79.99,
    quantidadeEstoque: 15,
    categoria: "Roupas",
    imagem: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/5742f317-d0c8-4d01-8a66-81d6f4bc73ca/sb-zoom-blazer-low-pro-gt-skate-shoes-XfFG5r.png"
  },
  {
    id: 8,
    nome: "Camisa Social",
    descricao: "Camisa social masculina",
    preco: 49.99,
    quantidadeEstoque: 20,
    categoria: "Roupas",
    imagem: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/600fc4b5-3b5e-4c10-8145-ed04773bbd53/blazer-low-77-vintage-mens-shoes-jsksCM.png"
  },
  {
    id: 9,
    nome: "Mochila Escolar",
    descricao: "Mochila escolar com estampa de personagens",
    preco: 29.99,
    quantidadeEstoque: 10,
    categoria: "Acessórios",
    imagem: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/33e93d4b-38c1-4ef7-a411-438611b71149/blazer-mid-77-baby-toddler-shoes-5ghcfw.png"
  },
  {
    id: 10,
    nome: "Chinelo Slide",
    descricao: "Chinelo slide unissex",
    preco: 14.99,
    quantidadeEstoque: 50,
    categoria: "Calçados",
    imagem: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/3bdcf8a1-b301-4444-8dfd-92601bbf42ac/blazer-mid-77-womens-shoes-NPWfjm.png"
  }
];

</script>

<template>
    <AppViewPage>
        <img
          src='@/assets/images/backgroundPink.jpg'
          class="w-100 z-n1"
          alt="background"
          @dragstart.prevent
        >
      <products-container title="Products 1">

        <ProductCard v-for="product in produtcs" :key="product.id" :name="product.nome" :price="product.preco" :image="product.imagem" :id="product.id"/>

      </products-container>

    </AppViewPage>
</template>
