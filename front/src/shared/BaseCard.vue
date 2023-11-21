<script setup>
import ArrowIcon from "@/shared/ArrowIcon.vue";

const props = defineProps({
  title: {
    type: String,
    required: true
  },

  value: {
    type: [String, Number],
    required: false
  },

  icon: {
    type: String,
    required: true
  },

  linkToPage: {
    type: String,
    required: true
  },

  isReady: {
    type: Boolean,
    required: false,
    default: false
  }
})
</script>

<template>
  <RouterLink :to="props.linkToPage" :disabled="!props.isReady">
    <div :class="[props.isReady ? '' : 'opacity-20']"
         class="flex justify-between items-center bg-tg-theme-secondary-bg p-2.5 rounded-lg">
      <div class="flex items-center gap-2.5">
        <div>
          <img class="rounded-lg w-8 h-8" :src="props.icon" :alt="props.title"/>
        </div>

        <div class="text-sm text-tg-theme-text capitalize">
          {{ title }}
        </div>
      </div>

      <div class="flex items-center gap-2.5 ">
        <div class="text-xs text-tg-theme-hint uppercase" v-if="value">{{ value }}</div>

        <ArrowIcon/>
      </div>
    </div>
  </RouterLink>
</template>
