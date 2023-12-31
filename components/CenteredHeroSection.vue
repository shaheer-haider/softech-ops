<template>
  <div class="text-center space-y-6 md:space-y-9 max-w-[1060px] m-auto pt-3 px-2 sm:px-4">
    <span class="hidden sm:inline tagline-chip">{{ props.tagline }}</span>
    <div
      class="flex sm:hidden mx-4 justify-center flex-wrap gap-y-1 gap-x-3 tagline-chip sm:tagline-chip-none"
    >
      <span
        v-for="tag in props.tagline?.replaceAll('|', '-').split('-').reverse()"
        class="block w-max m-auto"
        >{{ tag }}</span
      >
    </div>
    <DynamicText
      class="text-3xl sm:text-6xl md:text-7xl lg:text-[70px] leading-tight"
      :class="props.title.class"
      :type="props.title.type"
      :content-array="props.title.contentArray"
    />
    <DynamicText
      class="md:text-lg mx-auto max-w-[820px]"
      :type="props.punchline.type"
      :content-array="props.punchline.contentArray"
    />
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
