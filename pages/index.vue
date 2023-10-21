<template>
    <Navbar class="z-10"></Navbar>
    <NuxtImg format="webp" class="h-screen w-screen object-cover object-center" src="photo_book/home_hero.webp"></NuxtImg>
    <section
        class="absolute top-0 left-0 right-0 h-screen w-screen flex items-center justify-center bg-primary-dark/80">
        <div class="flex flex-col items-center">
            <NuxtImg format="webp" class="w-[132px] mb-6" src="skipper_icon_light.svg"></NuxtImg>
            <h1 class="text-6xl md:text-7xl text-center text-light font-heading mb-8">
                Trattoria<br class="md:hidden">&nbsp;Skipper
            </h1>
            <NuxtImg format="webp" class="w-[302px] md:w-[491px]" src="skipper_elements.svg"></NuxtImg>
            <scroll-indicator class="absolute top-[90vh] text-light"></scroll-indicator>
        </div>
    </section>
    <section id="section-1" class="home-section" :style="{...section1BackgroundImg}">
        <div class="container">
            <div class="relative pt-44 grid grid-cols-1 lg:grid-cols-2 gap-y-6 lg:gap-y-8">
                <div class="lg:pr-8">
                    <h2 class="font-heading text-5xl lg:text-6xl mb-6" v-html="$t('section1.title')"></h2>
                    <p class="text-lg">
                        {{ $t('section1.body') }}
                    </p>
                </div>
                <div class="mt-12 lg:mt-0 flex items-end">
                    <NuxtImg format="webp" class="w-full" src="photo_book/2_688.webp"></NuxtImg>
                </div>
                <div class="relative lg:col-span-2 flex flex-col lg:flex-row lg:justify-end">
                    <NuxtImg format="webp" class="lg:w-1/2" src="photo_book/3_688.webp"></NuxtImg>
                    <NuxtImg format="webp"
                        class="mt-6 lg:mt-0 lg:w-1/2 lg:absolute lg:border-canvas-lg border-light lg:top-1/2 left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2"
                        src="photo_book/1_688.webp"></NuxtImg>
                </div>
            </div>
        </div>
    </section>
    <section id="section-2" class="home-section" :style="{...section2BackgroundImg}">
        <div class="container">
            <div class="relative pt-32">
                <div class="text-center">
                    <h2 class="font-heading text-5xl lg:text-6xl mb-4">{{ $t('section2.title') }}</h2>
                    <p class="text-lg" v-html="$t('section2.body')"></p>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-y-8 mt-14">
                    <div v-for="recipe in contents.evidenceRecipes" class="text-center">
                        <strong class="text-lg">{{ recipe.title }}</strong>
                        <p v-html="recipe.caption" class="italic"></p>
                    </div>
                </div>
                <div class="h-56 flex justify-center items-center">
                    <a href="#" class="button">{{ $t('section2.actionLabel') }}</a>
                </div>
            </div>
        </div>
    </section>
    <section id="section-3" class="home-section">
        <parallax height="80vh">
            <NuxtImg format="webp" ref="section3Photo" id="section-3-photo" src="photo_book/4_1920.webp"></NuxtImg>
        </parallax>
    </section>
    <section id="section-4" class="home-section pt-20" :style="{...section4BackgroundImg}">
        <div class="container">
            <div class="flex justify-center items-center">
                <h3 class="font-heading text-5xl lg:text-6xl">{{ $t('section4.title') }}</h3>
            </div>
            <div class="container py-20">
                <div class="relative max-w-[720px] mx-auto">
                    <div
                        class="carousel-prev-handle hidden md:block absolute -left-10 top-1/2 -translate-y-1/2 opacity-30">
                        <Icon name="fluent-mdl2:chevron-left-med" class="text-4xl text-primary md:text-5xl"></Icon>
                    </div>
                    <div
                        class="carousel-next-handle hidden md:block absolute -right-10 top-1/2 -translate-y-1/2 opacity-30">
                        <Icon name="fluent-mdl2:chevron-right-med" class="text-4xl text-primary md:text-5xl"></Icon>
                    </div>
                    <Swiper
                        class="w-full"
                        :modules="[SwiperAutoplay, SwiperEffectCreative]"
                        :slides-per-view="1"
                        autoplay
                        :breakpoints="{
                          '768': {
                            slidesPerView: 2,
                          },
                        }"
                        :loop="true">
                        <SwiperSlide v-for="index in 4" :key="index">
                            <div class="review-slide md:h-80 px-8">
                                <span class="block mb-8">
                                    <Icon class="text-2xl text-amber-400" name="fluent-mdl2:favorite-star-fill"/>
                                    <Icon class="text-2xl text-amber-400" name="fluent-mdl2:favorite-star-fill"/>
                                    <Icon class="text-2xl text-amber-400" name="fluent-mdl2:favorite-star-fill"/>
                                    <Icon class="text-2xl text-amber-400" name="fluent-mdl2:favorite-star-fill"/>
                                    <Icon class="text-2xl text-amber-400" name="fluent-mdl2:favorite-star-fill"/>
                                </span>
                                <p class="text-lg mb-8">“{{ $t(`section4.reviews[${index - 1}].text`) }}”</p>
                                <span class="block text-lg font-bold">{{
                                        $t(`section4.reviews[${index - 1}].author`)
                                    }}</span>
                                <span class="block text-lg text-std-gray">{{
                                        $t(`section4.reviews[${index - 1}].date`)
                                    }}</span>
                                <div class="review-slide-decoration">”</div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    </section>
    <section id="section-5">
        <div class="relative container !max-w-[1280px]">
            <NuxtImg format="webp" src="photo_book/5_1048.webp" class="w-full h-[400px] md:h-[680px] object-cover"></NuxtImg>
            <div
                class="w-full md:absolute -top-32 left-1/2 md:-translate-x-1/3 lg:translate-x-0 md:w-[490px] md:h-[490px] bg-primary-dark flex flex-col justify-around p-10 md:border-canvas-lg md:border-light mt-8 md:mt-0">
                <h3 class="font-heading text-6xl lg:text-7xl text-light md:whitespace-nowrap mb-8 md:mb-0">
                    {{ $t('section5.title') }}</h3>
                <p class="text-lg text-light">{{ $t('section5.body') }}</p>
            </div>
        </div>
    </section>
    <section id="section-6" class="mt-10">
        <div id="section-6-inner" class="relative container md:pl-52 md:pt-40 !max-w-[1280px]"
             :style="{...section6BackgroundImg}">
            <NuxtImg format="webp" src="photo_book/6_1048.webp" class="w-full h-[400px] md:h-[650px] object-cover"></NuxtImg>
            <!--            <div class="w-full md:absolute -top-32 left-1/2 md:w-[490px] md:h-[490px] bg-primary-dark flex flex-col justify-around p-10 md:border-canvas-lg md:border-light mt-8 md:mt-0">
                            <h3 class="font-heading text-6xl lg:text-7xl text-light md:whitespace-nowrap mb-8 md:mb-0">{{$t('section5.title')}}</h3>
                            <p class="text-lg text-light">{{$t('section5.body')}}</p>
                        </div>-->
            <div
                class="w-full md:absolute top-0 left-0 md:w-[550px]  bg-primary-lighter flex flex-col justify-around p-10 md:py-20 md:border-canvas-lg md:border-light mt-8 md:mt-0">
                <h3 class="font-heading text-6xl lg:text-7xl text-primary-dark md:whitespace-nowrap mb-8 ">
                    {{ $t('section6.title') }}</h3>
                <p class="text-lg text-primary-dark">{{ $t('section6.body') }}</p>
            </div>
        </div>
    </section>
    <section id="section-7" class="pt-64 -mt-32" :style="{...section7BackgroundImg}">
        <div id="map" class="w-full h-80 lg:h-96 bg-primary-dark "></div>
    </section>
    <section id="section-8" class="" :style="{...section8BackgroundImg}">
        <div
            class="relative container !max-w-[1280px] py-20 grid grid-cols-2 gap-y-10 lg:gap-y-0 lg:gap-x-8 lg:grid-cols-3">
            <div class="col-span-2 lg:col-span-1">
                <h4 class="text-4xl font-heading mb-10">{{ $t('section8.title1') }}</h4>
                <p class="text-lg ">Via Nuova per Pisa 5901,<br>55100 Lucca LU</p>
                <a class="text-lg block underline hover:text-primary" href="">{{ $t('section8.actionLabel1') }}</a>
            </div>
            <div id="section-8-banner"
                 class="">
                <div class="relative overflow-hidden p-8 md:p-12 h-full">
                    <NuxtImg format="webp" id="section-8-banner-bg-img" src="skipper_elements_crab.svg.webp"
                             class="opacity-30 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[600px]"></NuxtImg>
                    <h5 class="font-heading text-4xl text-light mb-10">{{ $t('section8.bannerTitle') }}</h5>
                    <div class="grid grid-cols-2 md:grid-cols-1 md:gap-y-8 text-light items-end">
                        <div class="text-lg">
                            <strong>{{ $t('section8.bannerTitle1') }}</strong>
                            <p>{{ $t('section8.bannerBody1') }}</p>
                        </div>
                        <div class="text-lg">
                            <strong>{{ $t('section8.bannerTitle2') }}</strong>
                            <p>{{ $t('section8.bannerBody2') }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-span-2 lg:col-span-1">
                <h4 class="text-4xl font-heading mb-10">{{ $t('section8.title2') }}</h4>
                <a class="text-lg block underline hover:text-primary" href="tel:+39 0583 379073">+39 0583 379073</a>
                <a class="text-lg block underline hover:text-primary" href="mailto:info@trattoriaskipper.com">info@trattoriaskipper.com</a>
            </div>
        </div>
    </section>
    <section id="section-9" class="video-homepage-wrapper relative">
        <video autoplay muted loop playsinline class="w-full h-96 object-cover" style="">
            <source src="~/assets/images/photo_book/video_home_720.mp4" type="video/mp4">
        </video>
        <div class="absolute inset-0 bg-primary-dark/60"></div>
        <div class="absolute inset-0 flex items-center justify-center p-8">
            <h2 class="font-heading text-4xl lg:text-7xl text-center text-light">Avrete voglia di tornare</h2>
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
const section3Photo = ref<HTMLImageElement | null>(null);
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
        src: `https://maps.googleapis.com/maps/api/js?key=AIzaSyAGbxq8T1F7efMZm5qWC2FVF4AHiV0a7yU&libraries=places`
    }]
})
const seo = useSeoMeta({
    title: 'Trattoria Skipper',
    ogTitle: 'Trattoria Skipper',
    /*description: 'Trattoria Skipper Lucca, Ristorante di pesce nella zona di Santa maria del Giudice. Ricette di mare tradizionali da gustare sulle colline lucchesi.',*/
    description: 'La Trattoria Skipper a Lucca è un delizioso ristorante di pesce situato nella pittoresca zona di Santa Maria del Giudice. Qui, gli amanti della cucina marinara possono deliziarsi con autentiche ricette di mare, preparate secondo la tradizione, e assaporare i sapori del Mediterraneo sulle affascinanti colline lucchesi. Un luogo ideale per un\'esperienza gastronomica indimenticabile immersi nella bellezza della Toscana.',
    ogDescription: 'La Trattoria Skipper a Lucca è un delizioso ristorante di pesce situato nella pittoresca zona di Santa Maria del Giudice. Qui, gli amanti della cucina marinara possono deliziarsi con autentiche ricette di mare, preparate secondo la tradizione, e assaporare i sapori del Mediterraneo sulle affascinanti colline lucchesi. Un luogo ideale per un\'esperienza gastronomica indimenticabile immersi nella bellezza della Toscana.',
    ogImage: img('skipper_icon.svg.png'),
    twitterCard: 'summary_large_image',
})
const contents = reactive<object>({
    evidenceRecipes: [
        {title: t('section2.evidenceRecipes[0].title'), caption: t('section2.evidenceRecipes[0].caption')},
        {title: t('section2.evidenceRecipes[1].title'), caption: t('section2.evidenceRecipes[1].caption')},
        {title: t('section2.evidenceRecipes[2].title'), caption: t('section2.evidenceRecipes[2].caption')},
        {title: t('section2.evidenceRecipes[3].title'), caption: t('section2.evidenceRecipes[3].caption')},
        {title: t('section2.evidenceRecipes[4].title'), caption: t('section2.evidenceRecipes[4].caption')},
        {title: t('section2.evidenceRecipes[5].title'), caption: t('section2.evidenceRecipes[5].caption')},
    ] as IEvidenceRecipe[]
});

