import {defineStore} from "pinia";

export const useSettingsStore = defineStore('settings', {
    state: () => ({
        models: [
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
        ]
    }),

    getters: {
        getActiveSettings(state) {
            return state.models.find(model => model.isSelected === true)
        }
    },

    actions: {
        setActiveModel(modelId) {
            this.models.forEach(model => {
                model.isSelected = model.model_id === modelId;
            });
        }
    }
})
