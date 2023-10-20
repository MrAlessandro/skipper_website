<template>
    <div ref="parallaxContainer" class="parallax-container">
        <div ref="parallaxImg" class="parallax-img">
            <slot></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
import {onMounted} from "vue";
const props = defineProps({
   height: {
       type: String,
       default: "80vh"
   }
});
const height = computed(() => props.height);
const parallaxContainer = ref<HTMLElement | null>(null);
const parallaxImg = ref<HTMLElement | null>(null);
const image = ref<HTMLImageElement | null>(null);
const zoom = ref<number>(1)

const calculateZoom = () => {
    if (parallaxContainer.value) {
        zoom.value = window.innerHeight / parallaxContainer.value.clientHeight
    }
}
onMounted(() => {
    if (parallaxImg.value)
        image.value = parallaxImg.value.querySelector('img');

    calculateZoom();
    window.addEventListener('resize', calculateZoom);

    window.addEventListener('scroll', () => {
        if (image.value && parallaxImg.value && parallaxContainer.value) {
            /*console.log(parallaxContainer.value.offsetTop)*/
            const shiftValue = parallaxContainer.value.offsetTop - window.scrollY - window.innerHeight;
            image.value.style.transform = `scale(${zoom.value}) translateY(${-shiftValue * 0.08}px)`
            console.log()
        }
    });
})


</script>

<style scoped>
.parallax-container {
    height: v-bind(height); /* Regola l'altezza del contenitore parallasse */
    overflow: hidden;
    position: relative;
}

.parallax-img {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    /* Altri stili per l'immagine, ad esempio, dimensioni e sfondo */
}

</style>
