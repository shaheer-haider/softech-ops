<template>
  <div class="static-shadow-border sm:w-68 h-full rounded-2xl px-4 py-6 space-y-4">
    <div class="flex gap-3 items-end">
      <img
        class="w-9 h-9"
        src="https://avatars.githubusercontent.com/u/56408067?s=400&u=2da58ebce27c9e89d1c8e5110bfa51c6ab779b83&v=4"
        alt=""
      />
      <p class="leading-4">
        <span class="text-lg font-semibold">{{ testimonial.name }}</span>
        <br />
        <span>{{ testimonial.designation }}</span>
      </p>
    </div>
    <div class="text-2xl">
      <template v-for="x in 5">
        <Icon
          name="material-symbols:star"
          :class="
            testimonial.rating < x
              ? 'stroke-amber-400 text-transparent'
              : 'text-amber-400'
          "
        />
      </template>
    </div>
    <p class="text-sm text-lightText">
      {{ testimonial.feedback }}
    </p>
  </div>
</template>

<script setup>
const props = defineProps(["testimonial"]);
</script>
