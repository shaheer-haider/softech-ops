<template>
  <div class="w-full">
    <ImageHeroSection
      :tagline="heroSectionData.tagline"
      :title="heroSectionData.title"
      :punchline="heroSectionData.punchline"
    />
  </div>
</template>

<script setup>
const heroSectionData = {
  tagline: " Plan -> Design -> Develop -> Test -> Deliver",
  title: {
    type: "h1",
    contentArray: [
      {
        text: "Mobile Applications Development",
        type: "text",
      },
    ],
  },
  punchline: {
    type: "p",
    contentArray: [
      {
        text:
          "Our comprehensive suite of services is designed to empower your venture and drive success. Schedule a call and explore how we can bring your vision to life",
        type: "text",
        class: "",
      },
    ],
  },
};
</script>
