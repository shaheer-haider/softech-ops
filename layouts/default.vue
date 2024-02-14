<template>
  <div class="flex flex-col justify-between min-h-screen">
    <div class="relative w-full">
      <Header />
      <NuxtPage class="mt-24 sm:mt-32 md:mt-36 w-full mx-auto" />
    </div>
    <div class="px-4">
      <PreFooter />
    </div>

    <Footer />

    <ClientOnly>
      <noscript>
        <img
          height="1"
          width="1"
          style="display: none"
          alt=""
          src="https://px.ads.linkedin.com/collect/?pid=6710273&fmt=gif"
        />
      </noscript>
    </ClientOnly>
  </div>
</template>

<script setup>
const nuxtApp = useNuxtApp();

nuxtApp.hook("page:finish", () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const animationName = "anim-" + entry.target.getAttribute("anim");
          if (entry.target.classList.contains(animationName)) {
            entry.target.classList.remove(animationName);
            entry.target.classList.add(`${animationName}-active`);
            observer.unobserve(entry.target);
          }
        }
      });
    },
    {
      threshold: 0.5,
    }
  );
  const hiddenElement = document.querySelectorAll(".anim");
  hiddenElement.forEach((element) => observer.observe(element));
});
</script>
