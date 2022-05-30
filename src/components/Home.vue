<template>
  <section class="bg-gray-50 border-b-[1px] border-gray-300">
    <div class="container min-h-[92vh]">
      <div class="flex items-center justify-evenly pt-[20vh]">
        <div class="w-full">
          <h1 class="text-6xl font-extrabold pt-10">
            Vous êtes <span ref="type"></span><br />et vous avez
            <span ref="wish"></span>
          </h1>
        </div>
        <img id="hero-img" class="h-[400px]" :src="imgSrc" />
      </div>
    </div>
  </section>

  <section id="main" class="overflow-hidden relative">
    <div
      class="rect-bg w-[23vw] h-[40vh] absolute top-52 opacity-10 z-0"
    ></div>
    <div
      class="rect-bg w-[30vw] h-[40vh] absolute top-0 right-0 opacity-10 z-0"
    ></div>
    <div class="container">
      <div class="text-center relative">
        <h1 class="block w-3/5 mx-auto text-7xl font-extrabold z-50 pt-36">
          Soyez visibible<br /><span class="text-indigo-600"
            >sur internet</span
          >
        </h1>
        <h2 class="block w-4/5 mx-auto mt-4 text-gray-500 text-xl z-50">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat
          porro facere dicta et atque fuga ab voluptatem veritatis impedit
          nostrum deserunt itaque provident, asperiores mollitia cupiditate
          pariatur autem quibusdam! Excepturi?
        </h2>
        <img class="w-[70vw] mx-auto mt-16 !z-50" src="/mock-website.svg" />
      </div>
    </div>
  </section>

  <section class="bg-gray-800 py-36">
    <h3 class="text-center text-gray-400 font-medium text-xl">
      Ils m'ont fait confiance :
    </h3>
    <div class="block xl:w-4/5 mx-auto">
      <div
        class="
          lg:px-52
          sm:px-20
          grid
          md:grid-cols-2
          lg:grid-cols-4
          gap-8
          items-center
          mt-10
        "
      >
        <img
          class="
            max-w-20 max-h-16
            pt-1
            block
            mx-auto
            grayscale
            transition
            ease-in-out
            opacity-80
            brightness-200
            hover:brightness-100
            hover:cursor-pointer hover:grayscale-0
          "
          src="./../assets/Capgemini_Logo.svg"
        />
        <img
          class="
            max-h-10
            block
            pb-1
            mx-auto
            grayscale
            transition
            ease-in-out
            opacity-80
            brightness-200
            hover:cursor-pointer hover:grayscale-0
          "
          src="./../assets/logo-scribe.svg"
        />
        <img
          class="
            max-w-20 max-h-16
            block
            mx-auto
            grayscale
            transition
            ease-in-out
            opacity-80
            brightness-200
            hover:brightness-100
            hover:cursor-pointer hover:grayscale-0
          "
          src="./../assets/nova-crete-logo.png"
        />
        <img
          class="
            max-w-20 max-h-16
            block
            mx-auto
            grayscale
            transition
            ease-in-out
            opacity-80
            brightness-200
            hover:brightness-100
            hover:cursor-pointer hover:grayscale-0
          "
          src="./../assets/projetdemocratia.png"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import anime from "animejs/lib/anime.es.js";
import Typewriter from "typewriter-effect/dist/core";

var type = ref();
var wish = ref();
const imgSrc = ref("./particulier-hero.svg");

onMounted(() => {
  var typewriterType = new Typewriter(type.value, {
    delay: 40,
    deleteSpeed: 20,
  });

  var typewriterWish = new Typewriter(wish.value, {
    delay: 40,
    deleteSpeed: 20,
  });

  anime({
    targets: "#hero-img",
    rotate: "1turn",
    duration: 800,
  });

  anime({
    targets: "#hero-img",
    translateY: 10,
    direction: "alternate",
    loop: true,
    duration: 1000,
    easing: "easeInOutSine",
  });

  typewriterType
    .pauseFor(1000)
    .typeString('<span class="text-red-400">un particulier</span>')
    .callFunction(() =>
      document
        .querySelectorAll(".Typewriter__cursor")[0]
        .classList.add("hidden")
    )
    .pauseFor(5250)
    .callFunction(() =>
      document
        .querySelectorAll(".Typewriter__cursor")[0]
        .classList.remove("hidden")
    )
    .deleteAll()
    .callFunction(() => {
      imgSrc.value = "./association-hero.svg";
      anime({
        targets: "#hero-img",
        rotate: "1turn",
        duration: 800,
      });
    })
    .typeString('<span class="text-green-400">une association</span>')
    .callFunction(() =>
      document
        .querySelectorAll(".Typewriter__cursor")[0]
        .classList.add("hidden")
    )
    .pauseFor(6000)
    .callFunction(() =>
      document
        .querySelectorAll(".Typewriter__cursor")[0]
        .classList.remove("hidden")
    )
    .deleteAll()
    .callFunction(() => {
      imgSrc.value = "./professionnel-hero.svg";
      anime({
        targets: "#hero-img",
        rotate: "1turn",
        duration: 800,
      });
    })
    .typeString('<span class="text-indigo-600">un professionnel</span>')
    .callFunction(() =>
      document
        .querySelectorAll(".Typewriter__cursor")[0]
        .classList.add("hidden")
    )
    .start();

  typewriterWish
    .callFunction(() =>
      document
        .querySelectorAll(".Typewriter__cursor")[1]
        .classList.add("hidden")
    )
    .pauseFor(2000)
    .callFunction(() =>
      document
        .querySelectorAll(".Typewriter__cursor")[1]
        .classList.remove("hidden")
    )
    .typeString('<span class="text-red-400">une passion à partager</span>.')
    .pauseFor(2000)
    .deleteAll()
    .callFunction(() =>
      document
        .querySelectorAll(".Typewriter__cursor")[1]
        .classList.add("hidden")
    )
    .pauseFor(2250)
    .callFunction(() =>
      document
        .querySelectorAll(".Typewriter__cursor")[1]
        .classList.remove("hidden")
    )
    .typeString(
      '<span class="text-green-400">envie de vous faire connaître</span>.'
    )
    .pauseFor(2000)
    .deleteAll()
    .callFunction(() =>
      document
        .querySelectorAll(".Typewriter__cursor")[1]
        .classList.add("hidden")
    )
    .pauseFor(2250)
    .callFunction(() =>
      document
        .querySelectorAll(".Typewriter__cursor")[1]
        .classList.remove("hidden")
    )
    .typeString(
      '<span class="text-indigo-600">des produits ou des services à vendre</span>.'
    )
    .callFunction(() =>
      document
        .querySelectorAll(".Typewriter__cursor")[1]
        .classList.add("hidden")
    )
    .start();
});
</script>

<style scoped>
.rect-bg {
  background-image: url("/test3.png");
  background-repeat: repeat;
}

#main {
  background: linear-gradient(0deg, #202938 50%, white 0);
}
</style>