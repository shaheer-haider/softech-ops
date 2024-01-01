<template>
  <div class="mt-16 max-w-screen-xl m-auto text-foreground">
    <h2
      class="text-5xl text-center flex flex-col gap-y-1 font-medium max-w-3xl m-auto leading-snug"
    >
      Take full control of your business processes
    </h2>
    <p class="text-center text-lg pt-5 pb-10 max-w-lg m-auto">
      Bring maximum value to your business and define your brand through custom app
      development.
    </p>

    <div class="py-12 pb-36 relative flex justify-between">
      <div
        v-for="index in 4"
        :key="index"
        class="w-full max-w-[275px] min-h-[290px] px-5 py-7 space-y-1 text-center"
      >
        <img class="w-16 mx-auto mb-4" src="@/assets/images/dummy-service-image.png" />
        <h4 class="text-foreground text-lg font-medium capitalize">Bespoke systems</h4>
        <p class="text-sm text-lightText">
          Lorem Ipsum, sometimes referred to as 'lipsum', is the placeholder text used in
          design when creating content. It helps designers plan out where the content will
          sit.
        </p>
      </div>
    </div>
    <!--
      <SwiperSlide v-for="slide in 10" :key="slide">
        <strong>{{ slide }}</strong>
      </SwiperSlide> -->
  </div>
</template>

<script setup>
import services from "@/assets/data/services.json";
</script>
