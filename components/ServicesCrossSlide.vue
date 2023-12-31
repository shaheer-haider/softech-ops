<template>
  <div class="h-[50px] sm:h-[60px] md:h-[70px] w-[110%] absolute top-20 left-[-5%] text-background">
    <div class="absolute w-max h-full uppercase">
      <div
        class="w-full h-full flex gap-x-4 sm:gap-x-6 md:gap-x-[30px] items-center"
        :class="
          props.direction == 'forward'
            ? 'animated-slider-content-forward'
            : 'animated-slider-content-backward'
        "
      >
        <template v-for="services in [...services, ...services]">
          <p class="block text-xl sm:text-2xl md:text-3xl font-semibold">{{ services.name }}</p>
          <img class="w-4 sm:w-6 md:w-8" src="@/assets/images/slider-star.svg" />
        </template>
      </div>
    </div>
  </div>
</template>

<style>
.animated-slider-content-backward {
  animation: slideAnimationBackward 15s linear infinite;
}
.animated-slider-content-forward {
  animation: slideAnimationForward 15s linear infinite;
}

@keyframes slideAnimationForward {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

@keyframes slideAnimationBackward {
  0% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(0%);
  }
}
</style>

<script setup>
import services from "@/assets/data/services.json";
const props = defineProps({
  direction: {
    default: "forward",
  },
});
</script>
