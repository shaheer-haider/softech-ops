<template>
  <div class="text-foreground pt-20 pb-10">
    <div class="max-w-[1200px] m-auto">
      <div class="flex justify-between items-end">
        <h2 class="text-5xl font-medium max-w-2xl leading-snug">
          What our clients say about us
        </h2>
        <a class="text-2xl underline" href="/projects">See All</a>
      </div>
      <div class="py-20 relative">
        <Swiper
          :modules="[SwiperAutoplay]"
          :slides-per-view="4"
          :autoplay="{
            delay: 3000,
          }"
        >
          <SwiperSlide v-for="x in 10" :key="x" class="p-1">
            <TestimonialCard />
          </SwiperSlide>
        </Swiper>

        <div class="absolute h-full w-[calc(10px+10%)] bg-white top-0 left-0"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import services from "@/assets/data/services.json";
</script>
