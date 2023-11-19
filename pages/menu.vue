<template>
    <Navbar class="z-10"></Navbar>
    <NuxtImg format="webp" class="h-screen w-screen object-cover object-center" src="photo_book/7_1920.webp"></NuxtImg>
    <section
        class="absolute top-0 left-0 right-0 h-screen w-screen flex items-center justify-center bg-primary-dark/80">
        <div class="flex flex-col items-center">
            <NuxtImg format="webp" class="w-[132px] mb-6" src="skipper_icon_light.svg.webp"></NuxtImg>
            <h1 class="text-6xl md:text-7xl text-center text-light font-heading mb-8">
                Men&ugrave;
            </h1>
            <NuxtImg format="webp" class="w-[302px] md:w-[491px]" src="skipper_elements.svg.webp"></NuxtImg>
            <scroll-indicator class="absolute top-[90vh] text-light"></scroll-indicator>
        </div>
    </section>
    <PageFooter></PageFooter>
</template>

<script setup lang="ts">
import Navbar from "~/components/navbar.vue";

interface IEvidenceRecipe {
    title: String;
    caption: String;
}

const {t} = useI18n()
const img = useImage()
const head = useHead({
    meta: [
        {
            name: 'msapplication-TileColor',
            content: '#f0faff',
        },
        {
            name: 'theme-color',
            content: '#00517f',
        },
        /*{
            name: 'msapplication-config',
            content: img('favicons/browserconfig.xml'),
        },*/


    ],
    link: [
        {
            rel: "apple-touch-icon",
            sizes: "180x180",
            href: img("favicons/apple-touch-icon.png"),
        },
        {
            rel: "icon",
            type: "image/png",
            sizes: "32x32",
            href: img("favicons/favicon-32x32.png"),
        },
        {
            rel: "icon",
            type: "image/png",
            sizes: "16x16",
            href: img("favicons/favicon-16x16.png"),
        },
        {
            rel: "mask-icon",
            href: img("favicons/safari-pinned-tab.svg.png"),
            color: "#0171bb",
        },
        {
            rel: "icon",
            href: "favicon.ico",
        },
    ],
    script: [{
        src: `https://maps.googleapis.com/maps/api/js?key=AIzaSyAGbxq8T1F7efMZm5qWC2FVF4AHiV0a7yU&libraries=places`,
        async: true,
    }]
})
const seo = useSeoMeta({
    title: 'Trattoria Skipper',
    titleTemplate: () => 'Trattoria Skipper',
    ogTitle: 'Trattoria Skipper',
    /*description: 'Trattoria Skipper Lucca, Ristorante di pesce nella zona di Santa maria del Giudice. Ricette di mare tradizionali da gustare sulle colline lucchesi.',*/
    description: 'La Trattoria Skipper a Lucca è un delizioso ristorante di pesce situato nella pittoresca zona di Santa Maria del Giudice. Qui, gli amanti della cucina marinara possono deliziarsi con autentiche ricette di mare, preparate secondo la tradizione, e assaporare i sapori del Mediterraneo sulle affascinanti colline lucchesi. Un luogo ideale per un\'esperienza gastronomica indimenticabile immersi nella bellezza della Toscana.',
    ogDescription: 'La Trattoria Skipper a Lucca è un delizioso ristorante di pesce situato nella pittoresca zona di Santa Maria del Giudice. Qui, gli amanti della cucina marinara possono deliziarsi con autentiche ricette di mare, preparate secondo la tradizione, e assaporare i sapori del Mediterraneo sulle affascinanti colline lucchesi. Un luogo ideale per un\'esperienza gastronomica indimenticabile immersi nella bellezza della Toscana.',
    ogImage: img('skipper_icon.svg.png'),
    twitterCard: 'summary_large_image',
})
const contents = reactive<object>({
});

const section1BackgroundImg = computed(() => {
    const imgUrl = img('skipper_elements_clam_combo_2.svg.webp', {format: 'webp', width: 490})
    return {backgroundImage: `url('${imgUrl}')`}
});

onMounted(() => {
    nextTick();
})
</script>

<style scoped>
#section-1 {
    @apply bg-[length:300px] md:bg-auto;
    background-position: center 2rem;
}

@media screen(lg) {
    #section-1 {
        background-position: calc(50% - 3rem) 2rem;
    }
}

</style>
