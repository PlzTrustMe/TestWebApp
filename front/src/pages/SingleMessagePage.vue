<script setup>
import BaseTitle from "@/shared/BaseTitle.vue";
import BaseToggle from "@/shared/BaseToggle.vue";
import BaseDescription from "@/shared/BaseDescription.vue";

import {useSettingsStore} from "@/states.js";

const settingsStore = useSettingsStore()
</script>

<template>
  <BaseTitle :isPrimaryType=true title="SINGLE MESSAGE MODE"/>

  <BaseToggle
      @click="settingsStore.setUserSingleMessage()"
      :isToggle=settingsStore.userSingeMessage
      text="Auto Speech Recognition"
  />

  <BaseDescription
      text="Single request mode is a way for the bot to answer only one question at a time, instead of having long chats."
  >
    <template #content>
      <ul>
        <li>It makes everything quicker, but you need to input all the appropriate information about the question at
          once.
        </li>
        <li>In this mode: bot does not remember the previous messages, and the conversations are not saved.</li>
      </ul>
    </template>
  </BaseDescription>
</template>

<style>
ul {
  list-style: inside;
}
</style>