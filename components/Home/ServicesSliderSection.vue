<template>
  <div class="mt-16 max-w-screen-xl m-auto px-5">
    <h2 class="md:text-5xl text-3xl text-center flex flex-col gap-y-1 font-medium">
      <span>Elevate Your Business with Our</span>
      <span class="text-foregroundPrimary">Comprehensive Services</span>
    </h2>

    <div class="md:py-20 py-10 relative">
      <Swiper
        :modules="[SwiperAutoplay]"
        :slides-per-view="5"
        :autoplay="{
          delay: 3000,
        }"
        :breakpoints="{
          0: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          465: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 25,
          },
          786: {
            slidesPerView: 3,
            spaceBetween: 25,
          },
          1024: {
            slidesPerView: 3.5,
            spaceBetween: 25,
          },
          1280: {
            slidesPerView: 5,
            spaceBetween: 25,
          },
        }"
      >
        <SwiperSlide class="p-1">
          <div
            class="bg-foreground sm:w-56 min-h-[290px] flex justify-end items-end rounded-2xl"
          >
            <img class="" src="@/assets/images/service-card-star.svg" />
          </div>
        </SwiperSlide>
        <SwiperSlide
          v-for="(service, index) in services"
          :key="index"
          class="p-1"
        >
          <div
            class="bg-lightBg sm:w-56 min-h-[290px] static-shadow-border px-5 py-7 flex flex-col justify-between"
          >
            <span class="text-5xl font-semibold">{{ index + 1 }}</span>
            <div>
              <h4 class="text-foreground text-lg font-semibold capitalize">
                {{ service.name }}
              </h4>
              <p class="text-lightText">
                Lorem Ipsum, sometimes referred to as 'lipsum', is the
                placeholder text used in design when
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <div
        class="absolute h-full w-[calc(10px+10%)] bg-white top-0 left-0"
      ></div>
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
