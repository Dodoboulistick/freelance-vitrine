<template>
  <section class="bg-gray-100 border-b-[1px] border-gray-300">
    <div class="container min-h-[92vh]">
      <div class="flex items-center justify-evenly pt-[20vh]">
        <div class="w-full">
          <h1 class="text-5xl font-extrabold pt-10">
            Vous êtes <span ref="type"></span><br />et vous avez
            <span ref="wish"></span>
          </h1>
        </div>
        <img id="hero-img" class="h-[400px]" :src="imgSrc" />
      </div>
    </div>
  </section>

  <section class="py-20">
    <div class="container">
      <div class="text-center w-4/5 mx-auto">
        <h1 class="text-5xl font-extrabold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </h1>
        <h2 class="mt-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat
          porro facere dicta et atque fuga ab voluptatem veritatis impedit
          nostrum deserunt itaque provident, asperiores mollitia cupiditate
          pariatur autem quibusdam! Excepturi?
        </h2>
        <div class="border-2 py-72 mt-10">
          une image/animation?
        </div>
      </div>
    </div>
  </section>

  <section>
    <h3 class="text-center text-gray-400 font-light text-xl">
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
            hover:cursor-pointer hover:grayscale-0
          "
          src="./../assets/projetdemocratia.png"
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
            hover:cursor-pointer hover:grayscale-0
          "
          src="./../assets/nova-crete-logo.png"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import anime from "animejs/lib/anime.es.js";
import Typewriter from 'typewriter-effect/dist/core';

var type = ref();
var wish = ref();
const imgSrc = ref("./particulier-hero.svg");

onMounted(() => {
  var typewriterType = new Typewriter(type.value, {
    delay: 70,
  });

  var typewriterWish = new Typewriter(wish.value, {
    delay: 70,
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
    .pauseFor(5000)
    .callFunction(() =>
      document
        .querySelectorAll(".Typewriter__cursor")[0]
        .classList.remove("hidden")
    )
    .deleteAll()
    .callFunction(() => {
      imgSrc.value = "./commercant-hero.svg";
      anime({
        targets: "#hero-img",
        rotate: "1turn",
        duration: 800,
      });
    })
    .typeString('<span class="text-sky-400">un commerçant</span>')
    .callFunction(() =>
      document
        .querySelectorAll(".Typewriter__cursor")[0]
        .classList.add("hidden")
    )
    .pauseFor(5000)
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
    .start();

  typewriterWish
    .callFunction(() =>
      document
        .querySelectorAll(".Typewriter__cursor")[1]
        .classList.add("hidden")
    )
    .pauseFor(3000)
    .callFunction(() =>
      document
        .querySelectorAll(".Typewriter__cursor")[1]
        .classList.remove("hidden")
    )
    .typeString('<span class="text-red-400">une passion</span>.')
    .pauseFor(2000)
    .deleteAll()
    .callFunction(() =>
      document
        .querySelectorAll(".Typewriter__cursor")[1]
        .classList.add("hidden")
    )
    .pauseFor(3000)
    .callFunction(() =>
      document
        .querySelectorAll(".Typewriter__cursor")[1]
        .classList.remove("hidden")
    )
    .typeString('<span class="text-sky-400">un produit</span>.')
    .pauseFor(2000)
    .deleteAll()
    .callFunction(() =>
      document
        .querySelectorAll(".Typewriter__cursor")[1]
        .classList.add("hidden")
    )
    .pauseFor(3000)
    .callFunction(() =>
      document
        .querySelectorAll(".Typewriter__cursor")[1]
        .classList.remove("hidden")
    )
    .typeString('<span class="text-green-400">un objectif</span>.')
    .callFunction(() =>
      document
        .querySelectorAll(".Typewriter__cursor")[1]
        .classList.add("hidden")
    )
    .start();
});
</script>
