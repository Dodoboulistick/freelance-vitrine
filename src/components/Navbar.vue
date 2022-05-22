<template>
  <div class="bg-gray-100">
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
            <div class="-mr-2 flex items-center lg:hidden">
              <button
                type="button"
                onclick="handleClick()"
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
          class="
            hidden
            lg:flex
            lg:w-fit
            lg:border-none
            lg:mr-10
            lg:pr-4
            lg:space-x-8
            lg:rounded-0
            lg:static
            absolute
            top-16
            w-full
            text-md
            border
            rounded-md
            font-medium
            text-gray-500
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
              hover:text-black
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
              hover:text-black
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
              hover:text-black
              transition
              ease-in-out
            "
            >Demander un devis</router-link
          >
          <div class="inline-block h-[20px] w-[1px] bg-gray-500"></div>
          <a
            href="https://medium.com/scribe-ai"
            target="_blank"
            class="
              block
              my-10
              mx-auto
              w-6
              lg:mx-0 lg:my-0 lg:inline-block
              transition
              ease-in-out
            "
            ><img class="opacity-50 hover:opacity-100" src="./../assets/linkedin-plain.svg" />
          </a>
        </div>
      </nav>
    </div>
  </div>
</template>