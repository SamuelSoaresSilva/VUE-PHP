<script setup>
import '@/assets/AppHeader.css';
import { useRoute } from 'vue-router'
import { ref, watch } from 'vue'
import { useAddLetter } from '@/composables/useAddLetter.js'
import AppTitleButton from '@/components/AppTitleButton.vue'

  const $route = useRoute();
  const active = ref()
  const logged = ref(true);

  const {
    addLetter,
    msg
  } = useAddLetter();

watch($route,()=>{
    active.value = !$route.meta.disableHeader;
  if (active.value !== false){
    const title = ref('');
    title.value = $route.meta.title;
    addLetter(title.value);
  }
})


</script>
<template>
    <header
      v-if="active"
      class="roboto-bold d-flex align-items-center justify-content-between header z-3 px-4 py-2 text-light"
    >
      <AppTitleButton :title=" msg || 'Title' "></AppTitleButton>
      <nav class="d-flex">
        <button class="btn bi-search"/>

        <router-link
          class="btn bi-bag"
          :to="{name: 'cart'}"
        />

        <router-link
          class="btn"
        :class="logged ? 'bi-box-arrow-left' : 'bi-box-arrow-in-right'"
        :to="{name: 'user-register'}"
        />

      </nav>
    </header>
</template>
