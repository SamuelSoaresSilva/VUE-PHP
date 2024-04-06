<script setup>
import { useRoute } from 'vue-router'
import { ref, watch } from 'vue'

const $route = useRoute();
const active = ref()

watch($route,()=>{
  active.value = !$route.meta.disableFooter
})
</script>

<template>
  <footer v-if="active">
    Footer
  </footer>
</template>
