<template>
  <div class="max-w-7xl mx-auto px-5 mb-16">
    <div
      class="max-w-4xl mx-auto p-5 navbar flex lg:justify-between gap-2 flex-wrap md:flex-row flex-col"
    >
      <button
        @click="selectedProjectCategory = categories"
        class="navbar px-6 py-4 text-sm font-semibold"
        v-for="categories in [
          'UI UX Design',
          'Web Design',
          'Cloud Computing',
          'Cyber Security',
          'Software Development',
        ]"
      >
        {{ categories }}
      </button>
    </div>
    <div class="grid md:grid-cols-2 gap-10 mt-14">
      <div
        v-for="(project, index) in filteredProjects.length
          ? filteredProjects
          : projects"
        :key="index"
      >
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
</template>

<script setup>
import projects from "@/assets/data/projects.json";
const selectedProjectCategory = ref("");

const filteredProjects = computed(() => {
  return projects.filter((project) =>
    project.categories.includes(selectedProjectCategory.value)
  );
});
</script>
