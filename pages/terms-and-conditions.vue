<template>
  <div>
    <AboutHeroSection
      titleOne="Terms and"
      titleTwo="Conditions of Use"
      image="/images/about/tnc.png"
      paragraph=""
      :showPath="false"
    />
    <div class="space-y-10 pb-16 px-5">
      <TermAndConditionCard
        v-for="(item, index) in termsAndConditions"
        :key="index"
        :qna="item"
      />
    </div>
  </div>
</template>

<script setup>
const termsAndConditions = [
  {
    question: "Acceptance of Terms",
    answer:
      "By accessing or using the website https://softechops.com/ (the 'Site'), you agree to comply with and be bound by these terms and conditions of use ('Terms'). If you do not agree with these Terms, please do not use this Site.",
  },
  {
    question: "Changes to Terms",
    answer:
      "We reserve the right to modify, update, or replace these Terms at any time without notice. It is your responsibility to check for changes periodically. Your continued use of the Site following the posting of any changes constitutes acceptance of those changes.",
  },
  {
    question: "Use of the Site",
    answer:
      "You agree to provide accurate, current, and complete information when using the Site. We store your contact details securely.",
  },
  {
    question: "Intellectual Property",
    answer:
      "All content on this Site, including but not limited to text, graphics, logos, images, and software, is the property of Softech Ops or its content suppliers and is protected by copyright laws. You may not reproduce, distribute, display, or transmit any content on this Site without the prior written consent of Softech Ops.",
  },
  {
    question: "User Conduct",
    answer:
      "You agree not to use the Site for any unlawful purpose or in a way that violates these Terms. You may not use the Site to solicit personal information from others or to engage in any commercial activities.",
  },
];
</script>
