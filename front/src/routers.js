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
