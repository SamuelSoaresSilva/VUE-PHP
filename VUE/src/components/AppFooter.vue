<script setup>
import { useRoute } from 'vue-router'
import { ref, watch } from 'vue'
import AppTitleButton from '@/components/AppTitleButton.vue'

const $route = useRoute();
const active = ref()

watch($route,()=>{
  active.value = !$route.meta.disableFooter
})
</script>

<template>
  <footer v-if="active" class="bg-body p-4">
      <div class="roboto-bold row gap-3">
        <div class="col align-content-center bg-light">
          <AppTitleButton title="NoStore"/>
        </div>
        <nav class="col bg-light">
          <span class="fs-2">Repository</span>
          <div>
            <a href="https://github.com/SamuelSoaresSilva/VUE-PHP" target="_blank" class="bi-github header-title fs-1"></a>
          </div>
        </nav>
        <div class="col bg-light">
            <span class="fs-2">Pages</span>
            <nav class="row">
              <router-link :to="{ name: 'about' }"
                           class="link playfair-display fw-bolder"
              >
                About.
              </router-link>
              <router-link :to="{ name: 'notFound' }"
                           class="link fw-light"
              >
                Not found
              </router-link>
              <router-link :to="{ name: 'user-register' }"
                           class="link"
              >
                [ Register ].
              </router-link>
              <router-link :to="{ name: 'cart' }"
                           class="link fw-bolder"
              >
                Cart
              </router-link>
              <router-link :to="{ name: 'user-update' }"
                           class="link fw-bolder"
              >
                USER UPDATE
              </router-link>
              <router-link :to="{ name: 'product-register' }"
                           class="link fw-medium"
              >
                Product Register
              </router-link>
            </nav>
          </div>
        </div>
      <hr/>
      <div class="roboto-bold text-center">
        NoNick x NoStore
        &#169;
        2024
      </div>

  </footer>
</template>
<style scoped>
.bg-light{
  padding: 0 0.5rem;
  border-radius: 1rem;
}
</style>
