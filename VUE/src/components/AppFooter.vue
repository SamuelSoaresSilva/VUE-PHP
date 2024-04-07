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
  <footer v-if="active" class="bg-light p-4">
      <div class="roboto-bold row">
        <div class="col align-content-center">
          <AppTitleButton title="NoStore"/>
        </div>
        <nav class="col">
          <div class="d-flex flex-column">
            <span class="fs-2">Application Screens</span>
            <router-link :to="{ name: 'about' }"
            class="link"
            >
              About page
            </router-link>
            <router-link :to="{ name: 'notFound' }"
            class="link"
            >
              link
            </router-link>
          </div>
        </nav>
        <nav class="col">
          <span class="fs-2">Repository</span>
          <div>
            <a href="https://github.com/SamuelSoaresSilva/VUE-PHP" target="_blank" class="bi-github header-title fs-1"></a>
          </div>
        </nav>
      </div>
      <hr/>
      <div class="roboto-bold text-center">
        NoNick x NoStore
        &#169;
        2024
      </div>

  </footer>
</template>
