<template>
  <div class="relative">
    <div
      class="max-w-7xl mx-auto pb-10 flex items-center lg:flex-row flex-col gap-12 px-5 pt-6"
    >
      <div class="lg:max-w-[500px] w-full space-y-3">
        <h1 class="text-6xl font-semibold">Contacts</h1>
        <h4 class="text-2xl text-foregroundPrimary">Get in Touch</h4>
        <p class="text-lightText text-lg">
          Feel free to contact us any time. We will get back to you as soon as we can!
        </p>
        <div class="space-y-4 pt-16">
          <div class="flex items-center gap-3">
            <Icon name="f7:envelope-fill" class="text-lg" />
            <p>solutions@softechops.com</p>
          </div>
          <div class="flex items-center gap-3">
            <Icon name="ic:round-phone" class="text-lg" />
            <p>
              <a href="tel:+13072185787"> +1 (307) 218-5787 </a>
            </p>
          </div>
          <div class="flex items-center gap-3">
            <Icon name="ic:sharp-location-on" class="text-lg" />
            <p>30 N Gould St 440767 Sheridan, WY 82801, USA</p>
          </div>
        </div>
      </div>
      <div class="lg:flex-1 w-full">
        <form
          @submit.prevent="submitForm"
          class="md:max-w-xl w-full lg:ml-auto p-7 static-shadow-border space-y-4"
        >
          <div
            class="flex flex-col gap-2"
            v-for="(input, index) in inputData"
            :key="index"
          >
            <label class="text-lg font-semibold">{{ input.label }}</label>
            <textarea
              v-if="input.name == 'message'"
              v-model="input.value"
              class="p-2 border rounded-lg border-black relative"
              rows="4"
            ></textarea>
            <input
              v-else
              v-model="input.value"
              type="text"
              class="py-4 px-2 border rounded-lg border-black"
            />
          </div>
          <div class="btn-primary">
            <div class="btn-primary-rect"></div>
            <button
              type="submit"
              class="block !text-white font-semibold px-3 py-2 sm:px-4 sm:py-3 md:px-6 md:py-4 bg-foregroundPrimary hover:bg-foregroundPrimaryHover rounded-2xl border-black border-2 transition-all focus:translate-x-1 focus:translate-y-1"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
const inputData = ref([
  {
    name: "first_name",
    label: "First Name",
    type: "text",
    value: "",
  },
  {
    name: "last_name",
    label: "Last Name",
    type: "text",
    value: "",
  },
  {
    name: "email",
    label: "Email Address",
    type: "email",
    value: "",
  },
  {
    name: "number",
    label: "Phone Number",
    type: "number",
    value: "",
  },
  {
    name: "message",
    label: "Message",
    type: "text",
    value: "",
  },
]);

const submitForm = async () => {
  const { data: responseData } = await useFetch("api/email-sender", {
    method: "post",
    body: {
      first_name: inputData.value[0].value,
      last_name: inputData.value[1].value,
      email: inputData.value[2].value,
      phone: inputData.value[3].value,
      message: inputData.value[4].value,
    },
  });
  inputData.value[0].value = "";
  inputData.value[1].value = "";
  inputData.value[2].value = "";
  inputData.value[3].value = "";
  inputData.value[4].value = "";
  if (responseData.value?.success) {
    alert("Form Submitted Successfully, we'll contact you soon");
  }
};
</script>
