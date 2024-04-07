<script setup>
  const props = defineProps(['title'])
</script>

<template>
  <router-link
    :to="{ name: 'home' }"
    class="fs-1 header-title"
  >
    [ {{ props.title }} ].
  </router-link>
</template>

<style scoped>

</style>