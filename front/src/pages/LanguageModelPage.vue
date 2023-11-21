<script setup>
import {onMounted, ref} from "vue";
import SelectionOption from "@/components/SelectionOption.vue";

import BaseTitle from "@/shared/BaseTitle.vue";
import BaseBackButton from "@/shared/BaseBackButton.vue";
import BaseDescription from "@/shared/BaseDescription.vue";
import BaseSelection from "@/shared/BaseSelection.vue";
import BaseSaveButton from "@/shared/BaseSaveButton.vue";

import {useSettingsStore} from "@/states.js";

const settingsStore = useSettingsStore()

const lastSelectedModelId = ref(0)

onMounted(() => {
  lastSelectedModelId.value = settingsStore.getActiveSettings.model_id
})
</script>

<template>
  <BaseTitle :isPrimaryType=true title="Language Model"/>

  <BaseSelection>
    <div v-for="setting in settingsStore.settings">
      <SelectionOption @click="settingsStore.setActiveModel(setting.model_id)"
                       :isSelected="setting.isSelected"
                       :text="setting.verbose_name" :key="setting.model_id"/>
    </div>
  </BaseSelection>

  <BaseDescription text="Choose the language model that ChatGPT will use to generate responses">
    <template #content>
      <ul>
        <li><strong>GPT 3</strong> provides good results at a lower cost.</li>
        <li><strong>GPT 4</strong> offers superior performance but at a higher price.</li>
      </ul>
    </template>
  </BaseDescription>

  <BaseBackButton/>

  <BaseSaveButton :new-value="settingsStore.getActiveSettings.model_id" :old-value="lastSelectedModelId" />
</template>

<style>
ul {
  list-style: inside;
}
</style>