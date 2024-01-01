<template>
  <div class="static-shadow-border w-72 h-full rounded-2xl px-4 py-6 space-y-4">
    <div class="flex gap-3 items-end">
      <img
        class="w-9 h-9"
        src="https://avatars.githubusercontent.com/u/56408067?s=400&u=2da58ebce27c9e89d1c8e5110bfa51c6ab779b83&v=4"
        alt=""
      />
      <p class="leading-4">
        <span class="text-lg font-semibold">Muhammad Sameer</span>
        <br />
        <span>Founder of Techshoor</span>
      </p>
    </div>
    <div class="text-2xl text-amber-400">
      <Icon v-for="x in 5" name="material-symbols:star" />
    </div>
    <p class="text-sm text-lightText">
      Lorem Ipsum, sometimes referred to as 'lipsum', is the placeholder text used in
      design when creating content. It helps designers plan out where the content will
      sit, without needing to wait for the content to be written and approved
    </p>
  </div>
</template>
