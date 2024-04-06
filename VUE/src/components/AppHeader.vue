<script setup>
import '@/assets/AppHeader.css';
import { useRoute } from 'vue-router'
import { ref, watch } from 'vue'
import { useAddLetter } from '@/composables/useAddLetter.js'

  const $route = useRoute();
  const active = ref()

  const {
    addLetter,
    headerTitle,
  } = useAddLetter();

watch($route,()=>{
      active.value = !$route.meta.disableHeader;
      const title = ref('');
      title.value = $route.meta.title;
      addLetter(title.value);
})


</script>
<template>
    <header
      v-if="active"
      class="roboto-bold d-flex align-items-center justify-content-between header z-3 px-4 py-2 text-light"

    >
      <router-link
        :to="{ name: 'home' }"
        class="fs-1"
      >
        [ {{ headerTitle }} ].
      </router-link>

      <nav class="d-flex gap-2">
        <button class="btn bi-search"/>

        <button class="btn">
          teste
        </button>
        <button class="btn">

        </button>
      </nav>
    </header>
</template>
