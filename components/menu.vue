<template>
    <Transition name="slide-fade">
        <div v-if="props.open"
             class="fixed z-30 w-screen h-screen bg-primary-dark flex flex-col justify-around items-center">
            <NuxtImg format="webp" src="skipper_icon_light.svg.webp"
                     class="h-[50px] lg:h-[60px] absolute top-4 left-1/2 -translate-x-1/2"></NuxtImg>
            <nav>
                <ul class="text-light">
                    <li class="text-3xl md:text-4xl mb-12"><a href="/" class="hover:text-primary-light">Home</a></li>
                    <li class="text-3xl md:text-4xl"><a href="/" class="hover:text-primary-light">Menu</a></li>
                </ul>
            </nav>
            <div class="fixed bottom-0 left-0 right-0 w-screen pb-4">
                <div>
                    <h2 class="text-center text-primary text-2xl font-heading mb-4">
                        Trattoria Skipper
                    </h2>
                </div>
                <div class="w-full max-w-[100px] mx-auto flex justify-between text-3xl mb-4">
                    <a class=" text-light hover:text-primary-light"
                       href="https://www.facebook.com/people/Trattoria-Skipper/100057075745048/">
                        <Icon name="fluent-mdl2:facebook-logo"></Icon>
                    </a>
                    <a class=" text-light hover:text-primary-light"
                       href="https://www.tripadvisor.it/Restaurant_Review-g187898-d2211855-Reviews-Skipper-Lucca_Province_of_Lucca_Tuscany.html">
                        <Icon name="fontisto:tripadvisor"></Icon>
                    </a>
                </div>
                <div class="w-full text-center">
                    <a class="underline text-primary text-xs" href="https://maps.app.goo.gl/jYpYS1AUMQdurjneA">Via Nuova
                        Per Pisa,
                        5901 – 55100 Lucca (LU) Italia</a><br>
                    <a class="underline text-primary text-xs" href="tel:+390583379073">+39 0583 379073</a> | <a
                    href="mailto:info@trattoriaskipper.it">info@trattoriaskipper.it</a><br>
                    P.I. 01771440466 | <a class="underline text-primary text-xs" href="legal_informations_it.html">Informazioni
                    Legali</a> | <a class="underline text-primary text-xs" href="privacy_policy_it.html">Privacy Policy
                    e Cookie
                    Policy</a>
                </div>
            </div>
        </div>
    </Transition>

</template>

<script setup lang="ts">
const props = defineProps({
    open: {
        type: Boolean,
        required: true,
    }
});
const head = useHead({
    bodyAttrs: {
        class: props.open ? 'overflow-hidden' : 'overflow-auto'
    }
})

watch(() => props.open, () => {
    head!.patch({
        bodyAttrs: {
            class: props.open ? 'overflow-hidden' : 'overflow-auto'
        }
    })
}, {immediate: true})

</script>

<style scoped>
.slide-fade-enter-active {
    transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
    transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    opacity: 0;
}
</style>
