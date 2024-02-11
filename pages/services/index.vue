<template>
  <div>
    <CenteredHeroSection
      :tagline="heroSectionData.tagline"
      :title="heroSectionData.title"
      :punchline="heroSectionData.punchline"
    />
    <HomeServicesCrossSlider />
    <ServicesGridSection />
    <!-- <ServicesBusinessProcessSection /> -->
  </div>
</template>

<script setup>
const heroSectionData = {
  tagline: "Design Uniqueness | Develop Precision | Deploy Success",
  title: {
    type: "h1",
    contentArray: [
      {
        text: "Elevate Your Business",
        type: "text",
        class: "",
      },
      {
        text: "",
        type: "breakpoint",
        class: "",
      },
      {
        text: "with Our  ",
        type: "text",
        class: "",
      },
      {
        text: "Comprehensive Services",
        type: "text",
        class: "text-foregroundPrimary",
      },
    ],
  },
  punchline: {
    type: "p",
    contentArray: [
      {
        text: "Our comprehensive suite of services is designed to empower your venture and drive success",
        type: "text",
        class: "",
      },
      {
        text: "",
        type: "breakpoint",
        class: "",
      },
      {
        text: "Schedule a call and explore how we can bring your vision to life",
        type: "text",
        class: "",
      },
    ],
  },
};
</script>
