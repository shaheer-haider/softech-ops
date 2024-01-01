<template>
  <div class="bg-foreground text-background py-20">
    <div class="max-w-[1200px] m-auto">
      <div class="flex justify-between items-end">
        <h2 class="text-5xl font-medium max-w-2xl leading-snug">
          Take a look at our most successful projects
        </h2>
        <a class="text-2xl underline" href="/projects">See All</a>
      </div>
      <div class="grid grid-cols-2 gap-10 mt-14">
        <div v-for="x in 4">
          <img src="@/assets/images/dummy-project-image.png" alt="project image" />
          <div class="pt-5 flex justify-between">
            <p class="font-semibold text-2xl">Noyas Platform</p>
            <button class="bg-background text-foreground px-3 py-2 rounded-full">
              View Project
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