const section1BackgroundImg = computed(() => {
    const imgUrl = img('skipper_elements_clam_combo_2.svg.webp', {format: 'webp', width: 490})
    return {backgroundImage: `url('${imgUrl}')`}
})
const section2BackgroundImg = computed(() => {
    const img1Url = img('skipper_elements_salmon_combo.svg.webp', {format: 'webp', width: 580})
    const img2Url = img('skipper_elements_shrimps.svg.webp', {format: 'webp', width: 580})
    return {backgroundImage: `url('${img1Url}'), url('${img2Url}')`}
})
const section4BackgroundImg = computed(() => {
    const img1Url = img('skipper_elements_crab.svg.webp', {format: 'webp', width: 580})
    const img2Url = img('skipper_elements_lobster.svg.webp', {format: 'webp', width: 580})
    return {backgroundImage: `url('${img1Url}'), url('${img2Url}')`}
})
const section6BackgroundImg = computed(() => {
    const img1Url = img('skipper_elements_fish.svg.webp', {format: 'webp', width: 580})
    return {backgroundImage: `url('${img1Url}')`}
})
const section7BackgroundImg = computed(() => {
    const img2Url = img('skipper_elements_clam_combo_2.svg.webp', {format: 'webp', width: 580})
    return {backgroundImage: `url('${img2Url}')`}
})
const section8BackgroundImg = computed(() => {
    const img2Url = img('skipper_elements_wheat.svg.webp', {format: 'webp', width: 580})
    return {backgroundImage: `url('${img2Url}')`}
})

