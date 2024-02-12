<template>
  <div class="max-w-7xl mx-auto px-5 mb-4">
    <div
      class="max-w-5xl mx-auto p-5 static-shadow-border-light flex justify-start gap-2 flex-wrap md:flex-row flex-col bg-foreground"
    >
      <button
        @click="selectedProjectCategory = service.slug"
        class="static-shadow-border-light px-6 py-4 text-sm font-semibold text-foreground"
        :class="selectedProjectCategory == service ? 'bg-foregroundPrimaryHover -translate-y-1 scale-105' : 'bg-foregroundPrimary hover:bg-foregroundPrimaryp'"
        v-for="service in services"
      >
        {{ service.name }}
      </button>
    </div>
    <div class="grid md:grid-cols-2 gap-x-10 gap-y-12 mt-16">
      <div
        v-for="(project, index) in filteredProjects.length ? filteredProjects : projects"
        :key="index"
      >
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
    </div>
  </div>
</template>

<script setup>
import projects from "@/assets/data/projects.json";
import services from "@/assets/data/services.json";
const selectedProjectCategory = ref("");

const filteredProjects = computed(() => {
  return projects.filter((project) =>
    project.categories.includes(selectedProjectCategory.value)
  );
});
</script>
