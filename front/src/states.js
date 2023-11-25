import {defineStore} from "pinia";

export const useSettingsStore = defineStore('settings', {
    state: () => {
        return {
            settings: [
                {
                    model_id: 1,
                    model_name: "gpt2",
                    verbose_name: "GPT-2",
                    isSelected: true
                },
                {
                    model_id: 2,
                    model_name: "gpt3",
                    verbose_name: "GPT-3",
                    isSelected: false
                },
                {
                    model_id: 3,
                    model_name: "gpt4",
                    verbose_name: "GPT-4",
                    isSelected: false
                },
            ],

            languages: [
                {
                    language_id: 1,
                    language_name: 'English',
                    verbose_name: 'English',
                    isSelected: true
                },
                {
                    language_id: 2,
                    language_name: 'Russian',
                    verbose_name: 'Русский',
                    isSelected: false
                },
                {
                    language_id: 3,
                    language_name: 'Ukrainian',
                    verbose_name: 'Український',
                    isSelected: false
                },
            ],

            userAutoTranscription: false
        }
    },

    getters: {
        getActiveSettings(state) {
            return state.settings.find(model => model.isSelected === true)
        },

        getActiveLanguage(state) {
            return state.languages.find(model => model.isSelected === true)
        },
    },

    actions: {
        setActiveModel(modelId) {
            this.settings.forEach(model => {
                model.isSelected = model.model_id === modelId;
            });
        },

        setActiveLanguage(languageId) {
            this.languages.forEach(language => {
                language.isSelected = language.language_id === languageId
            })
        },

        setUserAutoTranscription() {
            this.userAutoTranscription = !this.userAutoTranscription;
        }
    }
})
