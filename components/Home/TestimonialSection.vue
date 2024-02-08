<template>
  <div class="text-foreground md:pt-20 pt-10 pb-10">
    <div class="max-w-[1200px] m-auto px-5">
      <div class="flex justify-between items-end flex-wrap gap-4">
        <h2 class="md:text-5xl text-3xl font-semibold max-w-2xl leading-snug">
          Client's Testimonials and Recommendations
        </h2>
        <a class="md:text-2xl text-lg underline" href="/projects">See All</a>
      </div>
      <div class="py-20 relative">
        <Swiper
          :modules="[SwiperAutoplay]"
          :slides-per-view="4"
          :autoplay="{
            delay: 3000,
          }"
          :breakpoints="{
            0: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            550: {
              slidesPerView: 2,
              spaceBetween: 0,
            },
            786: {
              slidesPerView: 2,
              spaceBetween: 25,
            },
            1024: {
              slidesPerView: 3.5,
              spaceBetween: 25,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 25,
            },
          }"
        >
          <SwiperSlide v-for="testimonial in testimonials" :key="x" class="p-1">
            <TestimonialCard :testimonial="testimonial" />
          </SwiperSlide>
        </Swiper>

        <div
          class="absolute h-full w-[calc(10px+10%)] bg-white top-0 left-0"
        ></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import testimonials from "@/assets/data/testimonials.json";
</script>
