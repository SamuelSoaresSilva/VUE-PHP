<script setup>
import AppBackgroundGif from '@/components/AppBackgroundGif.vue'
</script>

<template>
    <app-background-gif>
      <section class="row w-75">
        <section class="col bg-dark bg-opacity-25 rounded-start-4 p-4 background-blur ">
          <div class="d-flex flex-column">
            <h2 class="fs-1 playfair-display fw-bold ">
              About the project
            </h2>
            <div class="d-flex justify-content-start">
              <h3 class="fs-2 roboto-bold">
                [ NoStore ].
              </h3>
              <span>
                by:
              </span>
            </div>
            <span class="fs-6 fw-medium">
              Samuel Soares | Cauã Luca | Kevin Sperandio
            </span>

          </div>
        </section>
        <section class="col bg-dark bg-opacity-25 rounded-end-4 p-4 align-content-center">
          <p class="fs-4 justify-content-between">
            The design of this website was based entirely on the previous concept of the <strong>NoNick™</strong> website, we later abandoned the idea.
            In the new design we created a new, totally original visual identity.
          </p>
        </section>
      </section>
    </app-background-gif>

</template>

<style>
.background-gif{
  background-image: url("../assets/images/aboutBackgroundGif.gif");
}
</style>