<template>
  <div class="max-w-7xl mx-auto px-5 mb-16">
    <div
      class="max-w-5xl mx-auto p-5 navbar flex lg:justify-between gap-2 flex-wrap md:flex-row flex-col"
    >
      <button
        class="navbar px-6 py-4 text-sm font-semibold"
        v-for="categories in [
          'UI UX Projects',
          'Web Design',
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
      <div v-for="x in 4">
        <img src="@/assets/images/dummy-project-image.png" alt="project image" class="w-full" />
        <div class="pt-5 flex justify-between">
          <p class="font-semibold text-2xl">AL-Nafi Cloud</p>
          <button class="bg-background text-foreground px-3 py-2 rounded-full border">
            ui ux
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