onMounted(() => {
    nextTick();

    // Initialize and add the map
    let map;

    async function initMap(): Promise<void> {
        // The location of Uluru
        const position = {lat: 43.77644120870568, lng: 10.459434706484583};

        // Request needed libraries.
        //@ts-ignore
        const {Map} = await google.maps.importLibrary("maps") as google.maps.MapsLibrary;
        //@ts-ignore
        const {AdvancedMarkerElement} = await google.maps.importLibrary("marker") as google.maps.MarkerLibrary;

        // The map, centered at Uluru
        map = new Map(
            document.getElementById('map') as HTMLElement,
            {
                mapId: 'skipper-homepage-map',
                disableDefaultUI: true,
                center: position,
                zoom: 15,
                styles: [{featureType: 'all', stylers: [{saturation: -100}, {gamma: 0.0}]}]
            }
        );

        // The marker, positioned at Uluru
        const marker = new AdvancedMarkerElement({
            map: map,
            position: position,
            title: 'Uluru'
        });
    }

    initMap()
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

#section-2 {
    background-size: 280px, 250px;
    background-position: right bottom 1rem, left -1rem top 2rem;
}

@media screen(lg) {
    #section-2 {
        background-size: auto, 300px;
        background-position: right 8rem bottom 1rem, left 5rem top;
    }
}

