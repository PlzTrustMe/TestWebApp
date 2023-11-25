<script setup>
const props = defineProps({
  text: {
    type: String,
    required: true
  },

  isToggle: {
    type: Boolean,
    required: true,
  }
})
</script>

<template>
  <div class="flex justify-between items-center p-3 bg-tg-theme-secondary-bg rounded-lg">
    <div class="">{{ props.text }}</div>
    <span
        :class="{'bg-tg-theme-accent before:translate-x-[26px] transition-transform duration-300': isToggle}"
        class="cursor-pointer bg-tg-theme-bg w-[50px] h-[30px] px-0.5 flex items-center
          rounded-[30px] before:content-[''] before:inline-block before:rounded-[50%] before:w-[24px] before:h-[24px]
          before:bg-tg-theme-text before:transition-transform before:duration-300">
    </span>
  </div>
</template>

