<template>
  <div class="btn-primary select-none">
    <div :class="disableShadow ? '' : 'btn-primary-rect'"></div>
    <NuxtLink
      class="block !text-white font-semibold px-3 py-2 sm:px-4 sm:py-3 md:px-6 md:py-4 bg-foregroundPrimary hover:bg-foregroundPrimaryHover rounded-2xl border-black border-2 transition-all"
      :class="disableShadow ? '' : 'focus:translate-x-1 focus:translate-y-1'"
      :to="props.url"
    >
      {{ buttonText }}
    </NuxtLink>
  </div>
</template>

<script setup>
const props = defineProps({
  buttonText: {
    type: String,
    default: "Schedule a call",
  },
  url: {
    type: String,
    default: "/contact",
  },
  disableShadow: {
    type: Boolean,
    default: false,
  },
});
</script>
