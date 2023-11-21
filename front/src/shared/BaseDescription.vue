<script setup>
const props = defineProps({
  text: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="flex flex-col gap-2.5 text-xs text-tg-theme-hint mt-2.5 pl-2.5">
    {{ props.text }}

    <slot name="content"></slot>
  </div>
</template>

