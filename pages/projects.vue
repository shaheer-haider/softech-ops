<template>
  <div>
    <CenteredHeroSection
      :tagline="heroSectionData.tagline"
      :title="heroSectionData.title"
      :punchline="heroSectionData.punchline"
    />
    <HomeServicesCrossSlider />
    <div class="bg-backgroundLight md:py-20 py-10 my-20">
      <LazyProjectsTabContainer />
    </div>
  </div>
</template>

<script setup>
const heroSectionData = {
  tagline: "Plan | Design | Develop | Test | Deploy",
  title: {
    type: "h1",
    contentArray: [
      {
        text: "Take a look at our most ",
        type: "text",
        class: "",
      },

      {
        text: "successful projects",
        type: "text",
        class: "text-foregroundPrimary",
      },
    ],
  },
  punchline: {
    type: "p",
    contentArray: [
      {
        text:
          "Our comprehensive suite of services is designed to empower your venture and drive success",
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
