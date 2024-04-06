<script setup>
import { useRoute } from 'vue-router'
import { ref, watch } from 'vue'

  const $route = useRoute();
  const active = ref()

watch($route,()=>{
      active.value = !$route.meta.disableHeader
})

</script>
<template>
    <header v-if="active">
        Header
    </header>
</template>
