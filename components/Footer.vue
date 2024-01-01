<template>
  <footer class="w-full bg-foreground text-background relative">
    <div class="flex justify-between pt-10 pb-6 max-w-screen-2xl m-auto">
      <img src="@/assets/images/branding-dark.png" />
      <div class="flex gap-10">
        <button class="font-bold">
          <span>LINKEDIN</span>
          <Icon class="ml-1 text-2xl" name="material-symbols:arrow-outward-rounded" />
        </button>
        <button class="font-bold">
          <span>UPWORK</span>
          <Icon class="ml-1 text-2xl" name="material-symbols:arrow-outward-rounded" />
        </button>
      </div>
    </div>
    <div class="mb-40">
      <HomeServicesCrossSlide direction="backward" class="bg-foregroundPrimary mt-7" />
    </div>

    <div class="flex flex-wrap max-w-screen-2xl m-auto px-2 gap-6 border-b pb-5">
      <NuxtLink v-for="service in services">{{
        service.name
      }}</NuxtLink>
    </div>
    <div class="flex justify-between max-w-screen-2xl m-auto px-2 gap-5 mt-5 pt-4 pb-6">
      <div class="flex items-center gap-x-2">
        <Icon name="ph:map-pin-fill" />
        <span>Sindh, Karachi 74660, PK</span>
      </div>
      <div class="flex items-center gap-x-2">
        <Icon name="uiw:mail" />
        <span>contact@softechops.com</span>
      </div>
      <div class="flex items-center gap-x-2">
        <Icon name="material-symbols:call" />
        <span>contact@softechops.com</span>
      </div>
    </div>
  </footer>
</template>

<script setup>
import services from "@/assets/data/services.json";
</script>
