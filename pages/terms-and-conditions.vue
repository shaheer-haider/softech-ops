<template>
  <div>
    <AboutHeroSection
      titleOne="Terms and"
      titleTwo="Conditions of Use"
      image="/images/about/tnc.png"
      paragraph="Lorem ipsum dolor sit amet consectetur. Lacinia neque condimentum diam nisi id nunc curabitur arcu id. Ullamcorper eget amet nisl risus nisl. Bibendum ac sollicitudin interdum curabitur ullamcorper. Sagittis dui enim porta auctor adipiscing velit et bibendum sodales."
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
      "You agree to provide accurate, current, and complete information when using the Site. You are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer.",
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
  {
    question: "Disclaimer",
    answer:
      "The content on this Site is provided 'as is' without warranties of any kind, either express or implied. Softech Ops does not warrant that the Site will be uninterrupted or error-free, that defects will be corrected, or that the Site or the server that makes it available are free of viruses or other harmful components.",
  },
  {
    question: "Disclaimer",
    answer:
      "In no event shall Softech Ops be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from your use or inability to use the Site, any unauthorized access to or use of our servers and/or any personal information stored therein, any interruption or cessation of transmission to or from the Site, or any bugs, viruses, trojan horses, or the like, which may be transmitted to or through the Site by any third party.",
  },
];
</script>
