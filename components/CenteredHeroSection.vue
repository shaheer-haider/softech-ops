<template>
  <div class="text-center space-y-6 md:space-y-8 max-w-[1060px] m-auto pt-3 px-2 sm:px-4">
    <span class="hidden sm:inline tagline-chip py-2 px-3">{{ props.tagline }}</span>

    <div
      class="flex sm:hidden justify-center max-w-lg px-6 mx-auto flex-wrap gap-y-2 gap-x-3 sm:tagline-chip"
    >
      <span
        v-for="tag in props.tagline?.replaceAll('|', '-').split('-').reverse()"
        class="block w-max m-auto tagline-chip py-1 px-2 text-sm sm:text-base"
        >{{ tag }}</span
      >
    </div>
    <DynamicText
      class="px-4 text-4xl sm:text-6xl md:text-7xl lg:text-[70px] leading-tight"
      :class="props.title.class"
      :type="props.title.type"
      :content-array="props.title.contentArray"
    />

    <DynamicText
      class="px-4 md:text-lg mx-auto max-w-[820px]"
      :type="props.punchline.type"
      :content-array="props.punchline.contentArray"
    />
    <div class="px-4 mb-6 flex justify-center items-center gap-8 flex-wrap text-lg font-bold">
      <div class="flex items-center gap-2">
        Rated 4.97/5
        <div class="mb-1">
          <Icon
            v-for="_ in 5"
            name="material-symbols:star"
            class="text-amber-400 text-3xl -mx-[2px]"
          />
        </div>
      </div>
      <div class="flex items-center gap-3">
        <Icon name="solar:sunrise-bold" class="text-amber-400 text-3xl" />
        Rising Talent Award!
      </div>
      <div><span class="text-xl">💯</span> &nbsp; Work Completion</div>
    </div>
    <ButtonPrimary class="m-auto" />
  </div>
</template>

<script setup>
const props = defineProps({
  tagline: {
    type: String,
  },
  title: {
    type: Object,
  },
  punchline: {
    type: Object,
  },
});
</script>
