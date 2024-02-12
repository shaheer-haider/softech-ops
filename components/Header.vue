<template>
  <nav class="fixed w-full max-w-[100vw] z-50 p-4">
    <div class="lg:max-w-screen-xl mx-auto px-2 sm:px-4 md:px-0">
      <div class="flex flex-wrap items-center justify-between mx-auto px-4 sm:px-6 py-3 navbar bg-background">
        <NuxtLink to="/" class="flex items-center">
          <img class="w-40 sm:w-auto" src="@/assets/images/branding.svg" :alt="siteName + ' Logo'" />
        </NuxtLink>
        <div class="flex md:order-2">
          <ButtonPrimary class="!hidden md:!block" />
          <!-- <a class="hidden md:block" /> -->
          <button
            @click="showMobileDrawer = !showMobileDrawer"
            type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200"
          >
            <span class="sr-only">Open main menu</span>
            <Icon class="text-4xl" name="ci:hamburger" />
          </button>
        </div>
        <div
          :class="showMobileDrawer ? '' : 'hidden'"
          class="items-center justify-between w-full md:flex md:w-auto md:order-1 relative"
        >
          <ul
            class="flex flex-col px-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0"
          >
            <li v-for="(navLink, index) in navLinks" :key="index">
              <NuxtLink
                :to="navLink.path"
                class="block py-2 pl-3 pr-4 rounded md:hover:bg-transparent md:hover:text-primary md:p-0"
                >{{ navLink.name }}</NuxtLink
              >
            </li>
            <li class="pt-4 block md:hidden">
              <ButtonPrimary :disableShadow="true" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
const showMobileDrawer = ref(false);
const siteName = "Softech Ops";
const navLinks = [
  {
    name: "Services",
    path: "/services",
  },
  {
    name: "Projects",
    path: "/projects",
  },
  {
    name: "About",
    path: "/about-us",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];
</script>
