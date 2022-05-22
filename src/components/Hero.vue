<template>
  <section id="hero" class="h-screen text-slate-800 border border-b-1">
    <div class="container">
    <div class="py-16">
        <div class="text-center pt-[15vh]">
          <h1 class="text-7xl font-extrabold mb-2">Hello, moi c'est Dorian</h1>
          <h2 class="text-2xl">
            J'aime créer des sites vitrines et landing pages
          </h2>
        </div>
        <div class="flex justify-center my-10 font-semibold">
          <a class="text-white bg-slate-800 py-3 px-5 rounded-lg mx-3" href="#"
            >Découvrir</a
          >
          <a
            class="py-3 px-5 rounded-lg border-2 border-slate-800 mx-3"
            href="#"
            >Contact</a
          >
        </div>
      </div>

      <img class="w-6/12 mx-auto  " src="./../assets/mock-website.svg" />
    </div>
  </section>

  <section class="pt-24">
      <div class="container">
          <h2>Je fais des supers sites</h2>
      </div>
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped>
section#hero {
  background-image: url("./../assets/bg.png");
  background-position: center; 
  background-repeat: no-repeat;
  background-size: cover;
}
</style>