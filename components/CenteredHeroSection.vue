<template>
  <div class="text-center space-y-9 max-w-[1060px] m-auto pt-3">
    <span class="tagline-chip">{{ props.tagline }}</span>
    <DynamicText
      class="text-[70px] leading-tight"
      :class="props.title.class"
      :type="props.title.type"
      :content-array="props.title.contentArray"
    />
    <DynamicText
      class="text-lg"
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
