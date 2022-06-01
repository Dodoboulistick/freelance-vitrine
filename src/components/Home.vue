<template>
  <section class="bg-gray-50 border-b-[1px] border-gray-300">
    <div class="container min-h-[92vh]">
      <div class="lg:flex items-center justify-evenly pt-[10vh] lg:pt-[20vh]">
        <div class="w-full h-[20vh] md:h-fit">
          <h1
            class="
              text-center
              lg:text-left
              text-3xl
              md:text-5xl
              lg:text-6xl
              font-extrabold
              px-5
              lg:pt-10
            "
          >
            Vous êtes <span ref="type"></span><br />et vous avez
            <span ref="wish"></span>
          </h1>
        </div>
        <img
          id="hero-img"
          class="h-[400px] max-w-[90vw] mx-auto"
          :src="imgSrc"
        />
      </div>
    </div>
  </section>

  <section id="main" class="overflow-hidden relative">
    <div class="rect-bg w-[23vw] h-[40vh] absolute top-80 opacity-10 z-0"></div>
    <div
      class="rect-bg w-[30vw] h-[40vh] absolute top-0 right-0 opacity-10 z-0"
    ></div>
    <div class="container">
      <div class="text-center relative">
        <div class="py-20 md:py-32">
          <h1
            class="block w-3/5 mx-auto text-6xl lg:text-7xl font-extrabold z-50"
          >
            Soyez visible<br /><span class="text-indigo-600">sur internet</span>
          </h1>
          <h2 class="block w-4/5 mx-auto mt-4 text-gray-500 text-xl z-50">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat
            porro facere dicta et atque fuga ab voluptatem veritatis impedit
            nostrum deserunt itaque provident, asperiores mollitia cupiditate
            pariatur autem quibusdam! Excepturi?
          </h2>
        </div>

        <img
          class="w-[95vw] md:w-[70vw] mx-auto !z-50"
          src="/mock-website.svg"
        />
      </div>
    </div>
  </section>

  <section class="bg-gray-800 py-24">
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
            hover:brightness-100 hover:cursor-pointer hover:grayscale-0
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
            hover:brightness-100 hover:cursor-pointer hover:grayscale-0
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
            hover:brightness-100 hover:cursor-pointer hover:grayscale-0
          "
          src="./../assets/projetdemocratia.png"
        />
      </div>
    </div>
  </section>

  <section class="pb-16 md:pb-24">
    <div class="container">
      <div class="text-center block w-4/5 mx-auto pt-20 md:pt-28 lg:pt-32">
        <h3
          class="
            text-indigo-600
            uppercase
            font-semibold
            tracking-widest
            py-3
            text-xl
          "
        >
          Gagnez en visibilité
        </h3>
        <h1 class="text-4xl font-extrabold">
          Tout ce dont vous avez besoin pour vous propulser sur le net
        </h1>
      </div>
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-10 px-5"
      >
        <div
          v-for="item of services"
          :key="item.id"
          class="px-10 py-5 bg-gray-100 text-center relative rounded-lg mt-10"
        >
          <div
            class="
              absolute
              w-14
              h-14
              bg-indigo-600
              rounded-lg
              shadow-lg
              left-0
              right-0
              mx-auto
              -top-6
            "
          >
            <i
              :class="item.icon"
              class="block text-center text-3xl text-white mt-[10px]"
            ></i>
          </div>
          <div class="mt-6">
            <p class="py-5 text-xl font-semibold">{{ item.title }}</p>
            <p class="pb-3 text-gray-500">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="pt-10 md:pt-16 pb-16 md:pb-24 overflow-hidden">
    <div class="container relative">
      <div
        class="
          rect-bg
          w-[50vw]
          lg:w-[23vw]
          h-[40vh]
          absolute
          -bottom-16
          left-0
          lg:left-20 lg:top-52
          opacity-10
          z-0
        "
      ></div>
      <div
        class="
          rect-bg
          w-[50vw]
          lg:w-[23vw]
          h-[40vh]
          absolute
          -top-16
          right-0
          lg:-top-20 lg:right-10
          opacity-10
          z-0
        "
      ></div>
      <div
        class="
          my-10
          w-11/12
          md:w-4/5
          mx-auto
          rounded-lg
          overflow-hidden
          relative
          border-[1px] border-gray-200
          shadow-xl
        "
      >
        <div class="grid lg:grid-cols-3">
          <div class="bg-indigo-600">
            <div
              class="
                p-5
                md:p-10
                h-full
                text-gray-100
                grid grid-cols-1
                content-between
              "
            >
              <div>
                <h4
                  class="text-2xl mb-4 font-semibold text-center lg:text-left"
                >
                  Informations de contact
                </h4>
                <p>
                  N'hésitez pas à me contacter pour toute information
                  complémentaire ou demande de devis.
                </p>
              </div>
              <div>
                <p class="my-5">
                  <i class="bi bi-telephone text-xl mr-2"></i> +33651652679
                </p>
                <a href="mailto:dorian.mailhe@gmail.com" class="my-5"
                  ><i class="bi bi-envelope text-xl mr-2"></i>
                  dorian.mailhe@gmail.com</a
                >
              </div>
            </div>
          </div>
          <div class="lg:col-span-2 self-center px-3 md:px-10 py-10 bg-white">
            <p class="font-semibold ml-3 mb-5">Envoyez-moi un message</p>
            <Form />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import anime from "animejs/lib/anime.es.js";
