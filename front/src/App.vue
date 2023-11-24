<script setup>
import BaseBackButton from "@/shared/BaseBackButton.vue";
import {useRoute} from "vue-router";

const route = useRoute()
</script>

<template>
  <RouterView/>

  <div v-if="route.name !== 'SettingsPage' && route.name !== undefined">
    <BaseBackButton/>
  </div>
</template>
