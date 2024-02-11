<template>
  <div class="mt-16 max-w-screen-xl m-auto">
    <div class="py-20 relative">
      <div class="grid grid-cols-3 gap-x-4 gap-y-12 justify-items-center w-full">
        <NuxtLink
          v-for="(service, index) in services"
          :key="index"
          class="w-full max-w-[400px] min-h-[290px] static-shadow-border px-7 py-8 block"
          :class="index % 3 === 1 ? '-translate-y-12 ' : ''"
          :to="'/services/' + service.slug"
        >
          <img class="w-16 mb-5" src="@/assets/images/icons/frontend.png" />
          <h4 class="text-foreground text-lg font-semibold capitalize mb-2">
            {{ service.name }}
          </h4>
          <p class="text-lightText">
            {{ service.description }}
          </p>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import services from "@/assets/data/services.json";
</script>