#section-3-photo {
    @apply w-screen object-cover h-full;
}

#section-4 {
    background-size: 280px, 250px;
    background-position: left -2rem top 1rem, right -1rem bottom;
}

@media screen(lg) {
    #section-4 {
        background-size: 380px, 400px;
        background-position: left -2rem top 1rem, right -1rem bottom;
    }
}

.review-slide-decoration {
    @apply absolute top-1/2 left-0 -translate-y-[135px] font-heading text-primary/10 -z-10;
    font-size: 270px;
}

#section-6-inner {
    @apply bg-no-repeat;
    background-size: 280px; /*, 125px;*/
    background-position: right top; /*, left bottom;*/
}

@media screen(lg) {
    #section-6-inner {
        background-size: 380px; /*, 125px;*/
        background-position: right top; /*, left bottom;*/
    }
}

#section-7 {
    @apply bg-no-repeat;
    background-size: 340px; /*, 125px;*/
    background-position: left top; /*, left bottom;*/
}

@media screen(lg) {
    #section-7 {
        background-size: 400px; /*, 125px;*/
        background-position: left -5rem top; /*, left bottom;*/
    }
}

#section-8 {
    @apply bg-no-repeat;
    background-position: left bottom;
    background-size: 300px;
}

#section-8-banner {
    @apply w-full col-span-2 md:absolute md:h-[450px] md:w-[450px] bg-primary md:top-1/2 md:right-0 md:-translate-y-1/2 md:border-canvas-lg border-light z-10;

}
</style>
