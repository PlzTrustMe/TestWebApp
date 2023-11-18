<script setup>
import BaseCard from "@/shared/BaseCard.vue";

const props = defineProps({
  sectionHeader: {
    type: String,
    required: true
  },

  sectionData: {
    type: Array,
    required: true
  }

})
</script>

<template>
  <section class="mb-7">
    <h2 class="text-tg-theme-subtitle-text text-sm mb-2.5 ps-3.5 uppercase">{{ props.sectionHeader }}</h2>

    <div class="space-y-1">
      <div v-for="item in props.sectionData">
        <BaseCard :title="item.title" :link-to-page="item.linkToPage" :icon="item.icon"
                  :value="item?.value"/>
      </div>
    </div>
  </section>
</template>
