<script setup>
const props = defineProps({
  text: {
    type: String,
    default: ""
  }
})
</script>

<template>
  <div class="flex justify-center mb-2">
    <textarea class="w-11/12 h-[100px] bg-tg-theme-secondary-bg rounded-xl p-2 resize-none" :value="props.text">
    </textarea>
  </div>
</template>

