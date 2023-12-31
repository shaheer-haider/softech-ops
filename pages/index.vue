<template>
  <div>
    <CenteredHeroSection
      class="mb-16"
      :tagline="heroSectionData.tagline"
      :title="heroSectionData.title"
      :punchline="heroSectionData.punchline"
    />
    <ServicesCrossSlider />

    <ServicesSliderSection />
  </div>
</template>

<script setup>
const heroSectionData = {
  tagline: "Design Uniqueness | Develop Precision | Deploy Success",
  title: {
    type: "h1",
    contentArray: [
      {
        text: "From Idea to ",
        type: "text",
        class: "",
      },
      {
        text: "Reality",
        type: "text",
        class: "text-foregroundPrimary",
      },
      {
        text: "",
        type: "breakpoint",
        class: "",
      },
      {
        text: "Consult, Design, Develop, ",
        type: "text",
        class: "",
      },
      {
        text: "Launch",
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
          "A team of experts who create full-spectrum solutions to help your businesses get started and grow. We provide excellence to solopreneurs, startups & established businesses with ideas",
        type: "text",
        class: "",
      },
      // {
      //   text: "",
      //   type: "breakpoint",
      //   class: "",
      // },
      // {
      //   text:
      //     "We provide excellence to solopreneurs, startups & established businesses with ideas",
      //   type: "text",
      //   class: "",
      // },
    ],
  },
};
</script>
