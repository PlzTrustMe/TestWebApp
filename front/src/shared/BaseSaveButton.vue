<script setup>
import {MainButton} from "vue-tg";

const props = defineProps({
  oldValue: {
    type: [String, Number],
    required: true
  },

  newValue: {
    type: [String, Number],
    required: true
  }
})
</script>

<template>
  <MainButton
      v-if="props.oldValue !== props.newValue"
      text="Save"
  />
</template>

