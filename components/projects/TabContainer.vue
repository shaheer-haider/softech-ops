<template>
  <div class="max-w-7xl mx-auto px-5 mb-4">
    <div
      class="max-w-5xl mx-auto p-5 static-shadow-border-light flex justify-center gap-y-2 gap-x-3 flex-wrap md:flex-row flex-col bg-foregroundPrimary"
    >
      <button
        @click="filterProject(service)"
        class="static-shadow-border-light px-6 py-4 text-sm font-semibold text-foreground"
        :class="
          selectedProjectCategory == service
            ? 'bg-foregroundPrimaryHover -translate-y-1 scale-105'
            : 'bg-foregroundPrimary hover:bg-foregroundPrimaryHover'
        "
        v-for="service in [
          'Web Development',
          'UI/UX Design',
          'Generative AI',
          'DevOps',
          'Mobile Apps Development',
          'Cloud Computing',
          'ERP Development',
          'Graphics Design',
          'All Projects',
        ]"
      >
        {{ service }}
      </button>
    </div>
    <div class="grid md:grid-cols-2 gap-x-10 gap-y-12 mt-16">
      <TransitionGroup name="fade-scale">
        <div v-for="(project, index) in filteredProjects" :key="index">
          <img :src="project.image" alt="project image" class="w-full" />
          <div class="pt-5 flex justify-between">
            <p class="font-semibold text-xl text-background">{{ project.title }}</p>
            <div class="gap-x-2 gap-y-1 flex flex-wrap">
              <button
                v-for="(category, index) in project.categories"
                :key="index"
                class="bg-background text-xs text-foreground px-3 py-2 rounded-full"
              >
                {{ category }}
              </button>
            </div>
          </div>
        </div>
      </TransitionGroup>
    </div>
  </div>
</template>

<script setup>
import projects from "@/assets/data/projects.json";

const selectedProjectCategory = ref("All Projects");

const filteredProjects = ref(projects);

function filterProject(projectCategory) {
  filteredProjects.value = [];
  selectedProjectCategory.value = projectCategory;
  setTimeout(() => {
    if (selectedProjectCategory.value == "All Projects") {
      filteredProjects.value = projects;
    } else {
      filteredProjects.value = projects.filter((project) =>
        project.categories.includes(selectedProjectCategory.value)
      );
    }
  }, 250);
}
</script>

<style>
.fade-scale-enter-active,
.fade-scale-leave-active {
  transition: opacity 0.5s, transform 0.5s;
}
.fade-scale-enter,
.fade-scale-leave-to {
  opacity: 0;
  transform: scale(0.9);
}
</style>
