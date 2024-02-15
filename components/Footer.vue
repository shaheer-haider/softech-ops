<template>
  <footer class="w-full bg-foreground text-background relative">
    <div class="flex justify-between items-end flex-wrap pt-4 md:pt-10 pb-6 px-4 gap-x-4 gap-y-4 max-w-screen-2xl m-auto">
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
    <!-- <div class="mb-40 overflow-hidden max-w-[100vw]">
      <HomeServicesCrossSlide direction="backward" class="bg-foregroundPrimary mt-7" />
    </div> -->

    <div class="flex flex-wrap max-w-screen-2xl m-auto px-4 gap-6 border-b pb-5">
      <NuxtLink class="uppercase" to="/terms-and-conditions">
        Terms and Conditions
      </NuxtLink>
      <NuxtLink class="uppercase" to="/privacy-policy">
        privacy policy
      </NuxtLink>
    </div>
    <div class="flex justify-between flex-wrap max-w-screen-2xl m-auto px-4 gap-5 mt-5 pt-4 pb-6">
      <div class="flex items-center gap-x-2">
        <Icon name="ph:map-pin-fill" />
        <span>30 N Gould St 440767 Sheridan, WY 82801, USA</span>
      </div>
      <div class="flex items-center gap-x-2">
        <Icon name="uiw:mail" />
        <span>solutions@softechops.com</span>
      </div>
      <div class="flex items-center gap-x-2">
        <Icon name="material-symbols:call" />
        <a href="tel:+13072185787">+1 (307) 218-5787</a>
      </div>
    </div>
  </footer>
</template>

