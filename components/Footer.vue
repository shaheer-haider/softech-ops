<template>
  <footer class="w-full bg-foreground text-background relative">
    <div class="flex justify-between pt-10 pb-6 max-w-screen-2xl m-auto">
      <img src="@/assets/images/branding-dark.png" />
      <div class="flex gap-10">
        <a href="https://www.linkedin.com/company/softech-ops/" target="_" class="font-bold hover:text-foregroundPrimaryHover">
          <span>LINKEDIN</span>
          <Icon class="ml-1 text-2xl" name="material-symbols:arrow-outward-rounded" />
        </a>
        <a href="https://www.upwork.com/agencies/softechops/" target="_" class="font-bold hover:text-foregroundPrimaryHover">
          <span>UPWORK</span>
          <Icon class="ml-1 text-2xl" name="material-symbols:arrow-outward-rounded" />
        </a>
      </div>
    </div>
    <div class="mb-40">
      <HomeServicesCrossSlide direction="backward" class="bg-foregroundPrimary mt-7" />
    </div>

    <div class="flex flex-wrap max-w-screen-2xl m-auto px-2 gap-6 border-b pb-5">
      <NuxtLink class="uppercase" to="/terms-and-conditions">
        Terms and Conditions
      </NuxtLink>
      <NuxtLink class="uppercase" to="/privacy-policy">
        privacy policy
      </NuxtLink>
    </div>
    <div class="flex justify-between max-w-screen-2xl m-auto px-2 gap-5 mt-5 pt-4 pb-6">
      <div class="flex items-center gap-x-2">
        <Icon name="ph:map-pin-fill" />
        <span>Sindh, Karachi 74660, PK</span>
      </div>
      <div class="flex items-center gap-x-2">
        <Icon name="uiw:mail" />
        <span>solutions@softechops.com</span>
      </div>
      <div class="flex items-center gap-x-2">
        <Icon name="material-symbols:call" />
        <span>+92 346 2615589</span>
      </div>
    </div>
  </footer>
</template>

