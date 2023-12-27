<template>
  <component :is="props.type" >
    <template v-for="content in props.contentArray">
      <br v-if="content.type == 'breakpoint'" />
      <span v-else :class="content.class">
        {{ content.text }}
      </span>
    </template>
  </component>
</template>

<script setup>
const props = defineProps({
  type: {
    type: String,
    default: "span",
  },
  contentArray: {
    type: Array,
    default: [],
  },
});
</script>
