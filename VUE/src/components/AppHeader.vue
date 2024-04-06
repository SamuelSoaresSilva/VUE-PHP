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
    <header
      v-if="active"
      class="roboto-bold d-flex align-items-center justify-content-between"
    >
      <h1>
        NoStore
      </h1>
      <nav class="d-flex gap-2">
        <button class="btn bi-search">

        </button>
        <button>

        </button>
        <button>

        </button>
      </nav>
    </header>
</template>
