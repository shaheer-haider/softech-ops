<template>
  <div
    class="max-w-7xl mx-auto pb-12 relative xl:px-0 px-4 md:h-full h-[620px]"
  >
    <img
      src="/images/about/hero-background.png"
      class="w-full hidden md:block"
    />
    <div
      class="absolute top-0 left-0 w-full flex-col h-full flex justify-center md:px-20 px-5"
    >
      <div class="md:mb-20 space-y-4">
        <p
          class="bg-backgroundLight w-fit p-2 lg:text-base text-sm font-semibold text-foregroundPrimaryHover"
        >
          Plan -> Design -> Develop -> Test -> Deliver
        </p>
        <h2 class="lg:text-6xl text-4xl font-semibold max-w-xl">
          {{ titleOne }}
          <span class="text-foregroundPrimary">{{ titleTwo }}</span>
        </h2>
        <p class="text-lightText lg:text-lg text-sm xl:max-w-xl md:max-w-sm">
          {{ paragraph }}
        </p>
      </div>
      <img
        :src="image"
        class="lg:max-w-[550px] max-w-96 md:absolute top-0 right-0"
      />
    </div>
  </div>
</template>

<script setup>
defineProps({
  titleOne: {
    type: String,
    required: true,
  },
  titleTwo: {
    type: String,
    required: true,
  },
  paragraph: {
    type: String,
    default: "paragraph",
  },
  image: {
    type: String,
    required: true,
  },
});
</script>
