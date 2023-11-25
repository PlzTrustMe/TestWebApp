<script setup>
import BaseTitle from "@/shared/BaseTitle.vue";
import BaseDescription from "@/shared/BaseDescription.vue";
import BaseToggle from "@/shared/BaseToggle.vue";

import { useSettingsStore} from "@/states.js";

const settingsStore = useSettingsStore()
</script>

<template>
  <BaseTitle :isPrimaryType=true title="Auto Transcription"/>

  <BaseToggle :isToggle=settingsStore.userAutoTranscription text="Auto Speech Recognition" />

  <BaseDescription
      text="Toggles audio transcription for voice messages and video notes, allowing to communicate with
      the bot using audio if desired"
  />
</template>

