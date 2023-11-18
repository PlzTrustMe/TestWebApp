<script setup>
import SettingsSection from "@/components/SettingsSection.vue";

import LanguageModelIcon from "@/assets/icons/language-model.png"
import CustomInstructionsIcon from "@/assets/icons/custom-instructions.png"
import ContextWindowLimitIcon from "@/assets/icons/window-limit.png"
import AutomaticSpeechIcon from "@/assets/icons/auto-speech.png"
import AutoTranscriptionIcon from "@/assets/icons/auto-transcription.png"
import SingleMessageIcon from "@/assets/icons/single-message.png"
import LanguageInterfaceIcon from "@/assets/icons/language-interface.png"

const settingData = [
  {
    section_header: 'modal settings',
    section_data: [
      {
        title: 'language model',
        icon: LanguageModelIcon,
        value: 'gpt-3',
        linkToPage: '/language-model'
      },
      {
        title: 'custom instructions',
        icon: CustomInstructionsIcon,
        linkToPage: '/custom-instructions'
      },
      {
        title: 'context window limit',
        icon: ContextWindowLimitIcon,
        value: 1000,
        linkToPage: '/window-limit'
      },
    ]
  },
  {
    section_header: 'additional',
    section_data: [
      {
        title: 'automatic speech',
        icon: AutomaticSpeechIcon,
        value: 'off',
        linkToPage: '/language-model'
      },
      {
        title: 'auto transcription',
        icon: AutoTranscriptionIcon,
        value: 'off',
        linkToPage: '/custom-instructions'
      },
      {
        title: 'single message',
        icon: SingleMessageIcon,
        value: 'off',
        linkToPage: '/window-limit'
      },
    ]
  },
  {
    section_header: 'interface',
    section_data: [
      {
        title: 'language',
        icon: LanguageInterfaceIcon,
        value: 'russia',
        linkToPage: '/language-model'
      },
    ]
  },
]
</script>

<template>
  <h1 class="text-center text-tg-theme-subtitle-text text-2xl font-semibold mb-5">Settings</h1>

  <SettingsSection
      :section-data="settingData[0].section_data"
      :section-header="settingData[0].section_header"
  />

    <SettingsSection
      :section-data="settingData[1].section_data"
      :section-header="settingData[1].section_header"
  />

    <SettingsSection
      :section-data="settingData[2].section_data"
      :section-header="settingData[2].section_header"
  />
</template>