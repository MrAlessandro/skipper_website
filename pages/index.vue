<template>
    <Navbar class="z-10"></Navbar>
    <NuxtImg class="h-screen w-screen object-cover object-center" src="photo_book/home_hero.jpg"></NuxtImg>
    <div class="absolute top-0 left-0 right-0 h-screen w-screen flex items-center justify-center bg-primary-dark/80">
        <div class="flex flex-col items-center">
            <NuxtImg class="w-[132px] mb-6" src="skipper_icon_light.svg"></NuxtImg>
            <h1 class="text-6xl md:text-7xl text-center text-light font-heading mb-8">
                Trattoria<br class="md:hidden">&nbsp;Skipper
            </h1>
            <NuxtImg class="w-[302px] md:w-[491px]" src="skipper_elements.svg"></NuxtImg>
            <scroll-indicator class="absolute top-[90vh] text-light"></scroll-indicator>
        </div>
    </div>
    <div id="section-1" class="home-section" :style="{...section1BackgroundImg}">
        <div class="container">
            <div class="relative pt-44 grid grid-cols-1 lg:grid-cols-2 gap-y-6 lg:gap-y-8">
                <div class="lg:pr-8">
                    <h2 class="font-heading text-5xl lg:text-6xl mb-6" v-html="$t('section1.title')"></h2>
                    <p class="text-lg">
                        {{ $t('section1.body') }}
                    </p>
                </div>
                <div class="mt-12 lg:mt-0 flex items-end">
                    <NuxtImg class="w-full" src="photo_book/2_688.jpg"></NuxtImg>
                </div>
                <div class="relative lg:col-span-2 flex flex-col lg:flex-row lg:justify-end">
                    <NuxtImg class="lg:w-1/2" src="photo_book/3_688.jpg"></NuxtImg>
                    <NuxtImg
                        class="mt-6 lg:mt-0 lg:w-1/2 lg:absolute lg:border-canvas-lg border-light lg:top-1/2 left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2"
                        src="photo_book/1_688.jpg"></NuxtImg>
                </div>
            </div>
        </div>
    </div>
    <div id="section-2" class="home-section" :style="{...section2BackgroundImg}">
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
    </div>
    <div id="section-3" class="home-section">
        <parallax height="80vh">
            <NuxtImg ref="section3Photo" id="section-3-photo" src="photo_book/4_1920.jpg"></NuxtImg>
        </parallax>
    </div>
    <div id="section-4" class="home-section pt-20" :style="{...section4BackgroundImg}">
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
    </div>
    <div id="section-5">
        <div class="relative container !max-w-[1280px]">
            <NuxtImg src="photo_book/5_1048.jpg" class="w-full h-[400px] md:h-[680px] object-cover"></NuxtImg>
            <div class="w-full md:absolute -top-32 left-1/2 md:-translate-x-1/3 lg:translate-x-0 md:w-[490px] md:h-[490px] bg-primary-dark flex flex-col justify-around p-10 md:border-canvas-lg md:border-light mt-8 md:mt-0">
                <h3 class="font-heading text-6xl lg:text-7xl text-light md:whitespace-nowrap mb-8 md:mb-0">{{$t('section5.title')}}</h3>
                <p class="text-lg text-light">{{$t('section5.body')}}</p>
            </div>
        </div>
    </div>
    <div id="section-6" class="mt-10">
        <div class="relative container md:pl-52 md:pt-40 !max-w-[1280px]">
            <NuxtImg src="photo_book/6_1048.jpg" class="w-full h-[400px] md:h-[650px] object-cover"></NuxtImg>
<!--            <div class="w-full md:absolute -top-32 left-1/2 md:w-[490px] md:h-[490px] bg-primary-dark flex flex-col justify-around p-10 md:border-canvas-lg md:border-light mt-8 md:mt-0">
                <h3 class="font-heading text-6xl lg:text-7xl text-light md:whitespace-nowrap mb-8 md:mb-0">{{$t('section5.title')}}</h3>
                <p class="text-lg text-light">{{$t('section5.body')}}</p>
            </div>-->
            <div class="w-full md:absolute top-0 left-0 md:w-[550px]  bg-primary-lighter flex flex-col justify-around p-10 md:py-20 md:border-canvas-lg md:border-light mt-8 md:mt-0">
                <h3 class="font-heading text-6xl lg:text-7xl text-primary-dark md:whitespace-nowrap mb-8 ">{{$t('section6.title')}}</h3>
                <p class="text-lg text-primary-dark">{{$t('section6.body')}}</p>
            </div>
        </div>
    </div>
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
    const imgUrl = img('skipper_elements_clam_combo_2.svg.png', {width: 490})
    return {backgroundImage: `url('${imgUrl}')`}
})
const section2BackgroundImg = computed(() => {
    const img1Url = img('skipper_elements_salmon_combo.svg.png', {width: 580})
    const img2Url = img('skipper_elements_shrimps.svg.png', {width: 580})
    return {backgroundImage: `url('${img1Url}'), url('${img2Url}')`}
})
const section4BackgroundImg = computed(() => {
    const img1Url = img('skipper_elements_crab.svg.png', {width: 580})
    const img2Url = img('skipper_elements_lobster.svg.png', {width: 580})
    return {backgroundImage: `url('${img1Url}'), url('${img2Url}')`}
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
</style>
