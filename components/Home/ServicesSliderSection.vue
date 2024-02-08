<template>
  <div class="mt-16 max-w-screen-xl m-auto">
    <h2 class="text-5xl text-center flex flex-col gap-y-1 font-medium">
      <span>Elevate Your Business with Our</span>
      <span class="text-foregroundPrimary">Comprehensive Services</span>
    </h2>

    <div class="relative pb-10">
      <Swiper
        :modules="[SwiperAutoplay, SwiperPagination]"
        :pagination="{
          clickable: true,
        }"
        :slides-per-view="5"
        :autoplay="{
          delay: 3000,
        }"
      >
        <SwiperSlide class="p-1 pt-20 pb-16">
          <div
            class="bg-foreground w-56 min-h-[290px] flex justify-end items-end rounded-2xl"
          >
            <img class="" src="@/assets/images/service-card-star.svg" />
          </div>
        </SwiperSlide>
        <SwiperSlide v-for="(service, index) in services" :key="index" class="p-1 pt-20 pb-16">
          <div
            class="bg-lightBg w-56 min-h-[290px] static-shadow-border px-5 py-7 flex flex-col justify-between"
          >
            <span class="text-5xl font-semibold">{{ index + 1 }}</span>
            <div>
              <h4 class="text-foreground text-lg font-semibold capitalize">{{ service.name }}</h4>
              <p class="text-lightText">
                Lorem Ipsum, sometimes referred to as 'lipsum', is the placeholder text
                used in design when
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <div class="absolute h-full w-[calc(10px+10%)] bg-white top-0 left-0"></div>
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
