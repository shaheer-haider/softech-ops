<template>
  <div>
    <CenteredHeroSection
      :tagline="heroSectionData.tagline"
      :title="heroSectionData.title"
      :punchline="heroSectionData.punchline"
    />
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
        class: "text-orange-700",
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
        class: "text-orange-700",
      },
    ],
  },
  punchline: {
    type: "p",
    contentArray: [
      {
        text:
          "A team of experts who create full-spectrum solutions to help your businesses get started and grow",
        type: "text",
        class: "",
      },
      {
        text: "",
        type: "breakpoint",
        class: "",
      },
      {
        text:
          "We provide excellence to solopreneurs, startups & established businesses with ideas",
        type: "text",
        class: "",
      },
    ],
  },
};
</script>
