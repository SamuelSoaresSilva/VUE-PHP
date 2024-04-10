<script setup>
import { useAddLetter } from '@/composables/useAddLetter.js'
import { onMounted } from 'vue'
import AppTitleButton from '@/components/AppTitleButton.vue'
import AppBackgroundGif from '@/components/AppBackgroundGif.vue'

const {
  addLetter,
  msg
} = useAddLetter();

    const message = ('Not Found')

onMounted(() => addLetter(message))
</script>

<template>
   <app-background-gif>
     <AppTitleButton :title=" msg || 'Title' "></AppTitleButton>
   </app-background-gif>
</template>

<style scoped>
.background-gif{
  background-image: url("@/assets/images/aboutBackgroundGif.gif");
}

</style>
