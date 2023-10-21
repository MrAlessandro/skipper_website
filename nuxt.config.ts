// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    modules: [
        '@nuxtjs/tailwindcss',
        'nuxt-icon',
        '@nuxt/image',
        'nuxt-swiper',
        '@nuxtjs/i18n',
        'nuxt-simple-sitemap',
        /*['nuxt-gmaps', {
            key: 'AIzaSyAGbxq8T1F7efMZm5qWC2FVF4AHiV0a7yU',
            //you can use libraries: ['places']
        }]*/
    ],
    // @ts-ignore
    /*site: {
        url: 'https://trattoriaskipper.com',
    },*/
    site: {
        url: 'https://trattoriaskipper.com',
        name: 'Trattoria Skipper',
        description: 'La Trattoria Skipper a Lucca è un delizioso ristorante di pesce situato nella pittoresca zona di Santa Maria del Giudice. Qui, gli amanti della cucina marinara possono deliziarsi con autentiche ricette di mare, preparate secondo la tradizione, e assaporare i sapori del Mediterraneo sulle affascinanti colline lucchesi. Un luogo ideale per un\'esperienza gastronomica indimenticabile immersi nella bellezza della Toscana.',
        defaultLocale: 'it',
        identity: {
            type: 'Organization',

        },
    },
    runtimeConfig: {
        indexable: true
    },
    css: ['@/assets/css/main.css'],
    i18n: {
        vueI18n: './i18n.config.ts',// if you are using custom path, default
    },
    image: {
        inject: true,
        dir: 'assets/images',
        format: ['webp'],
        quality: 80,
        screens: {
            'xs': 320,
            'sm': 640,
            'md': 768,
            'lg': 1024,
            'xl': 1280,
            'xxl': 1536,
            '2xl': 1536
        },
    },
})
