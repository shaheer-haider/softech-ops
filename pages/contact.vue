<template>
  <div class="relative">
    <div class="max-w-7xl mx-auto py-16 flex items-center">
      <div class="max-w-[500px] space-y-3">
        <h1 class="text-6xl font-semibold">Contacts</h1>
        <h4 class="text-2xl text-foregroundPrimary">Get in Touch</h4>
        <p class="text-lightText text-lg">
          Feel free to contact us any time. We will get back to you as soon as
          we can!
        </p>
      </div>
      <div class="flex-1">
        <form class="max-w-xl ml-auto p-7 static-shadow-border space-y-4">
          <div
            class="flex flex-col gap-2"
            v-for="(input, index) in inputData"
            :key="index"
          >
            <label class="text-lg font-semibold">{{ input.label }}</label>
            <textarea
              v-if="input.name == 'message'"
              class="p-2 border rounded-lg border-black relative"
              rows="4"
            ></textarea>
            <input
              v-else
              type="text"
              class="py-4 px-2 border rounded-lg border-black"
            />
          </div>
          <ButtonPrimary button-text="Submit" />
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
</script>