import Typewriter from "typewriter-effect/dist/core";
import services from "./data/services.json";
import Form from "./Form.vue";

var type = ref();
var wish = ref();
const imgSrc = ref("./particulier-hero.svg");
const service = services;

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
        ?.classList.add("hidden")
    )
    .pauseFor(5250)
    .callFunction(() =>
      document
        .querySelectorAll(".Typewriter__cursor")[0]
        ?.classList.remove("hidden")
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
        ?.classList.add("hidden")
    )
    .pauseFor(6000)
    .callFunction(() =>
      document
        .querySelectorAll(".Typewriter__cursor")[0]
        ?.classList.remove("hidden")
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
        ?.classList.add("hidden")
    )
    .start();

  typewriterWish
    .callFunction(() =>
      document
        .querySelectorAll(".Typewriter__cursor")[1]
        ?.classList.add("hidden")
    )
    .pauseFor(2000)
    .callFunction(() =>
      document
        .querySelectorAll(".Typewriter__cursor")[1]
        ?.classList.remove("hidden")
    )
    .typeString('<span class="text-red-400">une passion à partager</span>.')
    .pauseFor(2000)
    .deleteAll()
    .callFunction(() =>
      document
        .querySelectorAll(".Typewriter__cursor")[1]
        ?.classList.add("hidden")
    )
    .pauseFor(2250)
    .callFunction(() =>
      document
        .querySelectorAll(".Typewriter__cursor")[1]
        ?.classList.remove("hidden")
    )
    .typeString(
      '<span class="text-green-400">envie de vous faire connaître</span>.'
    )
    .pauseFor(2000)
    .deleteAll()
    .callFunction(() =>
      document
        .querySelectorAll(".Typewriter__cursor")[1]
        ?.classList.add("hidden")
    )
    .pauseFor(2250)
    .callFunction(() =>
      document
        .querySelectorAll(".Typewriter__cursor")[1]
        ?.classList.remove("hidden")
    )
    .typeString(
      '<span class="text-indigo-600">des produits ou des services à vendre</span>.'
    )
    .callFunction(() =>
      document
        .querySelectorAll(".Typewriter__cursor")[1]
        ?.classList.add("hidden")
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
  background: linear-gradient(0deg, #202938 20%, white 0);
}

@media (min-width: 640px) {
  #main {
    background: linear-gradient(0deg, #202938 25%, white 0);
  }
}

@media (min-width: 768px) {
  #main {
    background: linear-gradient(0deg, #202938 45%, white 0);
  }
}

@media (min-width: 1024px) {
  #main {
    background: linear-gradient(0deg, #202938 45%, white 0);
  }
}

@media (min-width: 1280px) {
  #main {
    background: linear-gradient(0deg, #202938 45%, white 0);
  }
}

@media (min-width: 1536px) {
  #main {
    background: linear-gradient(0deg, #202938 45%, white 0);
  }
}
</style>