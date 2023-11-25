<script setup>
const props = defineProps({
  title: {
    type: String,
    default: 'Base Title'
  },

  isPrimaryType: {
    type: Boolean,
    default: true
  }
})
</script>

<template>
    <h2 :class="[props.isPrimaryType ? 'uppercase': 'capitalize']"
        class="text-tg-theme-subtitle-text mb-2.5 ps-3.5">
      {{ props.title }}
    </h2>
</template>