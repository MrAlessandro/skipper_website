// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    modules: [
        '@nuxtjs/tailwindcss',
        'nuxt-icon',
        '@nuxt/image',
        'nuxt-swiper',
        '@nuxtjs/i18n',
    ],
    css: ['@/assets/css/main.css'],
    i18n: {
        vueI18n: './i18n.config.ts',// if you are using custom path, default
    },
    image: {
        inject: true,
        dir: 'assets/images',
        /*quality: 80,*/
        /*screens: {
            'xs': 320,
            'sm': 640,
            'md': 768,
            'lg': 1024,
            'xl': 1280,
            'xxl': 1536,
            '2xl': 1536
        },*/
    },

})
