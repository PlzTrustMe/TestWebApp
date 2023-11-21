<script setup>
import BaseTitle from "@/shared/BaseTitle.vue";
import BaseBackButton from "@/shared/BaseBackButton.vue";
import SettingsSelectionOption from "@/components/SettingsSelectionOption.vue";

import {useSettingsStore} from "@/states.js";
import BaseDescription from "@/shared/BaseDescription.vue";

const settingsStore = useSettingsStore()
</script>

<template>
  <BaseTitle :isPrimaryType=true title="Language Model"/>

  <div class="bg-tg-theme-secondary-bg rounded-xl flex flex-col">
    <div v-for="setting in settingsStore.models">
      <SettingsSelectionOption @click="settingsStore.setActiveModel(setting.model_id)"
                               :isSelected="setting.isSelected"
                               :text="setting.verbose_name" :key="setting.model_id"/>
    </div>
  </div>

  <div>
    <BaseDescription text="Choose the language model that ChatGPT will use to generate responses">
      <template #content>
        <ul>
          <li><strong>GPT 3</strong> provides good results at a lower cost.</li>
          <li><strong>GPT 4</strong> offers superior performance but at a higher price.</li>
        </ul>
      </template>
    </BaseDescription>
  </div>

  <BaseBackButton/>
</template>

<style>
ul {
  list-style: inside;
}
</style>