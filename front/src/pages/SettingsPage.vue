<script setup>
import SettingsSection from "@/components/SettingsSection.vue";

import LanguageModelIcon from "@/assets/icons/language-model.png"
import CustomInstructionsIcon from "@/assets/icons/custom-instructions.png"
import ContextWindowLimitIcon from "@/assets/icons/window-limit.png"
import AutomaticSpeechIcon from "@/assets/icons/auto-speech.png"
import AutoTranscriptionIcon from "@/assets/icons/auto-transcription.png"
import SingleMessageIcon from "@/assets/icons/single-message.png"
import LanguageInterfaceIcon from "@/assets/icons/language-interface.png"
import {useSettingsStore} from "@/states.js";

const settingsStore = useSettingsStore()

const settingData = [
  {
    sectionHeader: 'modal settings',
    sectionData: [
      {
        title: 'language model',
        icon: LanguageModelIcon,
        value: settingsStore.getActiveSettings.verbose_name,
        linkToPage: '/language-model',
        isReady: true
      },
      {
        title: 'custom instructions',
        icon: CustomInstructionsIcon,
        linkToPage: '/custom-instructions',
        isReady: true
      },
      {
        title: 'context window limit',
        icon: ContextWindowLimitIcon,
        value: 1000,
        linkToPage: '/window-limit',
        isReady: false
      },
    ]
  },
  {
    sectionHeader: 'additional',
    sectionData: [
      {
        title: 'automatic speech',
        icon: AutomaticSpeechIcon,
        value: settingsStore.userAutoSpeech ? 'On' : 'Off',
        linkToPage: '/auto-speech',
        isReady: true
      },
      {
        title: 'auto transcription',
        icon: AutoTranscriptionIcon,
        value: settingsStore.userAutoTranscription ? 'On' : 'Off',
        linkToPage: '/auto-transcription',
        isReady: true
      },
      {
        title: 'single message',
        icon: SingleMessageIcon,
        value: settingsStore.userSingeMessage ? 'On' : 'Off',
        linkToPage: '/single-message',
        isReady: true
      },
    ]
  },
  {
    sectionHeader: 'interface',
    sectionData: [
      {
        title: 'language',
        icon: LanguageInterfaceIcon,
        value: settingsStore.getActiveLanguage.verbose_name,
        linkToPage: '/select-language',
        isReady: true
      },
    ]
  },
]

</script>

<template>
  <h1 class="text-center text-tg-theme-subtitle-text text-2xl font-semibold mb-5">Settings</h1>

  <SettingsSection
      :section-data="settingData[0].sectionData"
      :section-header="settingData[0].sectionHeader"
  />

  <SettingsSection
      :section-data="settingData[1].sectionData"
      :section-header="settingData[1].sectionHeader"
  />

  <SettingsSection
      :section-data="settingData[2].sectionData"
      :section-header="settingData[2].sectionHeader"
  />
</template>