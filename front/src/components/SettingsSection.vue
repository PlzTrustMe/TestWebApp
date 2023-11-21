<script setup>
import BaseCard from "@/shared/BaseCard.vue";
import BaseTitle from "@/shared/BaseTitle.vue";

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
    <BaseTitle :title="props.sectionHeader" />

    <div class="space-y-1">
      <div v-for="item in props.sectionData">
        <BaseCard :title="item.title" :link-to-page="item.linkToPage" :icon="item.icon"
                  :value="item?.value" :isReady="item.isReady" />
      </div>
    </div>
  </section>
</template>
