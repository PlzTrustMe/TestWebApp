<script setup>
import BaseTitle from "@/shared/BaseTitle.vue";
import BaseToggle from "@/shared/BaseToggle.vue";
import BaseDescription from "@/shared/BaseDescription.vue";

import {useSettingsStore} from "@/states.js";

const settingsStore = useSettingsStore()
</script>

<template>
  <BaseTitle :isPrimaryType=true title="Auto Speech"/>

   <BaseToggle
      @click="settingsStore.setUserAutoSpeech()"
      :isToggle=settingsStore.userAutoSpeech
      text="Auto Speech Recognition"
  />

  <BaseDescription color="text-tg-theme-destructive-text" text="This option does not control this interface yet"/>

  <BaseDescription text="This feature will force the bot to send you voice messages as the response."/>
</template>
