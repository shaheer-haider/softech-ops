<template>
  <div class="mt-16 max-w-screen-xl m-auto">
    <h2 class="text-5xl text-center flex flex-col gap-y-1 font-medium">
      <span>Elevate Your Business with Our</span>
      <span class="text-foregroundPrimary">Comprehensive Services</span>
    </h2>

    <div class="flex pb-16 pt-10 justify-between">
      <div class="bg-foreground !border-lightBg !shadow-lightBg w-56 h-[290px] static-shadow-border flex justify-end items-end">
        <img class="" src="@/assets/images/service-card-star.svg" />
      </div>
      <div v-for="x in 4" class="bg-lightBg w-56 h-[290px] static-shadow-border"></div>
    </div>
  </div>
</template>
