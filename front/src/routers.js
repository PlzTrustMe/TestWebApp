import {createRouter, createWebHistory} from 'vue-router';


const routes = [
    {
        path: '/',
        name: 'SettingsPage',
        component: () => import('./pages/SettingsPage.vue')
    },

    {
      path: '/language-model',
      name: 'LanguageModelPage',
      component: () => import('./pages/LanguageModelPage.vue')
    },

    {
        path: '/select-language',
        name: 'SelectLanguagePage',
        component: () => import('./pages/SelectLanguagePage.vue')
    },

    {
        path: '/auto-transcription',
        name: 'AutoTranscriptionPage',
        component: () => import('./pages/AutoTranscriptionPage.vue')
    },

    {
        path: '/auto-speech',
        name: 'AutoSpeechPage',
        component: () => import('./pages/AutoSpeechPage.vue')
    },

    {
        path: '/single-message',
        name: 'SingleMessagePage',
        component: () => import('./pages/SingleMessagePage.vue')
    },

    {
        path: '/custom-instructions',
        name: 'CustomInstructionsPage',
        component: () => import('./pages/CustomInstructions.vue')
    },

    {
        path: '/:pathMatch(.*)*',
        name: 'NotFoundPage',
        component: () => import('./pages/NotFoundPage.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
