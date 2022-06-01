<template>
  <div class="bg-gray-50 h-[8vh]">
    <div class="container relative py-4 px-4 sm:px-6 lg:px-8" id="home">
      <nav
        class="relative flex items-center justify-between sm:h-10"
        aria-label="Global"
      >
        <div class="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
          <div class="flex items-center justify-between w-full lg:w-auto">
            <router-link :to="{ name: 'home' }" class="font-semibold text-lg">
              <span class="sr-only">Workflow</span>
              dorian-mailhe.fr
            </router-link>
            <div class="-mr-2 flex items-center md:hidden">
              <button
                type="button"
                @click="handleClick"
                class="
                  bg-white
                  rounded-md
                  p-2
                  inline-flex
                  items-center
                  justify-center
                  text-gray-400
                  hover:text-gray-500 hover:bg-gray-100
                  focus:outline-none
                  focus:ring-2
                  focus:ring-inset
                  focus:ring-indigo-500
                "
                aria-expanded="false"
              >
                <span class="sr-only">Open main menu</span>
                <svg
                  class="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div
          id="links"
          :class="{ hidden: hideNav }"
          class="
            md:flex
            md:w-fit
            md:border-none
            md:mr-10
            md:pr-4
            md:space-x-8
            md:rounded-0
            md:static
            md:bg-transparent
            md:text-lg
            text-xl
            bg-white
            absolute
            top-16
            w-full
            text-md
            border
            rounded-md
            font-medium
            text-gray-500
            z-[999]
          "
        >
          <router-link
            :to="{ name: 'home' }"
            class="
              block
              my-10
              mx-auto
              w-fit
              lg:mx-0 lg:my-0 lg:inline-block
              hover:text-indigo-600
              transition
              ease-in-out
            "
            >Accueil</router-link
          >
          <router-link
            :to="{ name: 'about' }"
            class="
              block
              my-10
              mx-auto
              w-fit
              lg:mx-0 lg:my-0 lg:inline-block
              hover:text-indigo-600
              transition
              ease-in-out
            "
            >A propos</router-link
          >
          <router-link
            :to="{ name: 'contact' }"
            class="
              block
              my-10
              mx-auto
              w-fit
              lg:mx-0 lg:my-0 lg:inline-block
              hover:text-indigo-600
              transition
              ease-in-out
            "
            >Demander un devis</router-link
          >
          <div
            class="h-[20px] w-[1px] bg-gray-500 hidden md:inline-block"
          ></div>
          <a
            href="https://www.linkedin.com/in/dorian-mailhe/"
            target="_blank"
            class="
              hidden
              my-10
              mx-auto
              w-6
              lg:mx-0 lg:my-0 lg:inline-block
              transition
              ease-in-out
            "
            ><img
              class="opacity-50 hover:opacity-100"
              src="./../assets/linkedin-plain.svg"
            />
          </a>
        </div>
      </nav>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Navbar",
  setup() {
    const hideNav = ref(true);

    const handleClick = () => (hideNav.value = !hideNav.value);
    return {
      hideNav,
      handleClick,
    };
  },
});
</script>