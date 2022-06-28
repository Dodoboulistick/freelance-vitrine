<template class="scroll-smooth">
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
          alt="Illustration by storyset"
        />
      </div>
    </div>
  </section>

  <section id="main" class="overflow-hidden relative">
    <div class="rect-bg w-[23vw] h-[40vh] absolute top-96 opacity-10 z-0"></div>
    <div
      class="rect-bg w-[30vw] h-[40vh] absolute top-0 right-0 opacity-10 z-0"
    ></div>
    <div class="container">
      <div class="text-center relative">
        <div class="py-20 md:py-20">
          <h1
            class="
              block
              w-3/5
              mx-auto
              text-6xl
              lg:text-7xl
              font-extrabold
              z-50
              my-10
            "
          >
            Soyez visible<br /><span class="text-indigo-600">sur internet</span>
          </h1>
          <h2 class="block w-4/5 mx-auto mt-4 text-gray-500 text-xl z-50">
            Par manque de visibilité, un trop grand nombre de services, de
            produits ou d'actions ne sont pas connus du public, alors qu'en même
            temps ce dernier aurait des besoins ou envies en la matière
          </h2>
        </div>

        <img
          class="w-[90vw] md:w-[60vw] mx-auto !z-50 shadow-lg"
          src="/mock-website.svg"
          alt="Mock website illustration"
        />
      </div>
    </div>
  </section>

  <section class="bg-gray-800 py-24">
    <div class="container">
      <div class="text-center pt-10 pb-20">
        <h3
          class="text-gray-200 uppercase font-semibold tracking-widest text-xl"
        >
          Plans
        </h3>
        <h1 class="text-white font-bold text-5xl py-3">
          Le prix juste pour vous, qui que vous soyez
        </h1>
        <p class="text-gray-200 text-xl font-light md:w-3/5 md:mx-auto">
          Trouvez le plan qui convient le mieux à vos attentes, de la simple
          commande de page web au suivi le plus total dans la mise en place de
          la solution
        </p>
      </div>
      <div class="lg:grid lg:grid-cols-10 items-center xl:w-4/5 mx-auto px-5">
        <div
          class="
            lg:col-span-3
            w-full
            md:w-2/3
            lg:mx-0
            my-5
            mx-auto
            lg:w-full
            rounded-r-xl
            lg:rounded-r-none
            rounded-l-xl
            overflow-hidden
          "
        >
          <div class="bg-white text-center py-10 border border-b-[1px]">
            <h1 class="font-semibold text-2xl mb-3">Basique</h1>
            <p class="text-gray-500 font-medium text-sm">à partir de</p>
            <h2 class="font-extrabold text-7xl text-black">150€</h2>
          </div>
          <div class="bg-gray-50 p-10">
            <ul>
              <li>
                <i class="bi bi-check-lg"></i> Une ou plusieurs pages web
                simples
              </li>
              <li><i class="bi bi-check-lg"></i> Idéal pour un site vitrine</li>
              <li><i class="bi bi-check-lg"></i> Premiers jets en 1-3 jours</li>
            </ul>
            <a
              href="#contact-form"
              class="
                mt-5
                block
                text-indigo-600
                font-medium
                text-center
                w-100
                rounded-lg
                py-2
                bg-white
                shadow-md
              "
              >Demander un devis</a
            >
          </div>
        </div>

        <div class="lg:col-span-4 w-full md:w-3/4 lg:w-full mx-auto relative">
          <div
            class="
              flex
              absolute
              bg-indigo-600
              rounded-full
              h-8
              items-center
              justify-center
              -top-4
              text-center
              z-[999]
              lg:left-1/3
              md:left-[37%]
              left-[30vw]
            "
          >
            <p class="text-white px-4 uppercase tracking-widest">Populaire</p>
          </div>
          <div
            class="
              border-indigo-600 border-2
              rounded-xl
              overflow-hidden
              relative
            "
          >
            <div class="bg-white text-center py-10 border border-b-[1px]">
              <h1 class="font-semibold text-2xl mb-3">Complet</h1>
              <p class="text-gray-500 font-medium text-sm">à partir de</p>
              <h2 class="font-extrabold text-7xl text-black">250€</h2>
            </div>
            <div class="bg-gray-50 p-10">
              <ul>
                <li><i class="bi bi-check-lg"></i> Nombre de pages illimité</li>
                <li>
                  <i class="bi bi-check-lg"></i> Nom de domaine offert la
                  première année
                </li>
                <li>
                  <i class="bi bi-check-lg"></i> Gestion de la solution
                  d'hébergement du site
                </li>
                <li>
                  <i class="bi bi-check-lg"></i> Gestion du SEO pour une
                  visibilité accrue
                </li>
                <li><i class="bi bi-check-lg"></i> Mailing intégré</li>
              </ul>
              <a
                href="#contact-form"
                class="
                  mt-5
                  block
                  text-white
                  font-medium
                  text-center
                  w-100
                  rounded-lg
                  py-2
                  bg-indigo-600
                  shadow-md
                  hover:bg-white hover:text-indigo-600
                  transition
                  ease-in-out
                "
                >Demander un devis</a
              >
            </div>
          </div>
        </div>

        <div
          class="
            lg:col-span-3
            w-full
            md:w-2/3
            lg:mx-0
            my-5
            mx-auto
            lg:w-full
            rounded-r-xl
            lg:rounded-l-none
            rounded-l-xl
            overflow-hidden
          "
        >
          <div class="bg-white text-center py-10 border border-b-[1px]">
            <h1 class="font-semibold text-2xl mb-3">Blog et E-commerce</h1>
            <p class="text-gray-500 font-medium text-sm">à partir de</p>
            <h2 class="font-extrabold text-7xl text-black">400€</h2>
          </div>
          <div class="bg-gray-50 p-10">
            <ul>
              <li>
                <i class="bi bi-check-lg"></i> Tous les avantages du Complet
              </li>
              <li>
                <i class="bi bi-check-lg"></i> Suivi accru dans le développement
              </li>
              <li>
                <i class="bi bi-check-lg"></i> Choix de la technologie possible
              </li>
            </ul>
            <a
              href="#contact-form"
              class="
                mt-5
                block
                text-indigo-600
                font-medium
                text-center
                w-100
                rounded-lg
                py-2
                bg-white
                shadow-md
              "
              >Demander un devis</a
            >
          </div>
        </div>
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

  <section class="pt-16 pb-20">
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
            opacity-50
            hover:opacity-100 hover:cursor-pointer hover:grayscale-0
          "
          src="./../assets/Capgemini_Logo.svg"
          alt="Capgemini logo"
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
            opacity-50
            hover:opacity-100 hover:cursor-pointer hover:grayscale-0
          "
          src="./../assets/logo-scribe.svg"
          alt="Scribe logo"
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
            hover:opacity-100 hover:cursor-pointer hover:grayscale-0
          "
          src="./../assets/nova-crete-logo.png"
          alt="Nova Crete logo"
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
            hover:opacity-100 hover:cursor-pointer hover:grayscale-0
          "
          src="./../assets/projetdemocratia.png"
          alt="Projet Democratia logo"
        />
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
          <div
            id="contact-form"
            class="lg:col-span-2 self-center px-3 md:px-10 py-10 bg-white"
          >
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