<template>
  <div class="w-full">
    <AboutHeroSection
      title-one="Mobile Applications
    Development"
      image="/service-detail-mob.png"
      paragraph="Our comprehensive suite of services is designed to empower your venture and drive success. Schedule a call and explore how we can bring your vision to life"
    />

    <div
      class="max-w-7xl px-5 mx-auto pb-24 pt-16 grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 gap-8"
    >
      <div
        class="flex items-center gap-2 justify-center flex-col text-center"
        v-for="(item, index) in process"
        :key="index"
      >
        <h2 class="text-7xl font-bold pb-3 text-foregroundPrimary">
          {{ item.id }}
        </h2>
        <h4 class="font-semibold">{{ item.title }}</h4>
        <p class="text-sm text-lightText">
          {{ item.text }}
        </p>
      </div>
    </div>

    <div class="max-w-7xl px-5 mx-auto pb-20 space-y-12">
      <div class="max-w-xl space-y-3 mx-auto text-center">
        <h3 class="text-4xl max-w-sm mx-auto font-semibold">
          Mobile Apps Development
          <span class="text-foregroundPrimary">Projects</span>
        </h3>
        <p>
          See how we help shape new concepts and reimagine existing products.
          Our clients’ success stories speak for themselves
        </p>
      </div>
      <div class="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 mt-0">
        <div v-for="(project, index) in projects" :key="index">
          <img :src="project.image" alt="project image" class="w-full" />
          <div class="pt-5 flex justify-between">
            <p class="font-semibold text-xl">{{ project.title }}</p>
            <div class="space-x-2 flex flex-wrap">
              <button
                v-for="(category, index) in project.categories"
                :key="index"
                class="bg-background text-xs text-foreground px-3 py-2 rounded-full border"
              >
                {{ category }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-backgroundLight">
      <div class="max-w-7xl mx-auto py-20 space-y-12 px-5">
        <div class="max-w-xl space-y-3 mx-auto text-center">
          <h3 class="text-4xl max-w-lg mx-auto font-semibold">
            Mobile Apps Development
            <span class="text-foregroundPrimary">Technologies</span>
          </h3>
          <p>
            Check out our blogs for deep-dive insights into mobile application
            development
          </p>
        </div>
        <div
          class="grid lg:grid-cols-4 md:grid-cols-2 justify-items-center gap-10"
        >
          <div
            class="text-center flex flex-col max-w-md items-center justify-center gap-3"
            v-for="(item, index) in 8"
            :key="index"
          >
            <img
              src="@/assets/images/dummy-service-image.png"
              alt="service-icon"
            />
            <h4 class="font-semibold text-lg">Bespoke systems</h4>
            <p class="text-lightText">
              Lorem Ipsum, sometimes referred to as 'lipsum', is the placeholder
              text used in design when creating content. It helps designers plan
              out where the content will sit.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="max-w-7xl mx-auto py-20 px-5 space-y-12">
      <div class="max-w-xl space-y-3 mx-auto text-center">
        <h3 class="text-4xl max-w-xl mx-auto font-semibold">
          Read more on Our Blogs
          <span class="text-foregroundPrimary">Blogs</span>
        </h3>
        <p>
          Check out our blogs for deep-dive insights into mobile application
          development
        </p>
      </div>
      <div class="grid lg:grid-cols-3 md:grid-cols-2 gap-10">
        <div
          class="flex flex-col items-center justify-center gap-3"
          v-for="(item, index) in 3"
          :key="index"
        >
          <img
            src="@/assets/images/dummy-project-image.png"
            alt="service-icon"
          />
          <h4 class="font-semibold text-xl">
            Al Nafi Cloud - Labs Workstation Management system
          </h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import projects from "@/assets/data/projects.json";

const process = [
  {
    id: "01",
    title: "Planning",
    text: "Conducting Product Discovery and Product Research",
  },
  {
    id: "02",
    title: "Design",
    text: "Creating UX Design, UI Design and Branding",
  },
  {
    id: "03",
    title: "Development",
    text: "Turn the idea into highly efficient code to develop the application",
  },
  {
    id: "04",
    title: "Quality Assurance",
    text: "Testing the app and making sure that everything works well",
  },
  {
    id: "05",
    title: "Maintenance and support",
    text: "Co-managing the app with your business team",
  },
];
</script>
