<template>
  <div class="bg-foreground text-background md:py-20 py-10">
    <div class="max-w-[1200px] m-auto px-5">
      <div class="flex justify-between flex-wrap gap-4 items-end">
        <h2 class="md:text-5xl text-3xl font-medium max-w-2xl leading-snug">
          Take a look at our most successful projects
        </h2>
        <a class="md:text-2xl text-lg underline" href="/projects">See All</a>
      </div>
      <div class="grid md:grid-cols-2 gap-10 mt-14">
        <div v-for="(project, index) in projects.slice(0, 4)" :key="index">
          <img :src="project.image" alt="project image" />
          <div class="pt-5 flex justify-between">
            <p class="font-semibold text-xl">{{ project.title }}</p>
            <div class="flex gap-2 flex-wrap">
              <button
                v-for="(category, index) in project.categories"
                :key="index"
                class="bg-background text-foreground md:text-xs text-[8px] md:px-3 px-1 md:py-2 rounded-full"
              >
                {{ category }}
              </button>
            </div>
          </div>
        </div>
      </div>

      <ButtonPrimary button-text="Show All" url="/projects" class="mt-10 mx-auto block" />
    </div>
  </div>
</template>

<script setup>
import projects from "@/assets/data/projects.json";
</script>
