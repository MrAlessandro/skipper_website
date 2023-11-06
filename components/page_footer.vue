<template>
    <footer id="footer"
            class=" relative w-full text-lg pt-28 pb-28 lg:pb-36 flex flex-col items-center ">
        <NuxtImg format="webp" src="skipper_logo.svg.png" class="w-[140px]"></NuxtImg>
        <div class="w-full text-center">
            <h3 class="mb-8 font-heading my-10 text-3xl">Trattoria Skipper</h3>
            <div class="text-4xl max-w-[200px] mx-auto flex justify-around">
                <a class=" text-primary-light hover:text-primary" href="https://www.facebook.com/people/Trattoria-Skipper/100057075745048/">
                    <Icon name="fluent-mdl2:facebook-logo"></Icon>
                </a>
                <a class=" text-primary-light hover:text-primary" href="https://www.tripadvisor.it/Restaurant_Review-g187898-d2211855-Reviews-Skipper-Lucca_Province_of_Lucca_Tuscany.html">
                    <Icon name="fontisto:tripadvisor"></Icon>
                </a>
            </div>
        </div>
        <div class=" text-center mt-14">
            <a class="underline hover:text-primary" href="https://maps.app.goo.gl/jYpYS1AUMQdurjneA">Via Nuova Per Pisa,
                5901 – 55100 Lucca (LU) Italia</a><br>
            <a class="underline hover:text-primary" href="tel:+390583379073">+39 0583 379073</a> | <a
            href="mailto:info@trattoriaskipper.it">info@trattoriaskipper.it</a><br>
            P.I. 01771440466 | <NuxtLink class="underline hover:text-primary" href="/legal_informations_it">Informazioni
            Legali</NuxtLink> | <NuxtLink class="underline hover:text-primary" to="/privacy_policy_it">Privacy Policy e Cookie
            Policy</NuxtLink>
        </div>
        <div class="mt-8 w-full max-w-[250px] mx-auto flex justify-around">
            <a class="underline hover:text-primary">Home</a>
            <a class="underline hover:text-primary">Menu</a>
        </div>
    </footer>
</template>

<script setup lang="ts">
const img = useImage()
const footerBackgroundImgUrl = computed(() => `url('${img(
    'skipper_footer.svg.png',
    {format: 'webp', width: 1024}
)}')`);
</script>

<style scoped>
#footer:before {
    content: '';
    pointer-events: none;
    @apply absolute bottom-0 right-0 left-0 w-full h-52 bg-no-repeat bg-cover opacity-60;
    background-image: v-bind(footerBackgroundImgUrl);;
}
</style>
