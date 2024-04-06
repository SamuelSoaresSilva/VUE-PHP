<script setup>
import { useRoute } from 'vue-router'
import { ref, watch } from 'vue'

  const $route = useRoute();
  const active = ref()

  watch($route,()=>{
     active.value = $route.meta.headerActive
      console.log(active.value);
  })

</script>
<template>
    <section v-if="active">
        Header
    </section>
</template>
