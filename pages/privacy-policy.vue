<template>
  <div>
    <AboutHeroSection
      titleOne="Privacy"
      titleTwo="Policy"
      image="/images/about/pnp.png"
      paragraph=""
      :showPath="false"
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
      "Personal Information: We may collect personal information, including but not limited to, your name, email address, and contact details when you voluntarily provide them to us through forms on the Site.",
  },
  {
    question: "How We Use Your Information",
    answer:
      "We may use your information to reach out to you to discuss and schedule a meeting for you. Your information will stay secure and not accessible publicly.",
  },
  {
    question: "Information Sharing",
    answer:
      "We do not sell, trade, or otherwise transfer your personal information to outside parties.",
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
      "You can choose not to provide personal information and contact our team directly. For more information.",
  },
  {
    question: "Updates to this Privacy Notice",
    answer:
      "We may update this Privacy Notice from time to time. The date of the most recent revision will be indicated at the top of this page.",
  },
];
</script>
