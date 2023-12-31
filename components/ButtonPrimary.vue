<template>
  <div class="btn-primary">
    <div :class="disableShadow ? '' : 'btn-primary-rect'"></div>
    <a
      class="block text-white font-semibold px-3 py-2 sm:px-4 sm:py-3 md:px-6 md:py-4 bg-foregroundPrimary hover:bg-foregroundPrimaryHover rounded-2xl border-black border-2 transition-all"
      :class="disableShadow ? '' : 'focus:translate-x-1 focus:translate-y-1'"
      href="#"
    >
      Schedule a call
    </a>
  </div>
</template>

<script setup>
defineProps(["disableShadow"]);
</script>
