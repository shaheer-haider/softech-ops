<template>
  <div class="max-w-7xl mx-auto navbar relative">
    <div class="lg:max-w-5xl w-11/12 space-y-4 p-10">
      <h4 class="md:text-4xl text-2xl font-semibold">{{ qna.question }}</h4>
      <p class="md:text-lg text-sm text-lightText">
        {{ qna.answer }}
      </p>
    </div>
    <img
      src="/images/about/tnc-card-image.png"
      alt="icon"
      class="absolute bottom-0 right-0 h-28"
    />
  </div>
</template>
<script setup>
defineProps({
  qna: {
    type: Object,
    required: true,
  },
});
</script>
