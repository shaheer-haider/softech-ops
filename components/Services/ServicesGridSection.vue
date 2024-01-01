<template>
  <div class="mt-16 max-w-screen-xl m-auto">
    <div class="py-20 relative">
      <div class="grid grid-cols-3 gap-x-4 gap-y-12 justify-items-center w-full">
        <div
          v-for="(service, index) in services"
          :key="index"
          class="w-full max-w-[400px] min-h-[290px] static-shadow-border px-7 py-8"
          :class="index % 3 === 1 ? '-translate-y-12 ' : ''"
        >
          <img class="w-16 mb-5" src="@/assets/images/dummy-service-image.png" />
          <h4 class="text-foreground text-lg font-semibold capitalize mb-2">
            {{ service.name }}
          </h4>
          <p class="text-lightText">
            Lorem Ipsum, sometimes referred to as 'lipsum', is the placeholder text used
            in design when creating content. It helps designers plan out where the content
            will sit, without needing to wait for the content to be written and approved
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import services from "@/assets/data/services.json";
</script>
