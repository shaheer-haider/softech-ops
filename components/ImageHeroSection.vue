<template>
  <div class="flex justify-between w-full">
    <div class="space-y-9 pt-3 max-w-xl">
      <span class="tagline-chip">{{ props.tagline }}</span>
      <DynamicText
        class="text-5xl leading-tight"
        :class="props.title.class"
        :type="props.title.type"
        :content-array="props.title.contentArray"
      />
      <DynamicText
        class="text-lg"
        :type="props.punchline.type"
        :content-array="props.punchline.contentArray"
      />
      <ButtonPrimary />
    </div>
    <img src="/images/services/mobile-app-development.png" >
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
