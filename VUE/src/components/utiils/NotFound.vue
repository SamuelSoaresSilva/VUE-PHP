<script setup>
import { useAddLetter } from '@/composables/useAddLetter.js'
import { onMounted } from 'vue'

const {
  addLetter,
  msg
} = useAddLetter();

    const message = ('Not Found')

onMounted(() => addLetter(message))
</script>

<template>
  <section class="grid text-center">
    <div class="row justify-content-md-center align-items-center">
      <img src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExeGU0OXFoYjVtOW15em5vNXFsajFoNTczMXl4ZDVidGRldGQybTdoaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l4pSXkg0Ss5mlxc8o/giphy.gif"
           class="img-fluid col-md-auto"
      />
      <h1 class="roboto-bold col-md-auto">
        [ {{ msg }} ].
      </h1>
    </div>
  </section>
</template>
<style scoped>

</style>
