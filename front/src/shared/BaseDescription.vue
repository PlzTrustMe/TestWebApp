<script setup>
const props = defineProps({
  text: {
    type: String,
    required: true
  },

  color: {
    type: String,
    required: false,
    default: 'text-tg-theme-hint'
  }
})
</script>

<template>
  <div
      :class="props.color"
      class="flex flex-col gap-2.5 text-xs mt-2.5 pl-2.5">
    {{ props.text }}

    <slot name="content"></slot>
  </div>
</template>

