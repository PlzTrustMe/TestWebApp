<script setup>
import {onMounted, ref} from "vue";
import {useSettingsStore} from "@/states.js";

import SelectionOption from "@/components/SelectionOption.vue";

import BaseTitle from "@/shared/BaseTitle.vue";
import BaseBackButton from "@/shared/BaseBackButton.vue";
import BaseSelection from "@/shared/BaseSelection.vue";
import BaseDescription from "@/shared/BaseDescription.vue";
import BaseSaveButton from "@/shared/BaseSaveButton.vue";

const settingsStore = useSettingsStore()

const lastActiveLanguageId = ref(0)
const newActiveLanguageId = ref(0)

onMounted(() => {
  lastActiveLanguageId.value = settingsStore.getActiveLanguage.language_id
  newActiveLanguageId.value = settingsStore.getActiveLanguage.language_id
})

function setNewActiveLanguageId(id) {
  settingsStore.setActiveLanguage(id)
  newActiveLanguageId.value = id
}
</script>

<template>
  <BaseTitle :isPrimaryType=true title="Language"/>

  <BaseSelection>
    <div v-for="language in settingsStore.languages">
      <SelectionOption
          @click="setNewActiveLanguageId(language.language_id)"
          :isSelected="language.isSelected"
          :text="language.language_name"
          :subtext="language.verbose_name"
      />
    </div>
  </BaseSelection>

  <BaseDescription color="text-tg-theme-destructive-text" text="This option does not control this interface yet"/>

  <BaseDescription text="Controls the language of the interface in the bot"/>

  <BaseBackButton/>

  <BaseSaveButton
      :new-value="newActiveLanguageId"
      :old-value="lastActiveLanguageId"
  />
</template>
