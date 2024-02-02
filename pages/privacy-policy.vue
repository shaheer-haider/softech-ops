<template>
  <div>
    <AboutHeroSection
      titleOne="Privacy"
      titleTwo="Policy"
      image="/images/about/pnp.png"
      paragraph="Lorem ipsum dolor sit amet consectetur. Lacinia neque condimentum diam nisi id nunc curabitur arcu id. Ullamcorper eget amet nisl risus nisl. Bibendum ac sollicitudin interdum curabitur ullamcorper. Sagittis dui enim porta auctor adipiscing velit et bibendum sodales."
    />
    <div class="space-y-10 pb-16 px-5">
      <TermAndConditionCard
        v-for="(item, index) in privacyPolicy"
        :key="index"
        :qna="item"
      />
    </div>
  </div>
</template>

<script setup>
const privacyPolicy = [
  {
    question: "Information We Collect",
    answer:
      "Personal Information: We may collect personal information, including but not limited to, your name, email address, and contact details when you voluntarily provide them to us through forms on the Site. Usage Information: We collect information about your interactions with the Site, such as the pages you visit and the actions you take.",
  },
  {
    question: "How We Use Your Information",
    answer:
      "We may use your information for the following purposes To provide and maintain the Site. To improve user experience and customer service. To send periodic emails regarding updates, promotions, and other relevant information.",
  },
  {
    question: "Information Sharing",
    answer:
      "We do not sell, trade, or otherwise transfer your personal information to outside parties. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you, as long as those parties agree to keep this information confidential.",
  },
  {
    question: "Cookies and Tracking Technologies",
    answer:
      "We may use cookies and similar tracking technologies to enhance your experience on the Site. You can control the use of cookies through your browser settings.",
  },
  {
    question: "Third-Party Links",
    answer:
      "The Site may contain links to third-party websites. We have no control over the privacy practices or content of these websites and are not responsible for their practices.",
  },
  {
    question: "Data Security",
    answer:
      "We implement security measures to protect your personal information. However, please be aware that no method of transmission over the internet or electronic storage is 100% secure.",
  },
  {
    question: "Your Choices",
    answer:
      "You can choose not to provide personal information, but this may limit your ability to use certain features of the Site.",
  },
  {
    question: "Updates to this Privacy Notice",
    answer:
      "We may update this Privacy Notice from time to time. The date of the most recent revision will be indicated at the top of this page.",
  },
];
</script>
