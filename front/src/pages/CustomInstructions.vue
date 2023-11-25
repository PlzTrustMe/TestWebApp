<script setup>
import BaseTitle from "@/shared/BaseTitle.vue";
import BaseDescription from "@/shared/BaseDescription.vue";
import BasePlaceholder from "@/shared/BasePlaceholder.vue";
import BaseSaveButton from "@/shared/BaseSaveButton.vue";

import { useSettingsStore} from "@/states.js";
import {ref} from "vue";

const settingsStore = useSettingsStore()
const test = ref("")

console.log(test.value)
console.log(settingsStore.userResponse)
console.log(settingsStore.userRespond)

</script>

<template>
  <BaseTitle :isPrimaryType=false title="What Would You Like ChatGPT To Know About You To Provide Better Responses?"/>
  <BasePlaceholder :text="settingsStore.userResponse" v-model="test" />

  <BaseTitle :isPrimaryType=false title="How Would You Like ChatGPT To Respond?"/>
  <BasePlaceholder :text="settingsStore.userRespond" />

  <BaseDescription text="This feature allows ChatGPT to feel more personal and contextual for each user." />
  <BaseDescription text="The custom instruction feature enables users to provide standing information and preferences to personalize ChatGPT's responses, eliminating the need to re-explain the same details in every conversation." />
  <BaseDescription text="For example, users can set custom instructions to inform ChatGPT about their occupation, values, interests, or frequently asked questions, allowing the AI to tailor its responses accordingly without repeatedly prompting the user for the same background information." />

  <BaseSaveButton :new-value="test" :old-value="settingsStore.userResponse || settingsStore.userRespond" />
</template>
