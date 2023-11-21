<script setup>
const props = defineProps({
  text: {
    type: String,
    required: true
  },

  subtext: {
    type: String,
    required: false
  },

  isSelected: {
    type: Boolean,
    required: true
  }
})
</script>
<template>
  <div
      class="flex justify-between items-center p-3 border-tg-theme-bg border-[1px] cursor-pointer">
    <div class="space-y-1">
      <div class="text-sm text-tg-theme-text">{{ props.text }}</div>
      <div class="text-xs text-tg-theme-hint">{{ props?.subtext }}</div>
    </div>

    <div>
      <div v-if="props.isSelected"
           class="w-2.5 h-1 border-b-2 border-l-2 border-tg-theme-accent -rotate-45"></div>
    </div>
  </div>
</template>